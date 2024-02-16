import React from "react";
import "./Works.css"
import Jerseymaster from "../../Assets/porttt1.jpg"
import Cotorie from "../../Assets/porttt2.jpg"
import Resturant from "../../Assets/porttt3.jpg"
import Travel from "../../Assets/portt4.png"

const Works = () => {
    return (
        <section id="works">
            <h2>My Portfolio</h2>
            <p>I take Pride in paying attention to the smallest details</p>
            <div className="work-bars">
            <div className="work-bar">
                    <img src={Jerseymaster} alt=""/>
                    <div className="des">
                    <span>Front-End Web Developer(HTML & CSS)</span>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
                <div className="work-bar">
                    <img src={Cotorie} alt=""/>
                    <div className="des">
                    <span>Front-End Web Developer(HTML & CSS)</span>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
                <div className="work-bar">
                    <img src={Resturant} alt=""/>
                    <div className="des">
                    <span>Front-End Web Developer(HTML & CSS)</span>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
                <div className="work-bar">
                    <img src={Travel} alt=""/>
                    <div className="des">
                    <span>Front-End Web Developer(HTML & CSS)</span>
                    <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                    </div>
                </div>
            </div>

           
        </section>
    )
}

export default Works;