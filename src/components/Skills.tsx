import React from 'react';
import { Code2, Server, PenTool as Tool, Zap } from 'lucide-react';

export default function Skills() {
  const skills = {
    'Frontend Development': {
      icon: Code2,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      color: 'from-pink-400 to-pink-600',
      bgColor: 'group-hover:bg-pink-500/10',
    },
   
    'Tools': {
      icon: Tool,
      skills: ['Git', 'VSCode', 'Eclipse', 'Tableau'],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'group-hover:bg-blue-500/10',
    },
    'Other Skills': {
      icon: Zap,
      skills: ['Microsoft Excel', 'Microsoft Office', 'Microsoft Word'],
      color: 'from-green-400 to-green-600',
      bgColor: 'group-hover:bg-green-500/10',
    },
  };

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, { icon: Icon, skills: skillList, color, bgColor }]) => (
          <div
            key={category}
            className="group bg-navy-800/50 rounded-2xl p-8 hover:bg-navy-800/70 transition-all duration-500
              border border-pink-500/10 hover:border-pink-500/20 transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className={`p-3 rounded-xl ${bgColor} transition-colors duration-500`}>
                <Icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r ${color}`} />
              </div>
              <h3 className="text-2xl font-semibold">{category}</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillList.map((skill, index) => (
                <div
                  key={skill}
                  className="transform transition-all duration-300 hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`
                      relative p-4 rounded-xl bg-navy-900/50 border border-pink-500/10
                      hover:border-pink-500/20 transition-all duration-300
                      ${bgColor}
                    `}
                  >
                    <div className="relative z-10">
                      <p className="text-gray-300 font-medium">{skill}</p>
                    </div>
                    <div
                      className={`
                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10
                        transition-opacity duration-500 bg-gradient-to-r ${color}
                      `}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}