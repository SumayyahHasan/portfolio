import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fadeIn py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-navy-900/20 mix-blend-multiply" />
          <img
            src="	https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg"
            alt="Hero background"
            className="w-full h-[60vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-transparent">
            <div className="h-full flex flex-col justify-center px-8">
              <div className="max-w-3xl space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 animate-gradient">
                    Sumayyah Hasan
                  </span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-300">
                  Student at The University of Texas at Dallas studying, Computer Information Systems & Technology
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                
                
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-navy-800/50 to-navy-800/30 backdrop-blur-sm hover:from-navy-800/70 hover:to-navy-800/50 transition-all duration-300 border border-pink-500/10 hover:border-pink-500/20">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
            I am Sumayyah Hasan, a Computer Information Systems major at the University of Texas at Dallas, on track to graduate in 2026.
            Currently, I excel in dual roles that combine sales, and strategic communications, leveraging my expertise to enhance client engagement and drive revenue growth. 
            Additionally, I engage in tech development initiatives that enhance my understanding of practical applications in Computer Information Systems, supporting my growth in the field while I continue to learn and adapt.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-gradient-to-br from-navy-800/50 to-navy-800/30 backdrop-blur-sm hover:from-navy-800/70 hover:to-navy-800/50 transition-all duration-300 border border-pink-500/10 hover:border-pink-500/20">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
              What I Do
            </h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              {['Full-stack Web Development', 'Sales', 'Client Communications', 'Mentorship'].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-pink-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}