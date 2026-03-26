import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Star, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Microscope, SprayCan, MessageSquare, Briefcase, MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Home() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-image', {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out'
    }, '-=0.8');
  }, { scope: container });

  return (
    <div ref={container}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-20" data-alt="Modern high-end dental clinic treatment room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuakRCQSoM8jU-PjRxHkFZxET6_ngagmN3Gt2EqzFSPnoYJZEBRJZvls2VomI9nVWOcGhnUVxR_Lf_i1WU_L3UZiD1_4WGj11GlUwJ3ROQufVgXIt2d2mJtn4wsH6c1zb5ol0xHiW_H8TZGFfxqXvopxwrCxZnN6bxKFLytU5O7NoV3FCbFDYSt17QQnsYq7qVRY2wurQh9NtW1zNTrBqYZaJK2QhvHJJe2mh476xZCUpZOH-esDgStjWADszU1MlSmTXezaxFydE"/>
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left pt-12 lg:pt-0 lg:-mt-[calc(10vh+100px)]">
          <div className="max-w-2xl hero-content w-full">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs md:text-sm font-semibold mb-6 uppercase tracking-widest">
              Pioneering Dental Excellence
            </span>
            <h1 className="font-headline text-[clamp(2rem,8vw,4.5rem)] text-primary leading-[1.1] mb-6">
              Smile with Confidence
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Gentle, modern dental care at Marine Drive. Experience clinical precision wrapped in the comfort of a sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/book" className="bg-primary text-on-primary px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-3 min-h-[44px] w-full sm:w-auto">
                Book Appointment
                <Calendar className="w-5 h-5" />
              </Link>
              <Link to="/visit" className="border-2 border-primary/20 text-primary px-10 py-5 rounded-full font-semibold hover:bg-primary/5 transition-all min-h-[44px] flex items-center justify-center w-full sm:w-auto">
                Visit Us
              </Link>
            </div>
          </div>
          <div className="relative hero-image w-full mt-8 lg:mt-0">
            <div className="asymmetric-shape bg-primary-container/20 absolute inset-0 -rotate-6 scale-110 blur-xl"></div>
            <img className="relative z-10 rounded-xl shadow-2xl w-full h-[300px] md:h-[500px] object-cover" data-alt="Close up of a bright healthy smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsdujvEUIlF-20PW6XvQ_8UtIxzYZS2dSESV6Ogaa0uulaMAQIAK1FCkwiv-LFgwhsgs-9-VQqm9lXa4POO4N-Q1IQTmra6yntqn4F6ikpa8eT_G5kRA8L8uKcQhA7rZmf3pymD6W20q8cKB3SunE-JlvvBu8VnMNl-HPB3NpFyE_VLPLH5JT6kjCXwds6UTttT0k42k32hsq-q5C11XXo1B8sdvnDL0dh-eFRkq0oNZEEkiks_pNBwRPVpP01INoY_lTkNZ7S4G8"/>
          </div>
        </div>
      </section>



      {/* About Preview */}
      <section className="py-20 bg-surface" id="about">
        <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative w-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <img className="rounded-lg shadow-xl w-full h-[600px] object-cover relative z-10" data-alt="Professional portrait of Dr. Akash Singh in medical attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIh1kO9wAEVObkYId9G5nA3coVJBD9ZqpcWpQBDQgT-fjnkm1LCnSxTuhRRKty_niX0P7Oqjdd_-TeT0Cijs4iHp3s17x2t5ELdDqzXNMvxLXMnUV3kwAZ8b1vHBBtCOrUyQNhGvmIPsx6pk94s_mzKedIuBnRYsFZ6NBpBy4CmLcw6shVRscAvqH8HxAK1HYFzFxfYmnutPO1xVVDC0mjbyV1pqFZ-w5ZqezQ4CceqJbvhBVo0O96SSr7iNwtuGavdqYzieONcBk"/>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-lg shadow-lg z-20 max-w-xs border border-outline-variant/20">
              <p className="font-headline text-primary italic">"Precision in practice, compassion in heart."</p>
              <p className="text-sm mt-2 font-bold text-secondary">— Dr. Smiles</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-4xl text-primary mb-8">Crafting Smiles with Heart and Science</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Dr. Smiles brings over 12 years of specialized expertise in multi-speciality dentistry. At Smile's Multi-speciality Dental Clinic, we believe dental care shouldn't be daunting. 
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our approach combines the latest clinical technology with a focus on patient comfort, ensuring that every visit feels like a step toward a better version of yourself.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface">
                <CheckCircle2 className="text-primary w-5 h-5" />
                Gold Medalist in Implantology
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <CheckCircle2 className="text-primary w-5 h-5" />
                State-of-the-art Digital X-Rays
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <CheckCircle2 className="text-primary w-5 h-5" />
                Painless Root Canal Specialist
              </li>
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-secondary/40 pb-1 hover:border-secondary transition-all">
              Learn More About Our Philosophy
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview: Bento Grid */}
      <section className="py-20 bg-surface-container-low" id="services">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary mb-4">Comprehensive Dental Care</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Specialized treatments tailored to your unique oral health needs, delivered with a gentle touch.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Advanced Implants</h3>
              <p className="text-on-surface-variant mb-6 text-lg">Permanent, natural-looking solutions for missing teeth using titanium anchors and aesthetic crowns.</p>
              <img className="w-full h-48 object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-500" data-alt="Dental implant procedure detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE0QlmXfgjCr589kTXH4Gjh3sxNkxcT0Zin38nPqFfR4JDLh0k54udCHGdVBNwfeTL7087PJIagBH3P49s0b37TyZtV6HPZc084xS-LMaTieNTqNmKJDS-9vuFP0A3PN6WrDAW0JrrnS19wVmpt_apF9WPDIFv51jbG5HnUEh9ZhTfKP1WGLRjSdKxVqIr8YlZk1UVE5hrkSurtqTl_o30F6XoV7hCPf_ie4QHSWvajz1UvkN3Qy-WdPuRxiYU7hK-W-dXhrzeUC4"/>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10">
              <SprayCan className="text-primary w-10 h-10 mb-8" />
              <h3 className="font-headline text-2xl text-primary mb-4">Teeth Whitening</h3>
              <p className="text-on-surface-variant leading-relaxed">Brighten your smile up to 8 shades in just one session with our advanced laser whitening technology.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10">
              <Microscope className="text-primary w-10 h-10 mb-8" />
              <h3 className="font-headline text-2xl text-primary mb-4">Root Canal</h3>
              <p className="text-on-surface-variant leading-relaxed">Painless endodontic therapy to save your natural teeth from deep infection and decay.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10">
              <Briefcase className="text-primary w-10 h-10 mb-8" />
              <h3 className="font-headline text-2xl text-primary mb-4">Professional Cleaning</h3>
              <p className="text-on-surface-variant leading-relaxed">Ultrasonic scaling and polishing to keep your gums healthy and breath fresh.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10">
              <HeartHandshake className="text-primary w-10 h-10 mb-8" />
              <h3 className="font-headline text-2xl text-primary mb-4">Pediatric Care</h3>
              <p className="text-on-surface-variant leading-relaxed">Gentle dental introductions for your little ones in a fun, fear-free environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface" id="testimonials">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline text-4xl text-primary mb-4">Voices of Trust</h2>
              <p className="text-on-surface-variant max-w-xl">Hear from our patients who have reclaimed their smiles and confidence at our clinic.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="text-tertiary mb-6 flex">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-on-surface-variant text-lg italic leading-relaxed mb-8">
                "The most professional experience I've had. The team explained every step of my implant surgery, making me feel completely at ease."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container"></div>
                <div>
                  <h4 className="font-bold text-primary">Smile's Clinic</h4>
                  <p className="text-xs text-on-surface-variant">Patient since 2021</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="text-tertiary mb-6 flex">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-on-surface-variant text-lg italic leading-relaxed mb-8">
                "I brought my 6-year-old for her first cavity. The team was so patient and friendly that she's actually excited to come back!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div>
                  <h4 className="font-bold text-primary">Anjali Mehta</h4>
                  <p className="text-xs text-on-surface-variant">Mother of two</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="text-tertiary mb-6 flex">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-on-surface-variant text-lg italic leading-relaxed mb-8">
                "Highly recommend for whitening. Fast, efficient, and great results. The clinic environment is very peaceful."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary/20"></div>
                <div>
                  <h4 className="font-bold text-primary">Vikram Singh</h4>
                  <p className="text-xs text-on-surface-variant">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-20 bg-surface-container-low overflow-hidden" id="contact">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-white p-8 md:p-12 lg:p-20">
              <h2 className="font-headline text-3xl md:text-4xl text-primary mb-8 md:mb-10">Visit Our Clinic</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <MapPin className="text-secondary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-on-surface-variant">Marine Drive, Mumbai,<br/>Maharashtra - 400020</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Clock className="text-secondary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Clinic Hours</h4>
                    <div className="grid grid-cols-2 gap-x-8 text-on-surface-variant">
                      <span>Mon - Sat:</span>
                      <span>10:00 AM - 8:30 PM</span>
                      <span>Sunday:</span>
                      <span>Closed (Emergency Only)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Phone className="text-secondary w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Emergency Contact</h4>
                    <p className="text-primary font-bold text-xl">+91 98765 43210</p>
                  </div>
                </div>
              </div>
              <a href="https://www.google.com/maps/place/Marine+Dr" target="_blank" rel="noopener noreferrer" className="mt-12 bg-primary text-on-primary px-10 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all inline-flex uppercase tracking-widest text-sm w-fit">
                Get Directions
                <Navigation className="w-5 h-5" />
              </a>
            </div>
            <div className="relative min-h-[400px] bg-primary/5 border-l border-outline-variant/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white p-6 rounded-full shadow-2xl pulse">
                  <MapPin className="w-12 h-12 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container opacity-10"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="font-headline text-3xl md:text-5xl text-primary mb-6">Book Your Appointment Today</h2>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
            Join hundreds of happy patients who trust Dr. Smiles for their family's dental health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="bg-primary text-on-primary px-12 py-5 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all min-h-[44px] flex items-center justify-center">
              Schedule Online Now
            </Link>
            <Link to="/services" className="bg-white border-2 border-primary/20 text-primary px-12 py-5 rounded-full text-lg font-bold hover:bg-primary/5 transition-all min-h-[44px] flex items-center justify-center">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
