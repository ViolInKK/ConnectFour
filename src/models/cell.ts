import { Piece } from "./piece"

export class CellModel{
    readonly x: number
    readonly y: number
    piece: Piece | null
    id: number

    constructor(x: number, y:number, piece: Piece | null){
        this.x = x
        this.y = y
        this.piece = piece
        this.id = (new Date).getTime() * Math.random()
    }
}