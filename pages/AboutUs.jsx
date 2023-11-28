import React from 'react';
import '../styles/aboutusstyle.css';
 
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="background-image"></div>
      <h1>Meet Our Team</h1>
      <p className="motto">Our Motto: Transforming Thoughts into Self-Discovery</p>
      <div className="team-members">
        <div className="member">
          <div className="member-image-container">
            <img src="/src/images/teamMember1.jpg" alt="Member 1" />
          </div>
          <div className="member-info">
            <h3>Tompar, Simoun Cloyd</h3>
            <p>Member 1</p>
            <p className="member-bio">Team Leader & Developer</p>
          </div>
        </div>
        <div className="member">
          <div className="member-image-container">
            <img src="/src/images/teamMember2.jpg" alt="Member 2" />
          </div>
          <div className="member-info">
            <h3>Doriquez, Jerry Jr</h3>
            <p>Member 2</p>
            <p className="member-bio">Developer</p>
          </div>
        </div>
        <div className="member">
          <div className="member-image-container">
            <img src="/src/images/teamMember3.jpg" alt="Member 3" />
          </div>
          <div className="member-info">
            <h3>Españo, Trisan Jae</h3>
            <p>Member 3</p>
            <p className="member-bio">Developer</p>
          </div>
        </div>
        <div className="member">
          <div className="member-image-container">
            <img src="/src/images/teamMember4.jpg" alt="Member 4" />
          </div>
          <div className="member-info">
            <h3>Villas, Steve Laurenz</h3>
            <p>Member 4</p>
            <p className="member-bio">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default AboutUs;
