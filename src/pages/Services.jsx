import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, ArrowRight, Shield, Syringe, Sparkles, Wrench, Diamond } from 'lucide-react';

export default function Services() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Disable global smooth scroll when active
    document.documentElement.classList.add('services-scroll-active');

    let rafId;
    let currentX = 0;
    let targetX = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      if (trackRef.current) {
        if (window.innerWidth >= 768) {
          trackRef.current.style.transform = `translateX(-${currentX}px)`;
        } else {
          trackRef.current.style.transform = `translateX(0px)`;
        }
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current || window.innerWidth < 768) return;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetTop = -rect.top;
      const maxScroll = rect.height - window.innerHeight;
      
      const scrollProgress = Math.max(0, Math.min(offsetTop, maxScroll));
      const maxTranslate = trackRef.current.scrollWidth - window.innerWidth;
      
      if (maxScroll > 0) {
        const progressRatio = scrollProgress / maxScroll;
        targetX = progressRatio * maxTranslate;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      document.documentElement.classList.remove('services-scroll-active');
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="pt-10">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 mb-12 md:mb-20 text-center md:text-left pt-12 md:pt-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
            Expert Care
        </div>
        <h1 className="font-headline text-[clamp(2rem,7vw,4rem)] text-on-background font-bold tracking-tight mb-6 leading-tight max-w-2xl mx-auto md:mx-0">
            Our Dental Services
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed mx-auto md:mx-0">
            Comprehensive care for your smile, blending surgical precision with a sanctuary of calmness.
        </p>
      </header>

      {/* Services Horizontal/Vertical Section */}
      <section 
        ref={containerRef} 
        className="w-full relative" 
      >
        <style dangerouslySetInnerHTML={{ __html: `
          @media (min-width: 768px) {
            .services-scroll-section { height: calc(100vh + 300vw); }
          }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div className="services-scroll-section relative">
          <div className="md:sticky md:top-0 md:h-screen w-full md:overflow-hidden flex flex-col justify-center">
            <div 
              ref={trackRef} 
              className="flex flex-col md:flex-row md:flex-nowrap md:w-max md:items-stretch gap-8 md:gap-10 px-6 md:px-[10vw] pb-24 md:pb-0"
            >
          {/* Card 1 */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-primary/5 hover:md:-translate-y-2 transition-all duration-500 flex flex-col h-full shrink-0 w-full md:w-[450px]">
            <div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Modern dental surgery room with professional equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3pByzaZ3potLffkMyJ105w0NU6kt5_gI-a8SGDxmmboxx7JSXopmMQGTTDg-tymKEkIz-rqmLxGJzlo8wu6a5ridtxPSZKXzc-W7c05FDc9L0UPDp7-B5UDjS3ke5v_RpeLB4w_Dd14MQqM1h_5qFGXA8pYj_ip04Scw_wYZKuJKk1nkjvjn8ihSBrRMsNV5EAzMLZ9Km4OXQcUDpWr5y2tgbpXghcejPHURIj_zc7vPbh1L4og6RNlZ21hbo-RHLZqekmMPk1Ig"/>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-2xl font-semibold text-primary">Root Canal Treatment</h3>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Specialized care to save your natural teeth using advanced microscopic endodontics for precision.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/15">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Safe & painless</span>
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Card 2 */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-primary/5 hover:md:-translate-y-2 transition-all duration-500 flex flex-col h-full shrink-0 w-full md:w-[450px]">
            <div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close up of professional dental extraction tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEZFA6SOwiCOhk7Df34OGFaU0mQBiV7BZ0IwQEPgDMCfuLKXTIGz_MJQXKVCQWOMHLM3S8CJ6sm1UBylQHCyt-sUMRBRVVt98uOE27cPj3odWB9V4spbF1719TDx1GqR73wShZgn1GsxeP8P8gyjzGQ_QskSpwQ30lEYndZapAtLepl_CSAJwdkvvSYJCX3a8sLePN9jT5D4L6t1EBls9_iEYxx9ibfMAUf0ihinwUDNa4_WDre462CX4uVOpCMu9OGi5giAQsS-E"/>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Syringe className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-2xl font-semibold text-primary">Wisdom Tooth Removal</h3>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Atraumatic extraction techniques designed to minimize discomfort and ensure rapid recovery.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/15">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Safe & painless</span>
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Card 3 */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-primary/5 hover:md:-translate-y-2 transition-all duration-500 flex flex-col h-full shrink-0 w-full md:w-[450px]">
            <div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Professional teeth cleaning tools in sterile tray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY0sAgrMb7lZF3Gg6iku50rLRuGjCtWGfP3DqfWyaKIGyZkL5hv5RiyVRsTrboSStstbb968HB_WjfY8wpUYMyIajA6uUVvf9UGeDeKCdp0ibsQaUzl6iK8ZdNlt0yKlSt5jF2XeOQEtmGlEJyMUMcl5wg0S4Sd7I7K89RRSQq5bdnUGBOml0yUf5qnRkBWwVSqGX7ka89Z7SKFfYUsdTk3sjdQ3s8zMZ7m2hZOLvv1QwL8KXEHq47C0a5Lt9zNUZMqBYoRyI6Rb8"/>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-2xl font-semibold text-primary">Teeth Cleaning</h3>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Deep ultrasonic scaling and polishing to maintain your oral hygiene and prevent gum diseases.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/15">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Safe & painless</span>
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Card 4 */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-primary/5 hover:md:-translate-y-2 transition-all duration-500 flex flex-col h-full shrink-0 w-full md:w-[450px]">
            <div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Bright white smile after professional treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5hGXb6hUKWfc0ZFv2Z6Dxganbrl3wsVu2JmWN3r6L5do90WdtU171hD9_qHuuMtnoqbLQAnhKLjW6J3hF05ApSPNstq95dHn0C04dXvx0fvcJ-EUViFXAh5iqzdsU6QvTkfDY9i1ka57HAPO380JU5L412CyaQ81jBHXmUFs2FsA1fnRjPPj-lRCmznfOTYqd4J2umQW1ce2nCZ73sKhg9SvZn2VUtLex9jY1ENkF2Ds6JtP70-ZQ9l1kPLIKHN3uwNmymgcQyT0"/>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-2xl font-semibold text-primary">Teeth Whitening</h3>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Transform your smile with our laser whitening systems for instant and long-lasting brightness.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/15">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Safe & painless</span>
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Card 5 */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-primary/5 hover:md:-translate-y-2 transition-all duration-500 flex flex-col h-full shrink-0 w-full md:w-[450px]">
            <div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="High precision dental implant model" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5t_kBNbHjXl7KUo88xJTw_W2MTx-I1AanOVUHPzl96QxFm3aabXAeJj9QxcJckSMah604xZOOx7WeI5oXmrRJdkcym2SMHVc9KmR7OaN_XVWdLdOmejuPHNXd4SMDob5qEPqTqGe1OaZQUv9lDfqnMP63f6NeCrCWkqodryxzzd1CRAWUmXDE6hGJYzR2gG_lLSlnpxSx9VXVmGiyJ66EjmdtHMscPxTCKHcIQR-2bwKB4bqj_qCJUWLhpC3lx971Ob4ueHWML0Q"/>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-2xl font-semibold text-primary">Dental Implants</h3>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Permanent solutions for missing teeth using bio-compatible titanium and aesthetic crowns.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/15">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Safe & painless</span>
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* Card 6 */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl shadow-lg shadow-primary/5 hover:md:-translate-y-2 transition-all duration-500 flex flex-col h-full shrink-0 w-full md:w-[450px]">
            <div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Mirror reflecting a beautiful confident smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEv2gDT12MDND21ZrN58WK90u5TVB3lZsx4rt6Y1s-cBXfTXtCKar8NFgW_IjMeP8EvraBz6sVLpuxo0lelNau8f0z-eZyJiKaA-c8fms5nlUjmeeQfGMqtYaoN0qbub5SPMfVVdVjUUinj19ud6-ApAEZuRYO3kyCGWJ8kKBE4cP89UwulhonGwi1esl4dCuCVuhcUMqlY4dG1tYjCQGmWxgoHy4q0Vt1tBklH97KuZ76mVHCAst_b2y2t29Fu6ncYlQXmwzUKOk"/>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Diamond className="text-secondary w-8 h-8" />
              <h3 className="font-headline text-2xl font-semibold text-primary">Cosmetic Dentistry</h3>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 flex-grow">
              Veneers, bonding, and full smile makeovers tailored to your facial aesthetics.
            </p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/15">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Safe & painless</span>
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Highlight Section */}
      <section className="mt-32 relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right scale-110"></div>
        <div className="relative max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
              <img className="rounded-xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover" data-alt="Patient relaxing in a comfortable dental chair with a calm expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE8tWoNk3l9ufHx3wUKKHw35fiuP-wViczPm5LmToH6j3PfMAjhLcLFkXpRU3u1XYoIU4kWTWV2TcUhWJya6mpFk98DKM6kXn3kX4e-KZ_9eVklXI4v59GTgDr7S8upHqsrSFEbMgxjWgyTG1SGO-heUFk-pT9qZIFujdUMvQ6FLjth7YRPFhLA9AGS8GITyyoKVzfqkc-6Cp7Cb2MytZkhC26Y_FPx0lnsA0MITOy3CojzzRHzbEJps61932wCVecnFc4y6mJ6Vk"/>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-headline text-4xl font-bold text-on-background mb-8 leading-tight">Comfortable and pain-free procedures</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-10">
              We understand that dental visits can be anxious. Our clinic is designed to be a sanctuary, using minimally invasive techniques and sedation dentistry to ensure your journey to a perfect smile is as peaceful as the result.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface font-medium">
                <Shield className="text-secondary w-5 h-5" />
                Advanced Local Anesthesia
              </li>
              <li className="flex items-center gap-3 text-on-surface font-medium">
                <Shield className="text-secondary w-5 h-5" />
                Noise-canceling patient experience
              </li>
              <li className="flex items-center gap-3 text-on-surface font-medium">
                <Shield className="text-secondary w-5 h-5" />
                Minimally Invasive Laser Tools
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-8 mt-32 mb-24">
        <div className="bg-primary p-12 md:p-20 rounded-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full -ml-24 -mb-24"></div>
          <h2 className="font-headline text-4xl text-on-primary font-bold mb-6 relative z-10">Not sure what you need?</h2>
          <p className="text-on-primary/80 font-body text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Every smile is unique. Book a personalized consultation with Smile's Clinic to discuss your goals and dental health.
          </p>
          <Link to="/book" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 relative z-10 shadow-lg cursor-pointer">
              Book a consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
