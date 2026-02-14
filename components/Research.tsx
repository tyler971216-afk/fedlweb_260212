import React from 'react';
import { Layers, Zap, Brain } from 'lucide-react';
import { RESEARCH_AREAS } from '../constants';

interface ResearchProps {
  onDetailClick: (id: string) => void;
}

const Research: React.FC<ResearchProps> = ({ onDetailClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-8 h-8 text-blue-400" />;
      case 'Zap': return <Zap className="w-8 h-8 text-blue-400" />;
      case 'Brain': return <Brain className="w-8 h-8 text-blue-400" />;
      default: return <Layers className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="research" className="py-32 px-6 bg-[#131C31]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Research Areas</h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-3xl text-lg font-light leading-relaxed">
            Our research focuses on the intersection of new materials and advanced electronic designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {RESEARCH_AREAS.map((area) => (
            <div 
              key={area.id} 
              id={`research-${area.title.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => onDetailClick(area.id)}
              className="group p-10 rounded-3xl bg-[#1E293B] border border-slate-700/50 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-[0_0_50px_rgba(59,130,246,0.12)] cursor-pointer flex flex-col h-full"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onDetailClick(area.id)}
            >
              <div className="mb-8 p-5 bg-blue-900/20 rounded-2xl inline-block group-hover:bg-blue-600 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-500 w-fit">
                 {getIcon(area.icon)}
              </div>
              {/* Added min-height to the title to align the description text below it */}
              <div className="min-h-[80px] mb-5 flex items-center">
                <h3 className="text-2xl font-bold text-white leading-tight">{area.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light mb-8 flex-grow">
                {area.description}
              </p>
              <div className="mt-auto border-t border-slate-700 pt-6">
                 <div 
                  className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] flex items-center space-x-2 group-hover:text-blue-300 transition-colors"
                >
                  <span>Explore Details</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;