import React, { useEffect } from 'react';
import serviceCycle from '../../assets/serviceCycle.png';
import startUp from '../../assets/startUp.jpg';
import installation from '../../assets/installation.jpg';
// import jobSite from '../../assets/jobSite.jpg';
import prevMaintenance from '../../assets/prevMaintenance.jpg';
import "aos/dist/aos.css";
import AOS from "aos";
import LazyLoad from "react-lazyload";
import './Services.css';

export default function Services() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="serv-main" id="services">
        <h1>
          Services
        </h1>

        <img
          className="serviceCycle"
          src={serviceCycle}
          alt="industrial heating cycle"
        />

        <h2>
          Keeping equipment running well is just as important as installing it correctly. Our service team is ready to assist you with the ongoing maintenance of your existing equipment. Whether a piece of equipment is brand new, or just new to you, we will get it running in no time.
        </h2>
      </section>

      <div className="serv-card-container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
        <div className="card-wrapper" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="900">
          <div className="serv-card">
            <div className="serv-name">
              Start Up
            </div>
            <LazyLoad height={250} once>
              <img
                className="serv-img"
                src={startUp}
                alt="gas train"
              />
            </LazyLoad>
            <p className="serv-p">
              Our technicians are trained to perform the <b>initial start up</b> of your new combustion equipment <b>regardless of manufacturer</b>. You can be assured that the job will be done right and done efficiently.
          </p>
          </div>

          <div className="serv-card">
            <div className="serv-name">
              Installation
            </div>
            <LazyLoad height={250} once>
              <img
                className="serv-img"
                src={installation}
                alt="installation of combustion equipment" />
            </LazyLoad>
            <p className="serv-p">
              Whether you have a <b>new piece of equipment</b> coming to your facility, or are <b>updating an existing combustion system</b>,  you can count on our team to complete the installation to the <b>highest standards</b>.
          </p>
          </div>

          <div className="serv-card">
            <div className="serv-name-2">
              Preventative Maintenance <br /> & Service
            </div>
            <LazyLoad height={250} once>
              <img
                className="serv-img"
                src={prevMaintenance}
                alt="gas train"
              />
            </LazyLoad>
            <p className="serv-p">
              Ongoing, preventative maintenance can <b>reduce unplanned down time</b>, <b>minimize fuel costs</b>, <b>increase product quality</b>, and ensure your combustion <b>equipment is running safely</b>. However, if the unexpected does happen, our local team of service experts are ready to get you back into production quickly.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
