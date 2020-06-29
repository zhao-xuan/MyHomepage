import React from 'react';
import './css/homepage.css';
import Preloader from '../src/components/Common/Preloader';
import Navigation from './components/Common/Navigation';
import Intro from './components/Home/Intro';
import AboutMe from './components/Home/AboutMe';
import Skill from './components/Home/Skill';
import Activity from './components/Home/Activity';
import PhotoGallery from './components/Home/PhotoGallery';
import Testimonial from './components/Common/Testimonial';
import Contact from './components/Common/Contact';
import Footer from './components/Common/Footer';

const ImagePathContext = React.createContext('../../static/img/');

function MyHomepage() {
  return (
    <div className="myHomepage">
      <ImagePathContext.Provider value="../..//static/img/">
        <Preloader />
        <Navigation />
        <Intro />
        <AboutMe />
        <Skill />
        <Activity />
        <PhotoGallery />
        <Testimonial />
        <Contact />
        <Footer />
      </ImagePathContext.Provider>
    </div>
  );
}

export default MyHomepage;
