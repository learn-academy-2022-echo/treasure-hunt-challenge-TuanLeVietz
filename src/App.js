import React, { useState } from 'react'
import './App.css'
import Square from './components/Square'

const App = () => {
  
const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])

const treeEmoji = () => {
  alert("🎋")
}
  
const handleGamePlay = (index) => {
alert('NOO!')
}

    return(
      <>
        <h1>Mystery BOXES</h1>
        <div className="boardgame">
        {board.map((value, index) => {
          return (
            <Square value={value} index={index} handleGamePlay={handleGamePlay}/>
          )
        })}
        </div>
      </>    
    )
}  
export default App
