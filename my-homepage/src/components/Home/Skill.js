import React from 'react';
import { FaFile, FaWordpress, FaHeadphones } from 'react-icons/fa';

function SkillItem(props) {
    return  <p>
                <a className="myresumelink" href={props.link}>
                       {props.title}
                </a>
                <br />
                {props.description}
            </p>
}

function SkillSection(props) {
    const itemList = props.itemList.map((item) => 
        <SkillItem link={item.link}
                   title={item.title}
                   description={item.description}/>
    );

    return  <div className="col-md-4">
                <div className="service-box bg-1 bg-1-1 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="service-icon">
                        {props.icon}
                        <h2>{props.section}</h2>
                    </div>
                    <div className="service-content" id="service-content-1">
                        <div className="service-inner">
                            <h2>{props.section}</h2>
                            {itemList}
                        </div>
                    </div>
                </div>
            </div>;
}

class Skill extends React.Component {
    sectionList = [
        {
            icon : <FaFile />,
            section : "My Resume",
            itemList : [
                {
                    link : "http://blog.tomzhao.me/wp-content/uploads/2020/05/resume0410.pdf",
                    title : "Resume for Job/Work.",
                    description : "Related fields: Computer Graphics, Frontend & Backend, Digital Circuit Design, Machine Learning, etc."
                }, {
                    link : "http://blog.tomzhao.me/wp-content/uploads/2020/05/XuanTom-Zhao-Resume-CS.pdf",
                    title : "Resume as a Student.",
                    description : "Language Study, Photography, Mountain Biking/Running, Traveling, etc."
                }
            ]
        }, {
            icon : <FaWordpress />,
            section : "My Blog",
            itemList : [
                {
                    link : "http://blog.tomzhao.me/?page_id=58",
                    title : "Tech Blog",
                    description : "Everything about the latest tech news."
                }, {
                    link : "http://blog.tomzhao.me/?page_id=60",
                    title : "Life Blog",
                    description : "A log of my life. Starting from Aug. 2016."
                }, {
                    link : "http://blog.tomzhao.me/?page_id=63",
                    title : "Study Blog",
                    description : "Imperial exam paper solutions, materials for college/intern application."
                }
            ]
        }, {
            icon : <FaHeadphones />,
            section : "My Music Playlist",
            itemList : [
                {
                    link : "https://music.apple.com/us/playlist/replay-2019/pl.rp-ARRXsbJlG0n",
                    title : "Music Playlists",
                    description : "Japanese R&B, The 80s, Lo-fi, Pop."
                }, {
                    link : "http://blog.tomzhao.me/?page_id=79",
                    title : "Music Reviews",
                    description : "Some words about the musics that I listen to."
                }
            ]
        }
    ]

    render() {
        return (
            <section loading="lazy" className="service-section spad" id="resume">
                <div className="container">
                    <div className="section-title">
                        <h2>My Skill</h2>
                    </div>
                    <div className="row">
                        {this.sectionList.map((item) =>
                            <SkillSection icon={item.icon} section={item.section} itemList={item.itemList}/>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Skill;