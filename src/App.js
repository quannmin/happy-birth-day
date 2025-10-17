import React, { useState } from 'react';
import './App.css';
import MusicControl from './components/MusicControl';
import IntroScene from './components/scenes/IntroScene';
import InteractiveScene from './components/scenes/InteractiveScene';
import GiftScene from './components/scenes/GiftScene';
import MemoryGallery from './components/scenes/MemoryGallery';
import LetterScene from './components/scenes/LetterScene';
import FinalScene from './components/scenes/FinalScene';
import PetalRain from './components/effects/PetalRain';

function App() {
  const [currentScene, setCurrentScene] = useState(0);
  const [showPetals, setShowPetals] = useState(false);

  const scenes = [
    <IntroScene onComplete={() => setCurrentScene(1)} />,
    <InteractiveScene onComplete={() => setCurrentScene(2)} />,
    <GiftScene onComplete={() => {
      setShowPetals(true);
      setTimeout(() => setCurrentScene(3), 1000);
    }} />,
    <MemoryGallery onComplete={() => setCurrentScene(4)} />,
    <LetterScene onComplete={() => setCurrentScene(5)} />,
    <FinalScene onReplay={() => setCurrentScene(0)} />
  ];

  return (
    <div className="App">
      <MusicControl />
      {showPetals && <PetalRain />}

      <div className="scene-container">
        {scenes[currentScene]}
      </div>
    </div>
  );
}

export default App;
