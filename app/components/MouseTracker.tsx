"use client";

import { useEffect, useRef } from 'react';

export default function MouseTracker() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: Event) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const mouseEvent = e as MouseEvent;
        const container = document.querySelector('.pink_container') as HTMLElement;
        if (container) {
          const rect = container.getBoundingClientRect();
          const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
          const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
          
          // Clamp values to ensure they stay within bounds
          const clampedX = Math.max(0, Math.min(100, x));
          const clampedY = Math.max(0, Math.min(100, y));
          
          container.style.setProperty('--mouse-x', `${clampedX}%`);
          container.style.setProperty('--mouse-y', `${clampedY}%`);
          
          // Calculate rotation based on mouse position for dynamic effects
          const centerX = 50;
          const centerY = 50;
          const deltaX = clampedX - centerX;
          const deltaY = clampedY - centerY;
          const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
          container.style.setProperty('--mouse-rotation', rotation.toString());
          
          // Remove all transform effects to prevent section movement
          // Only keep the CSS custom properties for gradient effects
        }
      });
    };

    const handleMouseLeave = () => {
      const container = document.querySelector('.pink_container') as HTMLElement;
      if (container) {
        // Smoothly transition back to center when mouse leaves
        container.style.setProperty('--mouse-x', '50%');
        container.style.setProperty('--mouse-y', '50%');
        container.style.setProperty('--mouse-rotation', '0');
        // Remove transform reset since we're not using transforms anymore
      }
    };

    const container = document.querySelector('.pink_container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    }
  }, []);

  return null;
}
