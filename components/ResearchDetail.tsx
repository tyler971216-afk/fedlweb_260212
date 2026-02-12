import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { gsap } from 'gsap';

interface ResearchDetailProps {
  type: '2d' | 'hp' | 'ns';
  onBack: () => void;
}

const ResearchDetail: React.FC<ResearchDetailProps> = ({ type, onBack }) => {
  useEffect(() => {
    gsap.fromTo('.detail-fade', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    );
  }, [type]);

  // Content for 2D Materials
  if (type === '2d') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20">
        <div className="bg-[#131C31] text-white py-20 mb-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Back to Overview</span>
            </button>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 detail-fade text-white">2D Materials</h1>
            
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl space-y-24">
          <section className="detail-fade">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    Synthesis of various 2D materials
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  For the last ten years, 2D materials emerged among many researchers headed by one atomic layer of graphite (graphene). 
                  We synthesized graphene and other 2D materials using chemical vapor deposition (CVD) and solution-based process on various substrates.
                  Our aim for the synthesis of 2D materials is large area and uniform synthesis of it.
                </p>
                
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/dtcS60wN/synthesis-png.jpg" 
                    alt="Synthesis of various 2D materials" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center italic text-sm text-slate-500">
                    CVD & Solution-based 2D material synthesis
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="detail-fade">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    2D material based ultra-thin heterogeneous devices
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  The unique properties of 2D materials enable to demonstrate the various emerging applications such as 
                  wearable electronics, bio-engineering devices and human-machine interfaces. Our research in the 2D material-based electronics could inspire the development of the technologies of near future electronics.
                </p>
                
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/4xdvQC70/devices-png.jpg" 
                    alt="2D material based ultra-thin devices" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center italic text-sm text-slate-500">
                
                </div>
              </div>
            </div>
          </section>

          <div className="pt-16 border-t border-slate-200 flex justify-end items-center detail-fade">
            <button 
              onClick={onBack}
              className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"
            >
              <span>Return to Main Overview</span>
              <ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Content for High Performance Flexible Electronics
  if (type === 'hp') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20">
        <div className="bg-[#131C31] text-white py-20 mb-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Back to Overview</span>
            </button>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 detail-fade text-white leading-tight">Flexible Electronics</h1>
            
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl space-y-24">
          <section className="detail-fade">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    Roll based transfer technique of inorganic thin-film
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  The roll-based transfer enables integration of heterogeneous thin film devices on arbitrary substrate while preserving excellent electrical and optical properties of these devices, comparable to their bulk properties.
                  All roll-based transfer procedures could enable the high productivity and large area scalability.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/28v3p0pw/rollbase.jpg" 
                    alt="Roll based transfer technique" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center italic text-sm text-slate-500">
                    Schematic of Roll-to-Roll (R2R) transfer process
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="detail-fade">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    Inorganic based high performance flexible / stretchable devices
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  Flexible/ stretchable electronics have led to promising classes of electronic device applications such as tactile sensors for artificial electronic skins, wearable electronic devices, stretchable displays, and electronic circuits.
                  Our lab focuses on utilizing high-quality inorganic materials to achieve performance levels that traditional organic flexible electronics cannot reach.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/qvxRqgvh/inorganic.jpg" 
                    alt="Inorganic flexible devices" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center italic text-sm text-slate-500">
                    High-performance inorganic stretchable circuits
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="pt-16 border-t border-slate-200 flex justify-end items-center detail-fade">
            <button 
              onClick={onBack}
              className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"
            >
              <span>Return to Main Overview</span>
              <ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Content for Neural Sensors and Brain-Computer Interfaces
  if (type === 'ns') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20">
        <div className="bg-[#131C31] text-white py-20 mb-12">
          <div className="container mx-auto px-6 max-w-5xl">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Back to Overview</span>
            </button>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 detail-fade text-white leading-tight">Neural Sensors and Brain-Computer Interfaces</h1>
            
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl space-y-24">
          
          <section className="detail-fade">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    Minimally Invasive Neural Implants
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  Traditional neural probes often cause tissue damage and lack long-term stability. Our lab develops ultra-flexible and injectable sensors using 2D materials like graphene and MoS₂ that conform to brain tissue.
                  These bio-compatible interfaces allow for high-fidelity monitoring of neural signals without inducing significant immune response.
                </p>
                
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/yNFNJPXm/xray.png" 
                    alt="Neural Implant Research" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center italic text-sm text-slate-500">
                    High-fidelity spatiotemporal monitoring of neural activities
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="detail-fade">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    Integrated Brain-Computer Interfaces
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  By integrating advanced backplane circuitry based on transition metal dichalcogenides (TMDs), we create large-area neural sensing arrays that can map cortical activity in real-time.
                  Our research bridges the gap between biological intelligence and digital systems, offering new hope for diagnosing and alleviating neurological symptoms like epilepsy and Parkinson’s disease.
                </p>
                
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/4xdvQC70/devices-png.jpg" 
                    alt="BCI Application" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center italic text-sm text-slate-500">
                    Injectable 2D material-based sensor array for neural implants
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="pt-16 border-t border-slate-200 flex justify-end items-center detail-fade">
            <button 
              onClick={onBack}
              className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"
            >
              <span>Return to Main Overview</span>
              <ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <div className="p-20 text-center text-[#131C31] font-bold">Loading Research Details...</div>;
};

export default ResearchDetail;