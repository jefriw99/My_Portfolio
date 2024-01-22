import React from 'react'
import "../about/about.css"

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="picture">
                    <img src={require('../../../images/profile_picture.jpg').default} className="profile_picture" alt="Profile_Picture"/>
                </div>
                <div className="info">
                    <span className="greeting">Nice to meet you!</span>
                    <br/>
                    <br/>I'm a gradaute accountant currently immersed in the field of 
                    business tax services. 
                    <br/>
                    <br/>Beyond numbers and financial statements, my true passion lies in
                    information systems and technology.
                    <br/>
                    <br/>Eager to merge my accounting expertise with technological 
                    innovation, I'm on a journey to integrate financial solutions in
                    the digital realm.
                </div>
            </div>
        </div>
    )
}

export default About
