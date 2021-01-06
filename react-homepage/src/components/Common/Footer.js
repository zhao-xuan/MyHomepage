import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faWeixin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section spad">
                <div className="container">
                    <div className="social">
                    <a href="https://www.facebook.com/xuan.zhao.14019"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/tomzhao1999"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.github.com/zhao-xuan"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/zhaoxuan0914/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="#top" onClick={() => {alert("My WeChat ID: BetaXuan")}}><FontAwesomeIcon icon={faWeixin} /></a>
                    <a href="https://t.me/tomzhao0914"><FontAwesomeIcon icon={faTelegram} /></a>
                    <a href="https://wa.me/447421471909"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
                    <div className="copyright">Copyright © 2020 Xuan(Tom) Zhao All Rights Reserved. <br /> Created by Xuan(Tom) Zhao</div>
                </div>
            </footer>
        );
    }
}

export default Footer;