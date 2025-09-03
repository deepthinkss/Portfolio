import React from "react";
import { Code, Database, Wrench, Globe } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "LANGUAGES",
      skills: ["JAVASCRIPT", "TYPESCRIPT", "C++","PYTHON "],
      icon: Code,
    },
    {
      title: "FRONTEND",
      skills: ["REACT", "NEXT.JS", "REACT_NATIVE", "TAILWIND_CSS"],
      icon: Globe,
    },
    {
      title: "BACKEND",
      skills: ["NODE.JS", "EXPRESS", "FIREBASE", "MONGODB"],
      icon: Database,
    },
    {
      title: "TOOLS",
      skills: ["GIT", "DOCKER", "FIGMA", "VERCEL"],
      icon: Wrench,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="border border-white/30 p-1 mb-8 inline-block">
            <h2 className="text-4xl font-black text-black font-mono tracking-widest bg-white p-4">
              [TECH_STACK]
            </h2>
          </div>
          <p className="text-lg text-white/60 font-mono tracking-wide">
            // TECHNOLOGIES AND TOOLS USED TO EXECUTE DIGITAL SOLUTIONS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;

            return (
              <div
                key={category.title}
                className="border border-white/30 bg-black/50 hover:bg-black/70 transition-all duration-300 group"
              >
                <div className="p-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="border border-white/50 p-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-white font-mono tracking-wider">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="border border-white/20 p-3 bg-black/30 hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-white/80 font-mono text-sm tracking-wider">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              5+
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              PROJECTS_COMPLETED
            </div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              1+
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              YEARS_EXPERIENCE
            </div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              9+
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              TECHNOLOGIES
            </div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-2xl font-black text-white font-mono mb-2">
              STILL_LEARNING
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              FIGMA_DESIGN
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              999+
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              BUGS_INTRODUCED
            </div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              0
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              DAYS_WITHOUT_GOOGLING
            </div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              ∞
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              STACKOVERFLOW_VISITS
            </div>
          </div>
          <div className="border border-white/30 p-6 text-center bg-black/50">
            <div className="text-4xl font-black text-white font-mono mb-2">
              404
            </div>
            <div className="text-white/60 font-mono text-sm tracking-wider">
              SOCIAL_LIFE_NOT_FOUND
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
