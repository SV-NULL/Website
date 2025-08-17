'use client';
import { useState, useEffect } from 'react';

const words = [
  'HBO-ICT op de CHE',
  'Community',
  'Connectie met bedrijven',
  'Borrels',
  'Leerzame activiteiten',
  'Commissies',
  'Reizen',
];

export default function RotatingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayText.length < words[wordIndex].length) {
        timeout = setTimeout(
          () => setDisplayText(words[wordIndex].slice(0, displayText.length + 1)),
          100
        );
      } else {
        // wacht even voordat het volgende woord start
        timeout = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(words[wordIndex].slice(0, displayText.length - 1)),
          50
        );
      } else {
        setWordIndex((wordIndex + 1) % words.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, wordIndex]);

  return (
    <p className="text-gray-400 sm:text-xl text-center inline-block transition-all duration-500">
      Dè studievereniging voor{' '}
      <span className="text-yellow-500">
        {displayText}
        <span className="ml-1 mb-1 inline-block w-2 h-5 bg-yellow-500 animate-blink align-middle"></span>
      </span>
    </p>
  );
}
