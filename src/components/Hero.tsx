import React, { useEffect, useState } from 'react';
import { ChevronDown, Terminal, Code, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'DEEP THAKUR';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-20 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Terminal Header */}
          <div className="flex justify-center mb-8">
            <div className="border border-white/30 bg-black/50 backdrop-blur-sm p-4 font-mono text-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white/60 ml-4">terminal.exe</span>
              </div>
              <div className="text-white">
                <span className="text-green-400">$</span> whoami
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-wider font-mono">
              <span className="glitch-text terminal-cursor" data-text={displayText}>
                {displayText}
              </span>
            </h1>
            
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-4 text-white/80">
                <Cpu className="w-6 h-6" />
                <span className="text-xl md:text-2xl font-mono tracking-widest">FULL STACK DEVELOPER</span>
                <Code className="w-6 h-6" />
              </div>
              
              <p className="text-lg md:text-xl text-white/60 font-mono max-w-3xl mx-auto leading-relaxed tracking-wide">
                [SYSTEM_STATUS: ONLINE] | CRAFTING DIGITAL EXPERIENCES WITH PRECISION CODE
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-white text-black px-8 py-4 font-mono font-bold tracking-widest hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 robotic-border border-2 border-white"
            >
              [VIEW_PROJECTS]
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-white text-white px-8 py-4 font-mono font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 robotic-border"
            >
              [INITIALIZE_CONTACT]
            </button>
          </div>

          <div className="pt-12">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-200 group"
            >
              <span className="text-sm font-mono tracking-widest">[SCROLL_DOWN]</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-200 animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;