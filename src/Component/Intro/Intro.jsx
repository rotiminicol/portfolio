import React from "react";
import './Intro.css';
import bg from '../../Assets/oppps.jpeg';
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
               <h4><span className="hello">Hello</span></h4>
               <h2><span className="introText">I'm <span className="introName">Rotimi</span> <br />Software Developer</span></h2> 
                <p className="introPara">I am a skilled Software Developer with a passion for creating visually<br/> appealing and user-friendly websites that combine the art of design <br/>with the science of coding. With a keen eye for detail and a deep <br/>understanding of the latest web technologies, I specialize in developing <br/>web solutions that not only meet but exceed user expectations.<br/> My commitment to delivering high-quality, efficient, and responsive<br/> websites is a testament to my dedication to the craft. <br/>I'm constantly seeking innovative approaches to make the digital<br/> world more engaging and accessible, one line of code at a time.</p>
                <Link>< button className="btn">Hire me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;