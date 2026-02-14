
import React from 'react';
import { MapPin, Mail, ArrowUp, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Google Maps Embed URL for "Yonsei University Engineering Building 2"
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2471926639454!2d126.93666507663456!3d37.5610190720392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98897c768997%3A0x8828e8369527e0a2!2z7Jew7IS464yA7ZWZ6rWQIOygnDLqs7XtlZnotIA!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr";

  return (
    <footer id="contact" className="relative bg-[#F8FAFC] pt-24 pb-12 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle Scientific Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-light" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#131C31" strokeWidth="0.1" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-light)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-1.5 bg-blue-100 rounded-full border border-blue-200">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Connect with FEDL</span>
            </div>
            <h2 className="text-4xl font-black text-[#131C31] mb-8 uppercase tracking-tight">Get In Touch</h2>
            <p className="text-slate-500 mb-12 max-w-md text-lg font-light leading-relaxed">
              We are always open to talented researchers and innovative collaborations. Reach out to our lab for more information.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-5 group">
                <div className="p-4 bg-white rounded-2xl text-[#131C31] group-hover:bg-[#131C31] group-hover:text-white transition-all duration-300 shadow-md border border-slate-200">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[#131C31] font-black text-xs uppercase tracking-widest mb-1.5">Our Location</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">B715-2, Engineering Hall 2, Yonsei University, Seoul, Korea</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="p-4 bg-white rounded-2xl text-[#131C31] group-hover:bg-[#131C31] group-hover:text-white transition-all duration-300 shadow-md border border-slate-200">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[#131C31] font-black text-xs uppercase tracking-widest mb-1.5">Email Address</h4>
                  <a href="mailto:ahnj@yonsei.ac.kr" className="text-blue-600 hover:text-blue-800 text-sm font-bold transition-colors">ahnj@yonsei.ac.kr</a>
                </div>
              </div>
            </div>
          </div>

          {/* Real Google Maps Integration */}
          <div className="relative rounded-[40px] overflow-hidden h-[450px] shadow-2xl shadow-blue-900/10 border border-white group bg-slate-200">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yonsei University FEDL Lab Location"
              className="grayscale hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100"
            ></iframe>
            
            {/* Lab Specific Marker Overlay (Visual only, to point out the specific B715-2 hall) */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <div className="px-5 py-2.5 bg-[#131C31] text-white rounded-xl shadow-2xl border border-white/20">
                <p className="text-[10px] font-black uppercase tracking-widest">Target Location</p>
                <p className="text-sm font-bold">Engineering Hall 2, B715-2</p>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-white flex justify-between items-center shadow-2xl">
              <div className="hidden sm:block">
                <p className="text-[#131C31] text-xs font-black uppercase tracking-widest mb-1 flex items-center">
                  Campus Navigator
                </p>
                <p className="text-slate-500 text-[10px] font-medium">Interact with the map to explore Yonsei campus</p>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Yonsei+University+Engineering+Building+2" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#131C31] hover:bg-blue-600 rounded-xl text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center space-x-2 group/btn"
              >
                <span>Google Maps View</span>
                <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Branding Section */}
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <img 
                src="https://www.yonsei.ac.kr/sites/en_sc/images/sub/img-symbol1.png" 
                alt="Yonsei Symbol" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-black tracking-[0.2em] text-[#131C31] uppercase font-tech">FEDL</span>
            </div>
            <p className="text-slate-500 text-[10px] mt-3 font-mono uppercase tracking-[0.3em] font-bold">
              FLEXIBLE ELECTRONIC DEVICE LAB | YONSEI UNIVERSITY
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Affiliation</span>
              <span className="text-xs font-bold text-[#131C31]">School of Electrical & Electronic Engineering</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-5 bg-white hover:bg-[#131C31] rounded-full text-[#131C31] hover:text-white transition-all transform hover:-translate-y-2 shadow-lg border border-slate-200 group/top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="group-hover/top:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-[9px] uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} FLEXIBLE ELECTRONIC DEVICE LAB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
