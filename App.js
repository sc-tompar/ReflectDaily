import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs'; 
import RegSignLanding from './pages/regsignlanding';
import Login from './pages/Login';
import Register from './pages/Register';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Import the Navbar component
import Dashboard from './pages/Dashboard.jsx';
import Quotes from './pages/Quotes.jsx';
import Reflection from './pages/Reflection.jsx';
import Streak from './pages/Streak.jsx';
import NoteDetail from './components/NoteDetail.jsx'; //this one is newly added
import { AuthProvider } from './utils/AuthContext.jsx';

const App = () => {
return (
<Router>
 <Routes>
  {/* Routes for main content */}
  <Route path="/" element={<LandingPage />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/regsignlanding" element={<RegSignLanding />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  

  {/* Nested route for dashboard content */}
  <Route
          path="/dashboard/*"
          element={
            
            <div className="app-container">
             <AuthProvider>
              <Sidebar />
              </AuthProvider>
              <div className="main-container">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/quotes" element={<Quotes />} />
                  <Route path="/reflection" element={<Reflection />} />
                  <Route path="/streak" element={<Streak />} />
                  <Route path="/reflection/:id" element={<NoteDetail/>} /> //this one is newly added
                </Routes>
              </div>
              </div>
           
          }
        />
</Routes>
</Router>
);
};
 
export default App;
 
