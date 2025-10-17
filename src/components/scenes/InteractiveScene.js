import React, { useState, useEffect } from 'react';
import AnimeCharacter from '../AnimeCharacter';
import './InteractiveScene.css';

function InteractiveScene({ onComplete }) {
  const [clickedItems, setClickedItems] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const items = [
    { id: 1, emoji: '💖', message: 'Em là ánh sáng trong cuộc đời anh', x: 15, y: 20 },
    { id: 2, emoji: '⭐', message: 'Em tỏa sáng như ngôi sao', x: 75, y: 25 },
    { id: 3, emoji: '🎈', message: 'Nụ cười em làm anh tan chảy', x: 30, y: 60 },
    { id: 4, emoji: '💝', message: 'Anh yêu em nhiều lắm', x: 65, y: 65 },
    { id: 5, emoji: '✨', message: 'Em thật tuyệt vời', x: 45, y: 40 },
    { id: 6, emoji: '🌸', message: 'Em là điều kỳ diệu nhất', x: 85, y: 50 }
  ];

  const handleItemClick = (item) => {
    if (!clickedItems.includes(item.id)) {
      setClickedItems([...clickedItems, item.id]);
      setCurrentMessage(item.message);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (clickedItems.length === items.length) {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  }, [clickedItems, items.length, onComplete]);

  const progress = Math.round((clickedItems.length / items.length) * 100);

  return (
    <div className="interactive-scene">
      <div className="interactive-header">
        <h2>Hãy nhấn vào các trái tim để nhận lời nhắn yêu thương 💕</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{clickedItems.length} / {items.length}</p>
      </div>

      <div className="character-side">
        <AnimeCharacter pose="smile" size="small" />
      </div>

      <div className="floating-items">
        {items.map((item) => (
          <div
            key={item.id}
            className={`floating-item ${clickedItems.includes(item.id) ? 'clicked' : ''}`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            onClick={() => handleItemClick(item)}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      {showMessage && (
        <div className="message-popup">
          <p>{currentMessage}</p>
        </div>
      )}
    </div>
  );
}

export default InteractiveScene;
