import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports hover (not touch)
    const mediaQuery = window.matchMedia('(hover: hover)');
    setIsTouchDevice(!mediaQuery.matches);
    if (!mediaQuery.matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;
    let isActive = true;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('thermal-lens') ||
        target.classList.contains('hover-lift') ||
        target.classList.contains('group')
      );
      
      setIsHovering(isInteractive);
    };

    // Smooth animation loop with better performance
    const animate = () => {
      if (!isActive) return;
      
      // Cursor follows mouse more closely (higher factor = more responsive)
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;
      
      // Ring follows with slight delay for trailing effect
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      // Use transform3d for GPU acceleration - much smoother
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Start animation
    animate();

    return () => {
      isActive = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor dot - follows precisely */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-[9999] top-0 left-0 will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? '24px' : '12px',
          height: isHovering ? '24px' : '12px',
          background: isHovering 
            ? 'rgba(255, 143, 0, 0.5)' 
            : 'rgba(255, 179, 0, 0.9)',
          mixBlendMode: 'screen',
          borderRadius: '50%',
          boxShadow: isHovering 
            ? '0 0 20px rgba(255, 143, 0, 0.6), 0 0 40px rgba(255, 143, 0, 0.3)'
            : '0 0 10px rgba(255, 179, 0, 0.8), 0 0 20px rgba(255, 179, 0, 0.4)',
          transition: 'width 0.15s ease-out, height 0.15s ease-out, background 0.15s ease-out, opacity 0.2s ease-out',
        }}
      />
      
      {/* Outer ring - trailing effect */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed z-[9998] top-0 left-0 will-change-transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovering ? '50px' : '32px',
          height: isHovering ? '50px' : '32px',
          border: `2px solid ${isHovering ? 'rgba(255, 179, 0, 0.7)' : 'rgba(255, 179, 0, 0.5)'}`,
          borderRadius: '50%',
          boxShadow: isHovering
            ? 'inset 0 0 10px rgba(255, 143, 0, 0.3), 0 0 15px rgba(255, 143, 0, 0.2)'
            : 'inset 0 0 5px rgba(255, 179, 0, 0.2)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, border-color 0.2s ease-out, opacity 0.2s ease-out',
        }}
      />
    </>
  );
}
