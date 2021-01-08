import React from 'react';

class GalleryHeader extends React.Component {
    render() {
        return (
            <section className="gallery-section spad" id="gallery-header">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.title}</h2>
                        <h6>Taken by Tom Zhao</h6>
                    </div>
                </div>
            </section>
        )
    }
}

export default GalleryHeader;