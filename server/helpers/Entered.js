require('dotenv').config();
const ethers = require('ethers');
const abi = require('../../contracts/artifacts/contracts/Game.sol/Game.json');

module.exports.gameEntered = async function(player, number) {
  const winningNum = Number(number);
  console.log("Game entered by: ", player);
  console.log("Winning number is: ", winningNum);

  const randomNum = Math.floor(Math.random() * 10) + 1;

  console.log("Random number: ", randomNum);

  const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_URL);
  const signer = new ethers.Wallet(ethers.Wallet.fromMnemonic(process.env.MNEMONIC_PHRASE), provider);
  const gameContract = new ethers.Contract(process.env.GAME_ADDRESS, abi.abi, signer);

  console.log("Checking winner...");
  const tx = await gameContract.checkWinner(player, randomNum);
}