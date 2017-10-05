
(function(exports){


  var Player = function(markerNumber) {
    this.markerNumber = markerNumber;
    //markerNumber cannot be zero
  }
  Player.prototype.move = function(moveIndex, board1dArray) {
    board1dArray[moveIndex] = this.markerNumber;
  }

  exports.Player = Player;
})(this);
