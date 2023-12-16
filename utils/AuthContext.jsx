// AuthContext.js
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userData'))); // Retrieve user data from localStorage
  const navigate = useNavigate(); 
  const login = async (userData) => {
    // Perform login logic
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const loggedInUser = await response.json(); // Assuming the response contains user data
        setUser(loggedInUser);
        localStorage.setItem('userData', JSON.stringify(loggedInUser));
        return true; // Login successful
      } else {
        const errorData = await response.text();
        throw new Error(errorData);
      }
    } catch (error) {
      throw new Error('An error occurred during login. Please try again.');
    }
  };

  const logout = () => {
    // Perform logout logic
    setUser(null);
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
