import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MagneticCursorProps {
  children: React.ReactNode;
}

interface CursorPosition {
  x: number;
  y: number;
}

export const MagneticCursor: React.FC<MagneticCursorProps> = ({ children }) => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const interactiveElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Find interactive elements
    const updateInteractiveElements = () => {
      const elements = document.querySelectorAll(
        [
          'a[href]',
          'button',
          '[role="button"]',
          'input',
          'textarea',
          'select',
          '[tabindex]:not([tabindex="-1"])',
          '.interactive',
        ].join(', ')
      );
      interactiveElementsRef.current = Array.from(elements) as HTMLElement[];
    };

    updateInteractiveElements();
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const checkProximity = () => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      let isNearInteractive = false;
      const threshold = 240;

      interactiveElementsRef.current.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(position.x - centerX, 2) + Math.pow(position.y - centerY, 2)
        );

        if (distance < threshold) {
          isNearInteractive = true;

          // Calculate magnetic pull
          const force = Math.max(0, (threshold - distance) / threshold);
          const pullX = (centerX - position.x) * force * 0.3;
          const pullY = (centerY - position.y) * force * 0.3;

          cursor.style.transform = `translate(${position.x + pullX}px, ${
            position.y + pullY
          }px) scale(${1 + force * 0.5})`;
        }
      });

      setIsActive(isNearInteractive);

      if (!isNearInteractive) {
        cursor.style.transform = `translate(${position.x}px, ${position.y}px) scale(1)`;
      }
    };

    const animationFrame = requestAnimationFrame(checkProximity);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      {children}
      {isVisible && (
        <motion.div
          ref={cursorRef}
          className='pointer-events-none fixed z-[9999] rounded-full mix-blend-difference backdrop-blur-sm border border-white/20'
          style={{
            left: -20,
            top: -20,
            width: 40,
            height: 40,
          }}
          animate={{
            scale: isActive ? 1.8 : 1,
            backgroundColor: isActive
              ? 'rgba(0, 255, 255, 0.2)'
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: isActive
              ? 'blur(2px) contrast(1.1) brightness(1.1)'
              : 'blur(1px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
          }}
        />
      )}
    </>
  );
};
