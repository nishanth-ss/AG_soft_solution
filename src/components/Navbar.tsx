import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 bg-gray-900' : 'bg-opacity-70 bg-gray-900'}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <img
            src={Logo}
            alt="AG Soft Solutions"
            className="w-full h-22 object-contain cursor-pointer pt-2"
            title="Secure Software Solution"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-400 cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-white hover:text-blue-400 cursor-pointer transition-colors"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-white hover:text-blue-400 cursor-pointer transition-colors"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="text-white hover:text-blue-400 cursor-pointer transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-200 hover:scale-110"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 w-64 bg-gray-900/80 backdrop-blur-sm transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        } transition-all duration-300 ease-in-out z-50 md:hidden shadow-lg rounded-lg`}
      >
        <div className="flex flex-col items-center py-4 space-y-6">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={closeMenu}
            className="text-white/90 text-xl hover:text-blue-300 cursor-pointer transition-colors px-4 py-2 w-full text-center"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
            className="text-white/90 text-xl hover:text-blue-300 cursor-pointer transition-colors px-4 py-2 w-full text-center"
          >
            About
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
            className="text-white/90 text-xl hover:text-blue-300 cursor-pointer transition-colors px-4 py-2 w-full text-center"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={closeMenu}
            className="text-white/90 text-xl hover:text-blue-300 cursor-pointer transition-colors px-4 py-2 w-full text-center"
          >
            Contact
          </Link>
        </div>
      </div>
      
      {/* Overlay - Only show when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
