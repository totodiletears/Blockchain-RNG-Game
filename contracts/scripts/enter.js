require('dotenv').config();
const hre = require('hardhat');

async function main() {
  const game = await hre.ethers.getContractAt("Game", process.env.GAME_ADDRESS);

  const fee = {value: ethers.utils.parseEther("1.0")}
  const receipt = await game.enter(fee);

  console.log("Entered...");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
