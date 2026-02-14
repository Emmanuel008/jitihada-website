import React from 'react';
import '../styles/Hero.css';

const heroImage = `${process.env.PUBLIC_URL}/assets/images/sanane.png`;

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__image-wrap">
        <img
          src={heroImage}
          alt="Jitihada"
          className="hero__image"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>
      <div className="hero__content">
        <p className="hero__caption">
          Powering Agriculture. Fueling Industries. Delivering Excellence.
        </p>
      </div>
    </section>
  );
}

export default Hero;
