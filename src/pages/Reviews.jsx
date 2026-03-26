import { useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  useEffect(() => {
    document.title = "Patient Reviews | Smile's Clinic";
  }, []);
  return (
    <div className="pt-10">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left pt-12 md:pt-0">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] md:text-xs font-bold tracking-widest uppercase">
            Patient Experiences
        </div>
        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-serif font-light tracking-tight text-primary mb-6 leading-tight">
            Patient Reviews
        </h1>
        <p className="text-lg md:text-xl font-body text-on-surface-variant max-w-2xl leading-relaxed mx-auto md:mx-0">
            Trusted by 250+ happy patients. We believe in precision through calmness and delivering excellence in every smile.
        </p>
      </section>
      {/* Rating Summary Card */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-5xl font-serif font-bold text-primary">4.9</span>
              <Star className="text-secondary w-10 h-10 fill-current" />
            </div>
            <p className="text-on-surface-variant font-medium">Overall Patient Rating</p>
          </div>
          <div className="h-px md:h-20 w-full md:w-px bg-outline-variant/30"></div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center md:text-left">
            <div>
              <div className="text-2xl font-serif text-primary">250+</div>
              <p className="text-sm text-on-surface-variant">Verified Reviews</p>
            </div>
            <div>
              <div className="text-2xl font-serif text-primary">15+</div>
              <p className="text-sm text-on-surface-variant">Years of Care</p>
            </div>
            <div>
              <div className="text-2xl font-serif text-primary">99%</div>
              <p className="text-sm text-on-surface-variant">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-2xl font-serif text-primary">5.0</div>
              <p className="text-sm text-on-surface-variant">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Swipeable Carousel / Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible hide-scrollbar pb-8 md:pb-0">
          <style dangerouslySetInnerHTML={{ __html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          {/* Review 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,103,103,0.06)] flex flex-col justify-between group md:hover:-translate-y-2 transition-transform duration-300 min-w-[85vw] md:min-w-0">
            <div>
              <div className="flex gap-1 mb-6">
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
              </div>
              <p className="text-lg font-body text-on-surface leading-relaxed mb-8 italic">
                  "Very kind doctors and staff. Made me feel comfortable. The clinic environment is so peaceful, unlike any other dental office I've visited."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary font-bold">AS</div>
              <div>
                <p className="font-bold text-on-surface">Amit Sharma</p>
                <p className="text-sm text-on-surface-variant">Root Canal Treatment</p>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,103,103,0.06)] flex flex-col justify-between group md:hover:-translate-y-2 transition-transform duration-300 min-w-[85vw] md:min-w-0">
            <div>
              <div className="flex gap-1 mb-6">
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
              </div>
              <p className="text-lg font-body text-on-surface leading-relaxed mb-8 italic">
                  "Pain-free experience, Dr. Smiles is very gentle. I was terrified of dental work, but their calm approach changed everything for me."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary font-bold">VS</div>
              <div>
                <p className="font-bold text-on-surface">Vikram Singh</p>
                <p className="text-sm text-on-surface-variant">Full Smile Makeover</p>
              </div>
            </div>
          </div>
          {/* Review 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(0,103,103,0.06)] flex flex-col justify-between group md:hover:-translate-y-2 transition-transform duration-300 min-w-[85vw] md:min-w-0">
            <div>
              <div className="flex gap-1 mb-6">
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
                <Star className="text-secondary w-5 h-5 fill-current" />
              </div>
              <p className="text-lg font-body text-on-surface leading-relaxed mb-8 italic">
                  "Great service and vibe. Highly recommended! The technology they use is very advanced, and everything was explained clearly."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant font-bold">PP</div>
              <div>
                <p className="font-bold text-on-surface">Priya Patel</p>
                <p className="text-sm text-on-surface-variant">Teeth Whitening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <div className="bg-surface-container-high rounded-xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">Ready for your own<br/>transformative experience?</h2>
            <button className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-semibold hover:bg-surface-tint transition-all active:scale-95 shadow-lg shadow-primary/20">
                Book Your Appointment
            </button>
            <p className="mt-8 text-on-surface-variant font-medium">Join our family of 250+ happy patients.</p>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary-container/10"></div>
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-secondary-container/20"></div>
        </div>
      </section>
    </div>
  );
}
