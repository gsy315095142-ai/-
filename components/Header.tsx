import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '精品课程', href: '#courses' },
    { name: 'AI 顾问', href: '#advisor' },
    { name: '关于我们', href: '#about' },
    { name: '联系方式', href: '#footer' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2">
          <div className={`p-2 rounded-lg ${isScrolled ? 'bg-red-600 text-white' : 'bg-white text-red-600'}`}>
            <BrainCircuit size={28} />
          </div>
          <span className={`text-xl font-bold tracking-wide ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            {COMPANY_NAME.substring(0, 5)}<span className={isScrolled ? 'text-red-600' : 'text-red-100'}>教育</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-red-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-gray-100 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#advisor"
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${
              isScrolled 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-white text-red-600 hover:bg-gray-100'
            }`}
          >
            免费咨询
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? 'text-gray-900' : 'text-white'}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;