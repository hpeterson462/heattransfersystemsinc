import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/logo.png';
import './Nav.css';

export default function Nav() {

  // const [startScrollPosition, setStartScrollPosition] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   const currentScrollPosition = window.pageYOffset;

  //   setVisible((startScrollPosition > currentScrollPosition && startScrollPosition - currentScrollPosition) || currentScrollPosition < 10);

  //   setStartScrollPosition(currentScrollPosition);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);

  // }, [startScrollPosition, visible, handleScroll]);

  return (
    // <nav className="navbar" style={{ top: visible ? '0' : '-150px' }}>
    <nav className="navbar">

      <Link to="#home">
        <img
          className="logo-icon"
          src={logo}
          alt="small logo icon"
        />
      </Link>

      <Link className="link" to="#home">
        Home
      </Link>

      <Link className="link" to="/news">
        News
      </Link>

      <Link className="link" to="#solutions">
        Solutions
      </Link>

      <Link className="link" to="#services">
        Services
      </Link>

      <Link className="link" to="#products">
        Products
      </Link>

      <Link className="link" to="#aboutus">
        About Us
      </Link>

      <Link className="link" to="#contact">
        Contact
      </Link>
    </nav>
  )
}
