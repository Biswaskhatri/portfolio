import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
    <div
  className="text-xl font-bold text-gray-900 cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>Biswas khatri</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md flex flex-col items-center py-4 gap-4">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-gray-700 hover:text-indigo-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
