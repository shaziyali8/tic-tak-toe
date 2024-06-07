export default function GameOver({ winner, restart }) {

    return (
        <div id="gameOver">
            <h2>Game Over</h2>
            {winner && <p>{winner} : won the game</p>}
            {!winner && <p>Match Draw</p>}
            <button id="restart" onClick={restart}>Restart</button>
        </div>)
}