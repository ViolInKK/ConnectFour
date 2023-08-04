import { CellModel } from "./cell"
import { Colors } from "./colors"

export class Piece{
    readonly color: Colors
    cell: CellModel
    id: number
    isPieceWinning: boolean

    constructor(color: Colors, cell: CellModel){
        this.color = color
        this.cell = cell
        this.cell.piece = this
        this.id = this.id = (new Date).getTime() * Math.random()
        this.isPieceWinning = false

    }
}