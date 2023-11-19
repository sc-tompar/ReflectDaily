import React, { useState } from "react";
import "./Reflection.css";

const Reflection = () => {
  const [activeButton, setActiveButton] = useState(null);
  
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Handle button click based on buttonName
    console.log(`Clicked on ${buttonName} button`);
    // Add your logic for each button click here
  };
  return (
    <div className="reflection">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <p className="reflect-daily">
              <span className="text-wrapper">Reflect</span>
              <span className="span">Daily</span>
            </p>
            <img className="menu-icon" alt="Menu icon" src="menu.png" />
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-2">SimounTompar</div>
            <div className="text-wrapper-3">Mood</div>
          </div>
          <img className="more-icon" alt="More icon" src="moreW.png" />
          <img className="line" alt="Line" src="line.png" />
          <div className={`qoutes-button ${activeButton === "Quotes" ? "active" : ""}`}
            onClick={() => handleButtonClick("Quotes")}>
            <div className="text-wrapper-4">Qoutes</div>
            <img className="qoutes-icon" alt="Qoutes icon" src="qoutes.png" />
          </div>
          <div className="overlap-3">
            <div className="reflection-button" onClick={() => handleButtonClick("Reflection")}>
              <div className="text-wrapper-5">Reflection</div>
              <img className="reflection-icon" alt="Reflection icon" src="reflectionIcon.png" />
            </div>
            <div className="highlight-effects" /> 
          </div>
          <div className="streak-button" onClick={() => handleButtonClick("Reflection")}>
            <div className="text-wrapper-6">Streak</div>
            <img className="streak-icon" alt="Streak icon" src="streakIcon.png" />
          </div>
          <div className="sign-out-button" onClick={() => handleButtonClick("Reflection")}>
            <div className="text-wrapper-7">Sign Out</div>
            <img className="sign-out-icon" alt="Sign out icon" src="signout.png" />
          </div>
          <div className="avatar-icon">
            <div className="status-online" />
          </div>
        </div>
        <div className="overlap-4">
          <img className="avatar" alt="Avatar" src="avatar-2.png" />
          <div className="div-wrapper">
            <div className="text-wrapper-8">Type to search...</div>
          </div>
          <img className="vector" alt="Vector" src="filter.png" />
        </div>
        <div className="text-wrapper-9">Reflection</div>
        <div className="overlap-5">
          <div className="text-wrapper-10">Mood</div>
          <img className="img" alt="More icon" src="moreB.png" />
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-10">Tags</div>
          <img className="img" alt="More icon" src="moreB.png" />
        </div>
        <div className="overlap-7">
          <div className="text-wrapper-11">Latest</div>
          <img className="more-icon-2" alt="More icon" src="moreB.png" />
        </div>
        <div className="vector-wrapper">
          <img className="vector-2" alt="Vector" src="plus.png" />
        </div>
        <div className="img-wrapper">
          <img className="vector-3" alt="Vector" src="calendar.png" />
        </div>
        <div className="overlap-8">
          <div className="rereflection-notes">
            <div className="overlap-group-2">
              <div className="overlap-9">
                <div className="overlap-group-3">
                  <p className="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley o
                  </p>
                  <div className="text-wrapper-12">HAPPY</div>
                  <img className="line-2" alt="Line" src="line.png" />
                </div>
                <div className="text-wrapper-13">November 18, 2023</div>
              </div>
              <div className="text-wrapper-14">CRUSH</div>
              <img className="vector-4" alt="Vector" src="edit.png" />
              <img className="vector-5" alt="Vector" src="delete.png" />
            </div>
          </div>
          <img className="vector-6" alt="Vector" src="image.png" />
        </div>
        <div className="group">
          <div className="overlap-group-2">
            <div className="overlap-9">
              <div className="overlap-group-3">
                <p className="p">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
                <div className="text-wrapper-15">MAD</div>
                <img className="line-2" alt="Line" src="line.png" />
              </div>
              <div className="text-wrapper-16">November 19, 2023</div>
            </div>
            <div className="text-wrapper-17">Frenemy</div>
            <img className="vector-4" alt="Vector" src="edit.png" />
            <img className="vector-5" alt="Vector" src="delete.png" />
            <img className="vector-7" alt="Vector" src="image.png" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group-2">
            <div className="overlap-9">
              <div className="overlap-group-3">
                <p className="p">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly
                  believable.
                </p>
                <div className="text-wrapper-18">CURIOUS</div>
                <img className="line-2" alt="Line" src="line.png" />
              </div>
              <div className="text-wrapper-19">November 20, 2023</div>
            </div>
            <div className="text-wrapper-20">Chika</div>
            <img className="vector-4" alt="Vector" src="edit.png" />
            <img className="vector-5" alt="Vector" src="delete.png" />
            <img className="vector-7" alt="Vector" src="image.png" />
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="overlap-9">
              <div className="overlap-group-3">
                <p className="p">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                </p>
                <div className="text-wrapper-15">MAD</div>
                <img className="line-2" alt="Line" src="line.png" />
              </div>
              <div className="text-wrapper-19">November 30, 2023</div>
            </div>
            <div className="text-wrapper-17">Frenemy</div>
            <img className="vector-4" alt="Vector" src="edit.png" />
            <img className="vector-5" alt="Vector" src="delete.png" />
            <img className="vector-8" alt="Vector" src="image.png" />
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame">
            <div className="frame-2">
              <div className="frame">
                <div className="overlap-10">
                  <div className="rereflection-notes">
                    <div className="overlap-group-2">
                      <div className="overlap-9">
                        <div className="overlap-group-3">
                          <p className="p">
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution
                          </p>
                          <div className="text-wrapper-12">HAPPY</div>
                          <img className="line-2" alt="Line" src="line.png" />
                        </div>
                        <div className="text-wrapper-21">November 29, 2023</div>
                      </div>
                      <div className="text-wrapper-14">CRUSH</div>
                      <img className="vector-4" alt="Vector" src="edit.png" />
                      <img className="vector-5" alt="Vector" src="delete.png" />
                    </div>
                  </div>
                  <img className="vector-9" alt="Vector" src="image.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="overlap-group-2">
            <div className="overlap-9">
              <div className="overlap-group-3">
                <p className="p">
                  &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo conse...
                </p>
                <div className="text-wrapper-18">CURIOUS</div>
                <img className="line-2" alt="Line" src="line.png" />
              </div>
              <div className="text-wrapper-22">November 21, 2023</div>
            </div>
            <div className="text-wrapper-20">Chika</div>
            <img className="vector-4" alt="Vector" src="edit.png" />
            <img className="vector-5" alt="Vector" src="delete.png" />
            <img className="vector-7" alt="Vector" src="image.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
