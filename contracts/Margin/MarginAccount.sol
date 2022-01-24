//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../lib/Set.sol";
import "./MarginPool.sol";

abstract contract MarginAccount is MarginPool {
    using SafeMath for uint256;
    using Set for Set.TokenSet;

    struct Account {
        Set.TokenSet collateral;
        mapping(IERC20 => uint256) collateralAmounts;
        Set.TokenSet borrowed;
        mapping(IERC20 => uint256) borrowedAmounts;
        mapping(IERC20 => uint256) initialBorrowPrice;
        mapping(IERC20 => uint256) initialBorrowBlock;
        uint256 hasBorrowed;
    }

    mapping(address => Account) private _accounts;

    // Set the collateral for a given asset
    function _setCollateral(
        IERC20 token_,
        uint256 amount_,
        address account_
    ) internal {
        Account storage account = _accounts[account_];

        if (account.collateralAmounts[token_] == 0 && amount_ != 0) account.collateral.insert(token_);
        else if (account.collateralAmounts[token_] != 0 && amount_ == 0) account.collateral.remove(token_);

        _setTotalCollateral(token_, totalCollateral(token_).sub(account.collateralAmounts[token_]).add(amount_));
        account.collateralAmounts[token_] = amount_;
    }

    // Get the collateral for a given asset for a given account
    function collateral(IERC20 token_, address account_) public view returns (uint256) {
        Account storage account = _accounts[account_];
        return account.collateralAmounts[token_];
    }

    // Get the total collateral price for a given account and asset borrowed
    function collateralPrice(address account_) public view returns (uint256) {
        Account storage account = _accounts[account_];
        uint256 totalPrice = 0;

        for (uint256 i = 0; i < account.collateral.count(); i++) {
            IERC20 token = account.collateral.keyAtIndex(i);
            uint256 price = oracle.priceMin(token, collateral(token, account_));

            totalPrice = totalPrice.add(price);
        }

        return totalPrice;
    }

    // Get the collateral tokens list
    function _collateralTokens(address account_) internal view returns (IERC20[] memory) {
        return _accounts[account_].collateral.iterable();
    }

    // Get the amount of each collateral token
    function _collateralAmounts(address account_) internal view returns (uint256[] memory) {
        IERC20[] memory tokens = _collateralTokens(account_);
        uint256[] memory amounts = new uint256[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) amounts[i] = collateral(tokens[i], account_);
        return amounts;
    }

    // Set the amount the user has borrowed
    function _setBorrowed(
        IERC20 token_,
        uint256 amount_,
        address account_
    ) internal {
        Account storage account = _accounts[account_];

        if (account.borrowedAmounts[token_] == 0 && amount_ != 0) account.borrowed.insert(token_);
        else if (account.borrowedAmounts[token_] != 0 && amount_ == 0) account.borrowed.remove(token_);

        _setTotalBorrowed(token_, totalBorrowed(token_).sub(account.borrowedAmounts[token_]).add(amount_));
        account.hasBorrowed = account.hasBorrowed.sub(account.borrowedAmounts[token_]).add(amount_);
        account.borrowedAmounts[token_] = amount_;
    }

    // Get the borrowed for a given account
    function borrowed(IERC20 token_, address account_) public view returns (uint256) {
        Account storage account = _accounts[account_];
        return account.borrowedAmounts[token_];
    }

    // Get the total price of the assets borrowed
    function borrowedPrice(address account_) public view returns (uint256) {
        Account storage account = _accounts[account_];
        uint256 totalPrice = 0;

        for (uint256 i = 0; i < account.borrowed.count(); i++) {
            IERC20 token = account.borrowed.keyAtIndex(i);
            uint256 price = oracle.priceMin(token, borrowed(token, account_));

            totalPrice = totalPrice.add(price);
        }

        return totalPrice;
    }

    // Get the borrowed tokens list
    function _borrowedTokens(address account_) internal view returns (IERC20[] memory) {
        return _accounts[account_].borrowed.iterable();
    }

    // Check if an account is currently borrowing
    function isBorrowing(address account_) public view returns (bool) {
        Account storage account = _accounts[account_];
        return account.hasBorrowed > 0;
    }

    // Check if an account is currently borrowing a particular asset
    function isBorrowing(IERC20 token_, address account_) public view returns (bool) {
        return borrowed(token_, account_) > 0;
    }

    // Get the initial borrow price for an account
    function initialBorrowPrice(IERC20 token_, address account_) public view returns (uint256) {
        Account storage account = _accounts[account_];
        return account.initialBorrowPrice[token_];
    }

    // Get the total initial borrow price for an account
    function initialBorrowPrice(address account_) public view returns (uint256) {
        IERC20[] memory borrowedTokens = _borrowedTokens(account_);
        uint256 total = 0;
        for (uint256 i = 0; i < borrowedTokens.length; i++) total = total.add(initialBorrowPrice(borrowedTokens[i], account_));
        return total;
    }

    // Set the initial borrow price for an account
    function _setInitialBorrowPrice(
        IERC20 token_,
        uint256 price_,
        address account_
    ) internal {
        Account storage account = _accounts[account_];
        account.initialBorrowPrice[token_] = price_;
    }

    // Get the initial borrow block for an ccount
    function initialBorrowBlock(IERC20 token_, address account_) public view returns (uint256) {
        Account storage account = _accounts[account_];
        return account.initialBorrowBlock[token_];
    }

    // Set the initial borrow price for an account
    function _setInitialBorrowBlock(
        IERC20 token_,
        uint256 block_,
        address account_
    ) internal {
        Account storage account = _accounts[account_];
        account.initialBorrowBlock[token_] = block_;
    }

    // Get the interest accumulated for a given asset
    function interest(IERC20 token_, address account_) public view returns (uint256) {
        uint256 borrowPrice = oracle.priceMin(token_, borrowed(token_, account_));
        uint256 initBorrowPrice = initialBorrowPrice(token_, account_);

        uint256 interestPrice;
        if (borrowPrice > initBorrowPrice) interestPrice = borrowPrice;
        else interestPrice = initBorrowPrice;

        return pool.interest(token_, interestPrice, initialBorrowBlock(token_, account_));
    }

    // Get the interest accumulated for the total account
    function interest(address account_) public view returns (uint256) {
        IERC20[] memory borrowedTokens = _borrowedTokens(account_);
        uint256 total = 0;
        for (uint256 i = 0; i < borrowedTokens.length; i++) total = total.add(interest(borrowedTokens[i], account_));
        return total;
    }
}
