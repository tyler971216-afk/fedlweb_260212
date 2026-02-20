
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
                    src="https://i.postimg.cc/Y0myXpgG/lotem-nonmun.png" 
                    alt="Synthesis of various 2D materials" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
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
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 detail-fade text-white leading-tight">High Performance Flexible Electronics</h1>
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl space-y-24">
          <section className="detail-fade">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-black text-[#131C31] uppercase tracking-wider">
                    2D based flevible backplane for active sensor array
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  We develop flexible active-matrix backplanes based on two-dimensional (2D) materials for next-generation sensor platforms.
                  By integrating high-performance 2D transistors into large-area arrays, our backplanes enable stable pixel addressing and reliable signal readout even under bending and mechanical deformation.
                  This approach supports conformal sensor systems—including imaging and multimodal sensing—where lightweight form factors and system-level uniformity are critical.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/8kBv62xd/BJ-nonmun.png" 
                    alt="Roll based transfer technique" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
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
                    Ultrahigh-Density, Multimodal, Minimally Invasive Neural Interface
                  </h2>
                </div>
                <p className="text-[#334155] leading-relaxed text-lg mb-6">
                  Conventional intracranial neural interfaces struggle to combine high spatial resolution, multimodal sensing, and low invasiveness.
                  To overcome this, we developed flexible MoS₂-based active electrocorticography arrays with multiplexed transistor architectures for ultrahigh-density neural mapping, wide bandwidth, and fast on-site acquisition.
                  We further introduced injectable mesh neural implants that integrate graphene microelectrodes with MoS₂ sensor arrays, enabling conformal multimodal monitoring of neural activity, cerebral blood flow, temperature, and intracranial pressure through small cranial openings. Together, these technologies provide a scalable, tissue-conformal, high-fidelity platform for next-generation diagnostic and therapeutic brain systems.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/66gZcGjR/aa.png" 
                    alt="Neural Implant Research" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
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
                  Rather than relying on passive electrode readout and external bulky electronics, our approach shifts neural interfacing toward intrinsically active, ultrathin electronic architectures based on two-dimensional materials. 
                  By embedding signal transduction and multiplexing directly at the cortical interface, these platforms fundamentally enhance data throughput while preserving mechanical compliance with soft neural tissues. 
                  The resulting system-level integration enables dense neural information capture within minimally invasive form factors. 
                  This paradigm offers a transformative hardware foundation for future integrated brain–computer interface technologies requiring both scalability and high spatiotemporal precision.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 group">
                  <img 
                    src="https://i.postimg.cc/rsBtwvRV/2.png" 
                    alt="BCI Application" 
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
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
