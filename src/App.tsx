import './App.css'
import { useEffect, useState } from 'react'
import Board from './components/board'
import { BoardModel } from './models/board'
import PlayerTurn from './components/PlayerTurn'
import Footer from './components/Footer'
import Rules from './components/Rules'
import MatchResult from './components/MatchResult'

function App() {

  const [board, setBoard] = useState(new BoardModel())
  const [rulesOpen, setRulesOpen] = useState(false)
  const [orangeWin, setOrangeWin] = useState(false)
  const [yellowWin, setYellowWin] = useState(false)
  const [fullBoard, setFullBoard] = useState(false)
  const [isOrangeTurn, setIsOrangeTurn] = useState(false)

  useEffect(() => {
    restart()
  }, [])

  function restart(){
    const newBoard = new BoardModel()
    newBoard.initCells()
    setYellowWin(false)
    setOrangeWin(false)
    setFullBoard(false)
    setIsOrangeTurn(false)
    setBoard(newBoard)
  }

  return (
    <div className='App'>
      <div className='button-container'>
        <button className='rules' onClick={() => setRulesOpen(true)}>RULES</button>
        <svg width="57" height="62" viewBox="0 0 57 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="43" cy="47" rx="14" ry="15" fill="black"/>
          <circle cx="43" cy="46" r="10" fill="#FE6687"/>
          <ellipse cx="14" cy="15" rx="14" ry="15" fill="black"/>
          <circle cx="14" cy="14" r="10" fill="#FE6687"/>
          <ellipse cx="43" cy="15" rx="14" ry="15" fill="black"/>
          <circle cx="43" cy="14" r="10" fill="#FCCF67"/>
          <ellipse cx="14" cy="47" rx="14" ry="15" fill="black"/>
          <circle cx="14" cy="46" r="10" fill="#FCCF67"/>
        </svg>
        <button className='restart' onClick={restart}>RESTART</button>
      </div>
      <Rules rulesTriggered={rulesOpen} closeRules={() => setRulesOpen(false)}/>
      <MatchResult orangeWin={orangeWin} yellowWin={yellowWin} fullBoard={fullBoard} playAgain={restart}/>
      <Board
      board={board}
      setBoard={setBoard}
      yellowWin={() => setYellowWin(true)}
      orangeWin={() => setOrangeWin(true)}
      fullBoard={() => setFullBoard(true)}
      isOrangeTurn={isOrangeTurn}
      changeIsOrangeTurn={() => setIsOrangeTurn(!isOrangeTurn)}>
      </Board>
      <PlayerTurn isOrangeTurn={isOrangeTurn}/>
      <Footer orangeWin={orangeWin} yellowWin={yellowWin}/>
    </div>
  )
}

export default App
