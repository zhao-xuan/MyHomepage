import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class PhotoSlideShow extends React.Component {
    render() {
        const images = [
            {
                original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
                thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
            },
            {
                original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
                thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg'
            },
            {
                original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
                thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg'
            }
        ]

        return (
            <ImageGallery items={images} />
        );
    }
}

export default PhotoSlideShow;