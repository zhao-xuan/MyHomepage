import React from 'react';
import '../../css/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin, faWeixin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function MenuList(props) {
    return <ul className="menu-list">
                {props.menulist.map((item) => (
                    <li><a href={item.link}>{item.menutitle}</a></li>
                 ))}
           </ul>;
}

function SocialLinks() {
    return <div className="social-links">
                <a href="https://www.facebook.com/xuan.zhao.14019"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/tomzhao1999"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.github.com/zhao-xuan"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/zhaoxuan0914/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#top" onClick={() => {alert("My WeChat ID: BetaXuan")}}><FontAwesomeIcon icon={faWeixin} /></a>
                <a href="https://t.me/tomzhao0914"><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="https://wa.me/447421471909"><FontAwesomeIcon icon={faWhatsapp} /></a>
           </div>;
}

class Navigation extends React.Component {
    state = {
        active : false
    }

    componentDidMount() {
        this.setState({active : false})
    }

    onOpenNavigation = () => {
        this.setState({active : true})
    }

    onCloseNavigation = () => {
        this.setState({active : false})
    }

    render() {
        return (
            <div className={this.state.active ? "nav-section active" : "nav-section"}>
                <div id="navigation-toggle" className="nav-toggle" onClick={this.onOpenNavigation}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="close-nav" onClick={this.onCloseNavigation}>+</div>
                <nav className="main-manu">
                    <MenuList menulist={this.props.menulist}/>
                </nav>
                <SocialLinks />
            </div>
        );
    }
}

export default Navigation;