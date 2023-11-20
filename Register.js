import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/registerstyle.css';


const Register = () => {

  const navigate = useNavigate();
  

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });


  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ general: '', [e.target.name]: '' });
  };

 
  const handleRegister= async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/user/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate('/login'); 
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

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
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="firstName" className="input-label">First Name</label>
            <input type="text" id="firstName" name="firstName"  value={user.firstName} onChange={handleInputChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="lastName" className="input-label">Last Name</label>
            <input type="text" id="lastName" name="lastName"  value={user.lastName} onChange={handleInputChange} />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input type="email" id="email" name="email"  value={user.email} onChange={handleInputChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input type="password" id="password" name="password" value={user.password}  onChange={handleInputChange}/>
          </div>
          <button type="submit" className="register-button">REGISTER</button>
         
        </form>
        <div className="login-prompt">
          Already have an account? <Link to="/login" className="login-link">LOGIN</Link>
        </div>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Register;
