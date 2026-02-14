import React from 'react';
import {
  FaCheckCircle,
  FaTag,
  FaTruck,
  FaCertificate,
  FaUsers,
  FaClock,
} from 'react-icons/fa';
import '../css/WhyChoose.css';

const reasons = [
  {
    id: 'reliable',
    title: 'Reliable and Consistent Supply',
    Icon: FaCheckCircle,
  },
  {
    id: 'pricing',
    title: 'Competitive Market Pricing',
    Icon: FaTag,
  },
  {
    id: 'logistics',
    title: 'Strong Logistics & Transit Network',
    Icon: FaTruck,
  },
  {
    id: 'quality',
    title: 'Commitment to Quality & Compliance',
    Icon: FaCertificate,
  },
  {
    id: 'team',
    title: 'Professional and Customer-Focused Team',
    Icon: FaUsers,
  },
  {
    id: 'delivery',
    title: 'Timely Delivery and Operational Efficiency',
    Icon: FaClock,
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <h2 className="why-choose__title">Why Choose Jitihada Enterprises?</h2>
        <ul className="why-choose__list">
          {reasons.map((item) => {
            const IconComponent = item.Icon;
            return (
              <li key={item.id} className="why-choose__item">
                <span className="why-choose__icon" aria-hidden="true">
                  <IconComponent />
                </span>
                <span className="why-choose__label">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <p className="why-choose__footer">
          We prioritize long-term partnerships built on trust, performance, and accountability.
        </p>
      </div>
    </section>
  );
}

export default WhyChoose;
