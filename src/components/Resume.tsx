import React from 'react';
import { Download, Terminal, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const experience = [
    {
      title: 'SALESFORCE_APPLICATION_DEVELOPER',
      company: 'SALEFORCE',
      period: '2024',
      description: 'LEAD DEVELOPMENT OF SCALABLE WEB APPLICATIONS USING REACT AND NODE.JS. MENTOR JUNIOR DEVELOPERS AND COLLABORATE WITH DESIGN TEAMS.'
    },
    {
      title: 'APPLICATION_DEVELOPER_INTERN',
      company: 'COGNIFYZ_TECHNOLOGIES',
      period: '2023',
      description: 'DEVELOPED AND MAINTAINED CLIENT WEBSITES AND WEB APPLICATIONS. WORKED WITH VARIOUS TECHNOLOGIES INCLUDING REACT, VUE.JS, AND PYTHON.'
    }
  ];

  const education = [
    {
      degree: 'BACHELOR_OF_ENGINEERING',
      school: 'SAVITRIBAI_PHULE_PUNE_UNIVERSITY',
      period: '2021_2025'
      
    }
  ];

  return (
    <section id="resume" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <div className="border border-white/30 p-1">
              <h2 className="text-4xl font-black text-black font-mono tracking-widest bg-white p-4">
                [RESUME]
              </h2>
            </div>
            
            <button className="group border-2 border-white text-white px-6 py-3 font-mono font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 robotic-border w-full">
              <div className="flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>[DOWNLOAD_PDF]</span>
              </div>
            </button>

            <div className="border border-white/30 p-4 bg-black/50">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-5 h-5 text-white" />
                <span className="text-white font-mono font-bold tracking-wider">SYSTEM_INFO</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-green-400">STATUS: AVAILABLE</div>
                <div className="text-green-400">LOCATION: PUNE</div>
                <div className="text-green-400">EDUCATION: BACHELOR'S DEGREE</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Briefcase className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-black text-white font-mono tracking-wider">
                  [EXPERIENCE]
                </h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="border border-white/20 p-6 bg-black/30">
                    <div className="space-y-3">
                      <h4 className="text-lg font-black text-white font-mono tracking-wider">
                        {job.title}
                      </h4>
                      <div className="text-white/70 font-mono text-sm">
                        {job.company} | {job.period}
                      </div>
                      <p className="text-white/60 font-mono text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-8">
                <GraduationCap className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-black text-white font-mono tracking-wider">
                  [EDUCATION]
                </h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border border-white/20 p-6 bg-black/30">
                    <div className="space-y-3">
                      <h4 className="text-lg font-black text-white font-mono tracking-wider">
                        {edu.degree}
                      </h4>
                      <div className="text-white/70 font-mono text-sm">
                        {edu.school} | {edu.period}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;