import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import react1 from "../Assets/react1.png"
import react2 from "../Assets/react2.png"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>TECHNOLOGIES</h1>
            <p>
            <ul>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
            </ul>
            </p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="work space"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="Programming Languages"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;