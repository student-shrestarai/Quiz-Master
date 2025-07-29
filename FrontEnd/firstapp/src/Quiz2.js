import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Quiz2 = () => {

    var[Questions , setquestions] =useState([]);
    useEffect(() => {
        const getQuestions = async () => {
          try {
            const response = await fetch("http://localhost:8080/quiz/getallq");
            const data = await response.json();
            setquestions(data); // Store fetched questions
          } catch (error) {
            console.error("Error fetching questions:", error);
          }
        };
      
        getQuestions(); // Call the function
      }, []);
      






  return (
    <div>


        
    </div>
    
     
  )
}

export default Quiz2
