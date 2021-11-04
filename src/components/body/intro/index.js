import React from 'react'
import "../intro/intro.css"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

function Intro() {
    const textRef = useRef();
    
    useEffect(()=> {
        init(textRef.current, { showCursor: true, backDelay: 2000, 
            strings: ["G'Day!", "Apa khabar", "你好！" ] })
    },[])
    return (
        <div className="intro">
            <div className="intro_left">
                <span className="style_name" ref={textRef}></span> 
                <br/>I'm <span className="style_name">Jefri</span> 😀,
                <br/> and I love 
                <br/>building websites.
            </div>
            <div className="intro_photo">
                <img src={require('../../../images/desktop.png').default} className="desktop"/>
            </div>
        </div>
    )
}

export default Intro
