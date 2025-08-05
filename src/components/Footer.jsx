import React from 'react';
import { Github, Linkedin, Twitter, Code, Coffee } from 'lucide-react';
import { mockContactInfo } from './mock/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: mockContactInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, url: mockContactInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: mockContactInfo.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-green-400/20">
      <div className="container mx-auto text-center">

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-400/10 border border-green-400/20 rounded-full flex items-center justify-center text-green-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300 group backdrop-blur-md"
                aria-label={social.label}
              >
                <IconComponent size={20} className="group-hover:animate-pulse" />
              </a>
            );
          })}
        </div>

        {/* Terminal-style footer */}
        <div className="p-6 rounded-lg max-w-2xl mx-auto mb-8 bg-green-400/5 backdrop-blur-md border border-green-400/20 shadow-[0_0_12px_rgba(34,197,94,0.1)]">
          <div className="flex items-center justify-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 font-mono text-sm">system_info.log</span>
          </div>
          
          <div className="font-mono text-green-400 text-sm space-y-1">
            <div><span className="text-cyan-400">$</span> uptime</div>
            <div className="text-white pl-4">Portfolio v2.0 - Always online, always learning</div>
            <div><span className="text-cyan-400">$</span> cat /dev/motivation</div>
            <div className="text-white pl-4">Building the future, one line of code at a time</div>
           </div>
        </div>

        {/* Copyright */}
        <div className="p-4 rounded-lg bg-green-400/5 backdrop-blur-md border border-green-400/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
          <div className="flex items-center justify-center space-x-2 text-gray-400 font-mono text-sm">
            <span>© {currentYear} Nishan | All Rights Reserved</span>
            <span className="text-red-600">•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Code size={14} className="text-green-400 animate-pulse" />
              <span>and lots of</span>
              <Coffee size={14} className="text-amber-500 animate-bounce" />
            </span>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-70 shadow-md"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-70 shadow-md"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-70 shadow-md"></div>
      </div>
    </footer>
  );
};

export default Footer;

