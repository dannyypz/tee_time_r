import React from 'react'
import logo from '../Media/Images/tee time and ttlc logo with alpaca.png'
import { Link} from 'react-scroll'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="devpez"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"black"}}/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page"
                    to="home"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="about"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>our services</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="experience"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>new 3 Step pere emergent</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="work"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>Blog </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"
                    to="contact"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>About us</Link>
                </li>
                <li className="nav-item">
                <Button className="nav-link"
                    style={{backgroundColor:"orange", color:"white", border:"none"}}
                    to="contact"
                    activeClass="active"
                    spy={true} 
                    smooth={true}>CONTACT US</Button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar