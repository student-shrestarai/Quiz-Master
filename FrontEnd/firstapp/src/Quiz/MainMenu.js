import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import Quiz from '../Quiz3';

 
const MainMenu = () => {
 
 const{ gameState , setGameState} =useContext(QuizContext);
 
    return (
    <div className="Menu">
        {/* <h1>Main Menu</h1> */}

        <button onClick={()=>{setGameState("quiz")}}>Start Quiz </button>
      
    </div>
  )
}

export default MainMenu



