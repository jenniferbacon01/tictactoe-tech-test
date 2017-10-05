
describe('Game', function() {
  var game;

  describe('game responsibilities', function(){
    beforeEach(function() {
      combinationCalculator = {};
      winFinder = {};
      game = new Game(combinationCalculator, winFinder);
    });

    it('populates the board with 9 empty spaces', function() {
      game.start();
      expect(game.board1dArray).to.eql([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('tells you when the game is over when there is no winner', function() {
      expect(game.checkIfGameIsOver([1, 2, 1, 1, 2, 2, 2, 1, 1])).to.equal("it's a draw");
    });

    it('tells you when the board is not full', function() {
      expect(game.checkIfGameIsOver([1, 2, 1, 1, 2, 2, 2, 1, 0])).to.equal("game not over");
    });

  })

  describe('forwarding responsibilities', function(){

    it('can make a player move', function() {
      var moveHasBeenPlayed = false;
      var player = {
        move: function(){
          moveHasBeenPlayed = true;
        }
      }
      game.start();
      game.move(player, 0)
      expect(moveHasBeenPlayed).to.equal(true);
    });

    it('finds the all combinations of 3 squares in a row', function(){
      var findCombinationsHasBeenCalled = false;
      combinationCalculator = {
        findCombinations: function(){
          findCombinationsHasBeenCalled = true;
        }
      };
      var findWinsHasBeenCalled = false;
      winFinder = {
        findWins: function(){
          findWinsHasBeenCalled = true;
        }
      };
      game = new Game(combinationCalculator, winFinder);
      game.findCombinations([1, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(findCombinationsHasBeenCalled).to.equal(true);
    });

    it('finds any wins given a list of combinations', function(){
      var findCombinationsHasBeenCalled = false;
      combinationCalculator = {
        findCombinations: function(){
          findCombinationsHasBeenCalled = true;
        }
      };
      var findWinsHasBeenCalled = false;
      winFinder = {
        findWins: function(){
          findWinsHasBeenCalled = true;
        }
      };
      game = new Game(combinationCalculator, winFinder);
      game.findCombinations([1, 0, 0, 0, 0, 0, 0, 0, 0]);
      game.findWins([[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]])
      expect(findWinsHasBeenCalled).to.equal(true);
    });


  })

});
