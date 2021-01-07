import React from 'react';
import ImageGallery from 'react-image-gallery';
import Baotou from '../../picture/baotou/baotou1.jpeg'
import "react-image-gallery/styles/css/image-gallery.css";

class PhotoSlideShow extends React.Component {
    render() {
        const images = [
            {
                original: "https://tomzhao.me/picture/baotou/baotou1.jpeg",
                thumbnail: "https://tomzhao.me/picture_thumb/baotou/baotou1.jpeg",
                description: "This is my hometown"
            },
            {
                original: 'https://tomzhao.me/picture/baotou/baotou2.jpeg',
                thumbnail: 'https://tomzhao.me/picture_thumb/baotou/baotou2.jpeg',
                description: "This is my hometown"
            },
            {
                original: 'https://tomzhao.me/picture/baotou/baotou3.jpeg',
                thumbnail: 'https://tomzhao.me/picture_thumb/baotou/baotou3.jpeg',
                description: "This is my hometown"
            }
        ]

        return (
            <ImageGallery items={images} />
        );
    }
}

export default PhotoSlideShow;