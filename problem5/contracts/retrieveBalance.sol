// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract ReturnBalance {

    // return the struct as specified
    struct TokenBalance {
        address token;
        uint256 balance;
    }

    function getBalances(
        address walletAddress,
        address[] calldata tokenAddress
    ) external view returns (TokenBalance[] memory) {
        // instantiate array of tokenbalance stucts
        TokenBalance[] memory tokenArr = new TokenBalance[](tokenAddress.length);

        // get balance for each token address
        for (uint256 i = 0; i < tokenAddress.length; i++) {
            //instantiate erc20 with balanceof method
            ERC20 erc20 = ERC20(tokenAddress[i]);
            // address from input array
            address token = tokenAddress[i];
            // balance from method from erc20
            uint256 balance = erc20.balanceOf(address(walletAddress));
            // push into tokenbalance array
            tokenArr[i] = TokenBalance(token, balance);
        }
        return tokenArr;
    }
}
