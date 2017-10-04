
describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game("jen","joe");
  });

  it('populates the board with 9 empty spaces', function() {
    game.start();
    expect(game.board).to.eql([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('player one can play a move', function() {
    game.start();
    game.player1Move(0)
    expect(game.board).to.eql([1, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('player two can play a move', function() {
    game.start();
    game.player1Move(0)
    game.player2Move(1)
    expect(game.board).to.eql([1, 2, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('tells you when the game is over when there is no winner', function() {
    expect(game.checkIfGameIsOver([1, 2, 1, 1, 2, 2, 2, 1, 1])).to.equal("it's a draw");
  });

});
