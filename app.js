var express = require('express');
var app = express();

var nextGameId = 0;
var games = {};

function newGame() {
  var gameId = nextGameId++;
  // nextGameId++;
  var game = {
    gameId: String(gameId),
    board: [null,null,null,null,null,null,null,null,null],
    player: "X",
    currentTurn: "X"
  };
  games[gameId] = game;
  return game;
}

function getGame(gameId) {
  return games[String(gameId)];
}

// makeMove(game, position) => gameWithMoveMade
// JK just mutate it for now
function makeMove(game, position) {
  if (position >= 0 && position < 9 && game.board[position] == null) {
    game.board[position] = game.currentTurn;
    game.currentTurn = otherPlayer(game.currentTurn);
    console.log(boardToString(game.board));
  } else {
    throw "Invalid move";
  }
}

function otherPlayer(player) {
  if (player == "X") {
    return "O";
  } else if (player == "O") {
    return "X";
  } else {
    return undefined;
  }
}

function boardToString(board) {
  var s = "";
  for (var i = 0; i < board.length; i++) {
    if (i != 0 && i % 3 == 0) {
      s += "\n";
    }
    if (board[i] == "X" || board[i] == "O") {
      s += board[i];
    } else {
      s += "-";
    }
  }
  return s;
}

// log all requests. pretty dirty but works for now
app.all('*', function (req, res, next) {
  console.log(req.url);
  next();
});

// start a new game
// respond with a new game object
app.get('/new', function (req, res) {
  var game = newGame();
  console.log('New game created. gameId = ' + game.gameId);
  res.status(200).json(game);
});

// make a move
// take the position index of the move as a query param
app.put('/game/:gameId/move', function (req, res, next) {
  var game = getGame(req.params.gameId);
  var position = req.query.position;
  try {
    makeMove(game, position);
    res.json(game);
  } catch (e) {
    res.sendStatus(400);
  }
});

// get the status of a game
// respond with the game object
app.get('/game/:gameId', function (req, res) {
  var game = getGame(req.params.gameId);
  if (game) {
    res.status(200).json(game);
  } else {
    res.sendStatus(500);
  }
});

app.listen(3000, function () {
  console.log('Server started on port 3000.');
});

