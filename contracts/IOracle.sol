//SPDX-License-Identifier: GPL-3.0-only
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IOracle {
    /**
     *  @dev Returns the decimals used for the pair price
     */
    function getDecimals() external view returns (uint256);

    /**
     *  @dev Returns the median price of the tokens passed to it over the stored exchanges
     *  @param _token1 The input token
     *  @param _token2 The tokens of which will be swapped to from token1
     */
    function pairPrice(IERC20 _token1, IERC20 _token2) external view returns (uint256);
}