
describe('WinCalculator', function() {
  var winCalculator;

  beforeEach(function() {
    winCalculator = new WinCalculator();
  });

  it('calculates whether there is a three-in-a-row', function(){
    expect(winCalculator.checkForWins([1,1,1,2,2,0,0,0,0])).to.equal("player1 wins")
  });

});
