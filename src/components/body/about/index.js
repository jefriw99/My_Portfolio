import React from 'react'
import "../about/about.css"

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="picture">
                    <img src={require('../../../images/profile_pic.jpg').default} className="profile_picture"/>
                </div>
                <div className="info">
                    <span className="greeting">Nice to meet you.</span>
                    <br/>
                    <br/>I'm an accounting graduate with previous experience in the 
                    real estate and finance industry. 
                    <br/>
                    <br/>Currently, I'm a Master of Business Information Systems 
                    student at Monash University who has a strong passion for web 
                    development and graphic designing.
                    <br/>
                    <br/>Although I'm new to web development, I'm naturally curious 
                    and actively learning new ideas to improve my abilities.  
                </div>
            </div>
        </div>
    )
}

export default About
