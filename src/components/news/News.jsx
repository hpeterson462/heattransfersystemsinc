import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaArrowLeft } from "react-icons/fa";
import logo from '../../assets/logo.png';
import './News.css';

export default function News() {

  const [startScrollPosition, setStartScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;

    setVisible((startScrollPosition > currentScrollPosition && startScrollPosition - currentScrollPosition) || currentScrollPosition < 10);

    setStartScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [startScrollPosition, visible, handleScroll]);

  return (
    <>
      <nav className="navbar" style={{ top: visible ? '0' : '-150px' }}>
        <Link
          to="/"
          className="link"
          id='logo-link'
        >
          <img
            className="logo-icon"
            src={logo}
            alt="small logo icon"
          />
        </Link>
        <Link
          to="/"
          className="link"
        >
          <FaArrowLeft size={20} />
        </Link>
      </nav>

      <section className='news-main'>
        <h1>
          Heat Transfer Systems
          <br />
          News
        </h1>
      </section >

      <div className='news-container'>
        <h2>December 2024</h2>
        <p>We are very excited to announce that we are now the exclusive representative for Twin City Fan & Blowers for Northern California & Nevada!</p>
        <br></br>
        <h2>August 2024</h2>
        <p>We are pleased to announce that the ownership of Heat Transfer Systems purchased McNulty Mechanical in August of 2024.</p>
        <br></br>
        <h2>July 2024</h2>
        <p>Heat Transfer Systems has moved to a new, much larger facility on July 1st!</p>
        <br></br>
      </div>
    </ >
  )
}
