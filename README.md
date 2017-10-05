# TicTacToe tech test

## Specification

This application provides the logic and scoring for a game of tic tac toe. This game can be played in node or combined with any user interface, whether web or command line.

The rules of tic-tac-toe are as follows:

There are two players in the game (X and O)
Players take turns until the game is over
A player can claim a field if it is not already taken
A turn ends when a player claims a field
A player wins if they claim all the fields in a row, column or diagonal
A game is over if a player wins
A game is over when all fields are taken

Comments
-----
I have structured the application into four classes with the following responsibilities:
Game: To start the game, and check if the game is over.
Player: To make a move.
CombinationCalculator: To find all the combinations of 3 on a board.
WinFinder: To find if there is a win on a given board.

How to Install
-----
In your command line type the following:
To clone this repository:
````
  $ git clone https://github.com/jenniferbacon01/tictactoe-tech-test.git
````
To install all the relevant packages:
````
  $ npm install
````

How to Run
-----
Copy and paste player.js, game.js, combinationCalculator.js and winFinder.js from the tictactoe-tech-test directory into node and then enter the following to start a game:
````
  > player1 = new Player(1)
Player { markerNumber: 1 }
> player2 = new Player(2)
Player { markerNumber: 2 }
> game = new Game
Game {
  board1dArray: [],
  combinationCalculator: CombinationCalculator {},
  winFinder: WinFinder {} }
> game.start()
undefined
> game.move(player1,0)
undefined
> game.findWins()
'no wins'
> game.checkIfGameIsOver()
'game not over'
> game.move(player2,1)
undefined
> game.findWins()
'no wins'
> game.checkIfGameIsOver()
'game not over'
````

How to Test
-----
Run unit tests by opening test.html in your browser. Tests are available to view in tictactoe-tech-test/test directory.
