import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="border border-white/30 p-1">
              <h2 className="text-4xl font-black text-black font-mono tracking-widest bg-white p-4">
              [ABOUT_ME]
              </h2>
            </div>
            
            <div className="space-y-6 font-mono">
              <div className="border border-white/20 p-6 bg-black/50">
                <div className="text-green-400 mb-2">// SYSTEM INFORMATION</div>
                <p className="text-white/80 leading-relaxed">
                  FULL-STACK DEVELOPER WITH COMPUTER ENGINEERING BUILDING SCALABLE MOBILE APP AND WEB APPLICATIONS. 
                  SPECIALIZED IN MODERN JAVASCRIPT FRAMEWORKS AND CLEAN, EFFICIENT CODE ARCHITECTURE.
                </p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/50">
                <div className="text-green-400 mb-2">// CORE FUNCTIONS</div>
                <p className="text-white/80 leading-relaxed">
                  COMBINING TECHNICAL EXPERTISE WITH DESIGN SENSIBILITY TO ENSURE OPTIMAL PERFORMANCE 
                  AND EXCEPTIONAL USER EXPERIENCE ACROSS ALL DIGITAL PLATFORMS.
                </p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/50">
                <div className="text-green-400 mb-2">// ADDITIONAL PROCESSES</div>
                <p className="text-white/80 leading-relaxed">
                  WHEN NOT EXECUTING CODE, SYSTEM EXPLORES NEW TECHNOLOGIES, CONTRIBUTES TO OPEN-SOURCE 
                  PROJECTS, AND SHARES KNOWLEDGE WITH THE DEVELOPER COMMUNITY.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="border border-white/30 p-4 text-center bg-black/50">
                <div className="text-3xl font-black text-white font-mono mb-2">5+</div>
                <div className="text-sm text-white/60 font-mono tracking-wider">PROJECTS</div>
              </div>
              <div className="border border-white/30 p-4 text-center bg-black/50">
                <div className="text-3xl font-black text-white font-mono mb-2">1+</div>
                <div className="text-sm text-white/60 font-mono tracking-wider">YEARS</div>
              </div>
              <div className="border border-white/30 p-4 text-center bg-black/50">
                <div className="text-3xl font-black text-white font-mono mb-2">12+</div>
                <div className="text-sm text-white/60 font-mono tracking-wider">TECH</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="border-4 border-white p-4 bg-black">
                <div className="w-80 h-80 bg-white/10 border-2 border-white/30 flex items-center justify-center">
                  <img
                    src="/src/assets/comgit.png"
                    alt="Deep Thakur"
                    className="w-72 h-72 object-cover filter grayscale"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white text-black border-2 border-black flex items-center justify-center font-mono font-black">
                [ON]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;