import React, { useState } from 'react';
import { Button } from './ui/button.jsx';
import { ExternalLink, Github, Monitor, Smartphone } from 'lucide-react';
import { mockProjects } from './mock/mockData.js';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Website', 'Application'];
  
  const filteredProjects = activeFilter === 'All' 
    ? mockProjects 
    : mockProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black neon-glow text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="glassmorphism p-2 rounded-lg">
            <div className="flex space-x-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 font-mono uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-green-400/20 text-green-400 border-2 border-green-400 neon-glow'
                      : 'bg-transparent text-gray-400 border-2 border-transparent hover:border-cyan-400 hover:text-cyan-400'
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glassmorphism rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-green-400/20 border border-green-400 rounded-full text-green-400 text-xs font-mono uppercase">
                    {project.category === 'Website' ? <Monitor size={12} /> : <Smartphone size={12} />}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveDemo && (
                    <Button 
                     onClick={() => window.open(project.liveDemo, '_blank')}
                      className="retro-button p-3 border-2 border-cyan-400 text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"
                    >
                    <ExternalLink size={20} />
                    </Button>

                  )}
                  <Button 
                   onClick={() => window.open(project.sourceCode, '_blank')}
                   className="retro-button p-3 border-2 border-green-400 text-green-400 bg-green-400/10 hover:bg-green-400/20 hover:shadow-[0_0_15px_#22c55e] transition-all duration-300"
                  >
                  <Github size={20} />
                 </Button>

                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 font-mono leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800/50 border border-gray-600 rounded text-xs text-gray-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveDemo && (
                    <Button 
                      onClick={() => window.open(project.liveDemo, '_blank')}
                      className="flex-1 retro-button bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 text-xs font-mono uppercase tracking-wider"
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    onClick={() => window.open(project.sourceCode, '_blank')}
                    className="flex-1 retro-button bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400/20 text-xs font-mono uppercase tracking-wider"
                  >
                    Source Code
                  </Button>
                </div>
              </div>

              {/* CRT Border Effect */}
              <div className="absolute inset-0 border-2 border-green-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Terminal Stats */}
        <div className="mt-16 glassmorphism p-6 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 font-mono text-sm">project_stats.sh</span>
          </div>
          <div className="font-mono text-green-400 space-y-1">
            <div><span className="text-cyan-400">$</span> git log --oneline | wc -l</div>
            <div className="text-white pl-4">{mockProjects.length} projects completed</div>
            <div><span className="text-cyan-400">$</span> grep -r "technology" . | wc -l</div>
            <div className="text-white pl-4">14+ technologies mastered</div>
            <div><span className="text-cyan-400">$</span> find . -name "*.success" | wc -l</div>
            <div className="text-white pl-4">100% deployment success rate</div>
            <div className="typing-cursor text-cyan-400">$</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;