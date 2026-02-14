import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/ServicePage.css';

const auditImg = `${process.env.PUBLIC_URL}/assets/images/audt.jpg`;

function AuditingServices() {
  return (
    <div className="App">
      <Navbar />
      <main className="service-page">
        <div className="service-page__container">
          <Link to="/#services" className="service-page__back">← Back to Services</Link>
          <header className="service-page__header">
            <h1 className="service-page__title">Auditing Services</h1>
            <p className="service-page__intro">
              Our professional auditing services help businesses maintain transparency, accuracy, and regulatory compliance.
            </p>
          </header>
          <div className="service-page__image-wrap">
            <img src={auditImg} alt="Professional auditing services" className="service-page__image" />
          </div>
          <div className="service-page__content">
            <p className="service-page__text">
              We provide comprehensive financial and operational audits, identify areas for improvement, and offer actionable recommendations to enhance efficiency, accountability, and business performance.
            </p>
            <p className="service-page__note">
              Partner with us for thorough, independent audits that support sound decision-making and sustained growth.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AuditingServices;
