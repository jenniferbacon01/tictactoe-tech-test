(function(exports){

	var CombinationCalculator = function() {
	};

	CombinationCalculator.prototype.findCombinations = function (board) {
		return this.findRowCombinations(board).concat(this.findColumnCombinations(board)).concat(this.findDiagonalCombinations(board));
	};

	CombinationCalculator.prototype.findRowCombinations = function (board) {
		var rowCombinations = [];
		rowCombinations.push([board[0], board[1], board[2]]);
		rowCombinations.push([board[3], board[4], board[5]]);
		rowCombinations.push([board[6], board[7], board[8]]);
		return rowCombinations;
	};

	CombinationCalculator.prototype.findColumnCombinations = function (board) {
		var columnCombinations = [];
		columnCombinations.push([board[0], board[3], board[6]]);
		columnCombinations.push([board[1], board[4], board[7]]);
		columnCombinations.push([board[2], board[5], board[8]]);
		return columnCombinations;
	};

	CombinationCalculator.prototype.findDiagonalCombinations = function (board) {
		var diagonalCombinations = [];
		diagonalCombinations.push([board[0], board[4], board[8]]);
		diagonalCombinations.push([board[2], board[4], board[6]]);
		return diagonalCombinations;
	};


	exports.CombinationCalculator = CombinationCalculator;
})(this);
