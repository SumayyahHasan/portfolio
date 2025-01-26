import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Sales and Service Representative',
      company: 'AquaTots',
      period: '2023 - Present',
      location: 'Coppell, TX',
      description: [
        'Generated 100+ sales and $70,000 in annual revenue by strategically demonstrating service to meet client needs effectively. ',
        'Manage inbound leads and communications across multiple channels, resolving inquiries, coordinating schedules, and ensuring accurate financial transactions.',
        'Maintain and manage a database of 200+ clients, fostering strong relationships through effective communication',
        'Trained and mentored new representatives on selling strategies, advanced service knowledge, and effective customer service.',
      ],
    },
    {
      title: 'Communications Specialist ',
      company: 'DwellInc',
      period: 'May 2024 - August 2024',
      location: 'Dallas, TX',
      description: [
        'Qualified potential apartment leads through social media communications.',
        'Served as the initial point of contact, addressing inquiries and guiding prospective tenants through the rental process.',
        'Cultivated enduring client connections by prioritizing personalized service, driving enhanced satisfaction and loyalty.',
      ],
    },
    
  ];

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
        Work Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group bg-navy-800/50 p-8 rounded-2xl hover:bg-navy-800/70 transition-all duration-300
              transform hover:-translate-y-1 border border-pink-500/10 hover:border-pink-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-pink-400 font-medium text-lg">{exp.company}</p>
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-gray-300 text-lg">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-pink-400 mt-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}