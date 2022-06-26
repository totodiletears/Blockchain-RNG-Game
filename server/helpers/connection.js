require('dotenv').config();
const ethers = require('ethers');
const abi = require('../../contracts/artifacts/contracts/Game.sol/Game.json');

const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_URL);
const game = new ethers.Contract(process.env.GAME_ADDRESS, abi.abi, provider);

module.exports = provider;
module.exports = game;