import React from "react";
import image from "../images/home-banner.png";
import "./Intro.css";
import logo from "../images/logo.png"

const Intro = () => {
  return (
    <div className="outer_card">
      <div className="img-logo">
        <img src={logo} alt="Lucida's logo"/>
      </div>
      <div className="intro_card">
        <div className="intro_div">
          <h1>Work with us</h1>
          <p>Join Our Team And Help Shape the Future</p>
          <div className="button-actions">
            <button className="apply-button">See Open Positions</button>
          </div>
        </div>

        <div className="img_div">
          <img src={image} alt="Group of people"></img>
        </div>
      </div>
      <p className="para">
        We're looking for people to join the team who are as excited as we are
        to help build the platform that empowers the future generation of
        creators to be successful
      </p>
    </div>
  )
};

export default Intro;
