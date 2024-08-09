import "./FooterStyles.css";

import React from 'react'

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
                    <div>
                        <p>Amenu Edem Ani, Nsukka.</p>
                        <p>Enugu State, Nigeria.</p>
                    </div>
                </div>    
                <div className="Phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}} />
                    +234 8142341366</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />
                    chidiogovictor10@gmail.com</h4>
                </div>
                
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is Victor. A Frontend Developer</p>
                <div className="social">
                    <a href="https://github.com/ChidiogoVictor" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{color: "white", marginRight: "2rem"}}/>
                    </a>
                    <a href="https://twitter.com/VictorChidiogo?s=09" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} style={{color: "white", marginRight: "2rem"}} />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-eze-07948624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{color: "white", marginRight: "2rem"}} />
                    </a>
                    <a href="https://www.facebook.com/victordavid.eze" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} style={{color: "white", marginRight: "2rem"}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;