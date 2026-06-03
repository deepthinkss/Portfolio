import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="border border-white/30 p-1">
              <h2 className="text-4xl font-black text-black font-mono tracking-widest bg-white text-black p-4">
                [ABOUT_ME]
              </h2>
            </div>
            
            <div className="space-y-6 font-mono">
              <div className="border border-white/20 p-6 bg-black/50">
                <div className="text-green-400 mb-2">// SYSTEM INFORMATION</div>
                <p className="text-white/80 leading-relaxed">
                  COMPUTER ENGINEERING STUDENT WITH A STRONG FOUNDATION IN DATA STRUCTURES,
                  ALGORITHMS, C++, AND FULL-STACK PRODUCT THINKING. FOCUSED ON BUILDING PRACTICAL
                  WEB AND MOBILE APPLICATIONS THAT ARE RELIABLE, RESPONSIVE, AND EASY TO USE.
                </p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/50">
                <div className="text-green-400 mb-2">// CORE FUNCTIONS</div>
                <p className="text-white/80 leading-relaxed">
                  SKILLED IN REACT, REACT NATIVE, PYTHON, SQL, AND MODERN DEVELOPMENT WORKFLOWS.
                  ACTIVELY EXPANDING INTO AI-ASSISTED DEVELOPMENT, PROMPT ENGINEERING, AND
                  INTELLIGENT FEATURES THAT IMPROVE REAL-WORLD USER EXPERIENCES.
                </p>
              </div>
              
              <div className="border border-white/20 p-6 bg-black/50">
                <div className="text-green-400 mb-2">// ADDITIONAL PROCESSES</div>
                <p className="text-white/80 leading-relaxed">
                  CURRENTLY PURSUING A BACHELOR OF ENGINEERING IN COMPUTER ENGINEERING AT SINHGAD
                  COLLEGE OF ENGINEERING, PUNE. MOTIVATED BY PROBLEM SOLVING, CLEAN IMPLEMENTATION,
                  AND COLLABORATIVE ENGINEERING ENVIRONMENTS.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="border border-white/30 p-4 text-center bg-black/50">
                <div className="text-3xl font-black text-white font-mono mb-2">8+</div>
                <div className="text-sm text-white/60 font-mono tracking-wider">PROJECTS</div>
              </div>
              <div className="border border-white/30 p-4 text-center bg-black/50">
                <div className="text-3xl font-black text-white font-mono mb-2">7.68</div>
                <div className="text-sm text-white/60 font-mono tracking-wider">CGPA</div>
              </div>
              <div className="border border-white/30 p-4 text-center bg-black/50">
                <div className="text-3xl font-black text-white font-mono mb-2">10+</div>
                <div className="text-sm text-white/60 font-mono tracking-wider">TECH</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="border-4 border-white p-4 bg-black">
                <div className="w-80 h-80 bg-white/10 border-2 border-white/30 flex items-center justify-center">
                  <img
                    src="/assets/profilepic.png"
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
