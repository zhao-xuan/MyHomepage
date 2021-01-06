import React from 'react';
import { Link } from 'react-router-dom'
import UKCoverImage from '../../img/gallery/uk32.jpeg';
import SFCoverImage from '../../img/gallery/sf11.jpeg';
import BTCoverImage from '../../img/gallery/baotou28.jpeg';
import CNCoverImage from '../../img/gallery/china42.jpeg';
import RECoverImage from '../../img/gallery/ireland29.jpeg';
import JPCoverImage from '../../img/gallery/japan14.jpeg';
import USECoverImage from '../../img/gallery/useast44.jpeg';
import Isotope from 'isotope-layout';

function FilterItem(props) {
    return (
        <li className={"filter" + (props.active ? " active" : "")} onClick={props.onClick}>{props.title}</li>
    );
}

function PhotoGalleryItem(props) {
    const classSetting = props.position + " " + props.tag;
    const bgImageStyle = { backgroundImage : 'url(' + props.image + ')' }
    return  <div className={classSetting}>
                <Link to="/gallery#top" href={props.image} className="portfolio-item set-bg" style={bgImageStyle}>
                    <div className="portfolio-text">
                        <h2>{props.title}</h2>
                        <p>{props.location}</p>
                    </div>
                </Link>
            </div>
}

class PhotoGallery extends React.Component {
    items = [
        {
            "filter" : "uk",
            "image" : UKCoverImage,
            "title" : "UK & Recent Collection",
            "location" : "London & Cambridge, England, U.K.",
            "position" : "col-lg-4 col-md-6"
        }, {
            "filter" : "us",
            "image" : SFCoverImage,
            "title" : "San Francisco",
            "location" : "Marin County & San Francisco, California, U.S.",
            "position" : "col-lg-8 col-md-6"
        }, {
            "filter" : "cn",
            "image" : BTCoverImage,
            "title" : "My Hometown",
            "location" : "Baotou, Inner Mongolia, China",
            "position" : "col-lg-4 col-md-6"
        }, {
            "filter" : "cn",
            "image" : CNCoverImage,
            "title" : "Beijing, Shanghai, Hongkong",
            "location" : "Mainland China",
            "position" : "col-lg-4 col-md-6"
        }, {
            "filter" : "uk",
            "image" : RECoverImage,
            "title" : "Ireland Journey",
            "location" : "Belfast, Dubline & Galway, Northern Ireland(U.K.) & Ireland",
            "position" : "col-lg-4 col-md-12"
        }, {
            "filter" : "jp",
            "image" : JPCoverImage,
            "title" : "Japan Trip & Teamlab",
            "location" : "Tokyo, Japan",
            "position" : "col-lg-8 col-md-6"
        }, {
            "filter" : "us",
            "image" : USECoverImage,
            "title" : "East Coast Collection",
            "location" : "New York & Ithaca, Philedelphia, Boston & more, U.S.",
            "position" : "col-lg-4 col-md-6"
        }
    ]

    filters = [
        { "name" : "All Photos", "label" : "*" },
        { "name" : "U.S.", "label" : ".us" },
        { "name" : "U.K & Ireland", "label" : ".uk" },
        { "name" : "China", "label" : ".cn" },
        { "name" : "Japan", "label" : ".jp" }
    ]

    state = {
        filter : "*",
        isotope : null
    }

    componentDidMount() {
        if (!this.state.isotope) {
            const node = document.querySelector(".isotope_items");
            this.setState({isotope : new Isotope(node)});
        }
    }

    onChangeFilter(filterLabel) {
        this.state.isotope.arrange({
            filter : filterLabel
        });
    }

    render() {
        return (
            <section className="portfolio-section spad" id="works">
                <div className="container">
                    <div className="section-title">
                        <h2>My Photo Gallery</h2>
                    </div>

                    <div>
                    <ul className="portfolio-filter">
                        {this.filters.map((item) => (
                            <FilterItem active={this.state.filter === item.label}
                                        onClick={() => {
                                            this.setState({filter : item.label});
                                            this.onChangeFilter(item.label);
                                        }}
                                        filter={item.label}
                                        title={item.name} />
                    ))}
                    </ul>
                    
                    </div>

                    <div className="row isotope_items">
                            {this.items.map(item => (
                                <PhotoGalleryItem key={item.title}
                                                  tag={item.filter}
                                                  image={item.image}
                                                  title={item.title}
                                                  location={item.location}
                                                  position={item.position} />
                            ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default PhotoGallery;