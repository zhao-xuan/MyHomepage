import React from 'react';
import ImageGallery from 'react-image-gallery';
import PictureData from './GalleryData';
import "react-image-gallery/styles/css/image-gallery.css";

class PhotoSlideShow extends React.Component {
    render() {
        return (
            <ImageGallery items={PictureData[this.props.folder]} lazyLoad={false} />
        );
    }
}

export default PhotoSlideShow;