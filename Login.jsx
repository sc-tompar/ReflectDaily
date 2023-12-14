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
        const userData = await response.json(); // Assuming the response contains user data
      localStorage.setItem('userData', JSON.stringify(userData)); //gi usab line 35 og 34
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
            <input type="email" id="email" name="email" placeholder=" " value={user.email} onChange={handleInputChange} />
            <label htmlFor="email" className="input-label">Email</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder=" " value={user.password} onChange={handleInputChange} />
            <label htmlFor="password" className="input-label">Password</label>
          </div>
          <div className="actions">
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