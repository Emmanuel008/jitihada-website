import React from 'react';
import { Link } from 'react-router-dom';
import { FaGasPump } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/ServicePage.css';

const fuelImg = `${process.env.PUBLIC_URL}/assets/images/fuel.jpg`;
const vehicleImg = `${process.env.PUBLIC_URL}/assets/images/vehicle.jpg`;

function PetroleumTransit() {
  return (
    <div className="App">
      <Navbar />
      <main className="service-page">
        <div className="service-page__hero">
          <Link to="/#services" className="service-page__back">← Back to Services</Link>
          <div className="service-page__hero-image-wrap">
            <img src={fuelImg} alt="Petroleum and fuel transit" className="service-page__hero-image" />
            <div className="service-page__hero-overlay" aria-hidden="true" />
          </div>
          <div className="service-page__hero-content">
            <span className="service-page__hero-icon" aria-hidden="true"><FaGasPump /></span>
            <h1 className="service-page__hero-title">Petroleum Transit Services</h1>
            <p className="service-page__hero-intro">
              Jitihada Enterprises provides reliable petrol and diesel transit solutions, ensuring secure and efficient transportation across regions.
            </p>
          </div>
        </div>
        <div className="service-page__container">
          <div className="service-page__content">
            <div className="service-page__row">
              <div className="service-page__row-text">
                <h2 className="service-page__heading">Our transit services guarantee</h2>
                <ul className="service-page__list">
                  <li>Safe fuel transportation</li>
                  <li>Compliance with regulatory standards</li>
                  <li>Timely delivery</li>
                  <li>Secure logistics management</li>
                  <li>Professional handling and monitoring</li>
                </ul>
              </div>
              <div className="service-page__row-image-wrap">
                <img src={vehicleImg} alt="Tanker truck for petroleum transit" className="service-page__row-image" />
              </div>
            </div>
            <p className="service-page__note">
              We understand the importance of fuel in driving businesses, and we are committed to maintaining uninterrupted supply chains.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PetroleumTransit;
