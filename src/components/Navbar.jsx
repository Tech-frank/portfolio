import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                Franklyn
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:block transition-all duration-500 ${
                isScrolled
                  ? "opacity-0 pointer-events-none translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex items-center space-x-6 xl:space-x-10">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setActiveLink(link.id)}
                    className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 group ${
                      activeLink === link.id
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                        activeLink === link.id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="relative w-10 h-10 rounded-full border border-white/30 hover:border-white/50 focus:outline-none focus:border-white/60 group transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-0.5 bg-gray-300 transition-all duration-300 group-hover:bg-white ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-gray-300 transition-all duration-300 group-hover:bg-white ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-gray-300 transition-all duration-300 group-hover:bg-white ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Slide Down Menu */}
        <div
          className={`absolute top-0 left-0 right-0 h-screen backdrop-blur-3xl bg-white/10 border-b border-white/10 shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-20 pb-8 px-6 space-y-6">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveLink(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                  activeLink === link.id
                    ? "text-white bg-gradient-to-r from-blue-500/40 to-purple-500/40"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
