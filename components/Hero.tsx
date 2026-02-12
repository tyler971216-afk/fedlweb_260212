
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroProps {
  onResearchClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onResearchClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const darkOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial entrance animation
    const introTl = gsap.timeline();
    
    introTl.fromTo(
      videoRef.current,
      { scale: 1.1 },
      { scale: 1, duration: 1.5, ease: 'power2.out' }
    );

    introTl.fromTo(
      darkOverlayRef.current,
      { opacity: 0.9 },
      { opacity: 0.5, duration: 1.5, ease: 'power2.out' },
      0
    );

    introTl.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
      "-=0.8"
    );

    // Scroll-triggered effects - Optimized for smoother performance
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    scrollTl.to(textRef.current, { 
      y: -80, 
      opacity: 0, 
      ease: 'none' 
    }, 0)
    .to(videoRef.current, { 
      scale: 1.1, 
      ease: 'none' 
    }, 0)
    .to(darkOverlayRef.current, { 
      opacity: 0.95, 
      ease: 'none' 
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === containerRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A192F]"
    >
      {/* High-Tech Background Video - Forced Hardware Acceleration */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="https://image2url.com/r2/default/videos/1770198373012-40a5c1ad-0645-4c08-afee-8f358dbedfd0.mov" type="video/mp4" />
      </video>
      
      {/* Solid Black Overlay to handle brightness change efficiently */}
      <div 
        ref={darkOverlayRef}
        className="absolute inset-0 bg-black z-[1] pointer-events-none opacity-50"
      />
      
      {/* Scientific Overlay Gradients */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/40 via-transparent to-[#131C31] z-[2] pointer-events-none"
      />

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-5xl will-change-transform">
        <div className="inline-flex items-center space-x-3 mb-8 px-5 py-2.5 border border-blue-400/30 rounded-full bg-blue-950/50 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <span className="text-[11px] font-mono tracking-[0.4em] text-blue-300 uppercase font-bold">Flexible Electronic Device Lab</span>
        </div>
        
        <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-normal leading-none select-none">
          Welcome to <br />
          {/* Manually kerned FEDL logo with precisely balanced spacing */}
          <span className="inline-flex mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 font-tech drop-shadow-2xl select-none">
            <span>F</span>
            <span className="ml-[0.06em]">E</span>
            <span className="ml-[0.06em]">D</span>
            <span className="ml-[0.06em]">L</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300/90 mb-14 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
          Innovating with <span className="text-white font-medium">2D materials and flexible electronics</span> to redefine the limits of semiconductor technology.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button 
            onClick={onResearchClick}
            className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl transition-all shadow-[0_10px_40px_rgba(37,99,235,0.3)] transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
          >
            RESEARCH
          </button>
          <a 
            href="#publications" 
            className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-xl font-black rounded-xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest text-sm"
          >
            PUBLICATIONS
          </a>
        </div>
      </div>

      {/* Interactive Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-40 flex flex-col items-center space-y-3">
        <span className="text-[10px] font-mono text-blue-400 tracking-[0.5em] uppercase">Scroll to explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
