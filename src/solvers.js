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



window.findNRooksSolution = function(num, rookBoard) {
  var solution = []; 
  var board = rookBoard ? rookBoard : new Board({n: num});
  var rookSolution = function(chestBoard, row, col) {
    if (chestBoard.hasAnyRooksConflicts()) {
      return;
    }
    if (chestBoard.rows()[chestBoard.rows().length - 1].includes(1)) {
      if (!chestBoard.hasAnyRooksConflicts()) {
        solution.push(chestBoard.rows().slice());
      }
      return;
    }
    for (var r = row; r < chestBoard.rows().length; r++) {
      for (var c = col; c < chestBoard.rows()[r].length; c++) {
        if (chestBoard.rows()[r][c] === 1 ) {
          continue;
        }
        chestBoard.togglePiece(r, c);
        rookSolution(chestBoard, r, c);
        if (chestBoard.hasAnyRooksConflicts()) {
          chestBoard.togglePiece(r, c);
        }         
      }  
    }
  };
  rookSolution(board, 0, 0);
  console.log('Single solution for ' + num + ' rooks:', JSON.stringify(solution));
  return solution[0];
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(num) {
  var solutionCount = 0; //fixme
  var board = new Board({n: num});
  var solutionHolder = []
  for (var r = 0; r < board.rows().length; r++) {
    for (var c = 0; c < board.rows()[0].length; c++) {
      debugger;
      board.togglePiece(r, c)
      if(window.findNRooksSolution(num, board).length > 1) {
        solutionCount++
      }
    }
  }
  window.findNRooksSolution(n, board);
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
