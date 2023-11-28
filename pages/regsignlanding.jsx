import React from "react";
import { Link } from "react-router-dom";
import "../styles/regsignlanding.css";

export const RegSignLanding = () => {
  return (
    <div className="reg-sign-landing">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background-design" />
          <p className="reflect-daily">
            <span className="text-wrapper">Reflect</span>
            <span className="span">Daily</span>
          </p>
          <div className="transparent-image">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
              <img className="img" alt="Ellipse" src="ellipse-5.png" />
            </div>
          </div>
          <div className="trans-image"  />
          <div className="trans-image-2" alt="Trans image" />
          <div className="trans-image-3" alt="Trans image" src="trans-image-3.png" />
          <div className="trans-image-4" alt="Trans image" />
          <div className="main-image-design">
            <div className="ellipse-wrapper">
            
            </div>
          </div>
          <div className="random-trans-circle" alt="Random trans circle" />




          <button className="login-button">
            <Link to="/login">
              <div className="div-wrapper">
                <div className="text-wrapper-2">LOGIN</div>
              </div>
            </Link>
          </button>


          <button className="register-now-button">
            <Link to="/register">
              <div className="div-wrapper">
                <div className="text-wrapper-3">Register Now</div>
              </div>
            </Link>
          </button>

          <button className="register-buton">
            <Link to="/register">
              <div className="overlap-2">
                <div className="text-wrapper-4">REGISTER</div>
              </div>
            </Link>
          </button>


          <button className="about-button">
            <Link to="/about">
              <div className="text-wrapper-5">About</div>
            </Link>
          </button>
          <button className="home-button">
            <Link to="/">
              <div className="text-wrapper-6">Home</div>
            </Link>
          </button>



          <div className="main-text">
            <p className="p">
              Welcome to ReflectDaily, your daily companion for mindful note-taking, where your thoughts find a home and
              your reflections come to life
            </p>
            
            <p className="text-wrapper-7">Be a part of our family and register now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegSignLanding;