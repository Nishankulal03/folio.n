import React from 'react';
import {
  Briefcase,
  Laptop2,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black neon-glow text-white mb-4">
            Experience & Internships
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-pink-400 mx-auto"></div>
        </div>

        <div className="p-6 rounded-xl border border-green-400/50 bg-transparent shadow-[0_0_20px_rgba(34,197,94,0.15)] max-w-3xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 font-mono text-sm">experience.sh</span>
          </div>

          <div className="font-mono text-green-400 text-sm space-y-6 mt-4">
            {/* Freelancing */}
            <div className="flex items-start space-x-3">
              <Briefcase className="text-cyan-400 animate-bounce mt-1" size={18} />
              <div>
                <span className="text-cyan-400">$</span> whoami --freelance  
                <div className="pl-4 text-white">Freelancer — Web and Mobile Application Developer</div>
              </div>
            </div>

            {/* Internships */}
            <div className="flex items-start space-x-3">
              <Laptop2 className="text-cyan-400 animate-bounce mt-1" size={18} />
              <div>
                <span className="text-cyan-400">$</span> internships --list  
                <div className="pl-4 text-white space-y-2">
                  <div className="flex items-center space-x-2">
                    <ArrowRight size={14} className="text-green-400" />
                    <span><strong>Youga</strong> — Frontend Mobile App Developer Intern <span className="text-gray-400">(Nov 2024 – Mar 2025)</span></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight size={14} className="text-green-400" />
                    <span><strong>Karunaadu Technologies</strong> — Full Stack Developer Intern (Django) <span className="text-gray-400">(Dec 2024 – Feb 2025)</span></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRight size={14} className="text-green-400" />
                    <span><strong>MIT Manipal</strong> — Data Analytics Intern <span className="text-gray-400">(Jan 2024 – Mar 2024)</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Echo */}
            <div className="flex items-start space-x-3">
              <BarChart3 className="text-cyan-400 animate-bounce mt-1" size={18} />
              <div>
                <span className="text-cyan-400">$</span> echo "Crafting real-world solutions..."
                <div className="pl-4 text-white">Crafting real-world solutions...</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
