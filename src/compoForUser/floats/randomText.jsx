'use client';
import { useMemo, useEffect, useState, useCallback } from 'react';

const CHARACTER_SET = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>,';

const TextRandomizer = ({ content }) => {
  const [displayText, setDisplayText] = useState('');
  
  const generateRandomCharacter = useCallback(
    () => CHARACTER_SET[Math.floor(Math.random() * CHARACTER_SET.length)],
    []
  );

  const createRandomString = useCallback(
    (length) => Array.from({ length }, generateRandomCharacter).join(''),
    [generateRandomCharacter]
  );

  const performAnimationSequence = useCallback(async () => {
    // Phase 1: Initial random characters
    const initialDelay = 300;
    const characterRevealInterval = 100;
    const randomCycleInterval = 500;
    
    // Start with random characters
    setDisplayText(createRandomString(content.length));
    
    // Cycle random characters for initial duration
    const cycleStartTime = performance.now();
    while (performance.now() - cycleStartTime < initialDelay) {
      await new Promise(r => setTimeout(r, randomCycleInterval));
      setDisplayText(createRandomString(content.length));
    }
    
    // Phase 2: Reveal actual text character by character
    for (let position = 0; position < content.length; position++) {
      await new Promise(r => setTimeout(r, characterRevealInterval));
      setDisplayText(prev => 
        content.slice(0, position + 1) + 
        createRandomString(content.length - position - 1)
      );
    }
  }, [content, createRandomString]);

  useEffect(() => { 
    performAnimationSequence();
  }, [content, performAnimationSequence]);

  return <span className="inline-block relative">{displayText}</span>;
};

export const RandomizedTextEffect = ({ text }) => (
  <TextRandomizer content={text} />
);