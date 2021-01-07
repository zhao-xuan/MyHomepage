import React from 'react';
import '../../css/homepage.css';
import Preloader from '../Common/Preloader';
import Intro from './Intro';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Activity from './Activity';
import PhotoGallery from '../Common/PhotoGallery';
import Navigation from '../Common/Navigation';
import Testimonial from '../Common/Testimonial';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';

class Homepage extends React.Component {
    render() {
        return (
            <div className="myHomepage">
                <Preloader />
                <Navigation />
                <Intro />
                <AboutMe />
                <Skill />
                <Activity />
                <PhotoGallery title={"My Photos"} />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Homepage;
