import React from 'react';
import { Link } from 'react-router-dom'; 
import './Register.css'; 

export default function Register() {
  return (
    <div className="register">
      <div className="left-panel">
        <h1 className="reflect-daily">
          <span className="reflect">Reflect</span>
          <span className="daily">Daily</span>
        </h1>
        <p className="tagline">Write your thoughts in a hitch!</p>
      </div>
      <div className="right-panel">
        <h2 className="register-title">Register Now!</h2>
        <form className="register-form">
          <div className="input-group">
            <label htmlFor="firstName" className="input-label">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="input-label">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="register-button">REGISTER</button>
        </form>
        <div className="login-prompt">
            Already have an account? <Link to="/login" className="login-link">LOGIN</Link>
        </div>
        <button className="back-button">Back</button>
      </div>
    </div>
  );
}
