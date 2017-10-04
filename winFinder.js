(function(exports){

	var WinFinder = function() {
	};

	WinFinder.prototype.findWins = function(combinations) {
		var that = this;
		var outcome = 'no wins';
		combinations.forEach(function(combination){
			if(that.calculateWin(combination) === 'player1 wins'){
				outcome = 'player1 wins';
			}else if(that.calculateWin(combination) === 'player2 wins'){
				outcome = 'player2 wins';
			}
		});
		return outcome;
	};

	WinFinder.prototype.calculateWin = function(combination){
		if (combination[0]===combination[1] && combination[1]===combination[2]){
			if (combination[0]===1){
				return 'player1 wins';
			}else if (combination[0]===2) {
				return 'player2 wins';
			}else{
				return 'no wins';
			}
		}else{
			return 'no wins';
		}
	};

	exports.WinFinder = WinFinder;

})(this);
