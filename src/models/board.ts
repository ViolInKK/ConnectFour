import { CellModel } from "./cell"
import { Colors } from "./colors"
import { Piece } from "./piece"

export class BoardModel{
    // rows: number = 5
    // columns: number = 6
    cells: CellModel[][] = []
    amountOfPieces: number = 0

    constructor(amountOfPiece: number = 0){
        this.amountOfPieces = amountOfPiece
    }

    initCells(): void{
        for(let i = 0; i<7; i++){
            const row: CellModel[] = []
            for(let j = 0; j<6; j++){
                row.push(new CellModel(i, j, null))
            }
            this.cells.push(row)
        }
    }

    public getCell(x: number, y:number): CellModel{
        return this.cells[x][y]
    }

    public addPiece(column: number, color: Colors): Piece | void{
        //if collumn is full do nothing
        if(this.getCell(column, 0).piece) return 

        this.amountOfPieces++

        for(var row = 0; row <= 4 ; row++) {
            if(this.cells[column][row+1].piece){
                let piece = new Piece(color, this.getCell(column, row))
                // this.isBoardFull()
                return piece
            }
        }
        let piece = new Piece(color, this.getCell(column, row))
        // this.isBoardFull()
        return piece

    }

    public checkVictory(x:number, y:number, color:Colors): boolean{
        //x - column(from 0 to 6) y - row(from 0 to 5)

        //row check
        for(let i = 0; i <= 3; i++){
            if(this.getCell(i,y).piece?.color === color && this.getCell(i+1,y).piece?.color === color && this.getCell(i+2,y).piece?.color === color && this.getCell(i+3,y).piece?.color === color){
                this.getCell(i,y).piece!.isPieceWinning = true
                this.getCell(i+1,y).piece!.isPieceWinning = true
                this.getCell(i+2,y).piece!.isPieceWinning = true
                this.getCell(i+3,y).piece!.isPieceWinning = true
                // console.log('row')
                return true
            }
        }

        //column check
        for(let i = 5; i >= 3; i--){
            if(this.getCell(x,i).piece?.color === color && this.getCell(x,i-1).piece?.color === color && this.getCell(x,i-2).piece?.color === color && this.getCell(x,i-3).piece?.color === color){
                this.getCell(x,i).piece!.isPieceWinning = true
                this.getCell(x,i-1).piece!.isPieceWinning = true
                this.getCell(x,i-2).piece!.isPieceWinning = true
                this.getCell(x,i-3).piece!.isPieceWinning = true
                // console.log('column')
                return true
            }
        }

        // descendingDiagonalCheck
        for(let i = 0; i <= 3; i++){
            for(let j = 0; j <= 2; j++){
                if(this.getCell(i,j).piece?.color === color && this.getCell(i+1,j+1).piece?.color === color && this.getCell(i+2,j+2).piece?.color === color && this.getCell(i+3,j+3).piece?.color === color){
                this.getCell(i,j).piece!.isPieceWinning = true
                this.getCell(i+1, j+1).piece!.isPieceWinning = true
                this.getCell(i+2, j+2).piece!.isPieceWinning = true
                this.getCell(i+3, j+3).piece!.isPieceWinning = true
                    // console.log('ascendingDiagonal')
                    return true

                }

            }
        }

        // ascendingDiagonalCheck
        for(let i = 0; i <= 3; i++){
            for(let j = 5; j >= 3; j--){
                if(this.getCell(i,j).piece?.color === color && this.getCell(i+1,j-1).piece?.color === color && this.getCell(i+2,j-2).piece?.color === color && this.getCell(i+3,j-3).piece?.color === color){
                    this.getCell(i,j).piece!.isPieceWinning = true
                    this.getCell(i+1,j-1).piece!.isPieceWinning = true
                    this.getCell(i+2, j-2).piece!.isPieceWinning = true
                    this.getCell(i+3, j-3).piece!.isPieceWinning = true
                    // console.log('descendingDiagonal')
                    return true

                }

            }
        }
        return false
    }

    public isBoardFull(){
        if(this.amountOfPieces === 42){
            return true
        }
        return false
    }

    public getCopyBoard(): BoardModel{
        const newBoard = new BoardModel(this.amountOfPieces)
        newBoard.cells = this.cells
        return newBoard
    }
}