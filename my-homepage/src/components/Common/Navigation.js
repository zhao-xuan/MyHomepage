import React from 'react';
import '../../css/homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuList() {
    return <ul className="menu-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#works">Photo Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
           </ul>;
}

function SocialLinks() {
    return <div className="social-links">
                <a href="https://www.facebook.com/xuan.zhao.14019"><FontAwesomeIcon className="fa fa-facebook" /></a>
                <a href="https://www.instagram.com/tomzhao1999"><FontAwesomeIcon className="fa fa-instagram" /></a>
                <a href="https://www.github.com/zhao-xuan"><FontAwesomeIcon className="fa fa-github" /></a>
                <a href="https://www.linkedin.com/in/zhaoxuan0914/"><FontAwesomeIcon className="fa fa-linkedin" /></a>
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
                    <MenuList />
                </nav>
                <SocialLinks />
            </div>
        );
    }
}

export default Navigation;