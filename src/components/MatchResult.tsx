import { FC } from "react"

interface MatchResultProps{
  orangeWin: boolean
  yellowWin: boolean
  fullBoard: boolean
  playAgain: () => void

}

const MatchResult: FC<MatchResultProps> = ({orangeWin,yellowWin,fullBoard,playAgain}) => {
  return (orangeWin || yellowWin || fullBoard) ? (
    <div className="matchResult-container">
      <div className="matchResult-inner">
        <p>{orangeWin ? 'ORANGE' : yellowWin ? 'YELLOW' : null}</p>
        <h3>{fullBoard ? "DRAW" : "WINS"}</h3>
        {/* <div>{orangeWin ? 'ORANGE WIN' : yellowWin ? "YELLOW WIN" : "DRAW"}</div> */}
        <button className="playAgain" onClick={playAgain}>PLAY AGAIN</button>
      </div>
    </div>
  ) : null
}

export default MatchResult