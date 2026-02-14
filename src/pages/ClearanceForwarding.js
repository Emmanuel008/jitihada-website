import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ServicePage.css';

const airFreightImg = `${process.env.PUBLIC_URL}/assets/images/air.jpeg`;
const seaFreightImg = `${process.env.PUBLIC_URL}/assets/images/tanker.jpg`;
const roadFreightImg = `${process.env.PUBLIC_URL}/assets/images/road.jpeg`;

export function ClearanceForwardingContent() {
  return (
    <main className="service-page">
      <div className="service-page__container">
        <header className="service-page__header">
          <h1 className="service-page__title">Clearance & Forwarding</h1>
          <p className="service-page__intro">
            Jitihada Enterprises provides efficient customs clearance and forwarding services, ensuring your goods move smoothly across borders.
          </p>
        </header>
        <div className="service-page__content">
            <p className="service-page__text">
              We handle all documentation, compliance checks, and logistics coordination, saving time and reducing delays. Our team ensures your cargo reaches its destination safely, on time, and in full compliance with regulations.
            </p>
            <h2 className="service-page__heading">Our Freight Services</h2>
            <div className="service-page__cards-grid">
              <div className="service-page__card">
                <div className="service-page__card-image-wrap">
                  <img src={airFreightImg} alt="Air freight and cargo logistics" className="service-page__card-image" />
                </div>
                <div className="service-page__card-body">
                  <h3 className="service-page__card-title">Air Freight</h3>
                  <p className="service-page__card-desc">
                    Fast and secure transportation by air. We handle cargo documentation, airport logistics, and customs clearance for timely delivery across domestic and international destinations.
                  </p>
                </div>
              </div>
              <div className="service-page__card">
                <div className="service-page__card-image-wrap">
                  <img src={seaFreightImg} alt="Sea freight and maritime shipping" className="service-page__card-image" />
                </div>
                <div className="service-page__card-body">
                  <h3 className="service-page__card-title">Sea Freight</h3>
                  <p className="service-page__card-desc">
                    Reliable and cost-effective shipping for bulk and containerized cargo. Port handling, vessel scheduling, and customs clearance for smooth movement across international waters.
                  </p>
                </div>
              </div>
              <div className="service-page__card">
                <div className="service-page__card-image-wrap">
                  <img src={roadFreightImg} alt="Road freight and truck logistics" className="service-page__card-image" />
                </div>
                <div className="service-page__card-body">
                  <h3 className="service-page__card-title">Road Freight</h3>
                  <p className="service-page__card-desc">
                    Flexible transportation via trucks and trailers. Safe handling, route optimization, and on-time delivery for short and long-distance cargo.
                  </p>
                </div>
              </div>
            </div>
            <p className="service-page__note">
              From customs clearance to end-to-end forwarding, we support your supply chain with expertise and reliability.
            </p>
          </div>
        </div>
    </main>
  );
}

function ClearanceForwarding() {
  return (
    <div className="App">
      <Navbar />
      <ClearanceForwardingContent />
      <Footer />
    </div>
  );
}

export default ClearanceForwarding;
