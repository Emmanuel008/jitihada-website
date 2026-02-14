import React from 'react';
import { FaEye, FaFlag, FaHandshake } from 'react-icons/fa';
import '../styles/VisionMission.css';

const commitmentItems = [
  'Supporting farmers in improving productivity',
  'Powering industries with reliable materials',
  'Strengthening supply chains',
  'Contributing to national economic growth',
];

const cards = [
  {
    id: 'vision',
    Icon: FaEye,
    title: 'Our Vision',
    content: 'To become a leading supplier and logistics partner in Tanzania and across East Africa, driving agricultural growth and industrial development through reliable supply solutions.',
  },
  {
    id: 'mission',
    Icon: FaFlag,
    title: 'Our Mission',
    content: 'To provide high-quality agricultural inputs, industrial chemicals, and petroleum transit services with integrity, efficiency, and professionalism.',
  },
  {
    id: 'commitment',
    Icon: FaHandshake,
    title: 'Our Commitment',
    intro: 'At Jitihada Enterprises Company Limited, we are committed to:',
    items: commitmentItems,
  },
];

function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vision-mission__container">
        <div className="vision-mission__grid">
          {cards.map((card) => {
            const IconComponent = card.Icon;
            return (
              <article key={card.id} className="vision-mission__card">
                <div className="vision-mission__icon-wrap">
                  <IconComponent className="vision-mission__icon" aria-hidden="true" />
                </div>
                <h2 className="vision-mission__heading">{card.title}</h2>
                {card.content && (
                  <p className="vision-mission__text">{card.content}</p>
                )}
                {card.items && (
                  <>
                    <p className="vision-mission__text vision-mission__intro">{card.intro}</p>
                    <ul className="vision-mission__list">
                      {card.items.map((item, index) => (
                        <li key={index} className="vision-mission__item">{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
