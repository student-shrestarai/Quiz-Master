import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Quiz3 = () => {

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
<table>
    <thead >
        <tr>
        <th>Question ID</th>
        <th>Question Name</th>
        <th>Option 1</th>
        <th>Option 2</th>
        <th>Option 3</th>
        <th>Option 4</th>
        <th>Answer</th>
        </tr>
        
    </thead>
    <tbody>
        {Questions.map((Question)=>{
            var {id ,question,  option1 ,  option2 ,  option3 ,  option4, answer} = Question
          return <tr key={id}>
            <td>{id}</td>
            <td>{question}</td>
            <td>
             {option1}</td>
            <td>
             {option2} </td>
            <td>
             {option3}</td>
            <td>
             {option4}</td>

             <td>{answer}</td>
              
             
        </tr>
        
        
        
        })}

    </tbody>
</table>

      
    </div>
  )
}

export default Quiz3
