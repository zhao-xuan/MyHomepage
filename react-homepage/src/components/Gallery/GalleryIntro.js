import React from 'react';

const gallery_intro = {
    "My Hometown": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    },
    "Beijing, Shanghai, Hongkong": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    },
    "Ireland Journey": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    },
    "Japan Trip & Teamlab": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    },
    "San Francisco": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    },
    "UK & Recent Collection": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    },
    "East Coast Collection": {
        "introduction": "These photos were taken during my stay in Baotou, Inner Mongolia after I left my hometown.",
        "locations": "Baotou"
    }
}

function GalleryIntro(props) {
    return (
        <section className="testimonial-section spad">
            <div className="container" id="gallery-intro">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2" id="test_slider">
                        <div className="single-testimonial">
                            <p>{gallery_intro[props.folder]["introduction"]}</p>
                            <span>{gallery_intro[props.folder]["locations"]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GalleryIntro;