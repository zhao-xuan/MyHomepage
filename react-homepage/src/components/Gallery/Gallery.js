import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryHeader from '../Gallery/GalleryHeader';
import PhotoSlideShow from '../Gallery/PhotoSlideShow';
import Navigation from '../Common/Navigation';
import Testimonial from '../Common/Testimonial';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import '../../css/homepage.css';

function Gallery() {
    let { title } = useParams();

    // render() {
        return (
            <div className="myGallery">
                <Navigation />
                <GalleryHeader title={title} />
                <PhotoSlideShow />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
        )
    // }
}

export default Gallery;