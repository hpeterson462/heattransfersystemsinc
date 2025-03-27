import React, { useEffect } from 'react';
import burnerEquipment from '../../assets/burnerEquipment.jpg';
import controlPanel from '../../assets/controlPanel.jpg';
import turnKeySystems from '../../assets/turnKeySystems.jpg';
import gasTrain from '../../assets/gasTrain.jpg';
import blurLogo from '../../assets/blurLogo.jpg';
import clusterFans from '../../assets/clusterFans.png';
import 'aos/dist/aos.css';
import AOS from 'aos';
import LazyLoad from "react-lazyload";
import './Solutions.css';

function Solutions() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section>
        <h1 id="solutions">
          Solutions
        </h1>

        <h2>
          We build everything with the highest quality components and detail to deliver safe and reliable equipment that you can count on for years to come.
        </h2>
      </section>

      <div className="sol-card-container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <div className="sol-wrapper" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
          <div>
            <div className="sol-name">Burner Equipment</div>
            <div className="sol-card">
              <LazyLoad height={250} once>
                <img
                  className="sol-img"
                  src={burnerEquipment}
                  alt="industrial heating system"
                />
              </LazyLoad>
              <div className="sol-description">
                <p className="sol-p">
                  <b>Gas & oil burners</b>, <b>recuperators</b>, and <b>heat exchangers</b> for standard to low emissions applications in a variety of industries.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sol-name">Fans & Blowers</div>
            <div className="sol-card">
              <LazyLoad height={250} once>
                <img
                  className="sol-img"
                  src={clusterFans}
                  alt="fans and blowers"
                />
              </LazyLoad>
              <div className="sol-description">
                <p className="sol-p">
                  Commercial and industrial <b>fan and blower solutions</b> and replacement parts for <b>most fan manufacturers</b>.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sol-name">Gas Trains</div>
            <div className="sol-card">
              <LazyLoad height={250} once>
                <img
                  className="sol-img"
                  src={gasTrain}
                  alt="gas train"
                />
              </LazyLoad>
              <div className="sol-description">
                <p className="sol-p">
                  <b>Custom gas trains</b> built to meet <b>NFPA</b> requirements for <b>natural & propane</b> gas tailored to the unique needs of our customers.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sol-name">Control Panels</div>
            <div className="sol-card">
              <LazyLoad height={250} once>
                <img
                  className="sol-img"
                  src={controlPanel}
                  alt="industrial heating system panel"
                />
              </LazyLoad>
              <div className="sol-description">
                <p className="sol-p">
                  From <b>single-burner</b> to <b>complex PLC</b> based controls, we provide custom control panels for each system.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="sol-name">Turn-Key Systems</div>
            <div className="sol-card">
              <LazyLoad height={250} once>
                <img
                  className="sol-img"
                  src={turnKeySystems}
                  alt="heat exchanger"
                />
              </LazyLoad>
              <div className="sol-description">
                <p className="sol-p">
                  From tear down of old equipment to the <b>design & installation</b> of new systems, we provide a <b>complete package</b> in start-up training.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Solutions;
