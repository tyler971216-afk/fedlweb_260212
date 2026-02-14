
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Layers, Database, History } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger within this module
gsap.registerPlugin(ScrollTrigger);

const PERIODS = [
  { 
    id: 'present-2021', 
    label: 'Present - 2021', 
    description: 'Cutting-edge breakthroughs in 2D materials and neuromorphic systems.',
    image: 'https://i.postimg.cc/yNFNJPXm/xray.png',
    icon: <Layers className="text-blue-400" size={24} />
  },
  { 
    id: '2020-2011', 
    label: '2020 - 2011', 
    description: 'Milestones in flexible CMOS circuits and roll-to-roll manufacturing.',
    image: 'https://i.postimg.cc/bvN3F6Ct/18pyoji.jpg',
    icon: <Database className="text-blue-400" size={24} />
  },
  { 
    id: '2010 and earlier', 
    label: '2010 & Earlier', 
    description: 'The founding research in carbon nanotubes and early graphene synthesis.',
    image: 'https://i.postimg.cc/NjZ3hvXD/8-1.png',
    icon: <History className="text-blue-400" size={24} />
  }
] as const;

const STATS = [
  { label: 'Papers', value: 260, suffix: '' },
  { label: 'Citations', value: 65883, suffix: '', isFormatted: true },
  { label: 'Patents', value: 65, suffix: '' },
  { label: 'H-index', value: 98, suffix: '' }
];

interface PublicationsProps {
  onDetailClick?: (period: 'present-2021' | '2020-2011' | '2010 and earlier') => void;
}

const Publications: React.FC<PublicationsProps> = ({ onDetailClick }) => {
  const statsRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!statsRef.current) return;

    // Use a context to scoped animations and clean up easily
    const ctx = gsap.context(() => {
      STATS.forEach((stat, index) => {
        const target = { val: 0 };
        const el = numberRefs.current[index];
        
        if (el) {
          gsap.to(target, {
            val: stat.value,
            duration: 1.0, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top bottom-=100px", 
              toggleActions: "play none none none"
            },
            onUpdate: () => {
              if (el) {
                const rounded = Math.round(target.val);
                el.innerText = stat.isFormatted 
                  ? rounded.toLocaleString() 
                  : rounded.toString();
              }
            }
          });
        }
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="publications" className="py-32 bg-[#131C31]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Publications</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PERIODS.map((period) => (
            <div 
              key={period.id}
              onClick={() => onDetailClick?.(period.id)}
              className="group relative aspect-[440/584] rounded-3xl overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.07)] hover:shadow-[0_0_60px_rgba(255,255,255,0.22)] border border-white/10 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-4 bg-[#020617]"
            >
              <div className="absolute inset-0">
                <img 
                  src={period.image} 
                  alt={period.label} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Added a subtle white bloom layer that intensifies on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="mb-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl w-fit border border-white/10 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-500 pointer-events-auto shadow-lg">
                  {period.icon}
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-[0.4em] mb-2 opacity-90 drop-shadow-md">Research Era</span>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors drop-shadow-lg">{period.label}</h3>
                <p className="text-slate-200 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 drop-shadow-md">
                  {period.description}
                </p>
                <div className="flex items-center space-x-3 text-white font-black text-[10px] uppercase tracking-widest border-t border-white/20 pt-5">
                  <span>Explore Full Archive</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lab Impact Stats */}
        <div 
          ref={statsRef}
          className="mt-32 pt-20 border-t border-slate-700/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="mb-4 flex flex-col items-center">
                  <div className="flex items-baseline justify-center">
                    <span 
                      ref={el => { numberRefs.current[index] = el; }}
                      className="text-4xl md:text-7xl font-black font-mono text-white group-hover:text-blue-400 transition-colors duration-500"
                    >
                      0
                    </span>
                    {stat.suffix && <span className="text-xl md:text-2xl font-black text-blue-500 ml-1">{stat.suffix}</span>}
                  </div>
                  <div className="h-1 w-12 bg-blue-600/30 mt-4 mb-4 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500"></div>
                </div>
                <div className="mt-2">
                  <h4 className="text-white text-2xl md:text-3xl font-black uppercase tracking-[0.1em] group-hover:text-blue-400 transition-colors duration-300">
                    {stat.label}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
