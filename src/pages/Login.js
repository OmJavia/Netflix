import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import logo from "../assests/images/netflix-icon.png"

const Login = () => {
  const [text, setText] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials are correct
    if (text === '1234' && password === '1234') {
      console.log("Login successful");
      navigate('/Home'); // Redirect to dashboard on success
    } else {
      console.log("Invalid credentials");
      alert("Invalid login ID or password"); // Alert on failure
    }
  };

  return (
    <>
    
    <div className="login-background">
      <div className="login-overlay">
        <img src={logo} className="login-logo" />
        <div className="login-container">
          <h2 className="login-title">Sign In</h2>
          <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
              <FaUserAlt className="input-icon" />
              <input
                type="text"
                placeholder="Email or mobile number"
                className="login-input"
                value={text} // Bind state
                onChange={(e) => setText(e.target.value)} // Update state
                required
              />
            </div>
          <div className="input-container">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                className="login-input"
                value={password} // Bind state
                onChange={(e) => setPassword(e.target.value)} // Update state
                required
              />
              </div>
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
            <div className="login-options">
              
              <span>OR</span><br /> <br />
              <button type="button" className="signin-code-button">
                Use a sign-in code
              </button>
            </div>
            <div className="login-links">
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            
          </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
