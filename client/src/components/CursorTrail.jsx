import { useEffect, useRef } from 'react';

// Number of trail dots
const TRAIL_LENGTH = 14;

const CursorTrail = () => {
  const dotsRef = useRef([]);

  useEffect(() => {
    // Create trail dot elements
    const container = document.createElement('div');
    container.id = 'cursor-trail-container';
    container.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:99998;';
    document.body.appendChild(container);

    const dots = Array.from({ length: TRAIL_LENGTH }, (_, i) => {
      const dot = document.createElement('div');
      const size = Math.max(4, 12 - i * 0.7);
      const opacity = 1 - i / TRAIL_LENGTH;
      dot.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(88, 28, 255, ${opacity * 0.55});
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: left ${0.05 + i * 0.025}s ease, top ${0.05 + i * 0.025}s ease;
        will-change: left, top;
      `;
      container.appendChild(dot);
      return dot;
    });

    dotsRef.current = dots;

    let mouseX = -200;
    let mouseY = -200;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate: each dot chases the previous one with a slight lag
    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({ x: -200, y: -200 }));

    let raf;
    const animate = () => {
      positions[0].x += (mouseX - positions[0].x) * 0.35;
      positions[0].y += (mouseY - positions[0].y) * 0.35;

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.4;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.4;
      }

      dots.forEach((dot, i) => {
        dot.style.left = `${positions[i].x}px`;
        dot.style.top = `${positions[i].y}px`;
      });

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      container.remove();
    };
  }, []);

  return null;
};

export default CursorTrail;
