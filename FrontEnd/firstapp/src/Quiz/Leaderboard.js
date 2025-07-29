
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faFacebook  , faSnapchat} from '@fortawesome/free-brands-svg-icons';
 import './Intro.css';
import './leaderboard.css'
const Leaderboard = () => {

    const navigate = useNavigate();
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/results/TopLeaders')
      .then((response) => {
        setLeaders(response.data);
      })
      .catch((error) => {
        console.error('Error fetching leaderboard:', error);
      });
  }, []);

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


    <div className="main-contented">
     
      <p>Quiz Masters in the Hall of Fame</p>
    
      
       
      </div>















   <div className="leaderboard-container">
  <h2 className="leaderboard-title">Leaderboard</h2>
  <table className="leaderboard-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Full Name</th>
        <th>Total Score</th>
      </tr>
    </thead>
    <tbody>
      {leaders.map((user, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.fullName}</td>
          <td>{user.totalScore}</td>
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

export default Leaderboard;







