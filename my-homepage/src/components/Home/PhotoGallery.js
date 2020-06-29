import React from 'react';
import IsoTopeGrid from 'react-isotope';
import { FaRegBell } from 'react-icons/fa';

const ImagePathContext = React.createContext('../../../static/img/');

function PhotoGalleryItem(props) {
    const classSetting = "col-lg-4 col-md-6 " + props.tag;
    return  <div className={classSetting}>
                <img href={props.imagePath} className="portfolio-item set-bg" data-setbg={props.imagePath} />
                <div className="portfolio-text">
                    <h2>{props.title}</h2>
                    <p>{props.location}</p>
                </div>
            </div>
}

class PhotoGallery extends React.Component {
    items = [
        {
            "filter" : ["uk"],
            "row": 0,
            "col": 0,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/uk32.jpeg",
            "id" : "UK & Recent Collection"
            //location : "London & Cambridge, England, U.K."
        }, {
            "filter" : ["us"],
            "row": 0,
            "col": 1,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/sf11.jpeg",
            "id" : "San Francisco"
            //location : "Marin County & San Francisco, California, U.S."
        }, {
            "filter" : ["cn"],
            "row": 0,
            "col": 2,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/baotou28.jpeg",
            "id" : "My Hometown"
            //location : "Baotou, Inner Mongolia, China"
        }, {
            "filter" : ["cn"],
            "row": 1,
            "col": 0,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/china42.jpeg",
            "id" : "Beijing, Shanghai, Hongkong"
            //location : "Mainland China"
        }, {
            "filter" : ["uk"],
            "row": 1,
            "col": 1,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/ireland29.jpeg",
            "id" : "Ireland Journey"
            //location : "Belfast, Dubline & Galway, Northern Ireland(U.K.) & Ireland"
        }, {
            "filter" : ["jp"],
            "row": 1,
            "col": 2,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/japan14.jpeg",
            "id" : "Japan Trip & Teamlab"
            //location : "Tokyo, Japan"
        }, {
            "filter" : ["us"],
            "row": 2,
            "col": 0,
            "w": 1,
            "h": 1,
            //imagePath : "/../../img/gallery/useast44.jpeg",
            "id" : "East Coast Collection"
            //location : "New York & Ithaca, Philedelphia, Boston & more, U.S."
        }
    ]

    filters = [
        { "name" : "All Photos", "label" : "*", "isChecked" : true },
        { "name" : "U.S.", "label" : "us", "isChecked" : false },
        { "name" : "U.K & Ireland", "label" : "uk", "isChecked" : false },
        { "name" : "China", "label" : "cn", "isChecked" : false },
        { "name" : "Japan", "label" : "jp", "isChecked" : false }
    ]

    constructor (props) {
        super(props);
    }

    onFilter(event) {
        const {
            target: { value, checked }
        } = event;

        const filter = this.state.filters;
        filter.map((i, f) => {filter[i].isChecked = f.label === value ? true : false;});
        this.setState({filters : filter});
    };

    render() {
        return (
            <section className="portfolio-section spad" id="works">
                <div className="container">
                    <div className="section-title">
                        <h2>My Photo Gallery</h2>
                    </div>

                    <div>
                        <ul className="portfolio-filter">
                            {this.filters.map(f => (
                            
                                <li
                                key={`${f.label}_key`}
                                id={f.label}
                                value={f.label}
                                onChange={this.onFilter}
                                checked={f.isChecked}
                                >
                                <label htmlFor={f.label}>{f.name}</label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="row isotope_items">
                        <IsoTopeGrid
                            gridLayout={this.items}
                            noOfCols={3}
                            unitWidth={200}
                            unitHeight={200}
                            filters={this.filters}
                        >
                            {this.items.map(item => (
                                <a>something</a>
                            ))}
                        </IsoTopeGrid>
                    </div>
                </div>
            </section>
        );
    }
}

export default PhotoGallery;