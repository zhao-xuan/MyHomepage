import React from 'react';
import '../../css/homepage.css';
import Me from '../../img/me.jpeg';

class AboutMe extends React.Component {
    portraitPath = Me;
    title = "A brief story about me, my life and career";
    selfDescription = <p>I am <span>Tom Zhao</span>, a first-year undergraudate at Imperial College London. 
    Born in Inner Mongolia, China, I have lived in San Rafael, California for 3 years of my high school. 
    Now, I'm settled in London to continue my journey to pursue a career in  computing. 
    I love math and science, music, photography, badminton, mountain biking, and learning new languages. 
    I'm a tech enthusiast and always passionate about learning new skills. I'm fluent at English, Mandarin, and Japanese, 
    and can read in French as well."</p>;

    render() {
        return (
            <section className="about-section spad" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src={this.portraitPath} alt="selfPortrait" />
                        </div>
                        <div className="col-lg-6 about-text">
                            <h1 className="hero-title">{this.title}</h1>
                            {this.selfDescription}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMe;