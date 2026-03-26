import { useEffect } from 'react';
import { MapPin, Clock, Phone, Map, ParkingCircle, Train, Accessibility } from 'lucide-react';

export default function Visit() {
  useEffect(() => {
    document.title = "Visit Us | Smile's Clinic";
  }, []);
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center mt-12 md:mt-0">
        <h1 className="font-headline text-[clamp(2rem,8vw,4rem)] text-primary font-bold mb-6 tracking-tight leading-tight">Visit Our Clinic</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Step into a world of clinical excellence and serene aesthetics. Located in the heart of Marine Drive, our atelier is designed for your ultimate comfort.
        </p>
      </section>

      {/* Map & Details Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        {/* Map Placeholder (Large) */}
        <div className="lg:col-span-8 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,103,103,0.06)] bg-surface-container-low min-h-[450px] relative group border border-outline-variant/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5!2d72.8227!3d18.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0a1f0b%3A0x1234567890!2sMarine+Drive%2C+Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 'inherit' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Clinic Info Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,103,103,0.06)] h-full flex flex-col border border-outline-variant/10">
            <div className="space-y-8 flex-grow">
              <div>
                <span className="text-secondary font-semibold text-xs tracking-widest uppercase block mb-2">Our Address</span>
                <p className="text-on-surface font-medium leading-relaxed">
                    Marine Drive, Mumbai, Maharashtra - 400020
                </p>
              </div>
              <div>
                <span className="text-secondary font-semibold text-xs tracking-widest uppercase block mb-2">Clinical Hours</span>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary w-5 h-5 shrink-0" />
                  <div className="text-on-surface-variant text-sm">
                    <p className="font-bold text-on-surface">Mon - Sat: 10:00 AM - 8:30 PM</p>
                    <p>Sunday: Closed (Emergency Only)</p>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-secondary font-semibold text-xs tracking-widest uppercase block mb-2">Direct Contact</span>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary w-5 h-5 shrink-0" />
                  <p className="text-xl font-headline font-bold text-on-surface">+91 98765 43210</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-3">
              <a href="https://www.google.com/maps/place/Marine+Dr" target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-on-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
                <Map className="w-5 h-5" />
                Open in Google Maps
              </a>
              <button className="w-full border-2 border-primary/20 text-primary py-4 rounded-full font-bold hover:bg-primary/5 transition-all">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">The Atelier Experience</h2>
            <p className="text-on-surface-variant text-sm md:text-base">Designed with a minimalist ethos to ensure your dental visit is as tranquil as it is precise.</p>
          </div>
          <div className="h-px bg-outline-variant/30 flex-grow hidden md:block mx-8 mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <div className="h-64 md:h-80 bg-surface-container-low rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,103,103,0.06)] group border border-outline-variant/10">
              <img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" data-alt="Modern minimalist dental consultation room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4JnPzn2o0ikCHYe_7bXMS6tDh-q_iEUpJmIXHlGRHHdjXYjzQ7yFjmtvVEZPjVCW-mXaV6j-ryAVgbBOlVxha59mIrEp4epHVbcEqzdv-S8bV6K5BIg7kCGaDhS_Jl4iIriEDa6WsnlypL8xspbje0kZupR5xQ2xSeV6iYdfRaJ8AJqOskm-xP6Px5Uwst6RH0-rpUlAbZHQhfotHvayt0vShqHcFQsxPH138S2yGqGcoGOv8vuJjVCxNPQbdp69FHJdFywgL5p4"/>
            </div>
            <div className="h-64 bg-surface-container-low rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,103,103,0.06)] group md:translate-x-12 border border-outline-variant/10">
              <img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" data-alt="Soft lit reception area with teal accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQvKuak2vuv41Qx1K61BRoBd8G40lGZy2XOOqMiqCNXZptQndn4lkI7blIrMk8BAb7vmi5fDLPZ7Jd22nLlI3KyurOh1DgfAid7kcU3qLgCNgJa5gS3aYzbjxs3uwiGvaK7X0zzI7s8GU124z6ESZ8HLlwkhIrAmaGmOGIO9n5YDg36_vlHxXktWq4HLYKOdzGppK6YKBszA7ZwUipvDsvc4uaOHgs-bEdYEaDwVKdFT0qr1cYei8JdUT_5YmGLG03Y_bumxhnVOI"/>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:pt-16">
            <div className="h-64 md:h-[500px] bg-surface-container-low rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,103,103,0.06)] group border border-outline-variant/10">
              <img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" data-alt="Close up of advanced clinical dental equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsK2iFcor9x5w9817P9Fbvx-LXILPqOt6Ph3ZX-ynNve_XIhygTcDAv6ud1-w3LqB1TldIta8EyYNXAQ_BXPign5LYp1nuWHzpKlRAtqr5ROcByo6IFKX8dPnQ-QsGagySV6pMPRdKDeTWyO27IhGIh5O0CSQIQb-CjXtoo8daknCN3_Duw86nw-BuzU-u_nNk7x42FaObSMG6d_iM_4cNg0sM8nI3cBqwcS0U2E_XqHLpnFMq42djtNIR92XMMR784baG-JWBZfQ"/>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 flex items-start gap-4 hover:shadow-lg transition duration-300">
            <div className="bg-primary text-white p-3 rounded-full shrink-0">
              <ParkingCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-1">Free Parking</h4>
              <p className="text-sm text-on-surface-variant">Dedicated patient parking available directly on the premises.</p>
            </div>
          </div>
          <div className="bg-secondary/5 p-8 rounded-xl border border-secondary/10 flex items-start gap-4 hover:shadow-lg transition duration-300">
            <div className="bg-secondary text-white p-3 rounded-full shrink-0">
              <Train className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-1">Train Access</h4>
              <p className="text-sm text-on-surface-variant">Just a 2-minute leisurely walk from CSMT Railway Station.</p>
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 flex items-start gap-4 hover:shadow-lg transition duration-300">
            <div className="bg-primary text-white p-3 rounded-full shrink-0">
              <Accessibility className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-1">Fully Accessible</h4>
              <p className="text-sm text-on-surface-variant">Wheelchair friendly access and elevator service to the 2nd floor.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
