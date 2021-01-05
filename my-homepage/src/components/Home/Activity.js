import React from 'react';
import PulseSecureLogo from '../../img/pulsesecurelogo.jpg';
import AutoDeskLogo from '../../img/autodesklogo.png';
import ICHACK20Logo from '../../img/ichacklogo.png';
import OpenWRTLogo from '../../img/openwrtdemo.png';
import ImperialLogo from '../../img/imperiallogo1.jpg';

function ActivityItem(props) {
    return  <div className="resume-item wow fadeInUp" data-wow-delay="0.3s">
                <h2>{props.activityName}</h2>
                <h3>{props.activityTime}</h3>
                <p>{props.activityDescription}</p>
                <img loading="lazy" src={props.activityImage} alt="Something went wrong"/>
            </div>
}

class Activity extends React.Component {
    activityList = [
        {
            activityName : "Pulse Secure Software Engineer Summer Intern",
            activityTime : "10 weeks 2020 summer",
            activityDescription : "Responsible for the development of PulseUI which is potentially used across the company. Using React.js, Sass with tools such as Kubernete to build a reliable interface for VPN and analytic products.",
            activityImage : PulseSecureLogo
        }, {
            activityName : "CAD Connect",
            activityTime : "6 months 2019-2020",
            activityDescription : "A continuous project to build a cloud platform for AutoCAD. Designed RESTful API. Developed backend using Java with Spring framework and MySQL. Implemented authentication through Spring Security with JWT. Helped build frontend using React.js and Ant Design UI.",
            activityImage : AutoDeskLogo
        }, {
            activityName : "LinguoMusic",
            activityTime : "ICHack20 Project",
            activityDescription : "A Music Player Helping People Learn New Languages. Collaborated with two undergraduates to create the NLP database and frontend. Used React.js and related tools on npm to build the scrolling lyric with word-by-word translation interface as well as the player. Used Python and jiagu library to do natural language processing on lyrics, including tokenization and word categorization, etc. Used Netease Music Box with Python to access music and lyric data.",
            activityImage : ICHACK20Logo
        }, {
            activityName : "OpenWRT Internet Usage Monitor",
            activityTime : "November 2019",
            activityDescription : "An Add-on for OpenWRT system. Used JavaScript with chart.js, jQuery, and Bootstrap as the frontend, and Python with Flask and SQLite as the backend. It can extract Internet usage information periodically from the OpenWRT router system for each host, including MAC address, download and upload statistics, and visualise it as a chart on a webpage.",
            activityImage : OpenWRTLogo
        }, {
            activityName : "Imperial College London",
            activityTime : "September 2019",
            activityDescription : "Begin to study @ Imperial College London Department of Computing. Learned lots of new things: Haskell, Advanced Java Multithreading, SQL and Database Design, Computer Hardware and Architecture, Assembly and Compiler, etc.",
            activityImage : ImperialLogo
        }
    ]

    render() {
        return (
            <section className="resume-section spad" id="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>Newest Projects / Updates</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            {this.activityList.map((item) =>
                                <ActivityItem activityName={item.activityName}
                                                activityTime={item.activityTime}
                                                activityDescription={item.activityDescription}
                                                activityImage={item.activityImage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Activity;