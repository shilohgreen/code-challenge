require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://mainnet.infura.io/v3/d6207ff384d64ac0acdd66dd31047cb4",
      accounts: ["8f61a7b4412845d38c549dd310307c75"],
    },
    // hardhat: {
    //   // Hardhat development network configuration
    // },
    // rinkeby: {
    //   // Rinkeby test network configuration
    //   url: "https://rinkeby.infura.io/v3/PROJECT_ID",
    //   accounts: [YOUR_PRIVATE_KEY],
    // },
    // Add more network configurations if needed
  },
};
