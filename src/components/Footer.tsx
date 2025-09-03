import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Terminal className="w-6 h-6 text-white" />
            <div className="text-white font-mono font-bold tracking-wider">
              DEEP.THAKUR © 2025
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="text-white/60 font-mono text-sm tracking-wider">
              [SYSTEM_STATUS: OPERATIONAL]
            </div>
            <button
              onClick={scrollToTop}
              className="group border border-white/50 p-3 text-white hover:bg-white hover:text-black transition-all duration-300 robotic-border"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;