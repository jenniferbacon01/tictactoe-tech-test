describe('WinFinder', function() {
  var winFinder;

  beforeEach(function() {
    winFinder = new WinFinder();
  });

  it('given a combination, can tell if player 1 has won', function(){
    expect(winFinder.calculateWin([1,1,1])).to.equal("player1 wins");
  });

  it('given a combination, can tell if player 2 has won', function(){
    expect(winFinder.calculateWin([2,2,2])).to.equal("player2 wins");
  });

  it('given a combination, can tell if there are no wins', function(){
    expect(winFinder.calculateWin([2,1,2])).to.equal("no wins");
  });

  it('given a set of combinations, tells you when there are no wins', function(){
    expect(winFinder.findWins([[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]])).to.equal("no wins");
  });

  it('given a set of combinations, tells you when player 1 has won', function(){
    expect(winFinder.findWins([[1,1,1],[0,2,0],[0,0,2],[1,0,0],[1,2,0],[1,0,2],[0,2,2],[0,2,0]])).to.equal("player1 wins");
  });

  it('given a set of combinations, tells you when player 2 has won', function(){
    expect(winFinder.findWins([[2,2,2],[0,1,0],[0,0,1],[2,0,0],[2,1,0],[2,0,1],[0,1,1],[0,1,0]])).to.equal("player2 wins");
  });

});
