
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React, { useState, useEffect, useRef } from 'react';

import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import image from './assets/image.png'

import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import lancelot from './assets/lancelot.png'
import portfolio from './assets/portfolio.png'
import profis from './assets/profis.png'
function App() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'About' },
    { name: 'Projects', id: 'Projects' },
    { name: 'Contact', id: 'Contact' }
  ];

  // Toggle hamburger
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Scroll detection for style changes
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with offset (so fixed header doesn't cover the section)
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (!targetEl) {
      // if the id isn't present, just set active and close menu
      setActiveLink(id);
      setIsMenuOpen(false);
      return;
    }

    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 12; // extra gap
    window.scrollTo({ top, behavior: 'smooth' });

    setActiveLink(id);
    setIsMenuOpen(false);
  };

  // Keep activeLink in sync with the current section using IntersectionObserver
  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight ?? 0;
    const observedIds = navLinks.map(l => l.id);
    const sections = observedIds.map(id => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        // push the root margin up by navHeight so intersection happens when section is visible below header
        rootMargin: `-${navHeight}px 0px -40% 0px`,
        threshold: 0.1
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navLinks]);


  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/5 border-b border-white/10 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
                Franklyn
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:block transition-all duration-500 ${
                isScrolled ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative px-2 py-2 text-sm font-medium transition-all duration-300 group ${
                      activeLink === link.id ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                        activeLink === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Hamburger */}
            <div className={` transition-all duration-500 ${ isScrolled ? 'block lg:block' : 'block lg:hidden'}`}>
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 rounded-full border border-white/30 hover:border-white/50 focus:outline-none focus:border-white/60 group transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                aria-label="Toggle menu"
              >
                <div className="w-4 h-3 relative">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-gray-300 transform transition-all duration-300 group-hover:bg-white ${
                      isMenuOpen ? 'rotate-45 top-1' : ''
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform transition-all duration-300 group-hover:bg-white ${
                      isMenuOpen ? '-rotate-45 bottom-1' : ''
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
        className={`fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={toggleMenu} />

        <div
          className={`absolute top-0 left-0 right-0 backdrop-blur-3xl bg-white/5 border-b border-white/10 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="pt-20 pb-8 px-4">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 transform group relative ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                } ${activeLink === link.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                  className={`absolute bottom-2 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform origin-left transition-transform duration-300 ${
                    activeLink === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>









      
       <div className="pt-16 min-h-screen cd" id='home'>
        
         <div className="min-h-screen bg-black py-16 px-4">
        <div className="min-h-screen bg-black text-white p-2 flex items-center justify-start">
      <div className="max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="text-lg mb-8 text-gray-300 font-light">
          Hi, my name is
        </p>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4">
          <span className="text-white">Franklyn Etu.</span>
          <br />
          <span className="text-white">I Am </span>
          <span className="text-yellow-400">The ZeroDayDev.</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-[300px] mb-12 font-light">
          Software Developer & Critical Thinker. I enjoy turning complex problems into simple 
          and beautiful designs. My job is to give you a smooth, beautiful, and user-friendly 
          product. I aim to provide you with the best and work as hard as I can to make your 
          product eye-catching.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#Projects"
            className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium text-center"
          >
            Check Out My Work!
          </a>
          <a href="#Contact">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-medium">
            Contact Me
          </button>
          </a>
        </div>
      </div>
    </div>

    {/* about */}
      {/* Container with max-width */}
      <div className="max-w-6xl mx-auto mt-[15%] mb-[15%]" id='About'>
        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20%]">
          
          {/* Left Card - Image Card (40% width on desktop) */}
          <div className="w-full lg:w-[35%] bg-white rounded-full shadow-2xl overflow-hidden">
            {/* Image Section - 70% of card height */}
            <div className="h-[100%] w-full aspect-square bg-gray-300 flex items-center justify-center rounded-full">
              <img src={image} alt="Profile" className=" w-full h-full object-cover rounded-full " />
            </div>
            
           
           
          </div>

          {/* Right Card - About Card (45% width on desktop, glassmorphism) */}
          <div className="w-full lg:w-[45%] backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8">
            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            
            {/* About Text */}
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate software engineer with expertiseimport portfolio from '../assets/portfolio.png'
import lancelot from '../assets/lancelot.png'
import profis from '../assets/profis.png' in modern web technologies. 
                I love creating innovative solutions and building applications that make a difference. 
                With experience in React, Django, and cloud technologies, I bring ideas to life 
                through clean, efficient code and thoughtful design.
              </p>
              
              <p className="text-gray-400 text-base leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Optional decorative element */}
            <div className="mt-8 w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>

        </div>
      </div>


{/* skills */}

       <h1 className="text-[2rem] p-8 text-center">Tools I Work With</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4 max-w-5xl mx-auto">
  <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="100" viewBox="0 0 8 8"><path fill="currentColor" d="m7 2l1 1v2H4v1h2L5 7H3V4h4M2 1l1-1h3v3H2v3L1 5V2h4V1"/></svg>
  </div>

  <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="128" viewBox="0 0 128 128"><g fill="currentColor"><path d="M15.091 41.64h7v32.403c-3.59.682-6.227.955-9.09.955C4.455 74.998 0 71.134 0 63.724c0-7.136 4.728-11.772 12.046-11.772c1.136 0 2 .09 3.045.363zm0 16.31c-.818-.272-1.5-.363-2.363-.363c-3.546 0-5.591 2.182-5.591 6c0 3.727 1.954 5.773 5.545 5.773c.773 0 1.41-.046 2.41-.182z"/><path d="M33.227 52.45v16.228c0 5.59-.409 8.272-1.636 10.59c-1.137 2.229-2.637 3.637-5.728 5.183l-6.5-3.091c3.091-1.455 4.59-2.727 5.545-4.682c1-2 1.32-4.318 1.32-10.41V52.45zm-7-10.773h7v7.182h-7zm11.229 12.364c3.09-1.454 6.045-2.09 9.273-2.09c3.59 0 5.954.954 7 2.818c.59 1.045.772 2.409.772 5.318v14.227c-3.136.455-7.09.773-10 .773c-5.863 0-8.5-2.046-8.5-6.591c0-4.91 3.5-7.182 12.091-7.91v-1.545c0-1.273-.636-1.727-2.409-1.727c-2.59 0-5.5.727-8.228 2.137v-5.41zM48.41 65.178c-4.636.454-6.136 1.182-6.136 3c0 1.363.864 2 2.773 2c1.045 0 2-.09 3.363-.318zm9.502-11.637c4.136-1.09 7.545-1.59 11-1.59c3.591 0 6.182.817 7.728 2.409c1.455 1.5 1.909 3.135 1.909 6.636v13.727h-7V61.27c0-2.682-.91-3.682-3.41-3.682c-.954 0-1.817.09-3.227.5v16.636h-7zm23.357 25c2.455 1.273 4.909 1.864 7.5 1.864c4.59 0 6.545-1.864 6.545-6.319v-.136c-1.363.682-2.727.955-4.545.955c-6.137 0-10.046-4.046-10.046-10.455c0-7.955 5.773-12.455 16-12.455c3 0 5.773.318 9.137 1l-2.397 5.05c-1.864-.364-.15-.05-1.558-.186v.728l.09 2.954l.046 3.818c.046.955.046 1.91.091 2.864v1.91c0 6-.5 8.817-2 11.135c-2.182 3.41-5.954 5.092-11.318 5.092c-2.728 0-5.09-.41-7.546-1.364V78.54zm13.91-20.91h-.728c-1.363-.045-2.954.318-4.046 1c-1.681.955-2.545 2.682-2.545 5.137c0 3.5 1.727 5.5 4.818 5.5c.955 0 1.728-.182 2.636-.454v-2.41c0-.817-.045-1.727-.045-2.681l-.045-3.227l-.046-2.319v-.545zm21.548-5.771c7 0 11.273 4.409 11.273 11.545c0 7.319-4.454 11.91-11.546 11.91c-7 0-11.318-4.41-11.318-11.5c0-7.365 4.455-11.956 11.591-11.956zm-.137 17.818c2.682 0 4.274-2.228 4.274-6.091c0-3.818-1.546-6.091-4.227-6.091c-2.774 0-4.365 2.228-4.365 6.09c0 3.865 1.591 6.092 4.318 6.092"/></g></svg>
  </div>

  <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M19.108 12.376q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5q-.279.285-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659q.089-.261.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63M4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.5 20.5 0 0 0-.422 2.678A21 21 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452m3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178m0 3.94a7.2 7.2 0 0 1-2.64.094a1.77 1.77 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.5 20.5 0 0 0 2.107 1.7a21 21 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a19 19 0 0 1 1.739-.635a18 18 0 0 1 .306 1.811M9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.5 20.5 0 0 0-2.526.97a20 20 0 0 0-2.52-.981q.087-.3.188-.596m-.4 1.424a18 18 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823m-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18 18 0 0 1-1.744.665a19 19 0 0 1-.322-1.853Zm5.456 3.146a7.2 7.2 0 0 1-1.238 2.333a1.77 1.77 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20 20 0 0 0 2.53-1.01a21 21 0 0 0 2.547.979q-.072.249-.155.494m.362-1.324a19 19 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18 18 0 0 1-.295 1.838m.447-4.743q0 .911-.057 1.82q-.741.502-1.554.972q-.81.467-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24 24 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831m.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20 20 0 0 0-2.144-1.688a20 20 0 0 0-.405-2.649q.31-.076.608-.135m-.13 3.885a18 18 0 0 1 1.462 1.188a18 18 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208m3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20 20 0 0 0 .387-2.682a20 20 0 0 0 2.137-1.715q.177.183.336.364a7.2 7.2 0 0 1 1.403 2.238a1.77 1.77 0 0 1 .054 1.403m-8.819-6.141a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654"/></svg>
  </div>

  <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="126" viewBox="0 0 256 256"><defs><linearGradient id="SVGkw9x5bVJ" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="SVGE3ljGbCT" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient><circle id="SVGMFHNZdYm" cx="128" cy="128" r="128"/></defs><mask id="SVGalfYF1HT" fill="#fff"><use href="#SVGMFHNZdYm"/></mask><g mask="url(#SVGalfYF1HT)"><circle cx="128" cy="128" r="128"/><path fill="url(#SVGkw9x5bVJ)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128 128 0 0 0 13.524-10.418"/><path fill="url(#SVGE3ljGbCT)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>
  </div>

  <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="128" viewBox="0 0 128 128"><path fill="currentColor" d="m19.569 27l8.087 89.919l36.289 9.682l36.39-9.499L108.431 27zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231l-2.615 28.909l-.192 1.69L64 106.964v-.005l-.027.012l-22.777-5.916L39.65 84h11.168l.791 8.46l12.385 3.139l.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623zm13.039-5.579h5.862l3.607 5.911l3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513z"/></svg>
  </div>

   <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
   <svg xmlns="http://www.w3.org/2000/svg" width="70" height="124" viewBox="0 0 24 24"><path fill="currentColor" d="M7.502 0h2.578v1.078h-1.5v1.078h1.5v1.078H7.502zm3.093 0h2.579v.938h-1.5v.187h1.5v2.156h-2.579v-.984h1.5v-.188h-1.5zm3.095 0h2.577v.938h-1.5v.187h1.5v2.156H13.69v-.984h1.5v-.188h-1.5z"/><path fill="currentColor" fill-rule="evenodd" d="m11.991 24l-6.944-1.928L3 4.717h18L18.954 22.07zM7.047 12.573l.191 2.128h7.377l-.247 2.76l-2.374.642h-.002l-2.37-.64l-.152-1.697H7.333l.298 3.342l4.36 1.21l4.367-1.21l.532-5.964l.052-.571l.384-4.309H6.664l.194 2.129h8.136l-.194 2.18z" clip-rule="evenodd"/></svg>
  </div>

   <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="124" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"/><path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"/></g></svg>
  </div>

  <div className="bg-black-400 p-4 rounded w-[100px] mx-auto">
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="124" viewBox="0 0 24 24"><path fill="currentColor" d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187"/></svg>
  </div>
</div>








      

{/* projects */}
     <div className="mx-auto mt-[15%] p-[3%]" id='Projects'>
                <h1 className="text-3xl font-bold text-center">My <span className="text-yellow-400">Projects</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={portfolio} alt="Project 1" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Project One</h2>
                            <p className="text-gray-600 mb-4">This the Portfolio Website I Built For Myself.</p>
                            <a href="#" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={lancelot} alt="Project 2" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Project Two</h2>
                            <p className="text-gray-600 mb-4">A saas Application for managing tasks and projects.</p>
                            <a href="https://my-expo-app-six.vercel.app/" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src={profis} alt="Project 3" className="w-full h-48 object-cover"/>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">Project Three</h2>
                            <p className="text-gray-600 mb-4">A tool for the project team of a company - Atlantic Fluids and Integrated Services Limited - to help them manage their workflows efficiently.</p>
                            <a href="https://profis-fleet-forge.vercel.app/" className="text-blue-500 hover:underline">View Project</a>
                        </div>
                    </div>
                </div>
            </div>









      {/* contact */}
       <div className="mx-auto mt-[15%] p-[3%]" id="Contact">
  <h1 className="text-3xl font-bold text-center">Get In Touch</h1>

  {/* Responsive grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 max-w-3xl mx-auto">
    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="mailto:franklynetu80@gmail.com">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
          />
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="tel:+2348143597162">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"
          />
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="http://example.com">
        {/* GitHub */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <g clipPath="url(#SVGXv8lpc2Y)">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="SVGXv8lpc2Y">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="http://example.com">
        {/* X/Twitter */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 14 14"
        >
          <g fill="none">
            <g clipPath="url(#SVGG1Ot4cAD)">
              <path
                fill="currentColor"
                d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
              />
            </g>
            <defs>
              <clipPath id="SVGG1Ot4cAD">
                <path fill="#fff" d="M0 0h14v14H0z" />
              </clipPath>
            </defs>
          </g>
        </svg>
      </a>
    </div>

    <div className="rounded-lg shadow-md p-4 flex justify-center">
      <a href="http://example.com">
        {/* LinkedIn */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.4 1.4 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z"
          />
        </svg>
      </a>
    </div>
  </div>
</div>

    </div>
      </div>
      
    </>
  )
}

export default App
