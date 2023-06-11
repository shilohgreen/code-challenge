import { ethers } from 'ethers';

const addressArray: string[] = ['0xb5d4f343412dc8efb6ff599d790074d0f1e8d430','0x0020c5222a24e4a96b720c06b803fb8d34adc0af', '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'];
const tokenAddress: string = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';

// Provider object to interact with the smart   
const provider = new ethers.JsonRpcProvider('https://bsc-dataseed1.binance.org/'); 

// ABI stands for Application Binary Interface
// Interact with the contract through queries
// retrieve SWTH token contract using ether js
const tokenContract = new ethers.Contract(tokenAddress, ['function balanceOf(address) view returns (uint256)'], provider);

console.log(tokenContract)
console.log(provider)

async function getBalances() {
    const balances: string[] = [];
    for (const address of addressArray) {
        // for each item in the array, interact with the tokenContract by calling the balanceOf function
        const balance = await tokenContract.balanceOf(address);
        // console.log("balance: "+ balance);
        // console.log("balance (formatted): "+ ethers.formatUnits(balance,8).replace(/(?<!\.\d+)\B(?=(\d{3})+\b)/g, ","))

        // commas and decimal point formatting
        balances.push(`${address} ${ethers.formatUnits(balance,8).replace(/(?<!\.\d+)\B(?=(\d{3})+\b)/g, ",")}`);
    }
    return balances.join('\n');
}

getBalances().then((balances) => {
    console.log(balances);
  });

