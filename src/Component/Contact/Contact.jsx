import React, { useRef } from "react";
import "./Contact.css"
import Castley from '../../Assets/CASTLEE.jpeg';
import Bfree from '../../Assets/BFree-logo-correct-1.webp';
import Facebook from '../../Assets/facebook.jpg';
import Semicolon from '../../Assets/semicolon.png';
import FacebookIcon from '../../Assets/icons8-facebook-circled-94.png';
import InstagramIcon from '../../Assets/icons8-instagram-94.png';
import GmailIcon from '../../Assets/icons8-gmail-logo-94.png';
import YoutubeIcon from '../../Assets/icons8-youtube-logo-94.png'
import emailjs  from '@emailjs/browser';


const Contact = () => {
    const form = useRef; 

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_thiil43', 'template_y548msd', form.current, 'VoqLc3lUI_SO1px0S67Oi')
            .then((result) => {
               console.log(result.text);
               
               alert("Email sent !");
           },  (error) => {
               console.log(error.text);
             });
      }; 
    return (
        <section id="client">
        <h2>My Work Exprience</h2>
        <p>I have had the opportunity to work with a diverse group of companies <br/>
                    some of the notable companies i have worked with includes</p>
        <div className="client-bars">
        <div className="client-bar">
                <img src={Castley} alt=""/>
                <div className="des">
                <span>Front-End Web Developer(HTML & CSS)</span>
                <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                </div>
            </div>
            <div className="client-bar">
                <img src={Bfree} alt=""/>
                <div className="des">
                <span>Front-End Web Developer(HTML & CSS)</span>
                <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                </div>
            </div>
            <div className="client-bar">
                <img src={Facebook} alt=""/>
                <div className="des">
                <span>Front-End Web Developer(HTML & CSS)</span>
                <p>Welcome to my portfolio, where design meets functionalit y, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                </div>
            </div>
            <div className="client-bar">
                <img src={Semicolon} alt=""/>
                <div className="des">
                <span>Front-End Web Developer(HTML & CSS)</span>
                <p>Welcome to my portfolio, where design meets functionality, and creativity transforms into user-friendly web experiences. <br/>I'm a passionate Front-End Web Developer with a knack for crafting visually appealing and highly responsive websites.</p>
                </div>
            </div>
        </div>
        <div id="contact">
                <h2>Contact Me</h2>
                <p>Please fill out the form below to discuss any work opportunities</p>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="s" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="facebook" className="link" />
                        <img src={InstagramIcon} alt="instagram" className="link" />
                        <img src={GmailIcon} alt="gmail" className="link" />
                        <img src={YoutubeIcon} alt="youtube" className="link" />
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact;