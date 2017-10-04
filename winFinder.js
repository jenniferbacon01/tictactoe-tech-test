(function(exports){

	var WinFinder = function() {
	};

	WinFinder.prototype.findWins = function(combinations) {
		var that = this;
		var outcome = 'no wins';
		combinations.forEach(function(combination){
      if(that.calculateWin(combination) != 'no wins'){
        outcome = that.calculateWin(combination);
      };
		});
		return outcome;
	};

	WinFinder.prototype.calculateWin = function(combination){
    if (combination[0] != combination[1] || combination[1]!=combination[2]){
      return 'no wins';
    }else{
      return this.calculateWinnerFor3Matching(combination);
    };
	};

  WinFinder.prototype.calculateWinnerFor3Matching = function (combination) {
    if (combination[0]===1){
      return 'player1 wins';
    }else if (combination[0]===2) {
      return 'player2 wins';
    }else{
      return 'no wins';
    }
  };

	exports.WinFinder = WinFinder;

})(this);
