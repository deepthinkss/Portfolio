import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: '[ABOUT]' },
    { id: 'projects', label: '[PROJECTS]' },
    { id: 'skills', label: '[SKILLS]' },
    { id: 'resume', label: '[RESUME]' },
    { id: 'contact', label: '[CONTACT]' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-sm border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200 font-mono"
          >
            <Terminal className="w-5 h-5" />
            <span className="font-bold tracking-wider">DEEP.THAKUR</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-mono font-medium tracking-wider robotic-border px-3 py-2 border border-transparent hover:border-white/30"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200 border border-white/30 hover:border-white/60"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200 border border-white/30"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-gray-300 transition-colors duration-200 border border-white/30"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-black">
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-white hover:text-gray-300 transition-colors duration-200 text-sm font-mono font-medium tracking-wider"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;