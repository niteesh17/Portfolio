import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Star, Award, Coffee, Globe, Terminal, Database, Server, Brain, FileCode } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              NV
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
          <img
            src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&q=80&w=2070"
            alt="Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Niteesha Varamballi
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-300 mb-8">
              Full Stack Developer & C++ Specialist
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/niteesh17" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative p-3 bg-black rounded-full">
                  <Github size={24} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/niteesha-varamballi-840677261/" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative p-3 bg-black rounded-full">
                  <Linkedin size={24} />
                </div>
              </a>
              <a href="mailto:niteeshavaramballi@gamil.com" className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative p-3 bg-black rounded-full">
                  <Mail size={24} />
                </div>
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=2070"
                alt="Programming"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Full Stack Developer</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in C++ programming and a strong foundation in various programming languages including C, Java, Python, and SQL. My journey in technology is complemented by certifications in Responsive Web Design from freeCodeCamp and C++ Development from Udemy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Code2 className="text-purple-400 mr-2" size={20} />
                    <h4 className="font-semibold">Projects</h4>
                  </div>
                  <p className="text-gray-400">5+ Completed</p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Award className="text-purple-400 mr-2" size={20} />
                    <h4 className="font-semibold">Certifications</h4>
                  </div>
                  <p className="text-gray-400">2 Achieved</p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Globe className="text-purple-400 mr-2" size={20} />
                    <h4 className="font-semibold">Sports</h4>
                  </div>
                  <p className="text-gray-400">Cricket & More</p>
                </div>
                <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Brain className="text-purple-400 mr-2" size={20} />
                    <h4 className="font-semibold">Core Skills</h4>
                  </div>
                  <p className="text-gray-400">DBMS, OOPS, OS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'C++', icon: <Code2 size={24} /> },
              { name: 'Python', icon: <Terminal size={24} /> },
              { name: 'TypeScript', icon: <FileCode size={24} /> },
              { name: 'React', icon: <Code2 size={24} /> },
              { name: 'Node.js', icon: <Server size={24} /> },
              { name: 'Express.js', icon: <Server size={24} /> },
              { name: 'Django', icon: <Code2 size={24} /> },
              { name: 'Flask', icon: <Terminal size={24} /> },
              { name: 'SQL', icon: <Database size={24} /> }
            ].map((skill) => (
              <div key={skill.name} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-50 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative p-6 bg-black rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center justify-center mb-3 text-purple-400">
                    {skill.icon}
                  </div>
                  <p className="text-center font-semibold text-gray-300">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Next-Gen Container Logistics',
                description: 'Advanced tracking system for container logistics with real-time monitoring capabilities',
                image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2070',
                tags: ['React', 'Node.js', 'Express']
              },
              {
                title: 'YouTube Comment Analyzer',
                description: 'AI-powered tool for analyzing YouTube comments and extracting valuable insights',
                image: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?auto=format&fit=crop&q=80&w=2070',
                tags: ['Python', 'ML', 'NLP']
              },
              {
                title: 'AI Structural Code Diagram',
                description: 'Innovative tool that converts code into visual diagram representations',
                image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070',
                tags: ['Python', 'AI', 'React']
              },
              {
                title: 'Fake Sniffer',
                description: 'AI-based fake news detection system with advanced analysis capabilities',
                image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?auto=format&fit=crop&q=80&w=2070',
                tags: ['Python', 'ML', 'Django']
              }
            ].map((project) => (
              <div key={project.title} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12">
            Interested in collaboration? Let's discuss your next project!
          </p>
          <a
            href="mailto:niteeshavaramballi@gamil.com"
            className="group relative inline-flex items-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
            <div className="relative px-8 py-4 bg-black rounded-full flex items-center space-x-2">
              <Mail size={20} />
              <span>Get in Touch</span>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Niteesha Varamballi. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;