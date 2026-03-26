import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contentRef} className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
      <div className="text-center z-10 px-4">
        <h1 className="hero-element text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          React <span className="text-purple-500">&</span> Tailwind
        </h1>
        <p className="hero-element text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
          Supercharged with GSAP animations for the ultimate frontend stack.
        </p>
        <button className="hero-element px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors cursor-pointer group">
          Get Started
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">-&gt;</span>
        </button>
      </div>
      
      {/* Decorative background circle */}
      <div className="hero-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[100px] rounded-full point-events-none"></div>
    </section>
  );
}
