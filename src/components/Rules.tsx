import { FC } from "react"

interface RulesProps{
    rulesTriggered: boolean
    closeRules: () => void
}

const Rules: FC<RulesProps> = ({rulesTriggered, closeRules}) => {
  return (rulesTriggered) ? (
    <div className="rules-container">
      <div className="rules-inner">
        <h3>RULES</h3>
          <div className="rules-objective">
            <span>OBJECTIVE</span>
            <p>Be the first player to connect 4 of the same colored discs in a row(either vertically, horizontally or diagonally)</p>
          </div>
          <div className="rules-howToPlay">
            <span>HOW TO PLAY</span>
            <ol>
              <li>Players must alternate turns, and only one disc can be placed in each turn</li>
              <li>The game ends when there is a 4-in-a-row or board is full</li>
            </ol>
          </div>
          
          <button className="closeRules" onClick={closeRules}><svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.792"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#fe6687"></path> </g></svg></button>
        {/* <button onClick={closeRules}>
            close
        </button> */}
      </div>
    </div>
  ) : null
}

export default Rules