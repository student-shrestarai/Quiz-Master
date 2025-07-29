// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import { QuestionsContext } from '../Helpers/Question';
// import { QuizContext } from '../Helpers/Context';
// //  import './Question.css';

// const Quizz = () => {
//   const navigate = useNavigate(); 
//   const { score, setScore } = useContext(QuizContext);
//   const { questions } = useContext(QuestionsContext);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [optionChosen, setOptionChosen] = useState(" ");
//   const [quizTitle, setQuizTitle] = useState("");

//   if (!questions || questions.length === 0) {
//     return <h1>Loading questions...</h1>;
//   }

//   const CurrentQuestion = questions[currentQuestionIndex];

//   const nextQuestion = () => {
//     if (optionChosen === " ") {
//       alert("Please choose an option.");
//       return;
//     }
//     if (CurrentQuestion.answer === optionChosen) {
//       setScore(score + 1);
//     }
//     setOptionChosen(" ");
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const finishQuiz = () => {


//     const email = localStorage.getItem("email");
//   const quizTitle = CurrentQuestion.category // or dynamic based on quiz

//     if (optionChosen === " ") {
//       alert("Please choose an option.");
//       return;
//     }

//     if (CurrentQuestion.answer === optionChosen) {
//       setScore(score + 1);
//     }







//  try {
//     axios.post("http://localhost:8080/submit", {
//       quizTitle,
//       email,
//       score: finalScore,
//     });
//     console.log("Result submitted successfully");
//   } catch (error) {
//     console.error("Error submitting result:", error);
//   }

//   setScore(finalScore);











//     navigate("/end"); 
//   };

//   return (


//     <div className="quiz-wrapper">
//   <div className="quiz-container">
//     <h1 className="quiz-question">{CurrentQuestion.question}</h1>
//     <div className="quiz-options">
//       <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option1)}>{CurrentQuestion.option1}</button>
//       <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option2)}>{CurrentQuestion.option2}</button>
//       <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option3)}>{CurrentQuestion.option3}</button>
//       <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option4)}>{CurrentQuestion.option4}</button>
//     </div>

//     {currentQuestionIndex === questions.length - 1 ? (
//       <button className="quiz-finish" onClick={finishQuiz}>Finish Quiz</button>
//     ) : (
//       <button className="quiz-next" onClick={nextQuestion}>Next Question</button>
//     )}
//   </div>
// </div>


//   );
// };

// export default Quizz;





















import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { QuestionsContext } from '../Helpers/Question';
import { QuizContext } from '../Helpers/Context';
// import './Question.css';

const Quizz = () => {
  const navigate = useNavigate();
  const { score, setScore } = useContext(QuizContext);
  const { questions } = useContext(QuestionsContext);
  const { category } = useContext(QuestionsContext); // get category directly


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionChosen, setOptionChosen] = useState(" ");

  if (!questions || questions.length === 0) {
    return <h1>Loading questions...</h1>;
  }

  const CurrentQuestion = questions[currentQuestionIndex];

  const nextQuestion = () => {
    if (optionChosen === " ") {
      alert("Please choose an option.");
      return;
    }
    if (CurrentQuestion.answer === optionChosen) {
      setScore(prev => prev + 1);
    }
    setOptionChosen(" ");
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const finishQuiz = async () => {
    if (optionChosen === " ") {
      alert("Please choose an option.");
      return;
    }

    let finalScore = score;
    if (CurrentQuestion.answer === optionChosen) {
      finalScore += 1;
    }

   const user = JSON.parse(localStorage.getItem("user"));
const email = user?.email;
console.log(email);

    const quizTitle = category;

    try {
      await axios.post("http://localhost:8080/results/submit", {
        quizTitle,
        email,
        score: finalScore,
      });
      console.log("Result submitted successfully");
    } catch (error) {
      console.error("Error submitting result:", error);
    }

    setScore(finalScore);
    navigate("/end");
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-container">
        <h1 className="quiz-question">{CurrentQuestion.question}</h1>
        <div className="quiz-options">
          <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option1)}>{CurrentQuestion.option1}</button>
          <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option2)}>{CurrentQuestion.option2}</button>
          <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option3)}>{CurrentQuestion.option3}</button>
          <button className="quiz-option-button" onClick={() => setOptionChosen(CurrentQuestion.option4)}>{CurrentQuestion.option4}</button>
        </div>

        {currentQuestionIndex === questions.length - 1 ? (
          <button className="quiz-finish" onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button className="quiz-next" onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Quizz;

