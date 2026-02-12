import React, { useState, useEffect, useRef } from 'react';
import { Bell, Newspaper, Image as ImageIcon, ArrowRight, Search, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { gsap } from 'gsap';
import { BOARD_ITEMS } from '../constants';
import { BoardItem } from '../types';

interface BoardProps {
  onSearch?: (query: string) => void;
}

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
    
    // Entrance Animation
    const ctx = gsap.context(() => {
      gsap.fromTo(modalRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.4, ease: 'power2.out' }
      );
      gsap.fromTo(contentRef.current, 
        { scale: 0.85, opacity: 0, filter: 'blur(10px)' }, 
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.5, delay: 0.1, ease: 'back.out(1.4)' }
      );
    });

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
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-3 md:p-4 text-white bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 z-[220] border border-white/30"
            title="Close (Esc)"
          >
            <X size={24} strokeWidth={2.5} />
          </button>

          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm z-[210] border border-white/10"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % images.length); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm z-[210] border border-white/10"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
        </div>

        <div className="mt-10 text-center pointer-events-auto bg-black/60 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/10 shadow-2xl">
          <h4 className="text-white font-bold text-lg md:text-xl mb-1 drop-shadow-lg">{title}</h4>
          <div className="flex items-center justify-center space-x-3">
             <span className="text-blue-400 font-mono text-xs tracking-widest font-bold uppercase">Image {index + 1} / {images.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryCard: React.FC<{ item: BoardItem }> = ({ item }) => {
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
        className="group relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 h-full min-h-[300px] cursor-zoom-in"
      >
        <img 
          src={images[currentIndex]} 
          alt={item.title} 
          className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110" 
        />
        
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <Maximize2 className="text-white" size={24} />
          </div>
        </div>

        {hasMultiple && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
              aria-label="Previous Image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm z-10"
              aria-label="Next Image"
            >
              <ChevronRight size={20} />
            </button>
            
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 w-4' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#131C31] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>
        
        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
          <span className="text-[9px] text-blue-400 font-mono mb-1 block uppercase tracking-widest">{item.date}</span>
          <h4 className="text-base font-bold text-white leading-tight line-clamp-2">{item.title}</h4>
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

const Board: React.FC<BoardProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const notices = BOARD_ITEMS.filter(i => i.type === 'Notice').slice(0, 3);
  const newsItems = BOARD_ITEMS.filter(i => i.type === 'News').slice(0, 3);
  const galleries = BOARD_ITEMS.filter(i => i.type === 'Gallery').slice(0, 3);

  return (
    <section id="board" className="py-24 bg-[#131C31] px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-white text-center text-3xl font-black mb-6 uppercase tracking-widest">Search Board</h2>
            <form onSubmit={handleSearchSubmit} className="relative group">
              <input 
                type="text" 
                placeholder="Search for notices, news, and more..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 text-[#131C31] rounded-2xl px-14 py-5 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-600 transition-colors" size={24} />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#131C31] hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-lg active:scale-95"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div id="board-notice">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Bell className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Notice</h3>
              </div>
              <a href="#board-notice" className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors">View All</a>
            </div>
            <div className="bg-[#1E293B] rounded-[32px] overflow-hidden border border-slate-700/50 shadow-xl">
              {notices.map(item => (
                <a key={item.id} href="#board-notice" className="p-6 border-b border-slate-700/50 hover:bg-white/5 transition-all flex justify-between items-center group cursor-pointer">
                  <div className="flex-grow pr-4">
                    <span className="text-[9px] text-slate-500 font-mono mb-1 block uppercase tracking-widest">{item.date}</span>
                    <h4 className="text-slate-200 group-hover:text-blue-400 transition-colors font-medium text-sm line-clamp-1">{item.title}</h4>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div id="board-news">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Newspaper className="text-blue-500" size={24} />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">News</h3>
              </div>
              <a href="#board-news" className="text-[10px] font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors">View All</a>
            </div>
            <div className="bg-[#1E293B] rounded-[32px] overflow-hidden border border-slate-700/50 shadow-xl">
              {newsItems.map(item => (
                <a key={item.id} href="#board-news" className="p-6 border-b border-slate-700/50 hover:bg-white/5 transition-all flex justify-between items-center group cursor-pointer">
                  <div className="flex-grow pr-4">
                    <span className="text-[9px] text-blue-500 font-mono mb-1 block uppercase tracking-widest">{item.date}</span>
                    <h4 className="text-slate-200 group-hover:text-blue-400 transition-colors font-medium text-sm line-clamp-1">{item.title}</h4>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div id="board-gallery">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <ImageIcon className="text-blue-500" size={24} />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Gallery</h3>
            </div>
            <a href="#board-gallery" className="px-6 py-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:bg-white/5 hover:border-slate-500 transition-all text-[10px] font-bold uppercase tracking-widest">
              Explore Full Gallery
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map(item => (
              <div key={item.id} className="h-full">
                <GalleryCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board;