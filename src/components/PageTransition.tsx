import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const bluePanelRef = useRef<HTMLDivElement | null>(null);
  const yellowPanelRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Scroll window to top on route change
    window.scrollTo(0, 0);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const blue = bluePanelRef.current;
    const yellow = yellowPanelRef.current;
    if (!blue || !yellow) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

    // Sweep across screen (0.7s total)
    tl.set([blue, yellow], { display: 'block', xPercent: -100 })
      .to(blue, {
        xPercent: 0,
        duration: 0.35
      })
      .to(
        yellow,
        {
          xPercent: 0,
          duration: 0.35
        },
        '-=0.25'
      )
      .to(blue, {
        xPercent: 100,
        duration: 0.35
      })
      .to(
        yellow,
        {
          xPercent: 100,
          duration: 0.35,
          onComplete: () => {
            gsap.set([blue, yellow], { display: 'none', xPercent: -100 });
          }
        },
        '-=0.25'
      );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <>
      {/* Wipe Panels */}
      <div
        ref={bluePanelRef}
        className="fixed inset-0 z-[9990] bg-[#0025ff] hidden pointer-events-none will-change-transform"
        aria-hidden="true"
      />
      <div
        ref={yellowPanelRef}
        className="fixed inset-0 z-[9991] bg-[#ffcc00] hidden pointer-events-none will-change-transform"
        aria-hidden="true"
      />

      {children}
    </>
  );
};
