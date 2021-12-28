import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import Logo from '../image/logo2.png';

const Navbar = () => {
    return (
        <header>
            <img className='logo' src={Logo} alt="" />
            <nav>
                <ul className='nav_links'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>


    )
}

export default Navbar
