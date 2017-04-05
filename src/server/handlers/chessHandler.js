//Todo

// I / O of chess board & Possible moves.

//Our board will be an array of arrays

/*

Take input board and active player.
Iterate over the board
  if active players piece recurse

    during recurse use lookup function to find logic of what the piece does.
    move piece is said directions for every possible solution.




*/

module.exports = {

  showMeYourMoves: (board, activePlayer) => {

    // Error handling
    if (!board) {
      board = module.exports.getDefault();
    }

    if (!activePlayer) {
      activePlayer = "White";
    }


    for (var y = 0; y < board.length; y++) {

      for (var x = 0; x < board[y].length; x++) {

        if (board[x][y].player === activePlayer) {
          module.exports.findMoves(board[y][x], x, y);
        }

      }

    }
  },

  findMoves: (data, x, y) => {
    const rules = module.exports.pieceDictionary(data.piece);

    if (rules.horizontal) {

    }

    if (rules.vertical) {

    }

    if (rules.diagonal) {

    }

    if (rules.isKnight) {

    }

  },

  pieceDictionary: (piece) => {
    const pieces = {
      'Rook': { 'horizontal': true, 'vertical': true, 'diagonal': false, 'movement': 7 },
      'Knight': { 'isKnight': true, 'horizontal': false, 'vertical': false, 'diagonal': false, 'movement': 1 },
      'Bishop': { 'horizontal': false, 'vertical': false, 'diagonal': true, 'movement': 7 },
      'King': { 'horizontal': true , 'vertical': true, 'diagonal': true, 'movement': 1 },
      'Queen': { 'horizontal': true , 'vertical': true, 'diagonal': true, 'movement': 7 },
      'Pawn': { 'horizontal': false , 'vertical': true, 'diagonal': false, 'movement': 2 },
    };
  },

  getDefault: () => {
    return [
[{piece:"Rook", player:"White"},{piece:"Knight", player:"White"},{piece:"Bishop", player:"White"},{piece:"King", player:"White"},{piece:"Queen", player:"White"},{piece:"Bishop", player:"White"},{piece:"Knight", player:"White"},{piece:"Rook", player:"White"}],
[{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"},{piece:"Pawn", player:"White"}],
[{},{},{},{},{},{},{},{}],
[{},{},{},{},{},{},{},{}],
[{},{},{},{},{},{},{},{}],
[{},{},{},{},{},{},{},{}],
[{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"},{piece:"Pawn", player: "Black"}],
[{piece:"Rook", player:"Black"},{piece:"Knight", player:"Black"},{piece:"Bishop", player:"Black"},{piece:"King", player:"Black"},{piece:"Queen", player:"Black"},{piece:"Bishop", player:"Black"},{piece:"Knight", player:"Black"},{piece:"Rook", player:"Black"}]
];
  },

 moveDiagonal: (piece, x, y) => {

},

moveHorizontal: (piece, x, y) => {

},

moveVertical: (piece, x, y) => {

},

moveKnight: (piece, x, y) => {

}


};