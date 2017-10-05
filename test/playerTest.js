
describe('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player(1);
  });

  it("stores it's marker number when created", function() {
    expect(player.markerNumber).to.equal(1);
  })

  it('can play a move', function() {
    var game = {
      board1dArray: [0,0,0,0,0,0,0,0,0]
    }
    player.move(3, game.board1dArray)
    expect(game.board1dArray,).to.eql([0,0,0,1,0,0,0,0,0]);
  });

});
