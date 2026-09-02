import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Central Gold Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#C89B3C] rounded-full"
        style={{
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px #C89B3C',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isClicked ? 0.7 : isHovered ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#C89B3C]/50"
        style={{
          transform: 'translate(-50%, -50%)',
          backdropFilter: isHovered ? 'blur(1px)' : 'none',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(200, 155, 60, 0.1)' : 'rgba(200, 155, 60, 0.02)',
          borderColor: isHovered ? 'rgba(200, 155, 60, 0.8)' : 'rgba(200, 155, 60, 0.3)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 200,
          mass: 0.2,
        }}
      />
    </div>
  );
};
