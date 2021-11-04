import React from 'react'
import '../body/body.css'
import Intro from "../body/intro/index"
import About from "../body/about/index"
import Skills from "../body/skills/index"
import Contact from "../body/contact/index"


function Body() {
    return (
        <div className="body_page">
            <section id="intro">
                <Intro />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body
