import { FC, useRef } from "react"
import { BoardModel } from "../models/board"
import Cell from "./Cell"
import { Colors } from "../models/colors"
import PlayerTurn from "./PlayerTurn"


interface BoardProps{
    board: BoardModel
    setBoard: (board: BoardModel) => void
    yellowWin: () => void
    orangeWin: () => void
    fullBoard: () => void
    isOrangeTurn: boolean
    changeIsOrangeTurn: () => void
    
}


const Board: FC<BoardProps> = ({board, setBoard, yellowWin, orangeWin, fullBoard, isOrangeTurn, changeIsOrangeTurn}) => {

    // const isOrange = useRef(true)

    function addPiece(column: number){
        const newBoard = board.getCopyBoard()

        if(isOrangeTurn){
            let orangePiece = newBoard.addPiece(column, Colors.orange)
            if(!orangePiece){
                return
            }
            if(newBoard.checkVictory(orangePiece.cell.x, orangePiece.cell.y, orangePiece.color)){
                console.log('orange win')
                orangeWin()
            }
            changeIsOrangeTurn()
        }

        else{
            let yellowPiece = newBoard.addPiece(column, Colors.yellow)
            if(!yellowPiece){
                return
            }
            if(newBoard.checkVictory(yellowPiece.cell.x, yellowPiece.cell.y, yellowPiece.color)){
                console.log('yellow win')
                yellowWin()
            }
            changeIsOrangeTurn()
        }

        if(newBoard.isBoardFull()){
            console.log('board is full')
            fullBoard()
        }
        setBoard(newBoard)
    }

    return(
        <div className="board">
            {board.cells.map((row, index) => 
            <div className="row" key={index} onClick={() => addPiece(index)}> 
                {row.map(cell => 
                <Cell
                cell={cell}
                key = {cell.id}
                />
                )}
            </div>
            
            )}
            {/* <PlayerTurn isOrange={isOrange.current}/> */}
        </div>


    )


}

export default Board