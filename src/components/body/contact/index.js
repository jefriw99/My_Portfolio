import React from 'react'
import "../contact/contact.css"
import SocialContact from "./social-contact"

function Contact() {
    
    return (
        <div className="contact">
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to know more? Get in touch with me!</p>
                    
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../../../download/Resume.pdf").default}>
                        <i class='fi-rr-cloud-download download-icon' />Download Resume
                    </a>  
                </div>
            </div>
        </div>
    )
}

export default Contact
