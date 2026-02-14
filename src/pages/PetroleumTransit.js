import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ServicePage.css';

const safetyImg = `${process.env.PUBLIC_URL}/assets/images/fuel.jpg`;
const complianceImg = `${process.env.PUBLIC_URL}/assets/images/trans2.jpeg`;
const reliabilityImg = `${process.env.PUBLIC_URL}/assets/images/se1.jpeg`;

export function PetroleumTransitContent() {
  return (
    <main className="service-page">
      <div className="service-page__container">
        <header className="service-page__header">
          <h1 className="service-page__title">Petroleum Transit</h1>
          <p className="service-page__intro">
            Reliable and compliant transportation of petroleum products for your business.
          </p>
        </header>
        <div className="service-page__content">
          <p className="service-page__text">
            We provide secure handling, full regulatory compliance, and on-time delivery to keep your supply chain moving. Our team ensures petroleum products are transported safely and in line with all applicable standards and documentation requirements.
          </p>
          <h2 className="service-page__heading">Petroleum Transit Services</h2>
          <div className="service-page__cards-grid">
            <div className="service-page__card">
              <div className="service-page__card-image-wrap">
                <img src={safetyImg} alt="Safety and handling of petroleum" className="service-page__card-image" />
              </div>
              <div className="service-page__card-body">
                <h3 className="service-page__card-title">1. Safety &amp; Handling</h3>
                <p className="service-page__card-desc">
                  Secure handling and transportation of petroleum products. Adherence to strict safety standards to prevent spills and hazards.
                </p>
              </div>
            </div>
            <div className="service-page__card">
              <div className="service-page__card-image-wrap">
                <img src={complianceImg} alt="Regulatory compliance in petroleum transit" className="service-page__card-image" />
              </div>
              <div className="service-page__card-body">
                <h3 className="service-page__card-title">2. Regulatory Compliance</h3>
                <p className="service-page__card-desc">
                  Full compliance with all petroleum transport regulations and legal requirements. Proper documentation and certified transit processes.
                </p>
              </div>
            </div>
            <div className="service-page__card">
              <div className="service-page__card-image-wrap">
                <img src={reliabilityImg} alt="Reliable petroleum delivery" className="service-page__card-image" />
              </div>
              <div className="service-page__card-body">
                <h3 className="service-page__card-title">3. Reliability &amp; Timeliness</h3>
                <p className="service-page__card-desc">
                  On-time delivery to ensure uninterrupted supply chains. Reliable logistics planning for consistent and efficient service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PetroleumTransit() {
  return (
    <div className="App">
      <Navbar />
      <PetroleumTransitContent />
      <Footer />
    </div>
  );
}

export default PetroleumTransit;
