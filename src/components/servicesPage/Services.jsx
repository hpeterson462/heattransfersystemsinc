import React from 'react';
import { useScrollAnimation } from '../../hooks/scrollAnimation';
import serviceCycle from '../../assets/serviceCycle.png';
import startUp from '../../assets/startUp.jpg';
import installation from '../../assets/installation.jpg';
import jobSite from '../../assets/jobSite.jpg';
import prevMaintenance from '../../assets/prevMaintenance.jpg';
import './Services.css';

export default function Services() {

  const { isVisible, animationRef } = useScrollAnimation();

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

      <div className={`serv-card-container ${isVisible ? 'is-visible' : ''}`} ref={animationRef}>
        <div className="card-wrapper">
          <div className="serv-card">
            <div className="serv-name">
              Start Up
            </div>
            <img
              className="serv-img"
              src={startUp}
              alt="gas train"
            />
            <p className="serv-p">
              Our technicians are trained to perform the <b>initial start up</b> of your new combustion equipment <b>regardless of manufacturer</b>. You can be assured that the job will be done right and done efficiently.
          </p>
          </div>

          <div className="serv-card">
            <div className="serv-name">
              Installation
            </div>
            <img
              className="serv-img"
              src={installation}
              alt="installation of combustion equipment" />
            <p className="serv-p">
              Whether you have a <b>new piece of equipment</b> coming to your facility, or are <b>updating an existing combustion system</b>,  you can count on our team to complete the installation to the <b>highest standards</b>.
          </p>
          </div>

          <div className="serv-card">
            <div className="serv-name">
              Preventative Maintenance
            </div>
            <img
              className="serv-img"
              src={prevMaintenance}
              alt="gas train"
            />
            <p className="serv-p">
              Ongoing, preventative maintenance can <b>reduce unplanned down time</b>, <b>minimize fuel costs</b>, <b>increase product quality</b>, and ensure your combustion <b>equipment is running safely</b>. However, if the unexpected does happen, our local team of service experts are ready to get you back into production quickly.
          </p>
          </div>

          <div className="serv-card">
            <div className="serv-name">
              Service
            </div>
            <img
              className="serv-img"
              src={jobSite}
              alt="industrial heating system"
            />
            <p className="serv-p">
              We offer a wide range of services that include:
            <br />
              <b>burner tuning</b>,
            <br /> regulatory <b>safety audits</b>,
            <br /> <b>troubleshooting & repairs</b>, and
            <br />proactive & preventative <b>maintenance</b>.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}