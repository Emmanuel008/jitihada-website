import React from 'react';
import '../css/About.css';

const aboutImage = `${process.env.PUBLIC_URL}/assets/images/fertlizer.jpg`;

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__main">
          <div className="about__content">
            <h2 className="about__title">About Us</h2>
            <p className="about__text">
              Jitihada Enterprises Company Limited is a trusted Tanzanian supply and logistics company specializing in the distribution of high-quality agricultural inputs and energy products. We are committed to supporting farmers, businesses, and industrial partners through reliable supply chains, competitive pricing, and efficient transit solutions.
            </p>
            <p className="about__text">
              With a strong focus on quality, transparency, and timely delivery, we serve clients across Tanzania and the region, ensuring that essential products reach their destination safely and on schedule.
            </p>
            <p className="about__text about__text--highlight">
              At Jitihada Enterprises, we believe that growth begins with reliable supply — and we exist to power that growth.
            </p>
          </div>
          <div className="about__image-wrap">
            <img src={aboutImage} alt="Jitihada Enterprises" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
