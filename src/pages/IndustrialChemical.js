import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/ServicePage.css';

const chemicalImg = `${process.env.PUBLIC_URL}/assets/images/mbs.avif`;

function IndustrialChemical() {
  return (
    <div className="App">
      <Navbar />
      <main className="service-page">
        <div className="service-page__container">
          <Link to="/#services" className="service-page__back">← Back to Services</Link>
          <header className="service-page__header">
            <h1 className="service-page__title">Industrial Chemical Supply</h1>
            <p className="service-page__intro">
              Jitihada Enterprises supplies industrial chemicals for various sectors, including METABISULPHITE (MBS) and other quality products.
            </p>
          </header>
          <div className="service-page__image-wrap">
            <img src={chemicalImg} alt="Industrial chemicals - METABISULPHITE (MBS)" className="service-page__image" />
          </div>
          <div className="service-page__content">
            <h2 className="service-page__heading">METABISULPHITE (MBS)</h2>
            <p className="service-page__text">
              We provide high-quality sodium metabisulphite for industrial applications including food preservation, water treatment, and manufacturing.
            </p>
            <p className="service-page__note">
              Our chemicals meet industry standards and are supplied with proper documentation and safety information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default IndustrialChemical;
