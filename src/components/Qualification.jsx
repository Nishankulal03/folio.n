import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Qualification = () => {
  const qualifications = [
    {
      degree: 'SSLC',
      institution: 'Morarji Desai Residential School Vogga',
      year: '2019',
      status: 'completed'
    },
    {
      degree: 'Pre-University College',
      institution: 'Sri Rama PU College Kalladka',
      year: '2019–2021',
      status: 'completed'
    },
    {
      degree: 'Bachelor of Information Science and Engineering',
      institution: 'Canara Engineering College',
      year: '2021–Present',
      status: 'ongoing'
    }
  ];

  return (
    <section id="qualification" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black neon-glow text-white mb-4">
            My Qualifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal-style header */}
          <div className="glassmorphism p-4 rounded-t-lg border-b border-green-400/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-green-400 font-mono text-sm">education.log</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="glassmorphism p-8 rounded-b-lg">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-green-400 to-pink-400"></div>

              {qualifications.map((qual, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-2 border-black shadow-lg">
                    <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-16 glassmorphism p-6 rounded-lg flex-1 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="text-cyan-400" size={24} />
                        <h3 className="text-xl font-bold text-white font-mono">
                          {qual.degree}
                        </h3>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${
                        qual.status === 'ongoing' 
                          ? 'bg-green-400/20 text-green-400 border border-green-400' 
                          : 'bg-cyan-400/20 text-cyan-400 border border-cyan-400'
                      }`}>
                        {qual.status}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 font-mono mb-2">
                      {qual.institution}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
                      <Calendar size={16} />
                      <span>{qual.year}</span>
                    </div>

                    {/* Decorative terminal text */}
                    <div className="mt-4 text-xs font-mono text-gray-500">
                      <span className="text-green-400">$</span> cat {qual.degree.toLowerCase().replace(/\s+/g, '_')}.txt
                      <br />
                      <span className="text-gray-400">Status: {qual.status} ✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal footer */}
            <div className="mt-8 pt-6 border-t border-green-400/30">
              <div className="font-mono text-green-400 text-sm">
                <span className="text-cyan-400">nishan@education:~$</span> echo "Learning never stops..."
                <br />
                <span className="text-white">Learning never stops...</span>
                <br />
                <span className="typing-cursor text-cyan-400">nishan@education:~$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;