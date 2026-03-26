import { Link } from 'react-router-dom';
import { BarChart2, Camera, Share2, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-slate-50 dark:bg-slate-950 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-10 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <div className="font-serif text-2xl font-semibold text-teal-800 dark:text-teal-300 mb-6 font-headline tracking-tight">Smile's Clinic</div>
          <p className="text-slate-500 dark:text-slate-400 font-sans text-sm leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
              Providing premium dental care at Marine Drive. Our focus is your comfort and long-term oral health.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="#" className="p-3 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
              <BarChart2 className="text-primary w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
              <Camera className="text-primary w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-primary/5 rounded-full hover:bg-primary/10 transition-colors">
              <Share2 className="text-primary w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-6 font-headline">Quick Links</h4>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-amber-700 transition-all p-2 inline-block" to="/">Home</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-amber-700 transition-all p-2 inline-block" to="/about">Our Team</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-amber-700 transition-all p-2 inline-block" to="/services">Services</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-amber-700 transition-all p-2 inline-block" to="/reviews">Testimonials</Link></li>
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-10 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm leading-relaxed">
            © 2026 Smile's Multi-speciality Dental Clinic. All rights reserved.
        </p>
        <p className="text-slate-400 dark:text-slate-500 font-sans text-xs mt-2 uppercase tracking-[0.2em]">
            made by <a href="https://aritive.online" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-bold">aritive</a>
        </p>
      </div>
    </footer>
  );
}
