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
        const homepage_nav_menu_list = [
            {
                "link": "#home",
                "menutitle": "Home"
            },
            {
                "link": "#about",
                "menutitle": "About"
            },
            {
                "link": "#resume",
                "menutitle": "Resume"
            },
            {
                "link": "#works",
                "menutitle": "Photo Gallery"
            },
            {
                "link": "#contact",
                "menutitle": "Contact"
            },
        ]
        return (
            <div className="myHomepage">
                <Preloader />
                <Navigation menulist={homepage_nav_menu_list} />
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
