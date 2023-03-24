import React from 'react'
import "../about/about.css"

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="picture">
                    <img src={require('../../../images/profile_pic.jpg').default} className="profile_picture" alt="Profile_Picture"/>
                </div>
                <div className="info">
                    <span className="greeting">Nice to meet you!</span>
                    <br/>
                    <br/>I'm an accounting student with previous experience in the 
                    property management and marketing consulting. 
                    <br/>
                    <br/>Currently, a postgraduate student who has a strong passion for web 
                    development and graphic designing.
                    <br/>
                    <br/>Although I'm new to web development, I'm naturally curious 
                    and actively learning new ways to make my websites more exciting.  
                </div>
            </div>
        </div>
    )
}

export default About
