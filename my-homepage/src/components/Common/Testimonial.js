import React from 'react';

class Testimonial extends React.Component {
    render() {
        return (
            <section className="testimonial-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 owl-carousel test-slider" id="test_slider">
                            
                            <div className="single-testimonial">
                                <div className="qut">“</div>
                                <p>To err is human. To really foul things up, you need a computer!</p>
                                <h2>Paul R. Ehrlich</h2>
                                <span>American scientist (1926 - Present)</span>
                            </div>
                            
                            <div className="single-testimonial">
                                <div className="qut">“</div>
                                <p>When something is important enough, you do it even if the odds are not in your favor.</p>
                                <h2>Elon Musk</h2>
                                <span>CEO and Founder of Tesla Ltd. and SpaceX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;