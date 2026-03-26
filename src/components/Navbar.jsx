import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X, Stethoscope } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Visit Us', path: '/visit' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="font-serif text-xl md:text-2xl font-bold text-teal-900 dark:text-teal-200 flex items-center gap-2">
          <Stethoscope className="text-primary w-6 h-6 shrink-0" />
          <span className="truncate">Smile's Clinic</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm uppercase tracking-widest transition-colors ${
                location.pathname === link.path
                  ? 'text-primary font-bold border-b-2 border-secondary'
                  : 'text-slate-500 dark:text-slate-400 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-primary/20 transition-all scale-95 hover:scale-100 min-h-[44px] flex items-center">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle (☰ to X animation) */}
        <button 
          className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span 
            className={`w-8 h-0.5 bg-primary transition-all duration-300 transform origin-center ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span 
            className={`w-8 h-0.5 bg-primary transition-all duration-300 ${
              isOpen ? 'opacity-0 -translate-x-full' : ''
            }`}
          ></span>
          <span 
            className={`w-8 h-0.5 bg-primary transition-all duration-300 transform origin-center ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay & Dropdown */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-white/98 dark:bg-slate-900/98 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[100vh] opacity-100 border-b border-outline-variant/10' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col pt-24 pb-12 px-8 space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-body text-2xl py-4 uppercase tracking-widest min-h-[44px] flex items-center justify-center transition-colors ${
                location.pathname === link.path
                  ? 'text-primary font-bold'
                  : 'text-slate-600 dark:text-slate-300 active:bg-primary/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/book" 
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 min-h-[44px] flex items-center justify-center"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Click Outside to Close */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
