import React, { createContext, useContext, useState } from 'react';

const PronounContext = createContext();

export const usePronoun = () => {
  const context = useContext(PronounContext);
  if (!context) {
    throw new Error('usePronoun must be used within PronounProvider');
  }
  return context;
};

export const PronounProvider = ({ children }) => {
  const [isAlternate, setIsAlternate] = useState(false);

  const togglePronoun = () => {
    setIsAlternate(prev => !prev);
  };

  // Helper function to get the appropriate pronoun
  const t = (primary, alternate) => {
    return isAlternate ? alternate : primary;
  };

  return (
    <PronounContext.Provider value={{ isAlternate, togglePronoun, t }}>
      {children}
    </PronounContext.Provider>
  );
};
