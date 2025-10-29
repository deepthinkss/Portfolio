import React from 'react';
import { Download, Terminal, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const experience = [
    {
      title: 'SALESFORCE_DEVELOPER_VIRTUAL_INTERNSHIP',
      company: 'SMARTBRIDGE_AND_SMARTINTERNZ_(AICTE_NEAT_CELL)',
      period: 'JAN_2024_–_FEB_2024',
      description: 'COMPLETED SALESFORCE DEVELOPER VIRTUAL INTERNSHIP WITH HANDS-ON PROJECT EXPERIENCE. EARNED SUPER BADGES: APEX SPECIALIST, PROCESS AUTOMATION SPECIALIST, DEVELOPER SUPER SET. GAINED PRACTICAL EXPERIENCE IN SALESFORCE DEVELOPMENT AND APPLICATION DESIGN.'
    }
  ];

  const education = [
    {
      degree: 'BACHELOR_OF_ENGINEERING',
      school: 'SINHGAD_COLLEGE_OF_ENGINEERING',
      period: '2021_–_2025',
      details: 'COMPUTER_ENGINEERING_|_CGPA:_7.68/10'
    },
    {
      degree: '12TH_(HSC)_SCIENCE',
      school: 'CHATRAPATI_SHIVAJI_JUNIOR_SCIENCE_COLLEGE',
      period: '2021',
      details: 'PERCENTAGE:_90.83%_|_JALGAON,_INDIA'
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
            
            <a 
              href="/assets/DeepThakurResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white text-white px-6 py-3 font-mono font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 robotic-border w-full inline-block no-underline"
            >
              <div className="flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>[DOWNLOAD_PDF]</span>
              </div>
            </a>

            <div className="border border-white/30 p-4 bg-black/50">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-5 h-5 text-white" />
                <span className="text-white font-mono font-bold tracking-wider">SYSTEM_INFO</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-green-400">STATUS: AVAILABLE</div>
                <div className="text-green-400">LOCATION: PUNE,_INDIA</div>
                <div className="text-green-400">PHONE: +91_82758_09916</div>
                <div className="text-green-400">EDUCATION: COMPUTER_ENGINEERING</div>
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
                      {edu.details && (
                        <div className="text-white/60 font-mono text-sm">
                          {edu.details}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                {/* <h4 className="text-lg font-black text-white font-mono tracking-wider mb-4">
                  [CERTIFICATIONS]
                </h4> */}
                {/* <div className="space-y-4">
                  <div className="border border-white/20 p-4 bg-black/30">
                    <div className="text-white/80 font-mono text-sm">
                      • GOOGLE_CLOUD_COMPUTING_FOUNDATION_–_CREDLY_BADGE
                    </div>
                  </div>
                  <div className="border border-white/20 p-4 bg-black/30">
                    <div className="text-white/80 font-mono text-sm">
                      • ORACLE_LEARNING_EXPLORER_CERTIFICATION_–_ORACLE
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;