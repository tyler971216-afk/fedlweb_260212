import React, { useEffect, useState, useMemo, useRef } from 'react';
import { ArrowLeft, ChevronRight, Bell, Newspaper, Image as ImageIcon, ArrowUp, ExternalLink, Calendar, Eye, Search, X, ChevronLeft, Maximize2 } from 'lucide-react';
import { gsap } from 'gsap';
import { BOARD_ITEMS } from '../constants';
import { BoardItem } from '../types';

interface BoardDetailProps {
  type: string; // 'notice', 'news', 'gallery'
  initialSearch?: string;
  onBack: () => void;
  onTypeChange: (type: string) => void;
}

const CATEGORIES = ['Notice', 'News', 'Gallery'];

const Lightbox: React.FC<{ 
  images: string[]; 
  initialIndex: number; 
  title: string; 
  onClose: () => void 
}> = ({ images, initialIndex, title, onClose }) => {
  const [index, setIndex] = useState(initialIndex);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Smooth Entrance Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(modalRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: 'sine.out' }
      );
      gsap.fromTo(contentRef.current, 
        { y: 50, scale: 0.9, opacity: 0, filter: 'blur(15px)' }, 
        { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.6, delay: 0.1, ease: 'power3.out' }
      );
    });

    // Note: Scroll locking (document.body.style.overflow = 'hidden') is intentionally removed 
    // as per user request to allow background scrolling while the modal is open.
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
    };
  }, [images.length, onClose]);

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-transparent"
      onClick={onClose}
    >
      <div className="absolute inset-0 cursor-zoom-out" />

      <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
        
        <div ref={contentRef} className="relative group pointer-events-auto max-h-[80vh] flex items-center justify-center">
          <img 
            src={images[index]} 
            alt={`${title} - ${index + 1}`} 
            className="max-w-full max-h-[80vh] object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)] select-none rounded-sm bg-[#131C31]/20" 
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-3 md:p-4 text-white bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full shadow-2xl transition-all hover:scale-110 z-[220] border border-white/30"
          >
            <X size={24} strokeWidth={2.5} />
          </button>

          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 rounded-full z-[210] backdrop-blur-sm"
              >
                <ChevronLeft size={40} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % images.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 rounded-full z-[210] backdrop-blur-sm"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}
        </div>

        <div className="mt-10 text-center pointer-events-auto bg-black/60 backdrop-blur-lg px-8 py-5 rounded-3xl border border-white/10 shadow-2xl max-w-2xl">
          <h4 className="text-white font-black text-lg md:text-2xl mb-2 tracking-tight uppercase">{title}</h4>
          <div className="flex items-center justify-center space-x-6">
            <span className="text-blue-500 font-mono text-sm font-bold tracking-[0.2em]">{index + 1} / {images.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryCardDetail: React.FC<{ item: BoardItem }> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const images = item.images || (item.image ? [item.image] : []);
  const hasMultiple = images.length > 1;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div 
        onClick={() => setIsLightboxOpen(true)}
        className="group relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100 border border-slate-200 cursor-zoom-in"
      >
        <img 
          src={images[currentIndex]} 
          alt={item.title} 
          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110" 
        />
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <Maximize2 className="text-white" size={20} />
          </div>
        </div>

        {hasMultiple && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity z-10">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
        
        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
          <span className="text-[10px] text-blue-400 font-mono mb-1 block uppercase tracking-widest">{item.date}</span>
          <h4 className="text-lg font-bold text-white leading-tight">{item.title}</h4>
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox 
          images={images} 
          initialIndex={currentIndex} 
          title={item.title} 
          onClose={() => setIsLightboxOpen(false)} 
        />
      )}
    </>
  );
};

