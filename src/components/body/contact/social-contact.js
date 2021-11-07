import React from 'react'
import "../contact/social.css"
import { SocialPlatform } from "../../../list/social"

function SocialContact() {
    const data= SocialPlatform;
    return <div className="social-contact">

        {data.map((item)=>{
            return(
                <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="social-icon-div">
                    <img src={item.icon} className="social-icon" alt="social_media_icons" />
                    </div>
                </a>
            )
        })}
    </div>
}

export default SocialContact
