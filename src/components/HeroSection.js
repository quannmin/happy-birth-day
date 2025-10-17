import React, { useEffect, useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <section className={`hero-section ${visible ? 'visible' : ''}`}>
      <div className="balloons-container">
        <div className="balloon balloon-1">🎈</div>
        <div className="balloon balloon-2">🎈</div>
        <div className="balloon balloon-3">🎈</div>
        <div className="balloon balloon-4">🎈</div>
        <div className="balloon balloon-5">🎈</div>
      </div>

      <div className="sparkles">
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Happy Birthday<br />
          <span className="my-love">My Love</span>
          <span className="heart-icon">❤️</span>
        </h1>
        <p className="hero-subtitle">
          To the most beautiful soul who lights up my world
        </p>
      </div>

      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  );
}

export default HeroSection;
