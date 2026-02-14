import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/ServicePage.css';

const logisticsImg = `${process.env.PUBLIC_URL}/assets/images/logisti.png`;
const airFreightImg = `${process.env.PUBLIC_URL}/assets/images/air.jpeg`;
const seaFreightImg = `${process.env.PUBLIC_URL}/assets/images/tanker.jpg`;
const roadFreightImg = `${process.env.PUBLIC_URL}/assets/images/road.jpeg`;

function ClearanceForwarding() {
  return (
    <div className="App">
      <Navbar />
      <main className="service-page">
        <div className="service-page__hero">
          <Link to="/#services" className="service-page__back">← Back to Services</Link>
          <div className="service-page__hero-image-wrap">
            <img src={logisticsImg} alt="Clearance and forwarding logistics" className="service-page__hero-image" />
            <div className="service-page__hero-overlay" aria-hidden="true" />
          </div>
          <div className="service-page__hero-content">
            <h1 className="service-page__hero-title">Clearance & Forwarding</h1>
            <p className="service-page__hero-intro">
              Jitihada Enterprises provides efficient customs clearance and forwarding services, ensuring your goods move smoothly across borders.
            </p>
          </div>
        </div>
        <div className="service-page__container">
          <div className="service-page__content">
            <p className="service-page__text">
              We handle all documentation, compliance checks, and logistics coordination, saving time and reducing delays. Our team ensures your cargo reaches its destination safely, on time, and in full compliance with regulations.
            </p>
            <h2 className="service-page__heading">Our Freight Services</h2>
            <div className="service-page__row">
              <div className="service-page__row-text">
                <h3 className="service-page__subheading">Air Freight</h3>
                <p className="service-page__text">
                  Our air freight services ensure fast and secure transportation of goods by air. Ideal for time-sensitive shipments, we handle all cargo documentation, airport logistics, and customs clearance to guarantee timely delivery across domestic and international destinations.
                </p>
              </div>
              <div className="service-page__row-image-wrap">
                <img src={airFreightImg} alt="Air freight and cargo logistics" className="service-page__row-image" />
              </div>
            </div>
            <div className="service-page__row service-page__row--image-left">
              <div className="service-page__row-image-wrap">
                <img src={seaFreightImg} alt="Sea freight and maritime shipping" className="service-page__row-image" />
              </div>
              <div className="service-page__row-text">
                <h3 className="service-page__subheading">Sea Freight</h3>
                <p className="service-page__text">
                  Our sea freight services provide reliable and cost-effective shipping for bulk and containerized cargo. From port handling to vessel scheduling and customs clearance, we manage the entire process to ensure your goods move smoothly across international waters.
                </p>
              </div>
            </div>
            <div className="service-page__row">
              <div className="service-page__row-text">
                <h3 className="service-page__subheading">Road Freight</h3>
                <p className="service-page__text">
                  Our road freight services offer flexible and efficient transportation of goods via trucks and trailers. Perfect for both short and long-distance deliveries, we ensure safe handling, route optimization, and on-time delivery for all types of cargo.
                </p>
              </div>
              <div className="service-page__row-image-wrap">
                <img src={roadFreightImg} alt="Road freight and truck logistics" className="service-page__row-image" />
              </div>
            </div>
            <p className="service-page__note">
              From customs clearance to end-to-end forwarding, we support your supply chain with expertise and reliability.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ClearanceForwarding;
