import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onContactClick: () => void;
  isLightMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onContactClick, isLightMode = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(prev => prev !== scrolled ? scrolled : prev);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Research', 
      href: '#research',
      subItems: [
        { name: '2D materials', href: '#research-2d-materials' },
        { name: 'High performance flexible electronics', href: '#research-high-performance-flexible-electronics' },
        { name: 'Neural sensors and brain-computer interfaces', href: '#research-neural-sensors-and-brain-computer-interfaces' }
      ]
    },
    { 
      name: 'Publications', 
      href: '#publications',
      subItems: [
        { name: 'Present - 2021', href: '#publications-present-2021' },
        { name: '2020 - 2011', href: '#publications-2020-2011' },
        { name: '2010 and earlier', href: '#publications-2010-and-earlier' },
        { name: 'Book Chapters', href: '#publications-book-chapters' }
      ]
    },
    { 
      name: 'Members', 
      href: '#members',
      subItems: [
        { name: 'Professor', href: '#members-professor' },
        { name: 'Research Professor', href: '#members-research-professor' },
        { name: 'Post doctors', href: '#members-post-doctors' },
        { name: 'Ph.D students', href: '#members-ph.d-students' },
        { name: 'M.S students', href: '#members-m.s-students' },
        { name: 'Undergraduate students', href: '#members-undergraduate-students' },
        { name: 'Alumni', href: '#members-alumni' },
        { name: 'Staff', href: '#members-staff' }
      ]
    },
    { 
      name: 'Board', 
      href: '#board',
      subItems: [
        { name: 'Notice', href: '#board-notice' },
        { name: 'News', href: '#board-news' },
        { name: 'Gallery', href: '#board-gallery' }
      ]
    },
  ];

  // Performance Note: Using solid color or slightly transparent instead of blur during scroll 
  // to prevent GPU "buffering" lag on heavy video backgrounds.
  const scrolledBg = isLightMode 
    ? 'bg-white/95 border-slate-200 shadow-sm' 
    : 'bg-[#131C31]/98 border-white/5 shadow-2xl';

  const bgColor = isScrolled 
    ? scrolledBg
    : 'bg-transparent border-transparent';

  const textColor = (isLightMode) 
    ? 'text-[#131C31]' 
    : 'text-slate-300 hover:text-white';

  const logoTextColor = (isLightMode)
    ? 'text-[#131C31]'
    : 'text-white';

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onContactClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding,border-color,box-shadow] duration-300 border-b ${bgColor} ${isScrolled ? 'py-3' : 'py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <button onClick={onHomeClick} className="flex items-center space-x-4 group text-left">
          <img 
            src="https://www.yonsei.ac.kr/sites/en_sc/images/sub/img-symbol1.png" 
            alt="Yonsei Symbol" 
            className="w-10 h-10 object-contain filter group-hover:brightness-125 transition-all"
          />
          <div className="flex flex-col">
            <span className={`text-3xl font-black font-tech tracking-[0.25em] leading-none transition-colors drop-shadow-sm ${logoTextColor}`}>FEDL</span>
            <span className="text-[9px] font-mono text-blue-600 uppercase tracking-[0.3em] mt-1.5 opacity-80">Flexible Electronic Device Lab</span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative dropdown group">
              <a 
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold flex items-center space-x-1 transition-colors ${textColor} hover:text-blue-500`}
              >
                <span>{item.name}</span>
                {item.subItems && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-transform" />}
              </a>
              
              {item.subItems && (
                <div className={`dropdown-content mt-0 py-2 border shadow-xl rounded-xl transition-opacity ${isLightMode ? 'bg-white border-slate-200' : 'bg-[#1E293B] border-slate-700'}`}>
                  {item.subItems.map(sub => (
                    <a 
                      key={sub.name} 
                      href={sub.href}
                      className={`block px-6 py-2.5 text-xs transition-all whitespace-nowrap ${isLightMode ? 'text-slate-600 hover:text-blue-600 hover:bg-slate-50' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'}`}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={handleContactClick}
            className={`ml-6 px-6 py-2.5 text-xs font-bold rounded-md transition-all duration-300 shadow-lg uppercase tracking-widest ${
              isLightMode 
              ? 'bg-[#131C31] hover:bg-blue-900 text-white shadow-blue-900/10' 
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20'
            }`}
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] flex flex-col pt-24 px-8 space-y-4 transition-all duration-500 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden ${isLightMode ? 'bg-white' : 'bg-[#131C31]'}`}
      >
        {navItems.map((item) => (
          <div key={item.name} className={`border-b pb-4 ${isLightMode ? 'border-slate-100' : 'border-slate-800'}`}>
            <a 
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black mb-2 block ${isLightMode ? 'text-[#131C31]' : 'text-white'}`}
            >
              {item.name}
            </a>
          </div>
        ))}
        <button 
          onClick={handleContactClick}
          className="w-full py-4 bg-blue-600 text-white font-black rounded-xl text-center uppercase tracking-widest mt-4"
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;