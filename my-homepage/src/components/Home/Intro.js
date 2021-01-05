import React from 'react';
import '../../css/homepage.css';
import Navigation from '../Common/Navigation'
import Particles from 'react-particles-js';

class Intro extends React.Component {
    render() {
        return (
            <section className="intro-section" id="home">
                <Particles
                    params={{
                        "particles": {
                            "color" : {
                                "value": "#ADD8E6"
                            },
                            "links": {
                                "color": "#ADD8E6",
                                "distance": 200,
                                "enable": true,
                                "opacity": 0.1,
                                "width": 1
                              }
                            ,
                            "number": {
                                "value": 200
                            },
                            "size": {
                                "value": 1
                            },
                            "density": {
                                "enable": false
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                }} style={{zIndex : 1, position : "absolute"}} />
                <div className="intro-content">
                    <div className="intro-inner">
                        <div className="container">
                            <h2>This is <span>Tom Zhao</span></h2>
                            <h3>@Imperial College London Department of Computing</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Intro;