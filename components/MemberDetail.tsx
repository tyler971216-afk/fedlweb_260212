
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ChevronRight, GraduationCap, Mail, User, Beaker, Phone, Home, ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { MEMBERS } from '../constants';
import { Member } from '../types';

interface MemberDetailProps {
  category: string; // URL-safe slug or raw name
  onBack: () => void;
  onCategoryChange: (category: string) => void;
}

const CATEGORIES = [
  'Professor', 
  'Research Professor', 
  'Post doctors', 
  'Ph.D students', 
  'M.S students', 
  'Undergraduate students', 
  'Alumni', 
  'Staff'
];

const MemberDetail: React.FC<MemberDetailProps> = ({ category, onBack, onCategoryChange }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Normalize category name for display and matching
  const displayCategory = category.split('-').map(word => 
    word === 'ph.d' ? 'Ph.D' : word === 'm.s' ? 'M.S' : word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  useEffect(() => {
    gsap.fromTo('.member-fade', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [category]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderProfessorContent = () => {
    return (
      <div className="flex flex-col lg:flex-row gap-10 items-start member-fade">
        <div className="w-full lg:w-[280px] flex-shrink-0">
          <div className="rounded-[24px] overflow-hidden shadow-xl border border-slate-200 bg-white group">
            <img 
              src="https://i.postimg.cc/kgdn8Sjh/an.png" 
              alt="Prof. Jong-Hyun Ahn" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <a 
              href="https://scholar.google.co.kr/citations?user=vT6MPyIAAAAJ&hl=ko&oi=ao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-5 py-3 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-md w-full justify-center"
            >
              <GraduationCap size={18} />
              <span className="text-xs uppercase tracking-wider">Google Scholar</span>
            </a>
          </div>
        </div>

        <div className="flex-grow space-y-10">
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-xl font-black text-[#131C31] uppercase tracking-wider">Degree</h2>
            </div>
            <ul className="space-y-3 text-[15px] text-[#334155] font-light">
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span>B.S. in Materials Science and Engineering, POSTECH</li>
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span>M.A. in Materials Science and Engineering, POSTECH</li>
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span>Ph.D. in Materials Science and Engineering, POSTECH</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-xl font-black text-[#131C31] uppercase tracking-wider">Career</h2>
            </div>
            <ul className="space-y-5 text-[15px] text-[#334155] font-light">
              <li className="flex items-start">
                <div className="min-w-[130px] font-bold text-[#131C31]">2013 - Present</div>
                <div><strong>Professor, Underwood Distinguished Professor</strong>, School of Electrical & Electronic Engineering, Yonsei University</div>
              </li>
              <li className="flex items-start"><div className="min-w-[130px] font-bold text-[#131C31]">2022 - Present</div><div><strong>Fellow</strong> of the Korea Academy of Science and Technology</div></li>
              <li className="flex items-start"><div className="min-w-[130px] font-bold text-[#131C31]">2019 - Present</div><div><strong>President</strong> of Korean Graphene Society</div></li>
              <li className="flex items-start"><div className="min-w-[130px] font-bold text-[#131C31]">2015 - Present</div><div><strong>Director</strong> of Strain Engineered Electronic Devices</div></li>
              <li className="flex items-start"><div className="min-w-[130px] font-bold text-[#131C31]">2015 - Present</div><div><strong>Associated Editor</strong>, ‘NPG Asia Materials’</div></li>
              <li className="flex items-start"><div className="min-w-[130px] font-bold text-[#131C31]">2008 - 2012</div><div><strong>Assistant/Associate Professor</strong>, Sungkyunkwan University</div></li>
              <li className="flex items-start"><div className="min-w-[130px] font-bold text-[#131C31]">2004 - 2008</div><div><strong>Post-doctor</strong>, University of Illinois at UC, IL, USA</div></li>
            </ul>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-1 bg-blue-600 rounded-full"></div>
              <h2 className="text-xl font-black text-[#131C31] uppercase tracking-wider">Award</h2>
            </div>
            <ul className="space-y-3 text-[15px] text-[#334155] font-light">
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span><strong>George Smith Award</strong> (IEEE Electron Device Society, 2009)</li>
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span><strong>National Young Scientist Award</strong> (Korea President Award, 2011)</li>
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span><strong>ICT Innovation Grand Prize</strong> (The Ministry of Science & Technology, 2015)</li>
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span><strong>National Academy Award</strong> (National Academy of Science, 2018)</li>
              <li className="flex items-start"><span className="text-blue-600 mr-3 font-bold">•</span><strong>The Samil Prize</strong> (The Samil Foundation, 2021)</li>
            </ul>
          </section>
        </div>
      </div>
    );
  };

  const renderMemberGrid = (members: Member[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 member-fade">
        {members.map((m) => (
          <div key={m.id} className="flex space-x-6 items-start p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-[140px] flex-shrink-0">
              <div className="rounded-2xl aspect-[140/180] overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center">
                {m.image ? (
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <User size={40} className="text-slate-300" />
                )}
              </div>
            </div>
            <div className="flex-grow space-y-3 pt-1">
              <div>
                <h3 className="text-lg font-black text-[#131C31] leading-none mb-1">{m.name}</h3>
                {m.nameEn && <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">{m.nameEn}</p>}
                {m.degree && <p className="text-[11px] font-black text-blue-600 uppercase tracking-widest mt-1.5">{m.degree}</p>}
              </div>
              
              <div className="space-y-2 pt-1">
                {m.email && (
                  <div className="flex items-center space-x-2.5">
                    <Mail size={13} className="text-blue-500 flex-shrink-0" />
                    <a href={`mailto:${m.email}`} className="text-[13px] text-slate-500 hover:text-blue-600 transition-colors truncate max-w-[160px]">{m.email}</a>
                  </div>
                )}
                {/* Staff specific field */}
                {m.telephone && (
                  <div className="flex items-center space-x-2.5">
                    <Phone size={13} className="text-blue-500 flex-shrink-0" />
                    <span className="text-[13px] text-slate-500">{m.telephone}</span>
                  </div>
                )}
                {/* Standard research field */}
                {m.researchArea && (
                  <div className="flex items-start space-x-2.5">
                    <Beaker size={13} className="text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-[13px] text-slate-600 leading-snug"><span className="font-bold text-[#131C31]">Research:</span> {m.researchArea}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {members.length === 0 && (
           <div className="col-span-full py-20 text-center">
             <div className="p-10 bg-slate-50 border border-slate-200 rounded-[32px] max-w-lg mx-auto">
                <h3 className="text-xl font-bold text-[#131C31] mb-3">{displayCategory}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {category.toLowerCase() === 'undergraduate-students' 
                    ? "If you are interested in joining our lab as an intern or graduate student, please check the Contact section."
                    : "This section is currently being updated with our latest lab members' profiles. Please check back soon."}
                </p>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
             </div>
           </div>
        )}
      </div>
    );
  };

  const renderAlumniGrid = (members: Member[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 member-fade">
        {members.map((m) => (
          <div key={m.id} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
            <h3 className="text-sm font-black text-[#131C31] mb-1">{m.name}</h3>
            {m.degree && <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tight mb-2">{m.degree}</p>}
            {m.currentInstitution && (
              <div className="flex items-start space-x-2">
                <Home size={10} className="text-slate-300 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-3">
                  {m.currentInstitution}
                </p>
              </div>
            )}
          </div>
        ))}
        {members.length === 0 && (
           <div className="col-span-full py-20 text-center">
             <div className="p-10 bg-slate-50 border border-slate-200 rounded-[32px] max-w-lg mx-auto">
                <h3 className="text-xl font-bold text-[#131C31] mb-3">{displayCategory}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  This section is currently being updated with our latest lab members' profiles. Please check back soon.
                </p>
                <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
             </div>
           </div>
        )}
      </div>
    );
  };

  const getActiveContent = () => {
    const slug = category.toLowerCase();
    if (slug === 'professor') return renderProfessorContent();

    const filteredMembers = MEMBERS.filter(m => {
      const catSlug = m.category.toLowerCase().replace(/ /g, '-');
      return catSlug === slug;
    });

    if (slug === 'alumni') {
      return renderAlumniGrid(filteredMembers);
    }

    return renderMemberGrid(filteredMembers);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 relative">
      {/* Floating Scroll Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-[#131C31] text-white rounded-full shadow-2xl transition-all duration-500 transform ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
        } hover:bg-blue-600 hover:-translate-y-1 active:scale-95`}
      >
        <ArrowUp size={24} />
      </button>

      {/* Header */}
      <div className="bg-[#131C31] text-white py-12 mb-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mb-5 group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Overview</span>
          </button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2 block">Members</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">{displayCategory}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Menu */}
          <aside className="w-full lg:w-56 flex-shrink-0 member-fade">
            <div className="sticky top-28 bg-white border border-slate-200 rounded-[24px] overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 bg-[#131C31]/5">
                <h4 className="text-[#131C31] font-black uppercase text-[11px] tracking-widest">Lab Members</h4>
              </div>
              <nav className="p-1.5">
                {CATEGORIES.map((cat) => {
                  const catSlug = cat.toLowerCase().replace(/ /g, '-');
                  const isActive = category.toLowerCase() === catSlug;
                  return (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all group ${
                        isActive 
                          ? 'bg-[#131C31] text-white shadow-md' 
                          : 'text-slate-500 hover:bg-slate-50 hover:text-[#131C31]'
                      }`}
                    >
                      <span className={`font-bold text-[13px] ${isActive ? 'translate-x-0.5' : ''} transition-transform`}>{cat}</span>
                      <ChevronRight size={14} className={`opacity-40 group-hover:opacity-100 ${isActive ? 'opacity-100 translate-x-0.5' : ''} transition-all`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="flex-grow">
            {getActiveContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
