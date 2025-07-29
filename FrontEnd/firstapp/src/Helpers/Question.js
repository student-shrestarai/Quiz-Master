// import { createContext, useState, useEffect } from "react";

// // Create a new context for quiz questions
// export const QuestionsContext = createContext();

// export const QuestionsProvider = ({ children }) => {
//   const [questions, setQuestions] = useState([]);

//   // Fetch questions from the Spring Boot backend
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/quiz/getallq");
//         const data = await response.json();
//         setQuestions(data); // Store fetched questions
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   return (
//     <QuestionsContext.Provider value={{ questions }}>
//       {children} {/* This ensures all wrapped components can access questions */}
//     </QuestionsContext.Provider>
//   );
// };


import { createContext, useState } from "react";

// Create context
export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");

  // Function to fetch category-wise questions
  const fetchQuestionsByCategory = async (categoryName) => {
    try {
      const response = await fetch(`http://localhost:8080/quiz/category/${categoryName}`);
      const data = await response.json();
      setQuestions(data);
      setCategory(categoryName);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <QuestionsContext.Provider value={{ questions, fetchQuestionsByCategory, category }}>
      {children}
    </QuestionsContext.Provider>
  );
};

