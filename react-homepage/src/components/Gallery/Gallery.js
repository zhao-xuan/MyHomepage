import React from 'react';
import GalleryHeader from '../Gallery/GalleryHeader';
import PhotoSlideShow from '../Gallery/PhotoSlideShow';
import Navigation from '../Common/Navigation';
import Testimonial from '../Common/Testimonial';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import '../../css/homepage.css';

class Gallery extends React.Component {
    render() {
        return (
            <div className="myGallery">
                <Navigation />
                <GalleryHeader title={this.props.title} />
                <PhotoSlideShow />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Gallery;