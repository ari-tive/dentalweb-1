import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function LoadingBar() {
  const { pathname } = useLocation();
  const [loadingState, setLoadingState] = useState('idle'); // 'idle', 'loading', 'fading'
  const [duration, setDuration] = useState(600);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const randomDur = Math.floor(Math.random() * 600) + 400; // 400ms - 1000ms
    setDuration(randomDur);
    setLoadingState('loading');

    const loadTimer = setTimeout(() => {
      setLoadingState('fading');
      const fadeTimer = setTimeout(() => {
        setLoadingState('idle');
      }, 500); // 0.5s fade out length for a premium feel
    }, randomDur);

    return () => {
      clearTimeout(loadTimer);
    }; 
  }, [pathname]);

  if (loadingState === 'idle') return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading-width {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}} />
      <div 
        className={`fixed inset-0 z-[9999] bg-surface-bright flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${loadingState === 'fading' ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="font-headline text-2xl md:text-3xl text-primary font-bold tracking-widest uppercase mb-4">
            Smile's Clinic
          </h1>
          <div className="w-48 md:w-64 h-[2px] bg-primary/20 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-primary origin-left"
              style={{ animation: (loadingState === 'loading' || loadingState === 'fading') ? `loading-width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) forwards` : 'none' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