const BoardDetail: React.FC<BoardDetailProps> = ({ type, initialSearch = '', onBack, onTypeChange }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [localInputValue, setLocalInputValue] = useState(initialSearch);
  const [appliedSearchQuery, setAppliedSearchQuery] = useState(initialSearch);

  const displayType = type.charAt(0).toUpperCase() + type.slice(1);

  useEffect(() => {
    gsap.fromTo('.board-fade', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [type, appliedSearchQuery]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredItems = useMemo(() => {
    let items = BOARD_ITEMS.filter(item => item.type.toLowerCase() === type.toLowerCase());
    
    if (appliedSearchQuery.trim()) {
      const q = appliedSearchQuery.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(q) || 
        (item.source && item.source.toLowerCase().includes(q))
      );
    }
    
    return items;
  }, [type, appliedSearchQuery]);

  const handleManualSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAppliedSearchQuery(localInputValue);
  };

  const handleClear = () => {
    setLocalInputValue('');
    setAppliedSearchQuery('');
  };

  const renderContent = () => {
    if (type.toLowerCase() === 'gallery') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 board-fade">
          {filteredItems.map((item) => (
            <GalleryCardDetail key={item.id} item={item} />
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400">
              No items matching "{appliedSearchQuery}"
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="space-y-4 board-fade">
        {filteredItems.map((item) => {
          const isNotice = item.type.toLowerCase() === 'notice';
          
          return (
            <div key={item.id} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow group flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="px-2.5 py-1 bg-slate-100 text-[#131C31] text-[10px] font-bold rounded-md uppercase tracking-wider">{item.type}</span>
                  <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] font-mono">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  {!isNotice && item.views !== undefined && (
                    <div className="flex items-center space-x-1.5 text-slate-400 text-[11px] font-mono">
                      <Eye size={12} />
                      <span>{item.views.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                <h3 className={`text-lg font-bold text-[#131C31] ${!isNotice ? 'group-hover:text-blue-600' : ''} transition-colors leading-snug`}>{item.title}</h3>
                {item.source && <p className="text-sm text-slate-500 mt-1 font-medium">{item.source}</p>}
              </div>
              
              {!isNotice && (
                <div className="flex-shrink-0 flex flex-wrap gap-2 justify-end">
                  {item.links ? (
                    item.links.map((lnk, idx) => (
                      <a 
                        key={idx}
                        href={lnk.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors text-xs font-bold uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-lg"
                      >
                        <span>{lnk.label}</span>
                        <ExternalLink size={14} />
                      </a>
                    ))
                  ) : item.link ? (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors text-xs font-bold uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-lg"
                    >
                      <span>Detail</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button className="flex items-center space-x-2 text-slate-400 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-widest">
                      <span>Detail</span>
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-lg">No results found for "<span className="text-[#131C31] font-bold">{appliedSearchQuery}</span>"</p>
            <button 
              onClick={handleClear}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20 relative">
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-[#131C31] text-white rounded-full shadow-2xl transition-all duration-500 transform ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
        } hover:bg-blue-600 hover:-translate-y-1 active:scale-95`}
      >
        <ArrowUp size={24} />
      </button>

      <div className="bg-[#131C31] text-white py-12 mb-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mb-5 group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Overview</span>
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">{displayType}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-56 flex-shrink-0 member-fade">
            <div className="sticky top-28 space-y-4">
              <div className="bg-white border border-slate-200 rounded-[24px] overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-100 bg-[#131C31]/5">
                  <h4 className="text-[#131C31] font-black uppercase text-[11px] tracking-widest">Categories</h4>
                </div>
                <nav className="p-1.5">
                  {CATEGORIES.map((cat) => {
                    const isActive = type.toLowerCase() === cat.toLowerCase();
                    return (
                      <button
                        key={cat}
                        onClick={() => onTypeChange(cat)}
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

              <div className="bg-white border border-slate-200 rounded-[24px] p-5 shadow-sm">
                <h4 className="text-[#131C31] font-black uppercase text-[11px] tracking-widest mb-4">Search Within</h4>
                <form onSubmit={handleManualSearch} className="space-y-3">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Keywords..."
                      value={localInputValue}
                      onChange={(e) => setLocalInputValue(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all font-medium"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    {localInputValue && (
                      <button 
                        type="button"
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-[#131C31] text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all shadow-md group/btn"
                    aria-label="Search"
                  >
                    <Search size={18} className="group-hover/btn:scale-110 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </aside>

          <main className="flex-grow">
            {appliedSearchQuery && (
              <div className="mb-6 flex items-center justify-between bg-blue-50/50 border border-blue-100 rounded-2xl p-4 board-fade">
                <p className="text-sm text-blue-900">
                  Showing results for "<span className="font-bold">{appliedSearchQuery}</span>" in {displayType}
                </p>
                <button 
                  onClick={handleClear}
                  className="text-blue-600 text-xs font-bold uppercase tracking-widest hover:text-blue-800"
                >
                  Clear
                </button>
              </div>
            )}
            
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;