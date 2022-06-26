
# RNG-Game

This is a blockchain based RNG game using hardhat, nodejs, ethersjs, and express

To win you must get the correct number

To enter you must send 1 ETH to the contract

When the contract recieves the entry fee, an event is emitted and the server with generate a random number for you. If your number matches the winning number, you receive the ETH contents of the contract

Good Luck!



To set up go into each root and run `Yarn`

create `.env` for both based on the templates

in Contracts run `npx hardhat run scripts/deploy.js`

then copy the address that is logged out to both `.env` files and save

in Server run `yarn dev` to initialize the server

in Contract run `npx hardhat run scripts/enter.js` to simulate an entry

check log from server to see if you win!

