import React, { useState } from 'react';
import AnimeCharacter from '../AnimeCharacter';
import './GiftScene.css';

function GiftScene({ onComplete }) {
  const [giftOpened, setGiftOpened] = useState(false);

  const handleGiftClick = () => {
    setGiftOpened(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="gift-scene">
      <div className="gift-content">
        <h2 className="gift-title">Anh có một món quà dành cho em...</h2>

        <div className="character-gift">
          <AnimeCharacter pose="gift" size="large" />
        </div>

        {!giftOpened ? (
          <div className="gift-box-clickable" onClick={handleGiftClick}>
            <div className="gift-box-large">🎁</div>
            <p className="gift-hint">Nhấn vào hộp quà! ✨</p>
          </div>
        ) : (
          <div className="gift-opened">
            <div className="sparkle-burst">
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
            </div>
            <h3 className="gift-reveal">Những kỷ niệm đẹp của chúng mình... 💖</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftScene;
