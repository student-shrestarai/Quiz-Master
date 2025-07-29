import React from 'react'
import {useState} from 'react' ;
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {


  const [loggedin_user , setloggedin_user] = useState({email:'' , password:''});
  const [message, setMessage] = useState("");  

  const navigate = useNavigate();



 const handleChange = (e)=>{
  const{name,value} = e.target;
  setloggedin_user({...loggedin_user, [name]:value});
 }
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loggedin_user.email === "" || loggedin_user.password === "") {
      
      setMessage("Both fields are mandatory");
      return;
    }

    try {
     const response = await axios.post("http://localhost:8080/Login", loggedin_user );
    
const { message, name, email, role, id } = response.data;

localStorage.setItem("user", JSON.stringify({ name, email, role, id }));
console.log("email is" ,email);
console.log("name is" ,name);
      // setMessage(response.data);
      setMessage(message);
      alert("login succesful");

      if (role === "ADMIN") {
        navigate("/intro");
    } else {
        navigate("/intro");
    }





    } catch (error) {
      

      if (error.response && error.response.data) {
        setMessage(error.response.data); // Show error message from API

      } else {
        setMessage("An error occurred. Please try again.");
      }





    }
  };


  return (
    <div className="login_outer">
    <h1>Login</h1>
  
    <div className='login_container'>
     
      
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Email :</td>
              <td>
                <input
                  type="email"
                  name="email"
                  className='email'
                  value={loggedin_user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
  
            <tr>
              <td>Password :</td>
              <td>
                <input
                  type="password"
                  name="password"
                  className='password'
                  value={loggedin_user.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
  
            <tr>
              <td colSpan="2">
                <button type="submit" className='logged_in'>Login</button>
              </td>
            </tr>

            <tr>
  <td colSpan="2">
    <div className="signup-row">
      <span>Don't have an account?</span>
      <button className="signup-btn" type="button" onClick={() => navigate("/")}>
        Register
      </button>
    </div>
  </td>
</tr>
          </tbody>
        </table>
      </form>
  
      <p style={{ color: "green" }}>{message}</p>
    </div>
  </div>
  
  )
}

export default Login