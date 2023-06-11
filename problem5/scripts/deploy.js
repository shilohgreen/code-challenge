// const { ethers } = require("hardhat");

// console.log(ethers);

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECONDS = 356 * 24 * 60 * 60;
//   const unlockedTime = currentTimestampInSeconds + ONE_YEAR_IN_SECONDS;

//   //   const lockedAmount = ethers.utils.parseEther("1");

//   const EVM = await hre.ethers.getContractFactory("evm");
//   const evm = await evm.deploy(unlockedTime);

//   await evm.deployed();

//   console.log(`Contract contain 1ETH and address: ${evm.address}`);
// }

// main().catch((error) => {
//   console.log(error);
// });

// const { ethers } = require("ethers");

// const ADDR = "…";   // contract address
// const ABI = […]    // contract ABI

// const ADDRESS = "…"; // some wallet address with token balance
// const TOKENS = [    // token contract addresses
//   "…",
//   "…",
// ];

// const provider = ethers.getDefaultProvider();

// const test = async () => {
//   // Deploy your smart contract
//   const Contract = await ethers.getContractFactory(ABI);
//   const contract = await Contract.deploy();

//   // Wait for the contract to be mined
//   await contract.deployed();

//   // Call your contract's function
//   const balances = await contract.getBalances(ADDRESS, TOKENS);

//   return balances;
// };

// test()
//   .then((balances) => {
//     console.log("Balances:", balances);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

async function main() {
  const MyContract = await ethers.getContractFactory("evm");
  const contract = await MyContract.deploy();

  console.log("Contract deployed to address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
