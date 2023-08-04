import { FC } from "react"

interface PlayerTurnProps{
    isOrangeTurn: boolean
}


const PlayerTurn: FC<PlayerTurnProps> = ({isOrangeTurn}) => {

    return(
        <div className="playerTurn-container">
            {isOrangeTurn ? <span style={{userSelect: "none"}}>ORANGE TURN</span> : <span style={{userSelect: 'none'}}>YELLOW TURN</span>}
        </div>
    )

}

export default PlayerTurn 