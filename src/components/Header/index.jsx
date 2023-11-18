import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'


export default function Header() {
  return (
    <header className='header'>
      <div className='header_logo'>
        <img src={logo} alt='kasa-logo' className='kasa_logo' />
      </div>  
    
      <nav className="menu-header">
        <NavLink className="menu-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="menu-link" to="/about">
           A Propos
        </NavLink>
      </nav>
    </header>
  
  );
}