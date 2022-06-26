
# RNG-Game

This is a blockchain based RNG game using hardhat, nodejs, ethersjs, and express

Hardhat is config for Harmony Devnet

Rules: To win you must get the correct number

To enter you must send 1 ETH to the contract

How it works:

When the contract receives the entry fee, an event is emitted and the server will generate a random number for the player. If player's number matches the winning number, they receive the ETH contents of the contract

Good Luck!


Setup:

To set up go into each root and run `yarn`

create `.env` for both based on the templates

in Contracts run `npx hardhat run scripts/deploy.js`

copy the address that is logged out to both `.env` files and save

in Server run `yarn dev` to initialize the server

in Contract run `npx hardhat run scripts/enter.js` to simulate an entry

check log from server to see if you win!

