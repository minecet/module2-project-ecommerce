import React from 'react';
import './Navbar.css';
import logo from '../images/logo.png'

function Navbar(){

    return (
    <nav className="navbar">
    
    <div className="navbar-brand">Ironhack Ecommerce</div>
    <img className='navLogo' src={logo} alt="Descripción de la imagen" />
    </nav>
        );
}

export default Navbar;