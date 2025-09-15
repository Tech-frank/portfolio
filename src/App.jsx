import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import image from './assets/image.png'

import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
function App() {
 
  return (
    <>
      <Navbar />
      
       <div className="pt-16 min-h-screen cd">
        
         <div className="min-h-screen bg-black py-16 px-4">
        <Header />
      {/* Container with max-width */}
      <div className="max-w-6xl mx-auto mt-[15%] mb-[15%]">
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
                I'm a passionate software engineer with expertise in modern web technologies. 
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
      <Skills />
      <Projects />
      <Contact />

    </div>
      </div>
      
    </>
  )
}

export default App
