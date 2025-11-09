import React from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'EXPENSE TRACKER APP',
      description: 'BUILT AN EXPENSE TRACKING APP FOR ANDROID USING REACT NATIVE AND EXPO. USED REDUX FOR STATE MANAGEMENT AND ASYNCSTORAGE FOR PERSISTENCE. BOOSTED USER ENGAGEMENT BY 25% THROUGH REAL-TIME SYNC.',
      techStack: ['REACT NATIVE', 'REDUX', 'ASYNCSTORAGE', 'EXPO'],
      liveDemo:'https://expo.dev/@deepthinkss/ExpenseTrackerApp',
      githubRepo: 'https://github.com/deepthinkss',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'URL_SHORTENER_&_QR_GENERATOR',
      description: 'BUILT A RESPONSIVE WEB APP TO SHORTEN URLS AND GENERATE QR CODES INSTANTLY. USED QRCODE.JS FOR DYNAMIC QR CODE CREATION AND REACT ROUTER FOR SMOOTH NAVIGATION. STYLED WITH TAILWIND CSS.',
      techStack: ['REACT', 'VITE', 'TAILWIND CSS', 'TYPESCRIPT'],
      liveDemo: 'https://precious-elf-1e315b.netlify.app',
      githubRepo: 'https://github.com/deepthinkss',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'HUFFMAN_FILE_COMPRESSION',
      description: 'IMPLEMENTED HUFFMAN CODING ALGORITHM FOR FILE COMPRESSION/DECOMPRESSION. ACHIEVED 40% AVERAGE REDUCTION IN FILE SIZE WHILE PRESERVING SPEED AND ACCURACY.',
      techStack: ['C++', 'ALGORITHMS', 'DATA STRUCTURES'],
      liveDemo:'',
      githubRepo: 'https://github.com/deepthinkss',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'Hyperlocal Skill-Sharing Network',
      description: 'IMPLEMENTED HUFFMAN CODING ALGORITHM FOR FILE COMPRESSION/DECOMPRESSION. ACHIEVED 40% AVERAGE REDUCTION IN FILE SIZE WHILE PRESERVING SPEED AND ACCURACY.',
      techStack: ['C++', 'ALGORITHMS', 'DATA STRUCTURES'],
      liveDemo:'',
      githubRepo: 'https://github.com/deepthinkss',
      image: 'https://images.pexels.com/photos/34155611/pexels-photo-34155611.jpeg?_gl=1*3d9cop*_ga*OTAxNTc5MjI1LjE3NjI2NjAyMzI.*_ga_8JE65Q40S6*czE3NjI2NjAyMzEkbzEkZzEkdDE3NjI2NjAyMzUkajU2JGwwJGgw'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="border border-white/30 p-1 mb-8 inline-block">
            <h2 className="text-4xl font-black text-black font-mono tracking-widest bg-white p-4">
              [SELECTED_PROJECTS]
            </h2>
          </div>
          <p className="text-lg text-white/60 font-mono tracking-wide max-w-3xl">
            // CURATED SELECTION OF PROJECTS SHOWCASING TECHNICAL SKILLS AND DESIGN PRECISION
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group border border-white/30 bg-black/50 hover:bg-black/70 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-black text-white font-mono tracking-wider">
                  {project.title}
                </h3>
                
                <p className="text-white/70 font-mono text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-bold text-black bg-white tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.liveDemo && (
                    <button className="group/btn border border-white text-white px-4 py-2 font-mono font-bold text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 robotic-border">
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>[LIVE_DEMO]</span>
                      </div>
                    </button>
                  )}
                  {project.githubRepo && (
                    <button className="group/btn border border-white/50 text-white/70 px-4 py-2 font-mono font-bold text-sm tracking-wider hover:border-white hover:text-white transition-all duration-300">
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>[CODE]</span>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;