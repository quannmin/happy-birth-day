import React, { useState, useEffect } from 'react';
import AnimeCharacter from '../AnimeCharacter';
import './FinalScene.css';

function FinalScene({ onReplay }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 500);
  }, []);

  return (
    <div className={`final-scene ${fadeIn ? 'fade-in' : ''}`}>
      <div className="final-content">
        <div className="character-final">
          <AnimeCharacter pose="smile" size="large" />
        </div>

        <h1 className="final-quote">
          "Happy Birthday, my love.<br />
          My heart will always celebrate you."
        </h1>

        <div className="final-message">
          <p>🌸 Yêu em mãi mãi 🌸</p>
        </div>

        <button className="replay-btn" onClick={onReplay}>
          🔄 Xem lại từ đầu
        </button>
      </div>

      <div className="floating-petals-final">
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
        <span className="petal-final">🌸</span>
      </div>

      <div className="sparkles-final">
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
      </div>
    </div>
  );
}

export default FinalScene;
