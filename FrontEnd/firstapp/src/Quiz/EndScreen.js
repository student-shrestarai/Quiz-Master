import React from 'react'
import { QuizContext } from '../Helpers/Context'
import { useContext } from 'react';
import { QuestionsContext } from '../Helpers/Question';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './endscreen.css';

const EndScreen = () => {

  const navigate = useNavigate(); 

 const restartQuiz =()=>{
  setScore(0);
  //setGameState("menu");
  navigate("/intro")
 }


  const{score , setScore , setGameState} = useContext(QuizContext);
    const { questions ,  setQuestions} = useContext(QuestionsContext);
  return (
    <div className="end-screen">
      <h1> Quiz Finished</h1>
      <h3>{score}/{questions.length}</h3>
     <button  className="restart" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen
