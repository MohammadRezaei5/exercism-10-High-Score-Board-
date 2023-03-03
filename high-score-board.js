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

///---///

function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

// console.log(updateScore({ "Freyja Ćirić": 12771008 }, "Freyja Ćirić", 73));

///---///

// const scoreBoard = {
//   "Dave Thomas": 44,
//   "Freyja Ćirić": 539,
//   "José Valim": 265
// };

function applyMondayBonus(scoreBoard) {
  for (let player in scoreBoard) {
    scoreBoard[player] += 100;
  }
  return scoreBoard;
}

// console.log(applyMondayBonus(scoreBoard));

///---///

// const params = { score: 400, normalizeFunction: normalize };

function normalize(score) {
  return 2 * score + 10;
}

function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

// console.log(normalizeScore(params));
