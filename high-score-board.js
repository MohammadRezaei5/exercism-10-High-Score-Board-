// look back again 🙂✌🙌

function createScoreBoard() {
  const scoreBoard = {
    "The Best Ever": 1000000,
  };
  return scoreBoard;
}

// console.log(createScoreBoard());

///---///

function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

// console.log(addPlayer({ "Dave Thomas": 0 }, "José Valim", 486373));

///---///

function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

// console.log(removePlayer({ "Dave Thomas": 0 }, "Dave Thomas"));
// console.log(removePlayer({ "Dave Thomas": 0 }, "Rose Fanaras"));
