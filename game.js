(function(exports){

	var Game = function(combinationCalculator = new CombinationCalculator, winFinder = new WinFinder) {
		this.board1dArray = [];
		this.combinationCalculator = combinationCalculator;
    this.winFinder = winFinder;
	};

	Game.prototype.start = function() {
		for (var i = 0; i < 9; i++){
			this.board1dArray.push(0);
		}
	};

	Game.prototype.move = function(player, moveIndex, board1dArray = this.board1dArray) {
		player.move(moveIndex, board1dArray);
	};

	Game.prototype.findCombinations = function(board1dArray = this.board1dArray){
		return this.combinationCalculator.findCombinations(board1dArray);
	};

	Game.prototype.findWins = function(combinations = this.findCombinations()) {
		return this.winFinder.findWins(combinations);
	};

	Game.prototype.checkIfGameIsOver = function(board1dArray = this.board1dArray){
		var outcome = 'it\'s a draw'
		board1dArray.forEach(function(square){
			if (square === 0) outcome = 'game not over';
		});
		return outcome;
	};

	exports.Game = Game;

})(this);
