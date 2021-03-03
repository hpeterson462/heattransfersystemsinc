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
          <p>332 Wright Brothers Ave.</p>
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
          <a href="mailto:info@heattransfersystems.com" className="contact-email">
            info@heattransfersystems.com
          </a>
        </div>

        <div className="contact-info">
          <p className="contact-info-title">
            Phone
          </p>
          <p>925-456-0600</p>
          <p className="contact-info-title">
            Fax
          </p>
          <p>925-456-0602</p>
        </div>

      </div>

    </section>
  )
}

