import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ServicePage.css';

const planningImg = `${process.env.PUBLIC_URL}/assets/images/audit2.jpeg`;
const executingImg = `${process.env.PUBLIC_URL}/assets/images/audt.jpg`;
const reportingImg = `${process.env.PUBLIC_URL}/assets/images/auditing.jpeg`;

export function AuditingServicesContent() {
  return (
    <main className="service-page">
      <div className="service-page__container">
        <header className="service-page__header">
          <h1 className="service-page__title">Auditing Services</h1>
          <p className="service-page__intro">
            Our professional auditing services help businesses maintain transparency, accuracy, and regulatory compliance.
          </p>
        </header>
        <div className="service-page__content">
          <p className="service-page__text">
            We provide comprehensive financial and operational audits, identify areas for improvement, and offer actionable recommendations to enhance efficiency, accountability, and business performance.
          </p>
          <h2 className="service-page__heading">Our Audit Process</h2>
          <div className="service-page__cards-grid">
            <div className="service-page__card">
              <div className="service-page__card-image-wrap">
                <img src={planningImg} alt="Planning the audit" className="service-page__card-image" />
              </div>
              <div className="service-page__card-body">
                <h3 className="service-page__card-title">Planning the Audit</h3>
                <p className="service-page__card-desc">
                  Understanding the organization, its operations, and internal controls. Identifying audit objectives, scope, and risks. Preparing the audit plan and audit program.
                </p>
              </div>
            </div>
            <div className="service-page__card">
              <div className="service-page__card-image-wrap">
                <img src={executingImg} alt="Executing the audit" className="service-page__card-image" />
              </div>
              <div className="service-page__card-body">
                <h3 className="service-page__card-title">Executing (Conducting) the Audit</h3>
                <p className="service-page__card-desc">
                  Collecting audit evidence through inspections, observations, inquiries, and tests. Evaluating internal controls and verifying records. Documenting findings and working papers.
                </p>
              </div>
            </div>
            <div className="service-page__card">
              <div className="service-page__card-image-wrap">
                <img src={reportingImg} alt="Reporting and follow-up" className="service-page__card-image" />
              </div>
              <div className="service-page__card-body">
                <h3 className="service-page__card-title">Reporting and Follow-Up</h3>
                <p className="service-page__card-desc">
                  Analyzing results and forming audit conclusions. Preparing and presenting the audit report with findings and recommendations. Following up to ensure corrective actions are implemented.
                </p>
              </div>
            </div>
          </div>
          <p className="service-page__note">
            Partner with us for thorough, independent audits that support sound decision-making and sustained growth.
          </p>
        </div>
      </div>
    </main>
  );
}

function AuditingServices() {
  return (
    <div className="App">
      <Navbar />
      <AuditingServicesContent />
      <Footer />
    </div>
  );
}

export default AuditingServices;
