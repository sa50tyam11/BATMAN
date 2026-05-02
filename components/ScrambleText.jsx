// components/ScrambleText.jsx
'use client'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// The characters it will cycle through before revealing the real letters
const CHARACTERS = "!<>-_\\/[]{}—=+*^?#________";

export default function ScrambleText({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    let animationFrame = null;

    const animate = () => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            // Ignore spaces so the layout doesn't jump around wildly
            if (letter === " ") return " ";
            
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      // Stop animation when all letters are revealed
      if (iteration >= text.length) {
        cancelAnimationFrame(animationFrame);
        return;
      }

      // Speed of the reveal. Lower number = slower reveal. 
      iteration += 1 / 3; 
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, text]);

  return (
    <p ref={ref} className={className}>
      {displayText}
    </p>
  );
}