import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to ="/Courses">Courses</Link>
      </nav>
    </header>
  );
}

export default Header;
