import React, { useEffect } from 'react';
import logo from '../../assets/logo.png';
import "aos/dist/aos.css";
import AOS from "aos";
import './Contact.css';

export default function Contact() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <h1 id="contact">Contact</h1>

      <div className="contact-container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

        <div className="contact-info">
          <p className="contact-info-title">
            Mailing Address
          </p>
          <p>239 Boeing Court</p>
          <p>Livermore, CA 94551</p>
        </div>

        <div className="contact-info">
          <img
            className="contact-logo"
            src={logo}
            alt="Heat Transfer Systems"
          />
          <p className="contact-info-title">
            Email Address
          </p>
          <a href="mailto:diane@heattransfersystems.com" className="contact-email">
            info@heattransfersystems.com
          </a>
        </div>

        <div className="contact-info">
          <p className="contact-info-title">
            Phone
          </p>
          <p>925-456-0600</p>
        </div>

      </div>

    </section>
  )
}

