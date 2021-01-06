import React from 'react';
import PhotoGallery from '../Home/PhotoGallery';

class GalleryHeader extends React.Component {
    render() {
        return (
            <section className="gallery-section spad" id="gallery-header">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default GalleryHeader;