import React, {useState} from 'react'
import '../header/header.css';
import Web from './web/index';
import Mobile from './mobile/index';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            
            <div className="header-section">
                <div className="logo">
                    <a href="#intro">
                    JEFRI ISLAM
                    </a>
                </div>
                <div className="menu_bar">
                    <div className="for_web">
                        <Web />
                    </div>
                    <div className="for_mobile">
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <i class="fi fi-rr-menu-dots-vertical menu_icon"></i>
                        </div>
                        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
