import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                Franklyn
              </h1>
            </div>

            {/* Desktop Navigation - Hidden on scroll and on mobile */}
            <div className={`hidden lg:block transition-all duration-500 ${
              isScrolled ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setActiveLink(link.id)}
                    className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 group ${
                      activeLink === link.id
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                      activeLink === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger Menu - Always visible on mobile, visible on desktop when scrolled */}
            <div className={`transition-all duration-500 ${
              isScrolled ? 'block lg:block' : 'block lg:hidden'
            }`}>
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 rounded-full border border-white/30 hover:border-white/50 focus:outline-none focus:border-white/60 group transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <div className="w-4 h-3 relative">
                  <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-300 transform transition-all duration-300 group-hover:bg-white ${
                    isMenuOpen ? 'rotate-45 top-1' : ''
                  }`} />
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform transition-all duration-300 group-hover:bg-white ${
                    isMenuOpen ? '-rotate-45 bottom-1' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Hamburger Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Menu Panel with Enhanced Glassmorphism */}
        <div className={`absolute top-0 left-0 right-0 h-screen overflow-x-auto backdrop-blur-3xl bg-white/5 border-b border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="pt-20 pb-8 px-4">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 transform group relative ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                } ${
                  activeLink === link.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                <span className="relative z-10">{link.name}</span>
                <span className={`absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                  activeLink === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Content */}
     
    </>
  );
};

export default Navbar;