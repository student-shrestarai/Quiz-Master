import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faFacebook  , faSnapchat} from '@fortawesome/free-brands-svg-icons';
 import './Intro.css';
import './profile.css'

const Profile = () => {
     const navigate = useNavigate();
  const [results, setResults] = useState([]);
   const user = JSON.parse(localStorage.getItem("user"));
const email = user?.email;
const name =user?.name;
console.log(email);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/results/user/${email}`);
        setResults(response.data);
        console.log(results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, [email]);


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
          <li className='Browse'>Browse</li>
          <li className='Profile'  onClick={profilepage}>Profile</li>
        </ul>
      </div>

     <div className='nav_item'>
      <button className='register' id="reg_1" onClick={register_page}>Sign In</button>
     </div>
    </nav>
    </header>

      <div className="main-contenteds">
  <p> Welcome Back {name} !</p>
</div>

<div className="profile-container">
  <h2 className="profile-heading"> {name}'s Profile</h2>
  <h3 className="quiz-history-heading">Your Quiz History</h3>
  
  <table className="profile-table">
    <thead>
      <tr>
        <th>Quiz Title</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {results.map((result, index) => (
        <tr key={index}>
          <td>{result.quizTitle}</td>
          <td>{result.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    <footer className =" footered">
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

export default Profile;
