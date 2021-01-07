import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryHeader from '../Gallery/GalleryHeader';
import PhotoSlideShow from '../Gallery/PhotoSlideShow';
import Navigation from '../Common/Navigation';
import GalleryIntro from './GalleryIntro';
import PhotoGallery from '../Common/PhotoGallery';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import '../../css/homepage.css';

function Gallery() {
    let { title } = useParams();

    return (
        <div className="myGallery">
            <Navigation />
            <GalleryHeader title={title} />
            <PhotoSlideShow folder={title} />
            <GalleryIntro folder={title}/>
            <PhotoGallery title={"Other Photo Gallery"} />
            <Contact />
            <Footer />
        </div>
    )
}

export default Gallery;