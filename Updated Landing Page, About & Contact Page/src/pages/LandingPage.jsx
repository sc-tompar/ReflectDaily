import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpagestyle.css";
 
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <p className="reflect-daily">
            <span className="text-wrapper">Reflect</span>
            <span className="span">Daily</span>
          </p>
          <div className="nav-links">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>
          <div className="main-text">
            <p className="p">Forget about your messy notes.</p>
            <p className="text-wrapper-4">ReflectDaily is a notes app developed for the ease of the users.</p>
          </div>
          <Link to="/regsignlanding" className="get-started-button">
            <div className="overlap-group">
              <div className="text-wrapper-5">Get Started</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default LandingPage;