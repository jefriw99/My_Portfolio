import React from 'react'
import '../web/web.css'

function Web() {
    return (
        <div className="webpage">
            <div className="webpage_options">
                <a href="#about">
                <i class="fi fi-rr-user select_icon"></i>About Me
                </a>
            </div>
            <div className="webpage_options">
                <a href="#skills">
                <i class="fi fi-rr-list-check select_icon"></i>Skills
                </a>
            </div>
            <div className="webpage_options">
                <a href="#contact">
                <i class="fi fi-rr-share select_icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
