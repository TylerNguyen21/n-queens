/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(num) {
  var solution = undefined; //fixme
  var board = new Board({n: num});
  var rookSolution = function(chestBoard, row, col) {
    if (chestBoard.hasRowConflictAt(row) || chestBoard.hasColConflictAt(col)) {
      return;
    }
    if (chestBoard.rows()[chestBoard.rows().length - 1].includes(1)) {
      if (!chestBoard.hasRowConflictAt(row) && !chestBoard.hasColConflictAt(col)) {
        solution = chestBoard.rows().slice();
      }
      return;
    }
    if (chestBoard.rows()[row][col] === 1) {
      col++;
    }
    for (var r = row; r < chestBoard.rows().length; r++) {
      for (var c = col; c < chestBoard.rows()[r].length; c++) {
        chestBoard.togglePiece(r, c);
        rookSolution(chestBoard, r, c);
        if (chestBoard.hasRowConflictAt(row) || chestBoard.hasColConflictAt(col)) {
          chestBoard.togglePiece(r, c);
        }         
      }  
    }
  };   
  rookSolution(board, 0, 0);
  console.log('Single solution for ' + num + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  window.findNRooksSolution(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
