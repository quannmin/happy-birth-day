import React, { useState } from 'react';
import './App.css';
import MusicControl from './components/MusicControl';
import PronounSwitcher from './components/PronounSwitcher';
import IntroScene from './components/scenes/IntroScene';
import InteractiveScene from './components/scenes/InteractiveScene';
import GiftScene from './components/scenes/GiftScene';
import MemoryGallery from './components/scenes/MemoryGallery';
import LetterScene from './components/scenes/LetterScene';
import FinalScene from './components/scenes/FinalScene';
import PetalRain from './components/effects/PetalRain';
import { PronounProvider } from './contexts/PronounContext';

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
    <PronounProvider>
      <div className="App">
        <MusicControl />
        <PronounSwitcher />
        {showPetals && <PetalRain />}

        <div className="scene-container">
          {scenes[currentScene]}
        </div>
      </div>
    </PronounProvider>
  );
}

export default App;
