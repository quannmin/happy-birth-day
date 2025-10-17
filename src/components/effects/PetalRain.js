import React, { useEffect } from 'react';
import './PetalRain.css';

function PetalRain() {
  useEffect(() => {
    const colors = ['#FFB6C1', '#E8A0BF', '#D4B5E8', '#F5D9E5', '#E6C9F0'];
    const container = document.querySelector('.petal-rain-container');

    if (!container) return;

    // Create petal pieces
    for (let i = 0; i < 50; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal-rain-piece';
      petal.innerHTML = '🌸';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.fontSize = (Math.random() * 20 + 15) + 'px';
      petal.style.animationDelay = Math.random() * 5 + 's';
      petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
      petal.style.opacity = Math.random() * 0.6 + 0.3;
      container.appendChild(petal);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div className="petal-rain-container"></div>;
}

export default PetalRain;
