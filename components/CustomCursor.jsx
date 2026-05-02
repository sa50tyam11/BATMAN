// components/CustomCursor.jsx
'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: 'spring', mass: 0.1, stiffness: 150, damping: 15 }}
    />
  );
}