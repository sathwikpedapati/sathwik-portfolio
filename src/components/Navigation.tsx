import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Education', to: 'education' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-full mx-auto px-6 md:px-14 lg:px-24">
        
        <div className="flex justify-between items-center">

          {/* Bigger Brand Text */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-gray-800 cursor-pointer tracking-wide"
          >
            SP
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-10 ">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer text-lg font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-gray-800 hover:text-blue-600'
                    }`}
                    activeClass="text-blue-600 font-semibold"
                    spy={true}
                    offset={-80}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            className=" lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className=" mt-4 pb-4 bg-gradient-to-b from-blue-50 to-white">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Navigation;
