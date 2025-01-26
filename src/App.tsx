import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, Home, Briefcase, Code2, Wrench } from 'lucide-react';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navigation = [
    { name: 'About', icon: Home, id: 'about' },
    { name: 'Experience', icon: Briefcase, id: 'experience' },
    { name: 'Projects', icon: Code2, id: 'projects' },
    { name: 'Skills', icon: Wrench, id: 'skills' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          const id = section.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.querySelector(`#${id}`);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(e) => scrollToSection(e, item.id)}
          className={`
            group flex items-center space-x-3 px-4 py-3 rounded-xl
            transition-all duration-300 ease-in-out
            ${activeSection === item.id 
              ? 'bg-pink-500/20 text-pink-400' 
              : 'text-gray-400 hover:bg-pink-500/10 hover:text-pink-400'
            }
          `}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.name}</span>
          {activeSection === item.id && (
            <span className="absolute left-0 w-1 h-8 bg-pink-500 rounded-r-full transform -translate-y-1" />
          )}
        </a>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-3 rounded-xl bg-navy-800/90 border border-pink-500/10 lg:hidden"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 bg-navy-800/90 backdrop-blur-xl z-40
        border-r border-pink-500/10 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
              Portfolio
            </h1>
          </div>

          <nav className="flex-1 space-y-2">
            <NavLinks />
          </nav>

          <div className="pt-6 border-t border-pink-500/10">
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/SumayyahHasan" className="p-2 text-gray-400 hover:text-pink-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sumayyah-hasan/" className="p-2 text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:sumayyah.hasan@utdallas.edu" className="p-2 text-gray-400 hover:text-pink-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 relative">
        <div className="min-h-screen">
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="experience" className="min-h-screen bg-navy-800/30">
            <Experience />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="skills" className="min-h-screen bg-navy-800/30">
            <Skills />
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-navy-800/50 border-t border-pink-500/10 py-6 px-4">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Sumayyah Hasan. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;