import React from 'react';
import './Intro.css'; // link to external CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faFacebook  , faSnapchat} from '@fortawesome/free-brands-svg-icons';
import { QuestionsContext } from '../Helpers/Question';
import { useState } from 'react';
import { QuizContext } from '../Helpers/Context';
 import { useContext } from 'react';
 import { useNavigate } from 'react-router-dom';
 



const Intropage = () => {
  const navigate = useNavigate();
  const { questions ,  setQuestions ,  fetchQuestionsByCategory} = useContext(QuestionsContext); 
 
  const handleCategoryClick = (category) => {
    // Fetch questions for the selected category
    fetchQuestionsByCategory(category);

    // Navigate to the quiz page with the selected category
    navigate(`/quiz?category=${category}`);
  };

  const home_page =()=>{
    navigate("/intro");
  }


  const login_page=()=>{
    navigate("/login");
  }


  const register_page=()=>{
    navigate("/");

  }

  const handlecreate=()=>{
    navigate("/createquiz");
  }

  const handleQuiz=()=>{
    navigate("/quiz")
  }

  const profilepage=()=>{
    navigate("/profile")
  }


  const leader_board=()=>{
    navigate("/leaderboard")
  }
 
 
  return (


    <>


   <header>
    <nav className="navbar">
      <div className="logo">QuizMaster</div>
      <div className="nav_item_1">
        <ul>
          <li className='home' onClick={home_page}>Home</li>
          <li className='LeaderBoard' onClick={leader_board}>LeaderBoard</li>
          <li className='Browse'  onClick={home_page}>About</li>
          <li className='Profile'  onClick={profilepage}>Profile</li>
        </ul>
      </div>

     <div className='nav_item'>
      <button className='register' id="reg_1" onClick={register_page}>Sign In</button>
     </div>
    </nav>
    </header>

  
    <div className="main-content">
     
      <h3>Create,Share and Master Any Topic</h3>
      <p>Build engaging quizzes, challenge yourself with topics you love and track</p>
       <p classNmae='second_p'>your progress in an intuitive learning environment.</p>
    
        <div className='endContent'>
       <button  className="create" onClick={handlecreate}>Create Quiz</button>
       <button  className="play" onClick={handleQuiz}>Take Quiz</button>   
      </div>
       
      </div>



      <div className="card-container">

        <div className="heading">Dive into our quizzes and see how much you really know!</div>

        <div className="quiz_card">
          <div className="quiz_image"></div>
          <div className="quiz_text">
            <p>History isn’t just about dates and dusty pages. It’s the stories of empires that rose and fell, revolutions that changed the world, and brave voices that echoed through time. Ever wondered how much of it you truly know? Step into the past, challenge your memory, and discover if you’re ready to claim the title of History Buff. Take the quiz and let the journey begin!</p>
            <button className="card-text" onClick={() => handleCategoryClick('space')}>Play Quiz</button>
          </div>
        </div>



<div className="quiz_card">
          <div className="quiz_image2"></div>
          <div className="quiz_text2">
            <p>History isn’t just about dates and dusty pages. It’s the stories of empires that rose and fell, revolutions that changed the world, and brave voices that echoed through time. Ever wondered how much of it you truly know? Step into the past, challenge your memory, and discover if you’re ready to claim the title of History Buff. Take the quiz and let the journey begin!</p>
            <button className="card-text" onClick={() => handleCategoryClick('history')}>Play Quiz</button>
          </div>
        </div>


        <div className="quiz_card">
          <div className="quiz_image3"></div>
          <div className="quiz_text3">
            <p>History isn’t just about dates and dusty pages. It’s the stories of empires that rose and fell, revolutions that changed the world, and brave voices that echoed through time. Ever wondered how much of it you truly know? Step into the past, challenge your memory, and discover if you’re ready to claim the title of History Buff. Take the quiz and let the journey begin!</p>
            <button className="card-text" onClick={() => handleCategoryClick('GK')}>Play Quiz</button>
          </div>
        </div>










      </div>


   


<footer className =" footer">
  <div className="footerContainer">
    <div className="foot_heading">
      <h3>Quiz Master</h3>
    </div>
    <div className = "icons" >
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px' }} />
    <FontAwesomeIcon icon={faSnapchat} />
    </div>
    <div className='copyright'>
      <p>CodeCatalyst @ 2025</p>
    </div>

  </div>
  
</footer>








    </>


 











  );
};

export default Intropage;
