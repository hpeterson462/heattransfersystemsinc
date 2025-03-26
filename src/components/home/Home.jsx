import React from 'react';
import Nav from '../nav/Nav';
import Translate from '../translate/Translate';
import Solutions from '../solutions/Solutions';
import Services from '../servicesPage/Services';
import Products from '../products/Products';
import AboutUs from '../aboutUs/AboutUs';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import logo from '../../assets/logo.png';
import './Home.css';

export default function Home() {

  return (
    <>
      <Nav />

      <section className="logo-title" id="home">
        <img
          className="home-logo"
          src={logo}
          alt="Heat Transfer Systems logo"
        />
        <h1 className="home-company-title" data-testid="title">
          Heat Transfer Systems
        </h1>
        <h2 className="home-p">
          Burners, Fans & Blowers, Combustion Systems, Components & Service
        </h2>
      </section>

      <section className='home-contact-info'>
        <div className="contact-info">
          <p className="contact-info-title">
            Mailing Address
          </p>
          <p>239 Boeing Court</p>
          <p>Livermore, CA 94551</p>
        </div>

        <div className="contact-info">
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

      </section>

      <Translate />

      <br />

      <Solutions />

      <br />

      <Services />

      <br />

      <Products />

      <br />

      <AboutUs />

      <br />

      <Contact />

      <br />

      <Footer />

    </>
  )
}
