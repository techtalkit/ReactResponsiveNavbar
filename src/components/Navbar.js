import React, { useState } from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa'
import './navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const[showMediaIcons,setshowMediaIcons]=useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>T</span>hapa
                        <span>T</span>echnical
                    </h2>
                </div>
                {/* 2nd part menu links */}
                <div className={showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><a href="#" target="_thapa"><FaFacebookSquare className="facebook"/></a></li>
                        <li><a href="#" target="_thapa"><FaInstagramSquare className="instagram" /></a></li>
                        <li><a href="#" target="_thapa"><FaYoutubeSquare className="youtube" /></a></li>
                    </ul>
                {/* Hamburger menu start */}
                <div className="hamburger-menu">
                    <a href="" onClick={()=> setshowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div>
                </div>
            </nav>
            {/* hero section */}
            {/* <section className='hero-section'>
                <h1>Welcome to</h1>
                <h1>Thapa Technical</h1>
            </section> */}
        </>
    )
}

export default Navbar