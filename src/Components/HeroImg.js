import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../Assets/BackgroundImage.png";
import DisplayImg from "../Assets/Display img.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src=
            {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <div className="display-img">
              <img className="profile-pix" src={DisplayImg} alt="DisplayImg"/>
            </div>
            <p>HI, I'M VICTOR CHIDIOGO.</p>
            <h1>Frontend Developer.</h1>
            <div>
                <Link to="/Project" className="btn" id="blue">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;