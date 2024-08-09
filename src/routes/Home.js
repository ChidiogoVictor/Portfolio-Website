import React from 'react';
import Navbar from "../Components/Navbar";
import HeroImg from "../Components/HeroImg";
import Footer from "../Components/Footer";
import Work from '../Components/Work';
import AboutContent from "../Components/AboutContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Home;