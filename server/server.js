const express = require('express');
const game = require('./helpers/connection');
const { gameEntered } = require('./helpers/Entered');
const { isLoser } = require('./helpers/Loser');
const { isWinner } = require('./helpers/Winner');

const app = express();

game.on("Entered", gameEntered);
game.on("Loser", isLoser);
game.on("Winner", isWinner);

app.listen(3000, () => {
  console.log("Server running on port 3000");
})
