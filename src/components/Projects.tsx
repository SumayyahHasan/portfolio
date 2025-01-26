import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'ECSConnect',
      description: 'A user-friendly web platform designed for engineering students at the University of Texas at Dallas, featuring a range of resources, and tutorials for essential tools like GitHub and VS Code, all tailored to scale the educational experience of new students',
      image: '	https://news.utdallas.edu/news/files/2021/03/nruf-hero-1000-2018-07.jpg',
      tags: ['React', 'HTML', 'JavaScript', 'CSS', 'netlify'],
      github: 'https://github.com/srana3/WEHack',
      live: 'https://ecsconnect.netlify.app/',
    },
    
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio  (This website)',
      image: 'https://img.freepik.com/premium-vector/contemporar…ern-with-abstract-line-nude-colors_134878-381.jpg',
      tags: ['React + Vite', 'TailwindCSS', 'TypeScript', 'netlify'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-navy-800/50 rounded-2xl overflow-hidden hover:bg-navy-800/70 
              transition-all transform hover:-translate-y-1 duration-300
              border border-pink-500/10 hover:border-pink-500/20"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="p-3 bg-navy-800/90 rounded-full hover:bg-pink-500 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-navy-800/90 rounded-full hover:bg-pink-500 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}