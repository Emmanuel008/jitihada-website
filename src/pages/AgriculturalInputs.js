import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AgriculturalInputs.css';

const dapImage = `${process.env.PUBLIC_URL}/assets/images/samq.jpg`;
const ureaImage = `${process.env.PUBLIC_URL}/assets/images/granularurea.webp`;
const chemicalImg = `${process.env.PUBLIC_URL}/assets/images/mbs.avif`;

export function AgriculturalInputsContent() {
  return (
    <main className="agricultural-page">
      <div className="agricultural-page__container">
        <header className="agricultural-page__section-header">
          <h2 className="agricultural-page__section-title">Agricultural Inputs Supply</h2>
          <p className="agricultural-page__section-intro">
            We supply premium-grade fertilizers to enhance soil productivity and maximize crop yields.
          </p>
        </header>
        <div className="agricultural-page__content">
          <h2 className="agricultural-page__heading">Our Products</h2>
          <div className="agricultural-page__cards-grid">
            <div className="agricultural-page__card">
              <div className="agricultural-page__card-image-wrap">
                <img src={dapImage} alt="DAP Diammonium Phosphate fertilizer" className="agricultural-page__card-image" />
              </div>
              <div className="agricultural-page__card-body">
                <h3 className="agricultural-page__card-title">DAP (Diammonium Phosphate)</h3>
                <p className="agricultural-page__card-desc">
                  DAP (Diammonium Phosphate) is a high-quality fertilizer containing nitrogen and phosphorus (18-46-0) that promotes strong root development, early plant growth, and improved crop performance. It is ideal for use during the early stages of planting and suitable for a wide range of crops.
                </p>
              </div>
            </div>
            <div className="agricultural-page__card">
              <div className="agricultural-page__card-image-wrap">
                <img src={ureaImage} alt="UREA 46% granular fertilizer" className="agricultural-page__card-image" />
              </div>
              <div className="agricultural-page__card-body">
                <h3 className="agricultural-page__card-title">UREA 46%</h3>
                <p className="agricultural-page__card-desc">
                  UREA 46% (46-0-0) is a high-nitrogen fertilizer that promotes strong plant growth, improves crop greening, and increases overall yield. It is fast-acting, easy to apply, and suitable for a wide range of crops.
                </p>
              </div>
            </div>
            <div className="agricultural-page__card">
              <div className="agricultural-page__card-image-wrap">
                <img src={chemicalImg} alt="Industrial chemicals - METABISULPHITE (MBS)" className="agricultural-page__card-image" />
              </div>
              <div className="agricultural-page__card-body">
                <h3 className="agricultural-page__card-title">Industrial Chemical Supply (METABISULPHITE – MBS)</h3>
                <p className="agricultural-page__card-desc">
                  We supply high-grade sodium metabisulphite (MBS) for food processing, water treatment, mining operations, industrial preservation, and chemical processing. Our products are handled and packaged to the highest standards, with full compliance and proper documentation.
                </p>
              </div>
            </div>
          </div>
          <p className="agricultural-page__note">
            Our fertilizers and industrial chemicals meet industry standards and are sourced from reputable manufacturers to ensure quality and performance.
          </p>
        </div>
      </div>
    </main>
  );
}

function AgriculturalInputs() {
  return (
    <div className="App">
      <Navbar />
      <AgriculturalInputsContent />
      <Footer />
    </div>
  );
}

export default AgriculturalInputs;
