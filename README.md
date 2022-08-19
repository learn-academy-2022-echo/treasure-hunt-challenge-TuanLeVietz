# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
- Branch: boardgame
-Add a div in Square with height, width, border
-mapped over the square component to dynamically render nine times
-use flex to create game board
- passed the value 

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
-branch index position
- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
- As a user, I can click on a “Play Again” button that will restart the game.
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at 5 and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Challenges

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Challenges

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).


### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
branch: board-game
create functional component
```javascript
import React from 'react'

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
```
App.js - logic
make a board array aka make a state data
board describes data for entire application
variable, function with useState hook
const [board, setBoard] = useState([])
import useSate

Square.js - display
create functional component
make sure it is visible - component call/import
div className = "square"

App.css
.square {
  //width style color
  border: 2px solid black;
  height: 200px;
  width: 200px
}

Inspect browser page
open the div id="root" under Elements
each div is a block level element, opposite of inline, block takes the whole area, in-line acts on a single thing
Place container around the mapping in App.js div className="boardgame"
Verify on the inspect to see that it is a div that covers the whole board
Update on App.css
div will stack up next to each other on flex
to get even: look at the width and border to get how large a width to give the dimension
wrap tells it what to do at the limit
margin with its attributes: 0 nothing on top and bottom, auto even on left and right
.boardgame {
  display: flex;
  width: 620px;
  flex-wrap: wrap;
  margin: 0 auto;
}
h1 {
  text-align: center;
}

App.js
to get 9 squares use the state dynamically, map over square
{board.map((value, index) => {
  return(
    <Square />
  )
})}

Passing down the river
on App.js ---> <Square value={value}>

Square.js --->  props in the parameter. Reference as props.value 

Add some declarations to .square
font-size: 11 rem
text-align: center

- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
branch: index-position

Square.js needs access to the index
-create a unique identifier using the index
on App.js on component call index={index}
Index needs to show up everytime the box is clicked

on Square.js
Add onClick attribute

const handleClick = () => {
  alert("Treasure!")
}

<div classNAme="square onClick={handleClick}> {props.value} </div>

To see the index on the alert
alert(props.index)

- Passing up the river
functional props
Create a function on App.js
const handleGamePlay = (index) => {
  alert(index)
}

pass function in the component call
handleGamePlay={handleGamePlay}

reference it on Square.js
props.handleGamePlay
update handleClick() to trigger function
const handleClick = () => {
  props.handleGamePlay(props.index)
}