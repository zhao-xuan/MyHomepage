import React from 'react';

class Contact extends React.Component {
    state = {
        name : '',
        subject : '',
        message : ''
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value.split(' ').join('%20')})
    }

    handleNameChange(event) {
        this.setState({name : event.target.value.split(' ').join('%20')})
    }

    handleSubjectChange(event) {
        this.setState({subject : event.target.value.split(' ').join('%20')})
    }

    render() {
        return (
            <section className="contact-section spad" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="con-info wow fadeInUp" data-wow-delay="0.2s">
                                <p className="subtitle">Contact Me</p>
                                <h2>If you need to contact me, please enter details below and hit Send Message</h2>
                            </div>

                            <form className="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="text" name="name" onChange={(e) => this.handleNameChange(e)} id="name" required placeholder="Your Name" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input type="text" name="subject" onChange={(e) => this.handleSubjectChange(e)} required placeholder="Email Subject" />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea id="message" name="message" onChange={(e) => this.handleMessageChange(e)} required placeholder="Your Message"></textarea>
                                        <div className="text-center">
                                            <button type="button" className="site-btn" id="send-form">
                                                <a href={"mailto:zhaoxuan0914@hotmail.com"
                                                            + "?subject=From " + this.state.name + ": " + this.state.subject
                                                            + "&body=" + this.state.message
                                                        } style={{color : "white"}}>Send Message</a>
                                            </button>
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