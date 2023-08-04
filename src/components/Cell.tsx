import { FC } from "react";
import { CellModel } from "../models/cell";

interface CellProps{
    cell: CellModel
}


const Cell: FC<CellProps> = ({ cell }) => {

    return(
        <div className="cell">
            {cell.piece ? cell.piece.isPieceWinning ? <div className= {`piece ${cell.piece.color}`}><div className="isWinning"></div></div> : <div className= {`piece ${cell.piece.color}`}></div> : null}
        </div>
    )
    
}

export default Cell