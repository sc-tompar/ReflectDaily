import '../styles/Sidebar.css';
import React, { useState } from 'react';
import { FaTh, FaRegEdit, FaBars, FaRegFileAlt, FaBolt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const storedUserData = JSON.parse(localStorage.getItem('userData'));
  const [userProfile] = useState({
    firstName: storedUserData ? storedUserData.firstName : 'Firstname',
    lastName: storedUserData ? storedUserData.lastName : 'Lastname',
  });// line 10 - 13 gi add

  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
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

  const initialMarginLeft = isOpen ? '-500%' : '-30px';
  const imageWidth = isOpen ? '60px' : '45px';
  const imageHeight = isOpen ? '60px' : '45px';

  return (
    <div className="container">
      <div style={{ width: isOpen ? '322px' : '80px' }} className="sidebar">
        <div className="top_section">
          <h1
            style={{
              display: isOpen ? 'block' : 'none',
              color: isOpen ? '#E5A692' : 'transparent',
            }}
            className="ReflectDaily"
          >
            Reflect<span style={{ color: '#605AB3' }}>Daily</span>
          </h1>
          <div style={{ marginLeft: isOpen ? '65px' : '-3px' }} className="bars">
            <FaBars onClick={toggle} />
            <img
              src="https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.6435-9/178636103_296974451998382_1267186811635459138_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeHsUSrw8Ny5E1I5eX6aM3TU6gr5M2rzgKvqCvkzavOAqxkCwsOv_7boWXSoHtdVB6cdetDdOus_7_SQp-TiHgiw&_nc_ohc=pPn6yRz6keQAX9FAWMn&_nc_ht=scontent.fdvo1-2.fna&oh=00_AfCi_qMNCL6ByTuyJWWnC9nUljcP1j-5bR4PGGj9M-SmlQ&oe=657CE4B2"
              alt="Profile"
              className="profile-image"
              style={{ marginLeft: initialMarginLeft, width: imageWidth, height: imageHeight }}
            />
            <div className="user-label">
              {isOpen && <div>{userProfile.firstName} {userProfile.lastName}</div>}
            </div>
            <div className="mood-label">
              {isOpen && <div>{userProfile.mood}</div>}
            </div>
          </div>
        </div>
       
        {menuItem.map((item, index) => (
          <NavLink to={`/dashboard${item.path}`} key={index} className="link" activeClassName="active">
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
