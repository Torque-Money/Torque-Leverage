//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./LPoolApproved.sol";
import "./LPoolTax.sol";

abstract contract LPoolDeposit is LPoolApproved, LPoolTax {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // Deposit a given amount of collateral into the pool and transfer a portion as a tax to the tax account
    function deposit(IERC20 token_, uint256 amount_) external onlyRole(POOL_APPROVED) onlyPA(token_) {
        (uint256 taxPercentNumerator, uint256 taxPercentDenominator) = taxPercentage();
        uint256 tax = taxPercentNumerator.mul(amount_).div(taxPercentDenominator);
        token_.safeTransferFrom(_msgSender(), taxAccount, tax);

        uint256 taxedAmount = amount_.sub(tax);
        token_.safeTransferFrom(_msgSender(), address(this), taxedAmount);
        emit Deposit(_msgSender(), token_, taxedAmount, tax, taxAccount);
    }

    // Withdraw a given amount of collateral from the pool
    function withdraw(IERC20 token_, uint256 amount_) external onlyRole(POOL_APPROVED) onlyPA(token_) {
        require(amount_ <= liquidity(token_), "Withdraw amount exceeds available liquidity");
        token_.safeTransfer(_msgSender(), amount_);
        emit Withdraw(_msgSender(), token_, amount_);
    }

    function liquidity(IERC20 token_) public view virtual returns (uint256);

    event Deposit(address indexed account, IERC20 token, uint256 amount, uint256 tax, address taxAccount);
    event Withdraw(address indexed account, IERC20 token, uint256 amount);
}
