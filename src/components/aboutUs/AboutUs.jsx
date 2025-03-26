import React, { useEffect } from 'react';
import steve from '../../assets/steve.jpg';
import daniel from '../../assets/daniel.jpg';
import bailey from '../../assets/bailey.jpg';
import paul from '../../assets/paul.jpg';
import "aos/dist/aos.css";
import AOS from "aos";
import './AboutUs.css';

export default function AboutUs() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <h1 id="aboutus">
        About Us
      </h1>
      <h2>
        Our team has been involved in the sales, service, and engineering  of combustion systems and equipment for over 50 years that includes three generations. We have an extensive background in designing systems for many different industries.
      </h2>

      <div className="profile-container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

        <div className="profile-card">
          {/* <img
            className="profile-img"
            src={steve}
            alt="Heat Transfer Systems employee Steve"
          /> */}
          <div className='profile-card-inside'>
            <p>Steve Wirth</p>
            <p>President, Sales, Service</p>
            <a href="mailto:steve@heattransfersystems.com" className="contact-email">
              steve@heattransfersystems.com
            </a>
          </div>
        </div>

        <div className="profile-card">
          {/* <img
            className="profile-img"
            src={daniel}
            alt="Heat Transfer Systems employee Daniel"
          /> */}
          <div className='profile-card-inside'>
            <p>Daniel Candaux</p>
            <p>Project Manager, Sales, Service</p>
            <a href="mailto:daniel@heattransfersystems.com" className="contact-email">
              daniel@heattransfersystems.com
            </a>
          </div>
        </div>

        <div className="profile-card">
          {/* <img
            className="profile-img"
            src={bailey}
            alt="Heat Transfer Systems employee Bailey"
          /> */}
          <div className='profile-card-inside'>
            <p>Bailey Wirth</p>
            <p>General Manager, Sales, Service</p>
            <a href="mailto:bailey@heattransfersystems.com" className="contact-email">
              bailey@heattransfersystems.com
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className='profile-card-inside'>
            <p>Lauren Wirth</p>
            <p>AR/AP, Corp Administrator</p>
            <a href="mailto:lauren@heattransfersystems.com" className="contact-email">
              lauren@heattransfersystems.com
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className='profile-card-inside'>
            <p>Diane Smith</p>
            <p>Office Manager, Inside Sales</p>
            <a href="mailto:diane@heattransfersystems.com" className="contact-email">
              diane@heattransfersystems.com
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className='profile-card-inside'>
            <p>David Maurillo</p>
            <p>Electrical Project Manager, Service</p>
            <a href="mailto:david@heattransfersystems.com" className="contact-email">
              david@heattransfersystems.com
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className='profile-card-inside'>
            <p>Kevin Mattos</p>
            <p>Service Manager, Service, Sales</p>
            <a href="mailto:kevin@heattransfersystems.com" className="contact-email">
              kevin@heattransfersystems.com
            </a>
          </div>
        </div>

      </div>

    </section >
  )
}
