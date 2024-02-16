import React from 'react'
import "./Navbar.css"
import logo from '../../Assets/bigro.png'
// import menu from '../../Assets/icons8-menu-64.png'
import { Link } from 'react-scroll'
// import { useState } from 'react'
const Navbar = () => {
    // const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className='logo' />
        <div>
          <ul className='nav-menu'>
           <li><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="nav-Menu-List-Item">Home</Link></li>   
           <li> <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="nav-Menu-List-Item">About</Link></li>     
           <li><Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  className="nav-Menu-List-Item">Portfolio </Link></li>      
           <li> <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500}  className="nav-Menu-List-Item">Clients</Link></li>
           <li><button className='nav-button' onClick={() =>{
            document.getElementById('contact').scrollIntoView({behavior: "smooth"})
           }}>Contact me</button></li>     
          </ul>
        </div>
       

        {/* <img src={menu} alt="menu" className='mob-menu' onClick={() =>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>  
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>About</Link>     
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Portfolio </Link>     
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>      
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>   
            </div> */}
    </div>
  )
}

export default Navbar