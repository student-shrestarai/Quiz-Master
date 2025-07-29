import React from 'react'
import { useContext } from 'react';
import { QuestionsContext } from '../Helpers/Question';
import { useState } from 'react';

const Quiz = () => {
    const { questions ,  setQuestions , } = useContext(QuestionsContext); // Get questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  return (
    <div className="Quiz">
      <h1>{questions[currentQuestionIndex]}</h1>
      
    </div>
  )
}

export default Quiz
