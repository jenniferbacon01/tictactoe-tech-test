(function(exports){

	var WinFinder = function() {
	};

  // WinFinder.prototype.findWins = function(combinations) {
  //   combinations.forEach(function(combination){
  //
  //   });
  // };

  WinFinder.prototype.calculateWin = function(combination){
    if (combination[0]===combination[1] && combination[1]===combination[2]){
      if (combination[0]===1){
        return "player1 wins";
      }else if (combination[0]===2) {
        return "player2 wins";
      }else{
        return "no wins";
      }
    }else{
      return "no wins";
    };
  }

	exports.WinFinder = WinFinder;

})(this);
