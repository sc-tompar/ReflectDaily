import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/loginstyle.css';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleBack = () => {
    navigate(-1); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate('/dashboard');
      } else {
        const errorData = await response.text();
        setError(errorData);
      }
    } catch (error) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login">
      <div className="left-panel">
        <h1 className="reflect-daily">
          <span className="reflect">Reflect</span>
          <span className="daily">Daily</span>
        </h1>
        <p className="tagline">Write your thoughts in a hitch!</p>
      </div>
      <div className="right-panel">
        <h2 className="login-title">Login Now!</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="actions">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">REMEMBER ME</label>
            </div>
            <a href="#" className="forgot-password">Forgot your password?</a>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <div className="signup-prompt">
          Don’t have an account? <Link to="/register" className="signup-link">SIGN UP</Link>
        </div>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
}
