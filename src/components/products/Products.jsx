import React, { useEffect } from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";
import honeywell from '../../assets/honeywell.png';
import maxonHoneywell from '../../assets/maxonHoneywell.png';
import eclipseHoneywell from '../../assets/eclipseHoneywell.png';
import kromSchroderHoneywell from '../../assets/kromSchroderHoneywell.png';
import hauckHoneywell from '../../assets/hauckHoneywell.png';
import dungs from '../../assets/dungs.png';
import siemens from '../../assets/siemens.png';
import fireye from '../../assets/fireye.png';
import pietroFiorentini from '../../assets/pietroFiorentini.png';
import flynn from '../../assets/flynn.png';
import futureDesignControls from '../../assets/futureDesignControls.png';
import pyromation from '../../assets/pyromation.png';
import exothermicsHoneywell from '../../assets/exothermicsHoneywell.png';
import protectionControlsInc from '../../assets/protectionControlsInc.png';
import asco from '../../assets/asco.png';
import "aos/dist/aos.css";
import AOS from "aos";
import './Products.css';

export default function Products() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const productLogos = [
    {
      name: 'Honeywell',
      image: honeywell,
      url: 'https://thermalsolutions.honeywell.com/us/en/home',
      description: 'Trusted technology to manage your burners.'
    },
    {
      name: 'Honeywell Maxon',
      image: maxonHoneywell,
      url: 'https://thermalsolutions.honeywell.com/us/en/home',
      description: 'Trusted technology to manage your burners.'
    },
    {
      name: 'Honeywell Eclipse',
      image: eclipseHoneywell,
      url: 'https://thermalsolutions.honeywell.com/us/en/home',
      description: 'Trusted technology to manage your burners.'
    },
    {
      name: 'Honeywell Krom Schroder',
      image: kromSchroderHoneywell,
      url: 'https://www.kromschroeder.de/en/',
      description: 'We control your furnaces & your success.'
    },
    {
      name: 'Honeywell Hauck',
      image: hauckHoneywell,
      url: 'https://thermalsolutions.honeywell.com/us/en/industries/hauck',
      description: 'Asphalt & aggregate drying.'
    },
    {
      name: 'Karl Dungs Inc.',
      image: dungs,
      url: 'https://www.dungs.com/en',
      description: 'Safe & clean gas combustion.'
    },
    {
      name: 'Siemens',
      image: siemens,
      url: 'https://scccombustion.com/',
      description: 'Siemens Combustion Controls Inc.'
    },
    {
      name: 'Fireye',
      image: fireye,
      url: 'https://www.fireye.com/',
      description: 'Flame safeguard controls & burner systems.'
    },
    {
      name: 'Pietro Fiorentini',
      image: pietroFiorentini,
      url: 'https://www.fiorentini.com/us/en',
      description: 'Solutions for oil & gas streams.'
    },
    {
      name: 'Flynn',
      image: flynn,
      url: 'http://flynnburner.com/',
      description: 'Combustion components for the bakery industry.'
    },
    {
      name: 'Future Design Controls',
      image: futureDesignControls,
      url: 'http://www.futuredesigncontrols.com/',
      description: 'Recording & control products.'
    },
    {
      name: 'Pyromation',
      image: pyromation,
      url: 'https://www.pyromation.com/',
      description: 'Temperature sensors & assemblies.'
    },
    {
      name: 'Honeywell Exothermics',
      image: exothermicsHoneywell,
      url: 'https://thermalsolutions.honeywell.com/us/en/home',
      description: 'Trusted technology to manage your burners.'
    },
    {
      name: 'Protection Controls Inc.',
      image: protectionControlsInc,
      url: 'https://www.protectioncontrolsinc.com/',
      description: 'Electrical flame safety equipment.'
    },
    {
      name: 'Asco',
      image: asco,
      url: 'https://www.emerson.com/en-us/automation/asco',
      description: 'Fluid automation solutions.'
    },
  ]

  const displayProductLogos = productLogos.map(
    (productLogos, index) =>
      <div className="card" key={productLogos.name + index}>
        <div className="card-inner">
          <div className="card-front">
            <img
              className="product-logo"
              src={productLogos.image}
              alt={`${productLogos.name} `}
            />
          </div>
          <div className="card-back">
            <p>{productLogos.description}</p>
            <div>
              <a
                className="ext-link"
                target="_blank"
                href={productLogos.url}
              >
                <HiOutlineExternalLink />
              </a>
            </div>
            <div />
          </div>
        </div>
      </div >
  )

  return (
    <section>
      <h1 id="products">
        Products
      </h1>

      <h2>
        We offer a variety of quality products from these companies.
      </h2>

      <div className="card-container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">

        {displayProductLogos}

      </div>
    </section>
  )
}
