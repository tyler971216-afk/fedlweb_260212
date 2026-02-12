
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Members from './components/Members';
import Board from './components/Board';
import Footer from './components/Footer';
import ResearchDetail from './components/ResearchDetail';
import PublicationDetail from './components/PublicationDetail';
import MemberDetail from './components/MemberDetail';
import BoardDetail from './components/BoardDetail';

gsap.registerPlugin(ScrollTrigger);

type ViewState = 
  | 'main' 
  | 'contact'
  | 'research-2d' | 'research-hp' | 'research-ns' 
  | 'pub-2021' | 'pub-2011' | 'pub-2010' | 'pub-book'
  | `members-${string}`
  | `board-${string}`;

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('main');
  const [boardSearchQuery, setBoardSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const navigateTo = (view: ViewState, query: string = '') => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setBoardSearchQuery(query);
    setCurrentView(view);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button only on main view when scrolled down
      setShowScrollTop(window.scrollY > 400);
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          
          if (!targetId || targetId === '') {
            navigateTo('main');
          } else if (targetId === 'contact') {
            navigateTo('contact');
          } else if (targetId === 'research-2d-materials') {
            navigateTo('research-2d');
          } else if (targetId === 'research-high-performance-flexible-electronics') {
            navigateTo('research-hp');
          } else if (targetId === 'research-neural-sensors-and-brain-computer-interfaces') {
            navigateTo('research-ns');
          } else if (targetId === 'publications-present-2021') {
            navigateTo('pub-2021');
          } else if (targetId === 'publications-2020-2011') {
            navigateTo('pub-2011');
          } else if (targetId === 'publications-2010-and-earlier') {
            navigateTo('pub-2010');
          } else if (targetId === 'publications-book-chapters') {
            navigateTo('pub-book');
          } else if (targetId.startsWith('members-')) {
            const category = targetId.replace('members-', '');
            navigateTo(`members-${category}`);
          } else if (targetId.startsWith('board-')) {
            const type = targetId.replace('board-', '');
            navigateTo(`board-${type}`);
          } else if (targetId === 'research') {
            scrollToSection('research');
          } else if (targetId === 'publications') {
            scrollToSection('publications');
          } else {
            scrollToSection(targetId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);

    if (currentView === 'main') {
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mainContentRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [currentView]);

  return (
    <div className={`min-h-screen ${currentView === 'main' ? 'bg-white' : 'bg-[#F8FAFC]'} overflow-x-hidden`}>
      <Navbar 
        onHomeClick={() => navigateTo('main')} 
        onContactClick={() => navigateTo('contact')}
        isLightMode={currentView !== 'main'} 
      />
      
      {currentView === 'main' ? (
        <>
          <Hero onResearchClick={() => scrollToSection('research')} />
          <main ref={mainContentRef} className="relative z-10 bg-white">
            <Research onDetailClick={(id) => {
              if (id === '1') navigateTo('research-2d');
              if (id === '2') navigateTo('research-hp');
              if (id === '3') navigateTo('research-ns');
            }} />
            <Publications onDetailClick={(period) => {
              if (period === 'present-2021') navigateTo('pub-2021');
              if (period === '2020-2011') navigateTo('pub-2011');
              if (period === '2010 and earlier') navigateTo('pub-2010');
            }} />
            <Members onExploreClick={() => navigateTo('members-professor')} />
            <Board onSearch={(query) => navigateTo('board-notice', query)} />
          </main>
          
          {/* Scroll to Top Button for Home View */}
          <button 
            onClick={scrollToTop}
            className={`fixed bottom-10 right-10 z-[100] p-5 bg-[#131C31] text-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-500 transform ${
              showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
            } hover:bg-blue-600 hover:-translate-y-2 active:scale-95 group`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:animate-bounce" />
          </button>
        </>
      ) : (
        <div className="pt-24">
          {currentView === 'contact' && (
            <div className="bg-[#F1F5F9] min-h-[calc(100vh-80px)]">
              <Footer />
            </div>
          )}
          {(currentView === 'research-2d' || currentView === 'research-hp' || currentView === 'research-ns') && (
            <ResearchDetail 
              type={currentView === 'research-2d' ? '2d' : currentView === 'research-hp' ? 'hp' : 'ns'} 
              onBack={() => navigateTo('main')} 
            />
          )}
          {currentView === 'pub-2021' && <PublicationDetail period="2021" onBack={() => navigateTo('main')} />}
          {currentView === 'pub-2011' && <PublicationDetail period="2011" onBack={() => navigateTo('main')} />}
          {currentView === 'pub-2010' && <PublicationDetail period="2010" onBack={() => navigateTo('main')} />}
          {currentView === 'pub-book' && <PublicationDetail period="book" onBack={() => navigateTo('main')} />}
          
          {currentView.startsWith('members-') && (
            <MemberDetail 
              category={currentView.replace('members-', '')} 
              onBack={() => navigateTo('main')}
              onCategoryChange={(cat) => navigateTo(`members-${cat.toLowerCase().replace(/ /g, '-')}`)}
            />
          )}

          {currentView.startsWith('board-') && (
            <BoardDetail 
              type={currentView.replace('board-', '')} 
              initialSearch={boardSearchQuery}
              onBack={() => navigateTo('main')}
              onTypeChange={(type) => navigateTo(`board-${type.toLowerCase()}`)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
