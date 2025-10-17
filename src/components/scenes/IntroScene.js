import React, { useState, useEffect } from 'react';
import AnimeCharacter from '../AnimeCharacter';
import Confetti from '../Confetti';
import './IntroScene.css';

function IntroScene({ onComplete }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
    setTimeout(() => setShowButton(true), 3000);
  }, []);

  return (
    <div className={`intro-scene ${fadeIn ? 'fade-in' : ''}`}>
      <Confetti />

      <div className="intro-content">
        <h1 className="intro-title">
          <span className="title-line">Happy Birthday,</span>
          <span className="title-highlight">My Love</span>
          <span className="heart-emoji">💖</span>
        </h1>

        <div className="character-container">
          <AnimeCharacter pose="wave" size="large" />
        </div>

        <p className="intro-message">
          Chào em! Hôm nay là ngày đặc biệt của em đấy!
          <br />
          Anh có món quà đặc biệt dành cho em...
        </p>

        {showButton && (
          <button className="continue-btn" onClick={onComplete}>
            Tiếp tục ✨
          </button>
        )}
      </div>

      <div className="sparkles-intro">
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
      </div>
    </div>
  );
}

export default IntroScene;
