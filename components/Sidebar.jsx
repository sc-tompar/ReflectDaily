import React, { useState } from 'react';
import {
  FaTh,
  FaRegEdit,
  FaBars,
  FaRegFileAlt,
  FaBolt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const [userProfile] = useState({
    firstName: 'Firstname', // Replace with actual first name
    lastName: 'Lastname', // Replace with actual last name
    mood: 'Happy', // Replace with actual mood
  });

  const menuItem = [
    {
      path: '/',
      name: 'Dashoard',
      icon: <FaTh />,
    },
    {
      path: '/quotes',
      name: 'Quotes',
      icon: <FaRegFileAlt />,
    },
    {
      path: '/reflection',
      name: 'Reflection',
      icon: <FaRegEdit />,
    },
    {
      path: '/streak',
      name: 'Streak',
      icon: <FaBolt />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? '300px' : '80px' }} className="sidebar">
        <div className="top_section">
          <h1
            style={{
              display: isOpen ? 'block' : 'none',
              color: isOpen ? '#E5A692' : 'transparent', // Orange color when open, transparent when closed
            }}
            className="ReflectDaily"
          >
            Reflect<span style={{ color: '#605AB3' }}>Daily</span>
          </h1>
          <div style={{ marginLeft: isOpen ? '55px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
            <img
              src="https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.6435-9/178636103_296974451998382_1267186811635459138_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHsUSrw8Ny5E1I5eX6aM3TU6gr5M2rzgKvqCvkzavOAqxkCwsOv_7boWXSoHtdVB6cdetDdOus_7_SQp-TiHgiw&_nc_ohc=pPn6yRz6keQAX9FAWMn&_nc_ht=scontent.fdvo1-2.fna&oh=00_AfCi_qMNCL6ByTuyJWWnC9nUljcP1j-5bR4PGGj9M-SmlQ&oe=657CE4B2"
              alt="Profile"
              className="profile-image"
              style={{ marginLeft: isOpen ? '-450%' : '-34px' }} // Adjust the '10px' value as needed
            />

            <div className="user-label">
              {isOpen && <div>{userProfile.firstName} {userProfile.lastName}</div>}
            </div>
            <div className="mood-label">
              {isOpen && <div>{userProfile.mood}</div>}
            </div>
          </div>
        </div>
        <div className="search-bar">
          {isOpen && (
            <input
              type="text"
              placeholder="What's your Mood for Today?"
              className="input-search"
              // Add your interactive logic here (e.g., onChange handler)
            />
          )}
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="additional-container">
        {/* Content for the additional container */}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
