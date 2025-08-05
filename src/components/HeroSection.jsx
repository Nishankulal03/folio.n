// components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/link.jpeg';
import Twitimg from '../assets/twit.png'
import GitImage from '../assets/git.jpg'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope , FaDownload} from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import './css/HeroSection.css';
import aboutImage from '../assets/hero.jpg';

export default function HeroSection() {
  return (
    <>
    <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-20 sm:py-28" id="home">
  <div className="flex flex-col md:flex-row items-center pl-8 md:items-center gap-10 md:gap-80 w-full">
    
    {/* Social Links */}
    <div className="flex flex-row md:flex-col gap-6 md:gap-10 text-gray-300 text-xl mt-6 md:mt-0 translate-x-2 sm:translate-x-4">
  {/* LinkedIn */}
  <div className="relative group">
    <a
      href="https://www.linkedin.com/in/nishan-kulal-1877b4228/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400"
    >
      <FaLinkedin />
    </a>
    <div className="absolute left-12 top-1/2 -translate-y-1/2 w-56 hidden md:group-hover:block z-50 backdrop-blur-md border border-green-400/60 bg-green-400/10 text-white p-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <img src={heroImage} alt="Nishan" className="w-10 h-10 rounded-full border border-green-400" />
        <div>
          <p className="font-semibold text-sm text-green-300">Nishan Kulal</p>
          <p className="text-xs text-gray-300">LinkedIn</p>
        </div>
      </div>
    </div>
  </div>

  {/* GitHub */}
  <div className="relative group">
    <a
      href="https://github.com/Nishankulal03"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400"
    >
      <FaGithub />
    </a>
    <div className="absolute left-12 top-1/2 -translate-y-1/2 w-56 hidden md:group-hover:block z-50 backdrop-blur-md border border-green-400/60 bg-green-400/10 text-white p-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <img src={GitImage} alt="Nishan" className="w-10 h-10 rounded-full border border-green-400" />
        <div>
          <p className="font-semibold text-sm text-green-300">Nishankulal03</p>
          <p className="text-xs text-gray-300">GitHub</p>
        </div>
      </div>
    </div>
  </div>

  {/* Twitter */}
  <div className="relative group">
    <a
      href="https://x.com/nishan_kul84063?t=nJCGpUri8XLIsTs1kC3htA&s=09"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400"
    >
      <FaTwitter />
    </a>
    <div className="absolute left-12 top-1/2 -translate-y-1/2 w-56 hidden md:group-hover:block z-50 backdrop-blur-md border border-green-400/60 bg-green-400/10 text-white p-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <img src={Twitimg} alt="Nishan" className="w-10 h-10 rounded-full border border-green-400" />
        <div>
          <p className="font-semibold text-sm text-green-300">nishan_Kul84063</p>
          <p className="text-xs text-gray-300">Twitter</p>
        </div>
      </div>
    </div>
  </div>

  {/* Email */}
  <div className="relative group">
    <a href="mailto:nishankulal424@gmail.com" className="hover:text-green-400">
      <FaEnvelope />
    </a>
    <div className="absolute left-12 top-1/2 -translate-y-1/2 w-64 hidden md:group-hover:block z-50 backdrop-blur-md border border-green-400/60 bg-green-400/10 text-white p-3 rounded-lg shadow-lg">
      <div className="flex items-center gap-3">
        <img src={Twitimg} alt="Nishan" className="w-10 h-10 rounded-full border border-green-400" />
        <div>
          <p className="font-semibold text-sm text-green-300">nishankulal424@gmail.com</p>
          <p className="text-xs text-gray-300">Email</p>
        </div>
      
    </div>
    </div>
  </div>
</div>


    {/* Hero Text */}
    <div className="max-w-xl text-center md:text-left">
      <p className="text-blue-400 text-sm mb-2">Hello, I'm</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold glow text-white mb-2">Nishan</h1>
      <h2 className="text-lg sm:text-xl text-green-400 font-semibold mb-2">
        <ReactTyped
          strings={["Web Developer", "Full Stack Engineer", "UI/UX Designer","Freelancer"]}
          typeSpeed={80}
          backSpeed={40}
          loop
        />
      </h2>
      <p className="text-gray-300 mb-6 text-sm sm:text-base">I develop full-stack web applications.</p>
      <a href="#contact" className="neon-button inline-block">CONTACT ME</a>
    </div>

    {/* Hero Image */}
    <div className="relative mt-10 md:mt-0 md:ml-6">
  <img
    src={heroImage}
    alt="Retro tech"
    className="rounded-xl border border-green-600 w-[200px] sm:w-[250px] shadow-lg mx-auto md:mx-0 hero-image-hover"
  />
  {/* Decorative Pulses */}
  <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-ping"></div>
  <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-pink-400 rounded-full animate-pulse"></div>
</div>


  </div>
</section>

<section className="px-4 sm:px-10 md:px-16 py-12 text-green-200 font-mono" id="about">
  <h2 className="text-center text-3xl sm:text-4xl font-bold text-white glow mb-6">About Me</h2>
  <div className="w-16 sm:w-24 h-1 bg-green-400 mx-auto mb-8 rounded-full"></div>

  <div className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-14">
    <div className="bg-[#021e0e] border border-green-500 rounded-lg p-5 sm:p-8 max-w-2xl fade-in-on-scroll font-mono text-sm">
      <p className="mb-4">
        I am an enthusiastic Information Science student with a passion for solving real-world challenges through innovative technology.
      </p>
      <p className="mb-4">
        With skills in programming languages like C, Java, and Python, I am adept at building dynamic solutions.
      </p>
      <p className="mb-4">
        I have hands-on experience in full-stack development and automation tools like UiPath Studio, and I have a foundational knowledge of data analytics, including working with Power BI for data visualization and reporting.
      </p>
      <p className="mb-4">
        Currently, I am acquiring my expertise in full-stack development with Java, Spring, and Spring Boot.
      </p>
      <p className="mb-6">
        I am excited to leverage my technical and analytical skills to contribute to impactful projects in a dynamic IT environment.
      </p>

      <a
        href="https://drive.google.com/file/d/1c2RJtuX-flx9ZTtmdjDA1O8LJOA4IOcY/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 border border-[#00FF00] text-[#00FF00] font-bold px-4 py-2 rounded-md text-xs font-mono transition-all duration-200 hover:bg-[#00FF00] hover:text-black hover:shadow-[0_0_6px_#00FF00] hover:-translate-y-0.5 hover:scale-[1.03]"
      >
        <FaDownload className="text-[#00FF00] text-sm" />
        DOWNLOAD CV
      </a>
    </div>

    <div className="relative popup-effect">
  <img
    src={aboutImage}
    alt="About"
    className="w-[250px] sm:w-[300px] h-auto rounded-xl border border-green-500 rotate-2 shadow-xl"
  />
  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
            
</div>


  </div>
</section>

    </>
  );
}
