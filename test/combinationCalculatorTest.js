
describe('CombinationCalculator', function() {
  var combinationCalculator;

  beforeEach(function() {
    combinationCalculator = new CombinationCalculator();
  });

  it('finds the combinations of all three rows', function(){
    expect(combinationCalculator.findRowCombinations([0,0,0,0,0,0,0,0,1])).to.eql([[0,0,0],[0,0,0],[0,0,1]]);
  });
  it('finds the combinations of all three columns', function(){
    expect(combinationCalculator.findColumnCombinations([0,0,0,0,0,0,0,0,1])).to.eql([[0,0,0],[0,0,0],[0,0,1]]);
  });
  it('finds the combinations of both diagonals', function(){
    expect(combinationCalculator.findDiagonalCombinations([0,0,0,0,0,0,0,0,1])).to.eql([[0,0,1],[0,0,0]]);
  });
  it('finds all combinations', function(){
    expect(combinationCalculator.findCombinations([0,0,0,0,0,0,0,0,1])).to.eql([[0,0,0],[0,0,0],[0,0,1],[0,0,0],[0,0,0],[0,0,1],[0,0,1],[0,0,0]]);
  });


});
