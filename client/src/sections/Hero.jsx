// client/src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import HeroMockup from '../assets/images/product-sculptural-lighting.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-image"></div>
      <div className="video-overlay"></div>
      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">
            Let's build it together.
          </h1>
          <p className="hero-description">
            Your vision, made real right here in Grande Prairie. We're your partners in creation.
            We provide the tools, the expertise, and the community support to turn your idea
            into a product you can hold and your neighbours can buy.
          </p>
          <Link
            to="services"
            smooth={true}
            duration={1200}
            offset={-80}
            className="btn btn-primary hero-cta"
          >
            Explore the Ecosystem
          </Link>
        </div>
        <div className="hero-mockup-wrap" aria-hidden="true">
          <img
            src={HeroMockup}
            className="hero-mockup"
            alt="3D printed sculptural lighting sample"
            width="680"
            height="520"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
