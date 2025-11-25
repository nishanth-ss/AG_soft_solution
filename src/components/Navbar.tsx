import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 bg-gray-900 py-3' : 'bg-opacity-70 bg-gray-900 py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          AG Soft Solutions
        </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
