import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'view' | 'drag'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device (hide on mobile)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const val = cursorTarget.getAttribute('data-cursor');
        if (val === 'view') setCursorType('view');
        else if (val === 'drag') setCursorType('drag');
        else setCursorType('hover');
        return;
      }

      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing spring for the cursor tracker
  useEffect(() => {
    if (isTouchDevice) return;
    let animId: number;

    const follow = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const isSpecial = cursorType === 'view' || cursorType === 'drag';
  const isHover = cursorType === 'hover';

  return (
    <>
      {/* 1. Center Core Yellow Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#ffcc00] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#ffcc00] transition-opacity duration-200"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          opacity: isSpecial ? 0 : 1
        }}
      />

      {/* 2. Trailing Tracker Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${
          isSpecial
            ? 'w-16 h-16 bg-[#0025ff] text-white text-xs font-bold shadow-[0_0_20px_rgba(0,37,255,0.7)]'
            : isHover
            ? 'w-12 h-12 border-2 border-[#ffcc00] bg-[#ffcc00]/15 shadow-[0_0_15px_rgba(255,204,0,0.5)]'
            : 'w-8 h-8 border border-[#0025ff] bg-[#0025ff]/5'
        }`}
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`
        }}
      >
        {cursorType === 'view' && <span>View</span>}
        {cursorType === 'drag' && <span>Drag</span>}
      </div>
    </>
  );
};
