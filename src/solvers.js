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
  var solution = []; 
  var board = new Board({n: num});
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
  var solutionCount = 0;
  var board = new Board({n: num});
  var rowCount = 0;
  var currentCol = 0;


  var rookSolution = function(gameBoard, row) {

    if (row === num) {
      // currentCol++;
      // rowCount = 0; 
      solutionCount++;
      return;
    }

    for (var col = 0; col < num; col++) {
      

      gameBoard.togglePiece(row, col);

      if (!gameBoard.hasAnyRooksConflicts()) {
        var result = rookSolution(gameBoard, row + 1);
        if (result) { 
            return;
        }
        // gameBoard.rows()[rowCount].indexOf(1);
      } 

      gameBoard.togglePiece(row, col);
    }
  }

  rookSolution(board, 0);
  


  console.log('Number of solutions for ' + num + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(num) {
  var solution = [];
  var board = new Board({n: num});
  if(num === 2 || num === 3) {
  return board.rows();
  }
    
  var queenSolution = function(gameBoard, row) {
    if (solution.length > 0) {
      return;
    }

    if (row === num) {
      // currentCol++;
      // rowCount = 0;
      solution.push(gameBoard.rows().slice()); 
      return gameBoard;
    }

    for (var col = 0; col < num; col++) {
      if (solution.length > 0) {
         break;
      }
      gameBoard.togglePiece(row, col);

      if (!gameBoard.hasAnyQueensConflicts()) {
        var result = queenSolution(gameBoard, row + 1);
        if (result) {
            return;
        }
        // gameBoard.rows()[rowCount].indexOf(1);
      } 
      if (solution.length > 0) {
         break; 
      }
      gameBoard.togglePiece(row, col);
    }
  }
  debugger;
  queenSolution(board, 0);
  console.log('Single solution for ' + num + ' queens:', JSON.stringify(solution));
  return solution[0];
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(num) {
  var solutionCount = undefined; //fixme
  var solutionCount = 0;
  var board = new Board({n: num});
  var rowCount = 0;
  var currentCol = 0;
  

  var queenSolution = function(gameBoard, row) {

    if (row === num) {
      // currentCol++;
      // rowCount = 0; 
      solutionCount++;
      return;
    }

    for (var col = 0; col < num; col++) {
      

      gameBoard.togglePiece(row, col);

      if (!gameBoard.hasAnyQueensConflicts()) {
        var result = queenSolution(gameBoard, row + 1);
        if (result) { 
            return;
        }
        // gameBoard.rows()[rowCount].indexOf(1);
      } 

      gameBoard.togglePiece(row, col);
    }
  }

  queenSolution(board, 0);
  
  console.log('Number of solutions for ' + num + ' queens:', solutionCount);
  return solutionCount;
};
