import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Certificates from './pages/Certificates';
import Achievements from './pages/Achievements';
import CursorTrail from './components/CursorTrail';

import { useEffect } from 'react';

const clickAudioBase64 = "data:audio/mp3;base64,//NwwAAABcAAANIAAAAEAAAIgAAnMv//EADoAAADoAAB0L//wgAAAcAAANf//8IAAAOAAADX//4gAAHAAA/j/+IAAAIAAAf///iAAACAAAA///4gAAAQQAKAAX/iAAABAAA/wAB/4gAAAQAACgAF/4gAAAQAAP8AAf//NwwBAAB8AAANIAAAAEAAASgAAf//EADIAAADsAAB2D//4gAAIAAAH//8IAAAOAAADf//+IAAAYAAA/+//EAAADAAAO//+EAAAGAAAP///hAAABAAAH///4QAAAQAADP//4QAAAQAAA///8IAAAGAAB+AAQ//Nw4EAAA4AAANIAAAAEAAASgAACAAEAAAAIAAAAn//5QAAAQAAA/AAEAAB//38IAAAHAAAH8AAP//EADIAAADcAAB6D//+EAAAMAAAP//4gAAIAAAH//+IAAAIAAAf///iAAAPAAAXwAAN//Nw4IAAAsAAANIAAAAQAAAIAAB//4gAAAQAAA/+//EAAAOAAAPAAf//zcA";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Reuse single audio instance to avoid lag
    const audio = new Audio(clickAudioBase64);
    audio.volume = 0.15;

    const playClickSound = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    const spawnRipple = (e) => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: rgba(56, 0, 194, 0.25);
        pointer-events: none;
        z-index: 99999;
        transform: scale(0);
        animation: ripple-pop 0.5s ease-out forwards;
      `;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
      playClickSound();
    };

    // Inject ripple keyframe once
    if (!document.getElementById('ripple-style')) {
      const style = document.createElement('style');
      style.id = 'ripple-style';
      style.textContent = `
        @keyframes ripple-pop {
          0%   { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    document.addEventListener('mousedown', spawnRipple);
    return () => document.removeEventListener('mousedown', spawnRipple);
  }, []);

  return (
    <>
      <CursorTrail />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="education" element={<Education />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="achievements" element={<Achievements />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
