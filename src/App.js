import React, { useState } from 'react'
import './App.css'
import Square from './components/Square'

const App = () => {
  
const [board, setBoard] = useState(["?", "?", "?", "?", "?", "?", "?", "?", "?"])
  
const handleGamePlay = (index) => {
alert(index)
}

    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div classNamer="boardgame">
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
