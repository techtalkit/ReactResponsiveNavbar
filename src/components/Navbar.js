import React from 'react'
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from 'react-icons/fa'
import './navbar.css';

const Navbar = () => {
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
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
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
                </div>
            </nav>
            {/* hero section */}
            <section className='hero-section'>
                <h1>Welcome to</h1>
                <h1>Thapa Technical</h1>
            </section>
        </>
    )
}

export default Navbar