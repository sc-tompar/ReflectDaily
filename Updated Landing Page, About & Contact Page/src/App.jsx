import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs'; 
import RegSignLanding from './pages/regsignlanding';
import Login from './pages/Login';
import Register from './pages/Register';
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/regsignlanding" element={<RegSignLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};
 
export default App;
 
