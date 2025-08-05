import React, { useState } from 'react';
import './css/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Qualification', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 border border-green-600 rounded-md m-4 bg-black/40 backdrop-blur-md">
        <div className="text-green-400 text-xl font-bold neon-text">
          &lt;Nishan/&gt;
        </div>

        <div className="md:hidden text-green-300 text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links md:flex gap-12 text-green-300 text-sm ${isOpen ? 'flex flex-col gap-4 mt-4' : 'hidden'} md:mt-0 md:flex`}>
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative inline-block hover:text-blue-400 hover-scan hover-flicker hover-pulse"
                onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
