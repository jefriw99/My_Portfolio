import React from 'react'
import '../mobile/mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile_page">
            <div className="close_icon" onClick={() => setIsOpen(!isOpen)}>
                <i class="fi fi-rr-cross"></i>
            </div>
            <div className="mobile_options">
                <div className="options">
                    <a href="#about">
                        <i class="fi fi-rr-diploma select_icon"></i>About Me
                    </a>
                </div>
                <div className="options">
                    <a href="#skills">
                        <i class="fi fi-rr-list-check select_icon"></i>Skills
                    </a>
                </div>
                <div className="options">
                    <a href="#contact">
                        <i class="fi fi-rr-share select_icon"></i>Social Media
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
