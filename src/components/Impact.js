import React from 'react';
import { FaSeedling, FaGasPump, FaHandshake, FaMapMarkedAlt } from 'react-icons/fa';
import '../styles/Impact.css';

const stats = [
  {
    id: 'fertilizers',
    value: '5,000+',
    unit: 'MT',
    label: 'Fertilizers Distributed',
    Icon: FaSeedling,
  },
  {
    id: 'fuel',
    value: '1,200+',
    label: 'Successful Fuel Transit Operations',
    Icon: FaGasPump,
  },
  {
    id: 'clients',
    value: '250+',
    label: 'Trusted Business Clients',
    Icon: FaHandshake,
  },
  {
    id: 'regions',
    value: '15+',
    label: 'Regions Served Across Tanzania',
    Icon: FaMapMarkedAlt,
  },
];

function Impact() {
  return (
    <section className="impact">
      <div className="impact__container">
        <div className="impact__grid">
          {stats.map((stat) => {
            const IconComponent = stat.Icon;
            return (
              <div key={stat.id} className="impact__card">
                <div className="impact__icon-wrap">
                  <IconComponent className="impact__icon" aria-hidden="true" />
                </div>
                <p className="impact__value">
                  {stat.value}
                  {stat.unit && <span className="impact__unit"> {stat.unit}</span>}
                </p>
                <p className="impact__label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Impact;
