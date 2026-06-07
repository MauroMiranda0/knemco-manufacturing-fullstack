// client/src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll';
import { motion as Motion } from 'framer-motion';
import { trackCtaClickContact } from '../utils/conversionEvents';
import heroMockup from '../assets/images/product-sculptural-lighting.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-image" aria-hidden="true"></div>
      <div className="video-overlay"></div>
      <div className="hero-content">
        <div className="hero-copy">
          <div>
            <h1 className="hero-title">
              Let's build it together.
            </h1>
            <p className="hero-description">
              Your vision, made real right here in Grande Prairie. We're your partners in creation.
              We provide the tools, the expertise, and the community support to turn your idea
              into a product you can hold and your neighbours can buy.
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={1200}
              offset={-80}
              className="btn btn-primary hero-cta"
              onClick={() => trackCtaClickContact('hero_primary_cta')}
            >
              Start Your Project
            </Link>
          </div>
          <Motion.div
            className="hero-mockup-wrap"
            aria-hidden="true"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <Motion.div
              className="hero-mockup-embed"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            >
              <video
                className="hero-mockup-video"
                src="/lamp-animation.mp4"
                poster={heroMockup}
                autoPlay
                muted
                loop
                playsInline
              />
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
