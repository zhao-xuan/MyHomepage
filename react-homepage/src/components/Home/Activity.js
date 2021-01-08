import React from 'react';
import PulseSecureLogo from '../../img/activity/pulsesecurelogo.png';
import AutoDeskLogo from '../../img/activity/autodesklogo.png';
import ICHACK20Logo from '../../img/activity/ichacklogo.png';
import OpenWRTLogo from '../../img/activity/openwrtdemo.png';
import ImperialLogo from '../../img/activity/imperiallogo1.jpg';
import ARMLogo from '../../img/activity/armlogo.svg';
import NetdumaLogo from '../../img/activity/netdumalogo.png';
import AdapsPhotonicsLogo from '../../img/activity/adapsphotonicslogo.png';

function ActivityItem(props) {
    return  <div className="resume-item wow fadeInUp" data-wow-delay="0.3s">
                <h2>{props.activityName}</h2>
                <h3>{props.activityTime}</h3>
                <p>
                    {props.activityDescription + " "}
                    {props.activityLink ? <a href={props.activityLink.link} style={{fontWeight : "bold"}}>{props.activityLink.text}</a> : null}
                </p>
                <br />
                <img loading="lazy" src={props.activityImage} style={{ width : "100%", padding: `${props.imagePadding}px` }} alt="Something went wrong"/>
            </div>
}

class Activity extends React.Component {
    state = {
        activityCount : 5
    }

    activityList = [
        {
            activityName : "Incoming ARM UK Part-time undergraduate position",
            activityTime : "Part-time starting from 2021 Spring",
            activityDescription : `I will join ARM remotely starting in 2021 Spring in the Open Source Software group, 
                                   expected to contribute to the Linux kernel and integrate/optimize the newest ARM ISA
                                   on software/operating system level.`,
            activityImage : ARMLogo,
            padding: 20,
            link : {
                text : "See here for the role",
                link : "https://careers.arm.com/search-jobs?acm=8109424,8123792&alrpm=ALL&ascf=[%7B%22key%22:%22ALL%22,%22value%22:%22%22%7D]"
            }
        },
        {
            activityName : "Incoming Netduma OS Engineer",
            activityTime : "Full-time internship in 2021 Summer",
            activityDescription : `I will join Netduma for 2021 Summer to help the company build their latest DumaOS, a
                                   router system that will be deployed across their new products. My responsibilities will
                                   include writing new features for DumaOS, maintaining DumaOS and working with ODMs and
                                   chipset manufactures to port DumaOS to new hardware.`,
            activityImage : NetdumaLogo,
            padding: 100,
            link : {
                text : "See here for the company website",
                link : "https://netduma.com"
            }
        },
        {
            activityName : "Adaps Photonics Firmware Engineer",
            activityTime : "Part-time internship in 2020 Fall",
            activityDescription : `Core responsibilities include developing the devops page for the company, writing intial version
                                   of the company's dToF SPAD sensor simulator as well as virtual drivers. Responsibile for porting 
                                   the Qualcomm Hexagon DSP module and Camss module from the codeaurora branch into the AOSP mainline 
                                   kernel.`,
            activityImage : AdapsPhotonicsLogo,
            padding: 100,
            link : {
                text : "See here for the company website",
                link : "http://adapsphotonics.com"
            }
        },
        {
            activityName : "Pulse Secure Software Engineer Summer Intern",
            activityTime : "Full-time(10 weeks) internship in 2020 summer",
            activityDescription : `Responsible for the development of PSUI which is potentially used across the company products.
                                   Using React.js, Sass with tools such as Storybook and Jest to build a reliable interface for VPN
                                   and analytic products. Wrote a python script to transform Mocha/Chai to Jest with Enzyme. Built 
                                   visual regression tests with jest-image-snapshot developed by Amex.`,
            activityImage : PulseSecureLogo,
            padding: 0
        }, {
            activityName : "CAD Connect",
            activityTime : "6 months 2019-2020",
            activityDescription : `A continuous project to build a cloud platform for AutoCAD. Designed RESTful API.
                                   Developed backend using Java with Spring framework and MySQL. Implemented authentication
                                   through Spring Security with JWT. Helped build frontend using React.js and Ant Design UI.`,
            activityImage : AutoDeskLogo,
            padding: 0
        }, {
            activityName : "LinguoMusic",
            activityTime : "ICHack20 Project",
            activityDescription : `A Music Player Helping People Learn New Languages. Collaborated with two undergraduates
                                   to create the NLP database and frontend. Used React.js and related tools on npm to build
                                   the scrolling lyric with word-by-word translation interface as well as the player.
                                   Used Python and jiagu library to do natural language processing on lyrics, including
                                   tokenization and word categorization, etc. Used Netease Music Box with Python to access music and lyric data.`,
            activityImage : ICHACK20Logo,
            padding: 0,
            link : {
                text : "See on github",
                link : "https://devpost.com/software/linguomusic"
            }
        }, {
            activityName : "OpenWRT Internet Usage Monitor",
            activityTime : "November 2019",
            activityDescription : `An Add-on for OpenWRT system. Used JavaScript with chart.js, jQuery, and Bootstrap as the frontend, 
                                   and Python with Flask and SQLite as the backend. It can extract Internet usage information periodically 
                                   from the OpenWRT router system for each host, including MAC address, download and upload statistics, 
                                   and visualise it as a chart on a webpage.`,
            activityImage : OpenWRTLogo,
            padding: 0,
            link : {
                text : "See on github",
                link : "https://github.com/zhao-xuan/Openwrt-Internet-Monitor"
            }
        }, {
            activityName : "Imperial College London",
            activityTime : "September 2019",
            activityDescription : `Begin to study @ Imperial College London Department of Computing. Learned lots of new things: Haskell, 
                                   Advanced Java Multithreading, SQL and Database Design, Computer Hardware and Architecture, Assembly and 
                                   Compiler, etc.`,
            activityImage : ImperialLogo,
            padding: 0,
            link : {
                text : "See college website",
                link : "https://www.imperial.ac.uk"
            }
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
                            {this.activityList.slice(0, this.state.activityCount).map((item) =>
                                <ActivityItem activityName={item.activityName}
                                                activityTime={item.activityTime}
                                                activityDescription={item.activityDescription}
                                                activityImage={item.activityImage}
                                                activityLink={item.link}
                                                imagePadding={item.padding}
                                />
                            )}
                            {this.state.activityCount >= this.activityList.length ? null : <button className="site-btn" style={{width : "100%"}}
                                onClick={() => {
                                    this.setState({activityCount : this.state.activityCount + 3})
                                }}>View Previous Activities & Updates</button>}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Activity;