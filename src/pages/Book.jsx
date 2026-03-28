import { useState, useMemo, useRef } from 'react';
import { ChevronDown, Mail, ShieldCheck, Phone, Clock, MapPin, AlertCircle } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (value.length < 2) error = 'Name too short';
      if (value.length > 100) error = 'Name too long';
      if (/[<>]/.test(value)) error = 'Invalid characters';
    }
    if (name === 'phone') {
      const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
      if (!phoneRegex.test(value.replace(/[\s\-]/g, ''))) error = 'Invalid Indian mobile number';
    }
    if (name === 'service' && !value) error = 'Please select a service';
    if (name === 'date' && !value) error = 'Please select a date';
    if (name === 'message' && value.length > 500) error = 'Message too long (max 500 chars)';
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const isFormValid = useMemo(() => {
    return formData.name.length >= 2 && 
           !errors.name && 
           !errors.phone && 
           formData.phone &&
           formData.service && 
           formData.date && 
           !errors.message;
  }, [formData, errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || !captchaToken) return;
    
    setIsSubmitting(true);
    setErrors(prev => ({ ...prev, submit: '' }));

    try {
      // Pointing to the Express backend or Vercel API
      const verifyRes = await fetch("/api/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaToken })
      });
      
      const verifyData = await verifyRes.json();
      
      if (!verifyData.success) {
        setErrors(prev => ({ ...prev, submit: "CAPTCHA verification failed. Please try again." }));
        captchaRef.current?.reset();
        setCaptchaToken(null);
        setIsSubmitting(false);
        return;
      }

      // Simulate secure submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Request sent! Thank you.');
      setFormData({ name: '', phone: '', service: '', date: '', message: '' });
      captchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err) {
      setErrors(prev => ({ ...prev, submit: "Something went wrong. Please try again." }));
      captchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24">
      <div className="mb-12 md:mb-16 text-center md:text-left pt-12 md:pt-4">
        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] text-primary font-bold mb-4 leading-tight tracking-tight font-headline">Book an Appointment</h1>
        <p className="text-on-surface-variant text-lg md:text-xl font-light tracking-wide italic">It takes less than 30 seconds</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(0,103,103,0.06)] border border-outline-variant/10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-1 transition-all placeholder:text-slate-400 ${errors.name ? 'ring-1 ring-red-500' : 'focus:ring-primary'}`} 
                  placeholder="e.g. Julianne Moore" 
                  type="text" 
                  required
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Phone Number</label>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-1 transition-all placeholder:text-slate-400 ${errors.phone ? 'ring-1 ring-red-500' : 'focus:ring-primary'}`} 
                  placeholder="+91 9699766850" 
                  type="tel" 
                  required
                />
                {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-1">{errors.phone}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Treatment Type</label>
                <div className="relative">
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 appearance-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface-variant" 
                    required
                  >
                    <option value="">Select service</option>
                    <option>Root Canal Therapy</option>
                    <option>Dental Cleaning</option>
                    <option>Dental Implants</option>
                    <option>Teeth Whitening</option>
                    <option>Orthodontic Consultation</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Preferred Date</label>
                <input 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface-variant" 
                  type="date" 
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold ml-1">Optional Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-1 transition-all placeholder:text-slate-400 max-h-48 min-h-24 ${errors.message ? 'ring-1 ring-red-500' : 'focus:ring-primary'}`} 
                placeholder="Tell us about your concern..." 
                rows="4"
              ></textarea>
              {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold tracking-widest ml-1">{errors.message}</p>}
            </div>

            {/* reCAPTCHA */}
            <div className="pt-2">
              <div style={{ transform: "scale(0.85)", transformOrigin: "left center" }}>
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>
              {errors.submit && <p className="text-red-500 text-xs mt-2 font-bold tracking-wide flex items-center gap-2"><AlertCircle className="w-4 h-4"/> {errors.submit}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                disabled={!isFormValid || !captchaToken || isSubmitting}
                className={`w-full sm:flex-1 py-5 px-8 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
                  isFormValid && captchaToken && !isSubmitting
                    ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary hover:shadow-lg hover:scale-[1.02] cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50'
                }`} 
                type="submit"
              >
                {isSubmitting ? 'Verifying...' : 'Email Us'}
                <Mail className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 text-teal-600/60 justify-center pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-bold text-slate-500">Secure SSL Encrypted Connection</span>
            </div>
          </form>
        </div>

        {/* Right: Information & Reassurance */}
        <aside className="lg:col-span-5 space-y-10 lg:pl-12">
          {/* Clinic Info Card */}
          <div className="relative overflow-hidden group rounded-xl bg-surface-container p-8 border border-outline-variant/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <h3 className="text-2xl mb-6 text-primary">Clinical Sanctuary</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-tighter font-bold text-slate-500">Direct Contact</p>
                  <p className="text-lg font-medium text-on-surface">9699766850</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-tighter font-bold text-slate-500">Operating Hours</p>
                  <p className="text-lg font-medium text-on-surface">Mon - Sat: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-tighter font-bold text-slate-500">Location</p>
                  <p className="text-lg font-medium text-on-surface">Marine Drive, Mumbai, Maharashtra, India.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reassurance Block */}
          <div className="border-l-4 border-secondary/20 pl-8 space-y-4">
            <span className="text-secondary font-serif italic text-xl">Peace of Mind</span>
            <p className="text-on-surface-variant leading-relaxed">
              Our team will confirm your slot within an hour via SMS or Call. We prioritize clinical excellence and your comfort throughout your journey.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" data-alt="Satisfied female patient portrait profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB78rn39k5XUEfgjJOSsscyLyuka_16bdF56zImDitUYnW2peOqKlzdJANYaEKHCecXEVRakn5WqmRYyTnvmc1oYnHEK-I9-oDmwWtLJVhE4vkimKVqjog5zV4lK3fXqJP36bsE2RSTH3v2E_1UhXTxrDJzl-9c-YqwIGqao4GLSpAYNRlGsn5AYIFQw0wR4xgoXCdtb0DZnTBrLh22YilhiGEtd7c1A2TWrq6Q_VyQp9y_J3B83F_uRKmsLiZSNxZ2WJf0SNNO6tg"/>
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" data-alt="Satisfied male patient portrait profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuWlZcE_0dX3sKJVoZiAg4fPGd3tzGZ9RITXgE5PuVhd6bHiHQqF02rgL99mvp6XFA_jWoNffDna--O4pPhby0XYso939Zuy3KuCkbnc6d1f2Fl5NwugUZDYJcrhr18eV-xn__1N_CjqZL-yP33fAAQoUPWmrRsKkyt9pOZDyY5482gG3w5p41mS-Wh3b2jtda9cGPjbVyfrqSqGZ633bd70fIEy85ZFIF7nS6j0q-AXEPk3rJr_QFQqt04s9Wd2m9PB1PBUiLMiY"/>
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" data-alt="Smiling patient after dental treatment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2lH_p2AdRmW0_FEgBGQ16uMYhj_Ua5oeMm4jNJjnOCXyw6J_30ek0aZ-lo8OKMkkPZRxA6NUcD5rz5Sk_X5mK1BPZYXsfaNMGIy545pT7yWfHczBjpAG1L47ux10bkdNIAL_vg8QwEvZgzhCGYtUdfX5gbQPKFDcETVqkfS1lolrJ3zUKAlYBKHtXAXT4_7EWD_7BronYLtE8b1WV2K1ZT-vVSaM8bjCURaMClXv1Q6E7owzVhb2YKTu2koeAnkfVMBeYZMZg9I"/>
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Join 2,400+ Happy Patients</span>
            </div>
          </div>

          {/* Visual Accent */}
          <div className="rounded-xl overflow-hidden aspect-[4/2] sm:aspect-video relative group">
            <img className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" data-alt="Modern minimalist dental clinic interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUdMEQbGiT2XpA-IJJCN1VKskBn5xsgGSA_WK73OE6DwylCpMq9IPVEpoMteZzhTziDqz5BkzqQnMSBFbz44YEjoCS27GvwQw0PjlBKqs_sXwlpayUd1hzwajvZXBBoteLcLCpIGU0bPj6_kUsX2YYLpiyOOT8qPnh5XB3CmiHkXLPeG1ACbqW9l81HY3mFwYivS9sEw9oCHlUVeIKcxG8pCOGzjJ7JcYSucg1nMoME-TljDrvKwBE-T0XGC4Pvpm6zqLYe9ZeLbE"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
