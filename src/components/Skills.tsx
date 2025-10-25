import React from 'react';
import { Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white font-mono tracking-widest mb-8">
            // TECHNICAL SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {/* Programming Languages */}
          <div className="border border-white/30 bg-black/80 font-mono">
            <div className="border-b border-white/20 p-3 bg-white/5">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">$ cat programming_languages</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">C++</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">C</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Python</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Java</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">SQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Web Technologies */}
          <div className="border border-white/30 bg-black/80 font-mono">
            <div className="border-b border-white/20 p-3 bg-white/5">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">$ cat web_technologies</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">HTML</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">JavaScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">React</span>
              </div>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="border border-white/30 bg-black/80 font-mono">
            <div className="border-b border-white/20 p-3 bg-white/5">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">$ cat frameworks_&_libraries</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">React Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Vite</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">React Router</span>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="border border-white/30 bg-black/80 font-mono">
            <div className="border-b border-white/20 p-3 bg-white/5">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">$ cat tools</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Git</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">GitHub</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">MySQL</span>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="border border-white/30 bg-black/80 font-mono md:col-span-2 lg:col-span-1">
            <div className="border-b border-white/20 p-3 bg-white/5">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">$ cat core_skills</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">App Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Web Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Data Structures</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">-</span>
                <span className="text-white/80 text-sm">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white font-mono tracking-widest mb-8">
            // CERTIFICATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Cloud Computing Foundation */}
          <div className="border border-white/30 bg-black/80 font-mono">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-400">$</span>
                    <h3 className="text-white font-bold text-sm">Google Cloud Computing Foundation</h3>
                  </div>
                  <p className="text-white/60 text-xs mb-3">Credly Badge</p>
                  <div className="text-green-400 text-xs">✓ VERIFIED</div>
                </div>
              </div>
            </div>
          </div>

          {/* Oracle Learning Explorer */}
          <div className="border border-white/30 bg-black/80 font-mono">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/10 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-red-400 rounded-sm"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-400">$</span>
                    <h3 className="text-white font-bold text-sm">Oracle Learning Explorer Certification</h3>
                  </div>
                  <p className="text-white/60 text-xs mb-3">Oracle</p>
                  <div className="text-green-400 text-xs">✓ VERIFIED</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">3</div>
            <div className="text-white/60 font-mono text-sm tracking-wider">PROJECTS_COMPLETED</div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">7.68</div>
            <div className="text-white/60 font-mono text-sm tracking-wider">CGPA</div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">10+</div>
            <div className="text-white/60 font-mono text-sm tracking-wider">TECHNOLOGIES</div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">2</div>
            <div className="text-white/60 font-mono text-sm tracking-wider">CERTIFICATIONS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;