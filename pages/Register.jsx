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

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // Clear the error of the input field when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const errorData = await response.json();
        setErrors(errorData);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrors({ general: 'An error occurred during registration. Please try again.' });
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
            <input type="text" id="firstName" name="firstName" placeholder=" " value={user.firstName} onChange={handleInputChange} />
            <label htmlFor="firstName" className="input-label">First Name</label>
            {errors.firstName && <div className="error-message">{errors.firstName}</div>}
          </div>
          <div className="input-group">
            <input type="text" id="lastName" name="lastName" placeholder=" " value={user.lastName} onChange={handleInputChange} />
            <label htmlFor="lastName" className="input-label">Last Name</label>
            {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          </div>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder=" " value={user.email} onChange={handleInputChange} />
            <label htmlFor="email" className="input-label">Email</label>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder=" " value={user.password} onChange={handleInputChange} />
            <label htmlFor="password" className="input-label">Password</label>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          {Object.keys(errors).map((key) => (
            errors[key] && <div key={key} className="error-message">{errors[key]}</div>
          ))}
          <button type="submit" className="register-button">REGISTER</button>
        </form>
        <div className="login-prompt">
          Already have an account? <Link to="/login" className="login-link">LOGIN</Link>
        </div>
        <button className="back-button" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Register;
