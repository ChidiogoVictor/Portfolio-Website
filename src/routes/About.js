import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="I am a passionate frontend developer with a knack for delivering responsive and scalable website features for my clients."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About;