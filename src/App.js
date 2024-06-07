import { useState } from 'react';
import './App.css';
import Board from './components/Board.js';
import Player from './components/Players.js';
import { Combination } from './combination.js'
import GameOver from './components/GameOver.js';

const PLAYERS = { X: "Player 1", O: "Player 2" }
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function getCurrSym(gameTurn) {
  let currSym = "X";
  if (gameTurn.length > 0 && gameTurn[0].currSym === "X") {
    currSym = "O"
  }

  return currSym;
}

function gameBoardFun(gameTurn) {
  let gameboard = [...initialBoard.map(arr => [...arr])];

  for (const turn of gameTurn) {
    const { square, currSym } = turn;
    const { row, col } = square;

    gameboard[row][col] = currSym;
  }
  return gameboard
}

function winnerFun(gameboard, player) {
  let winner;

  for (const comb of Combination) {
    const firstSymb = gameboard[comb[0].row][comb[0].col];
    const secondSymb = gameboard[comb[1].row][comb[1].col]
    const thirdSymb = gameboard[comb[2].row][comb[2].col]

    if (firstSymb && firstSymb === secondSymb && firstSymb === thirdSymb) {
      console.log(player)
      winner = player[firstSymb]
    }
  }
  return winner
}

function App() {
  const [player, setPlayer] = useState(PLAYERS)

  const [gameTurn, setGameTurn] = useState([])
  // const [symbol, setSymbol] = useState("X");
  const currSym = getCurrSym(gameTurn)

  const gameBoard = gameBoardFun(gameTurn)

  const winner = winnerFun(gameBoard, player)

  const hasDraw = gameTurn.length === 9 && !winner


  function handleTurn(rind, cind) {
    // setSymbol((sym) => sym === "X" ? "O" : "X")

    setGameTurn((prvBoard) => {
      const currSym = getCurrSym(prvBoard)
      return [{ square: { row: rind, col: cind }, currSym: currSym }, ...prvBoard]
    });
  }

  function handlePlayer(sym, name) {

    setPlayer(prevPlayer => {
      return { ...prevPlayer, [sym]: name }
    })
  }

  function restartGame() {
    setGameTurn([])
  }

  return (
    <section id='board-container'>
      <h1>tic-tak-toe</h1>
      <ul id='players'>
        <Player initialName={PLAYERS.X} symbol="X" isActive={currSym === "X"} updateName={handlePlayer} />
        <Player initialName={PLAYERS.O} symbol="O" isActive={currSym === "O"} updateName={handlePlayer} />
      </ul>
      {(winner || hasDraw) && <GameOver winner={winner} restart={restartGame} />}
      <Board onPlayerTurn={handleTurn} board={gameBoard} />
    </section>
  );
}

export default App;
