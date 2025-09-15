import React from 'react';

export default function Header() {
  return (
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
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-12 font-light">
          Software Developer & Critical Thinker. I enjoy turning complex problems into simple 
          and beautiful designs. My job is to give you a smooth, beautiful, and user-friendly 
          product. I aim to provide you with the best and work as hard as I can to make your 
          product eye-catching.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium">
            Check Out My Work!
          </button>
          
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-medium">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}