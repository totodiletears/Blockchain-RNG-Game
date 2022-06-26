//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Game {
    bool public gameEnded;
    uint256 public cost = 1 ether;
    uint256 public winningNumber;
    address public admin;

    event Entered(address player, uint256 winningNumber);
    event Winner(address player, uint256 prize);
    event Loser(address player, uint256 numberGuessed);

    constructor(address _admin) {
        winningNumber = _generateWinningNumber();
        admin = _admin;
    }

    // called by public to enter
    function enter() public payable {
        require(!gameEnded, "Game ended");
        require(msg.value >= cost, "Not enough ETH to enter");

        emit Entered(msg.sender, winningNumber);
    }

    // called by admin to check winner
    function checkWinner(address payable player, uint256 randomNumber)
        external
        returns (bool)
    {
        require(msg.sender == admin);
        // if RNG matches winning number, send ETH
        if (randomNumber == winningNumber) {
            uint256 prize = address(this).balance;
            player.transfer(prize);

            emit Winner(player, prize);
            return true;
        }
        emit Loser(player, randomNumber);
        return false;
    }

    // generate a random number between 1 and 10 to start the game
    function _generateWinningNumber() internal view returns (uint256) {
        return
            (uint256(
                keccak256(abi.encodePacked(block.timestamp, block.difficulty))
            ) % 10) + 1;
    }
}
