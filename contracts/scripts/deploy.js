require('dotenv').config();
const hre = require('hardhat');

async function main() {
  const Game = await hre.ethers.getContractFactory("Game");
  const game = await Game.deploy(process.env.OWNER_ADDRESS);

  await game.deployed();

  console.log("Game deployed to: ", game.address);

  const winningNumber = await game.winningNumber();

  console.log("Winning number is: ", Number(winningNumber));
  console.log("Good luck!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
