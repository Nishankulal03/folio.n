import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'from-orange-400 to-red-400' },
    { name: 'CSS', level: 85, color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-400' },
    { name: 'React native', level: 75, color: 'from-purple-400 to-pink-400' },
    { name: 'Git & GitHub', level: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'React', level: 80, color: 'from-cyan-400 to-blue-400' },
    { name: 'UiPath', level: 70, color: 'from-orange-400 to-red-400' },
    { name: 'Java', level: 85, color: 'from-red-400 to-orange-400' },
    { name: 'Python', level: 80, color: 'from-green-400 to-blue-400' },
    { name: 'PowerBI', level: 65, color: 'from-yellow-400 to-orange-400' },
    { name: 'MongoDB', level: 75, color: 'from-green-400 to-green-600' },
    { name: 'MySQL', level: 80, color: 'from-blue-400 to-blue-600' },
    
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black neon-glow text-white mb-4">
            Skills, Tools &amp; Technology
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glassmorphism p-6 rounded-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-green-400 font-mono font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-gray-400 font-mono text-sm">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)'
                  }}
                ></div>
              </div>

              {/* Decorative dots */}
              <div className="flex space-x-1 opacity-50 group-hover:opacity-100 transition-opacity">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-1 h-1 bg-green-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style decoration */}
        <div className="mt-16 glassmorphism p-6 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 font-mono text-sm">Terminal</span>
          </div>
          <div className="font-mono text-green-400">
            <span className="text-cyan-400">nishan@portfolio:~$</span> ls -la skills/
            <br />
            <span className="text-gray-400">total {skills.length} items</span>
            <br />
            <span className="text-green-400">drwxr-xr-x frontend/</span>
            <br />
            <span className="text-green-400">drwxr-xr-x backend/</span>
            <br />
            <span className="text-green-400">drwxr-xr-x automation/</span>
            <br />
            <span className="text-green-400">drwxr-xr-x databases/</span>
            <br />
            <span className="typing-cursor text-cyan-400">nishan@portfolio:~$</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;