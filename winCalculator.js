(function(exports){

  var WinCalculator = function() {

  }

  WinCalculator.prototype.checkForWins = function (board) {
    var outcome;
    combinations = []
    combinations.push(board.slice(0,3));
    combinations.push(board.slice(3,6));
    combinations.push(board.slice(6,9));
    combinations.push([board[0], board[3], board[6]]);
    combinations.push([board[1], board[4], board[7]]);
    combinations.push([board[2], board[5], board[8]]);
    combinations.push([board[0], board[4], board[8]]);
    combinations.push([board[2], board[4], board[6]]);
    combinations.forEach( function(combination){
      if (combination[0] === combination[1] && combination[1] === combination[2]){
         outcome = "player1 wins";
      };
    });
    return outcome;
  };


  exports.WinCalculator = WinCalculator;
})(this);
