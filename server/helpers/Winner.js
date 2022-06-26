const ethers = require('ethers');

module.exports.isWinner = async function(address, prize) {
  console.log("WINNER!!!!");
  console.log("Winner: ", address);
  console.log("Prize: " + ethers.utils.formatEther(prize) + " ETH");
}