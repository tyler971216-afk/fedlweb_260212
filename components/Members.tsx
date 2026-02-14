import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { MEMBERS } from '../constants';

interface MembersProps {
  onExploreClick?: () => void;
}

const Members: React.FC<MembersProps> = ({ onExploreClick }) => {
  // Only display the Professor category
  const professor = MEMBERS.find(m => m.category === 'Professor');

  if (!professor) return null;

  return (
    <section id="members" className="pt-32 pb-40 px-6 bg-[#131C31]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-[0.3em] text-white uppercase">Professor</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="group relative w-full max-w-[400px] bg-[#1E293B] rounded-[32px] overflow-hidden shadow-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-700 mb-12">
            {/* Specified size: 400 * 560 */}
            <div className="relative w-full h-[560px] overflow-hidden bg-slate-900">
              <img 
                src={professor.image} 
                alt={professor.name}
                className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-700"></div>
              
              {/* Overlay Content: Name and Scholar Link */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white drop-shadow-2xl">{professor.name}</h3>
                </div>
                <div className="flex">
                  <a 
                    href="https://scholar.google.co.kr/citations?user=vT6MPyIAAAAJ&hl=ko&oi=ao" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-blue-600 transition-all border border-white/10 shadow-lg"
                    title="Google Scholar"
                  >
                    <GraduationCap size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Button */}
          <button 
            onClick={onExploreClick}
            className="group flex items-center space-x-3 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-[0_15px_40px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-2 active:scale-95"
          >
            <span className="text-sm font-black uppercase tracking-[0.2em]">Explore Our Group</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Members;