(function(exports){

	var CombinationCalculator = function() {
	};

	CombinationCalculator.prototype.findCombinations = function (board1dArray) {
		return this.findRowCombinations(board1dArray).concat(this.findColumnCombinations(board1dArray)).concat(this.findDiagonalCombinations(board1dArray));
	};

	CombinationCalculator.prototype.findRowCombinations = function (board1dArray) {
		var rowCombinations = [];
		rowCombinations.push([board1dArray[0], board1dArray[1], board1dArray[2]]);
		rowCombinations.push([board1dArray[3], board1dArray[4], board1dArray[5]]);
		rowCombinations.push([board1dArray[6], board1dArray[7], board1dArray[8]]);
		return rowCombinations;
	};

	CombinationCalculator.prototype.findColumnCombinations = function (board1dArray) {
		var columnCombinations = [];
		columnCombinations.push([board1dArray[0], board1dArray[3], board1dArray[6]]);
		columnCombinations.push([board1dArray[1], board1dArray[4], board1dArray[7]]);
		columnCombinations.push([board1dArray[2], board1dArray[5], board1dArray[8]]);
		return columnCombinations;
	};

	CombinationCalculator.prototype.findDiagonalCombinations = function (board1dArray) {
		var diagonalCombinations = [];
		diagonalCombinations.push([board1dArray[0], board1dArray[4], board1dArray[8]]);
		diagonalCombinations.push([board1dArray[2], board1dArray[4], board1dArray[6]]);
		return diagonalCombinations;
	};

	exports.CombinationCalculator = CombinationCalculator;
})(this);
