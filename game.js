(function(exports){

	var Game = function(player1, player2, combinationCalculator = new CombinationCalculator) {
		this.board = [];
		this.player1 = player1;
		this.player2 = player2;
		this.combinationCalculator = combinationCalculator;
	};

	Game.prototype.start = function() {
		for (var i = 0; i < 9; i++){
			this.board.push(0);
		}
	};

	Game.prototype.player1Move = function(moveIndex) {
		this.board[moveIndex] = 1;
	};

	Game.prototype.player2Move = function(moveIndex) {
		this.board[moveIndex] = 2;
	};

	Game.prototype.findCombinations = function(){
		this.combinationCalculator.findCombinations(this.board);
	};

	Game.prototype.findWins = function() {
		this.winFinder.findWins(this.findCombinations());
	};

	exports.Game = Game;

})(this);
