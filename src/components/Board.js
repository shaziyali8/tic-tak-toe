// const initialBoard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

export default function Board({ onPlayerTurn, board }) {

    // let gameboard = initialBoard;

    // for (const turn of turns) {
    //     const { square, currSym } = turn;
    //     const { row, col } = square;

    //     gameboard[row][col] = currSym;
    // }

    // const [gameboard, setgameboard] = useState(initialBoard)

    // function handleBoard(rind, cind) {
    //     setgameboard((prvBoard) => {
    //         const updateBoard  = [...prvBoard.map((prvArray)=> [...prvArray])]
    //         updateBoard[rind][cind] = currSym
    //         return updateBoard
    //     });

    //     onPlayerTurn();
    // }


    return (
        <ul id='board'>
            {board.map((row, rind) => (
                <li key={rind}>
                    <ol>{
                        row.map((symb, cind) => (
                            <li key={cind} >
                                <button onClick={() => onPlayerTurn(rind, cind)} 
                                disabled={symb !== null}>{symb}
                                </button>
                            </li>
                        ))
                    }
                    </ol>
                </li>))}
        </ul>
    );
}