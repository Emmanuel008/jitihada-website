import React from 'react';
import { FaSeedling, FaGasPump, FaTruck, FaClipboardCheck } from 'react-icons/fa';
import '../styles/Services.css';

const fertilizerImg = `${process.env.PUBLIC_URL}/assets/images/fertlizer.jpg`;
const fuelImg = `${process.env.PUBLIC_URL}/assets/images/fuel.jpg`;
const logisticsImg = `${process.env.PUBLIC_URL}/assets/images/logisti.png`;
const auditImg = `${process.env.PUBLIC_URL}/assets/images/audt.jpg`;

const serviceSectionIds = {
  agricultural: 'agricultural-inputs',
  petroleum: 'petroleum-transit',
  clearance: 'clearance-forwarding',
  auditing: 'auditing-services',
};

const services = [
  {
    id: 'agricultural',
    Icon: FaSeedling,
    title: 'Agricultural Inputs Supply',
    image: fertilizerImg,
    imageAlt: 'Agricultural inputs and fertilizers',
    description: 'Premium fertilizers including DAP and UREA 46% to boost soil productivity and crop yields.',
  },
  {
    id: 'petroleum',
    Icon: FaGasPump,
    title: 'Petroleum Transit Services',
    image: fuelImg,
    imageAlt: 'Petroleum and fuel transit',
    description: 'Secure petrol and diesel transit with regulatory compliance and timely delivery.',
  },
  {
    id: 'clearance',
    Icon: FaTruck,
    title: 'Clearance & Forwarding',
    image: logisticsImg,
    imageAlt: 'Clearance and forwarding logistics',
    description: 'Customs clearance and forwarding so your goods move smoothly across borders.',
  },
  {
    id: 'auditing',
    Icon: FaClipboardCheck,
    title: 'Auditing Services',
    image: auditImg,
    imageAlt: 'Professional auditing services',
    description: 'Financial and operational audits for transparency, compliance, and better performance.',
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <h2 className="services__title">Our Core Services</h2>
        <div className="services__grid">
          {services.map((service) => {
            const IconComponent = service.Icon;
            const sectionId = serviceSectionIds[service.id];
            const cardContent = (
              <>
                <div className="service-card__image-wrap">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="service-card__image"
                  />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__heading">
                    <span className="service-card__icon" aria-hidden="true">
                      <IconComponent />
                    </span>
                    {service.title}
                  </h3>
                  <p className="service-card__description">{service.description}</p>
                  <span className="service-card__more">More →</span>
                </div>
              </>
            );
            return (
              <article key={service.id} className="service-card service-card--clickable">
                <a href={`#${sectionId}`} className="service-card__link">
                  {cardContent}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
