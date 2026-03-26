import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function SmoothScroll() {
  const targetScroll = useRef(window.scrollY);
  const currentScroll = useRef(window.scrollY);
  const rafId = useRef(null);
  const { pathname } = useLocation();

  // Reset scroll on route change
  useEffect(() => {
    targetScroll.current = 0;
    currentScroll.current = 0;
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Disable on mobile/touch devices as they have native momentum
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    const update = () => {
      const diff = targetScroll.current - currentScroll.current;
      
      if (Math.abs(diff) > 0.1) {
        currentScroll.current = lerp(currentScroll.current, targetScroll.current, 0.1); // 0.1 is the smoothness factor
        window.scrollTo(0, currentScroll.current);
        rafId.current = requestAnimationFrame(update);
      } else {
        currentScroll.current = targetScroll.current;
        rafId.current = null;
      }
    };

    const handleWheel = (e) => {
      // Don't intercept if scrolling inside the chatbot
      if (e.target.closest('.chatbot-messages')) return;

      e.preventDefault();
      
      // Update target based on wheel delta
      // Clamp target to page bounds
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll.current = Math.max(0, Math.min(maxScroll, targetScroll.current + e.deltaY));

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Update target on manual scroll (e.g. anchor links)
    const handleScroll = () => {
      if (!rafId.current) {
        targetScroll.current = window.scrollY;
        currentScroll.current = window.scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return null;
}
