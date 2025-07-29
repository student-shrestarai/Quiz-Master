// import logo from './logo.svg';
// import { useContext } from 'react';
// import './App.css';

// import MainMenu from './Quiz/MainMenu';
// import EndScreen from './Quiz/EndScreen';
// import { useState } from 'react';
// import { QuizContext } from './Helpers/Context';
// import { QuestionsProvider } from './Helpers/Question';
// import Quizz from './Quiz/Quizz';
// import Intro from './Quiz/Intro';

// function App() {
//   const [gameState , setGameState] = useState("intro");
//   const[score ,setScore]=useState(0);
//   return (
//     <div className="App">
      
//       {/* <h1>Quiz App</h1> */}
//       <QuizContext.Provider value={{gameState , setGameState , score ,setScore}}>
//         <QuestionsProvider>
//       {gameState==="intro" &&<Intro/>}
//       {gameState==="menu" &&<MainMenu/>}
//       {gameState==="quiz" &&<Quizz/>}
//       {gameState==="endScreen" &&<EndScreen/>}
//       </QuestionsProvider>
//       </QuizContext.Provider>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import MainMenu from './Quiz/MainMenu';
import Quizz from './Quiz/Quizz';
import EndScreen from './Quiz/EndScreen';
import Registration from './Quiz/Registration';

import { QuizContext } from './Helpers/Context';
import { QuestionsProvider } from './Helpers/Question';
import Login from './Quiz/Login';
import Intropage from './Quiz/Intropage';
import CreateQuiz from './Quiz/CreateQuiz';
import Profile from './Quiz/Profile';
import Leaderboard from './Quiz/Leaderboard';

function App() {
  const [gameState, setGameState] = useState("intro");
  const [score, setScore] = useState(0);

  return (
    <Router>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        <QuestionsProvider>
          <Routes>
  <Route path="/" element={<Registration />} />    
  <Route path="/login" element={<Login />} />
  <Route path="/intro" element={<Intropage />} />
  <Route path="/quiz" element={<Quizz />} />
  <Route path="/menu" element={<MainMenu />} />
  <Route path="/end" element={<EndScreen />} />
  <Route path="/createquiz" element={<CreateQuiz />} />  
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/leaderboard" element={<Leaderboard/>}/>
</Routes>

        </QuestionsProvider>
      </QuizContext.Provider>
    </Router>
  );
}

export default App;
