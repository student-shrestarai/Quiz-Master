import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import { useNavigate } from 'react-router-dom'; 

const Registration = () => {

    const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    role: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: name === 'role' ? value.toUpperCase() : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending data:', user);

    if (
      user.fullname === '' ||
      user.email === '' ||
      user.password === '' ||
      user.role === ''
    ) {
      setMessage('All fields are required and cannot be empty.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/registration', user);
      setMessage(response.data);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data || 'An error occurred. Please try again.');
      } else {
        setMessage('Server is not responding. Please check your backend.');
      }
    } finally {
      setUser({
        fullname: '',
        email: '',
        password: '',
        role: '',
      });
      setIsEditing(false);
    }
  };


  const handleLogin=()=>{
    navigate("/login");
  }

  return (
    <div className='registration-container'>
      <h1> Registration</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Full Name :</td>
              <td>
                <input className='fullname'
                  type="text"
                  name="fullname"
                  value={user.fullname}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Email :</td>
              <td>
                <input  className='email'
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Password :</td>
              <td>
                <input  className='password'
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>Role :</td>
              <td>
                <select name="role" value={user.role} onChange={handleChange}  className='role'        >
                  <option value="">Choose an option</option>
                  <option value="USER">USER</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <button type="submit" className="reg_submit"  >
                  Register
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <button type="button" className="login_submit" onClick={handleLogin}>
                  Log In
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </form>

      {message && (
        <p style={{ color: 'red' }}>
          {typeof message === 'string' ? message : 'An error occurred'}
        </p>
      )}
    </div>
  );
};

export default Registration;
