import React from "react";
import "./Skill.css"
import FrontEnd from '../../Assets/ui.png';
import BackEnd from '../../Assets/website.png'
import FrameWork from '../../Assets/app.png'
import Sql from '../../Assets/website.png'

const Skills = () => {
    return (
        <section id="skills">
            <h2>What I Do</h2>
            <p>I am a Skillled and passionate Software Developer With Experience</p>
            <div className="skill-Bars">
                <div className="skill-Bar">
                    <img src={FrontEnd} alt=""/>
                    <div className="des">
                    <span>Front-End Web Developer(HTML & CSS)</span>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
                <div className="skill-Bar">
                    <img src={BackEnd} alt=""/>
                    <div className="des">
                    <span>Back-End Development with Python & Javascript</span>
                    <p>Welcome to the Back-End world of web development powered by Python and Django. <br/>In this section, I'll take you through the robust and efficient back-end systems that power modern web applications.</p>
                    </div>
                </div>
                <div className="skill-Bar">
                    <img src={Sql} alt=""/>
                    <div className="des">
                    <span>Front-End Web Developer(HTML & CSS)</span>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
                <div className="skill-Bar">
                    <img src={FrameWork} alt="" />
                    <div className="des">
                    <span>Building with React and Django</span>
                    <p>Discover the magic of combining React, the dynamic front-end library, with Django, the powerful back-end framework. <br/> In this section, I'll showcase the art of creating modern, responsive, and data-driven web applications.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;