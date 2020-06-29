import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <section className="contact-section spad" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="con-info wow fadeInUp" data-wow-delay="0.2s">
                                <p className="subtitle">London</p>
                                <h2>28-32 Pembridge Gardens<br /> London W2 4DX, United Kingdom. <br />
                                    <br />UK Tel: +44 07421-471-909<br />
                                    China Tel: +86 131-6178-8390<br />
                                    US Tel: +1 415-827-3041</h2>
                            </div>
                            
                            <form action="mail.php" method="POST" className="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input type="text" name="name" id="name" required placeholder="Your Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" name="email" id="email" required placeholder="Email address" />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea id="massage" name="massage" required placeholder="Your Massage"></textarea>
                                        <div className="text-center">
                                            <button type="submit" className="site-btn" id="send-form">Send Massege</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;