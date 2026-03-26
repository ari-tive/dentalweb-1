import { Heart, Activity, ShieldCheck, CheckCircle2, Microscope, Hand, Star, Users, CreditCard, Crosshair, Stethoscope } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Header Section */}
      <section className="relative min-h-[614px] flex items-center justify-center px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary rounded-full blur-[80px]"></div>
        </div>
        <div className="max-w-4xl text-center relative z-10 px-6">
          <Stethoscope className="text-primary w-10 h-10 md:w-12 md:h-12 mb-6 mx-auto" strokeWidth={2} />
          <h1 className="text-[clamp(2.5rem,10vw,4.5rem)] font-headline font-bold text-primary mb-6 tracking-tight leading-tight">About Our Clinic</h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed max-w-2xl mx-auto">
              Where Clinical Excellence Meets Compassionate Care
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl transform lg:rotate-2">
                <img alt="Smile's Clinic Founder" className="w-full aspect-[4/5] object-cover" data-alt="Professional and friendly male dentist in a clinical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQG3HJis0mJczoJ5QjXj_seOydlRf3FVix_YHIlpKzZRfWFY_e8VhEbV7szizPLU7-NWfMNuVUcS9MqmwqLLMjx2VY_Tq9o6EiQclZgzdftkr1kUl5yObQcR-4h7kkzTNH4MiTqVUAPjZBIXVSD82xBrqSIm_mNwL5FY5buAMiGC3_cnXaictuRalXxR3pzWqkO1zlfK9zpBJsSdBbNu1CqW2Gt2voBuHCY2n1AkzfxxAZIdYQoZ8gxHvHkLd-vnanhi-M5har5gU"/>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-lg shadow-xl hidden md:block">
                <p className="font-headline text-2xl text-primary font-bold">12+ Years</p>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest">Experience</p>
              </div>
            </div>
              <div className="space-y-8 text-center lg:text-left">
                <div>
                  <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">Dr. Smiles</h2>
                  <p className="text-secondary font-semibold tracking-widest uppercase text-xs md:text-sm">Founder & Lead Dentist</p>
                </div>
                <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body">
                  With over 12 years of experience, Dr. Smiles focuses on painless, patient-centered dentistry. He is known for his polite demeanor and dedication to restoring smiles through precision and empathy.
                </p>
                <div className="p-6 bg-surface-container-lowest rounded-xl border-l-4 border-secondary italic text-on-surface-variant text-sm md:text-base">
                  "Our philosophy is simple: treating patients like family, with the same precision and care we would want for ourselves."
                </div>
              <p className="text-on-surface-variant font-body">
                Supported by a team of experts including <span className="text-primary font-bold">Dr. Suraj</span>, our key specialist in advanced restorative procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Our Foundational Pillars</h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-4 text-on-background">Patient-first Care</h3>
            <p className="text-on-surface-variant leading-relaxed">Tailored treatment plans that prioritize your individual needs and long-term oral health.</p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-4 text-on-background">Pain-free Treatment</h3>
            <p className="text-on-surface-variant leading-relaxed">Utilizing advanced techniques and gentle touch to ensure a comfortable clinical experience.</p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-headline font-bold mb-4 text-on-background">Transparency & Trust</h3>
            <p className="text-on-surface-variant leading-relaxed">Clear communication about procedures and pricing with no hidden surprises.</p>
          </div>
        </div>
      </section>

      {/* Hygiene & Safety */}
      <section className="py-24 px-8 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Our Commitment to Your Safety</h2>
            <p className="text-lg opacity-90 leading-relaxed mb-8 font-body">
              We maintain the highest standards of clinical hygiene. Our state-of-the-art sterilization protocols exceed global dental safety requirements, ensuring a protected environment for every visit.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary-fixed w-6 h-6 fill-current" />
                <span>Triple-stage Autoclave Sterilization</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary-fixed w-6 h-6 fill-current" />
                <span>HEPA Air Filtration Systems</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="text-secondary-fixed w-6 h-6 fill-current" />
                <span>Bio-medical Waste Management</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 lg:mt-0">
            <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm border border-white/10 text-center flex flex-col items-center justify-center">
              <Microscope className="text-secondary-fixed w-10 h-10 mb-4 mx-auto" />
              <h4 className="font-bold text-xl">Modern Equipment</h4>
            </div>
            <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm border border-white/10 text-center flex flex-col items-center justify-center">
              <Hand className="text-secondary-fixed w-10 h-10 mb-4 mx-auto" />
              <h4 className="font-bold text-xl">100% Sterile</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 bg-surface-container-high">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-headline font-bold text-primary mb-6">Why Patients Trust Us</h2>
              <p className="text-on-surface-variant mb-8 text-lg">Experience dental care that feels premium yet personal.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <Star className="text-secondary w-6 h-6 shrink-0 fill-current" />
                  <div>
                    <h4 className="font-bold text-on-background">4.9 Rating from 250+ Patients</h4>
                    <p className="text-sm text-on-surface-variant">Consistently recognized for quality outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <Users className="text-secondary w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-on-background">Friendly & Empathetic Staff</h4>
                    <p className="text-sm mt-2 font-bold text-secondary">— Dr. Smiles</p>
                    <p className="text-sm text-on-surface-variant">A team that listens and cares for your comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <CreditCard className="text-secondary w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-on-background">Transparent & Affordable Pricing</h4>
                    <p className="text-sm text-on-surface-variant">Clear estimates before we begin any procedure.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-lowest shadow-sm">
                  <Crosshair className="text-secondary w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-on-background">Advanced Modern Equipment</h4>
                    <p className="text-sm text-on-surface-variant">Leveraging digital dentistry for better results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-primary-container relative">
                <img alt="Modern Dental Operatory" className="w-full h-full object-cover" data-alt="Modern dental surgery chair in a bright sterile room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdkpt32zL2c9HghvltH6D4OtbvN3ym0xFVa-S-Bk1x_mSvmIqAyPCqI-sxUvlft_JLOTKneke6_xqyR_7Rq23NfIMfnn8NMcVAQFIaJv2HOTVC59lsjQTqjOJpNSKuFFy7gJvA8r-IzF1MVII77dhKIq0KsMkM3_Ev0z_JzvAk4a_1Zwi1wF8UTOOG-NjmY9wahLXNspzYa9PFkwdZ3m9E7Hm6TUruV5upuIqZmU4tGvn0A0WbLeL7-uwRQVXVICq4x9Rzhz8Hqos"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm uppercase tracking-widest font-bold">Advanced Clinic</p>
                  <p className="text-xl font-headline">Precision-Driven Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-headline font-bold text-primary mb-12 text-center">Inside Our Atelier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img alt="Reception" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern minimalist dental clinic reception area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSWMhVqlkqVplO1mVzJNlguo3SJomt_ANmOpLu_RzqXXu-Hz4DR5PK4ZuUdRuB4YmJ9_xUNqnn29YyRq_UDu76xhbEraHzEC3kf63EfwAiA7eCr5bk5tk6_d7kw2SzdbeDAHRM6U82uVoA5Fsx7YS3P3IvQ95fUW22Zy35sjjb84fmcBKz4DYmWNF8pVHfsqF1JPT_-t2K6mPfEWMVSSDaiAKtLbwRO2YEN7f2FFmuyvSutnOzeWAW7_bjJ0pSexBDVeRXVU6duBg"/>
              <div className="hidden group-hover:flex absolute inset-0 bg-black/40 items-center justify-center pointer-events-none">
                <span className="text-white font-medium">Reception</span>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img alt="Dental Chair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close up of a modern ergonomic dental chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-6HmuV1akXsmbx5KsUgKOHaFqGHXd6qRnLSZTAcNu_ALrCOrdSq_uH7h-hZQ8RHX0ycxeY7RSP0DCPQa4BTRb5Q84nRKZBh7XZUaZkkxHHcMwLwLpkPU3AGwLrhc38iwjyk9InFE1P62mvGCSol6r9OtN3Aip3VlOdwaNa8ijpRcsyWX9GobBRwN457ytSqha3Lcwdj53b0xD7BTX6YoahXAqXtP2v_he2AgXfMAWpa-GfftY-Jf4FBlQo1a_roGoAPNiolwPwzk"/>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img alt="Sterilization" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sterile medical laboratory or sterilization room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVL4oGub0M3StVEAIOroYrCDY5-xLqM_056jKjino8tF1mYh2xnKLNhrcQss0m8UMC13jlN2dRkrkXJtrjxICbDO79kSecV6z1CUYkZLTcQ96i8OQ2Jmf7LMTg0tC0EKppXjZdwgqnKnpLZSV7xb21gpjafTUK-ALQjwc8C9wAEI0BOz_ze9WN-AzEeUhNzkAYNnDQ9vj4b4VYq6YjSQUgTv93hiIGAEefBLYOsFx7tdr5ET9mKc9DQFnlzZVkU-Ygbz54R8VflTo"/>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group">
              <img alt="Consultation Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Professional consultation office for dental patients" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj6DWBEQ68S20ewMMMkMO818NBiMtjzNqROeGFOe9QQTi6AvGqI9_LUG3oaWUQNl1gcq3Y9xLd8bULxTI6gbK1KuVIzBNXoYmM7txpzgPgOsB4P3P7jwbRYD2jR6-2h866UfGgwxm3o1SVsmWHXl6tjrJ8rfpmCM-4rCt_qg7E24dRU3aX_g30qgqz4IDfgueEDZn6egewHZTEeIQ84kpU2sR7PFd_YHXGDBVTMBVDDmRzKKxOvHiQup43n7tSmgRZgBMAUzz43tk"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
