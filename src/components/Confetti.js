import React, { useEffect } from 'react';
import './Confetti.css';

function Confetti() {
  useEffect(() => {
    const colors = ['#FFB6C1', '#FFC0CB', '#FFD700', '#FFF0E1', '#E6A8D7', '#B4A7D6'];
    const confettiContainer = document.querySelector('.confetti-container');

    if (!confettiContainer) return;

    // Create confetti pieces
    for (let i = 0; i < 80; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      confettiContainer.appendChild(confetti);
    }

    return () => {
      if (confettiContainer) {
        confettiContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className="confetti-container"></div>;
}

export default Confetti;
