import React from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';

export default function Login() {
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
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="input-label">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="actions">
            <div className="remember-me">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">REMEMBER ME</label>
            </div>
            <a href="#" className="forgot-password">Forgot your password?</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <div className="signup-prompt">
          Don’t have an account? <Link to="/register" className="signup-link">SIGN UP</Link>
        </div>
        <button className="back-button">Back</button>
      </div>
    </div>
  );
}