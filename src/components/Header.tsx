
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import SocialLinks from './SocialLinks';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
          <a href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </a>
          
          <div className="pl-4 border-l border-gray-200">
            <SocialLinks size={18} />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white/95 backdrop-blur-sm flex flex-col p-6 transition-all duration-300 ease-in-out transform md:hidden",
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <nav className="flex flex-col space-y-6 text-center mt-8">
          <a 
            href="#about" 
            className="text-lg py-2 border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-lg py-2 border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="text-lg py-2 border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-lg py-2 border-b border-gray-100 hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          
          <div className="pt-6 flex justify-center">
            <SocialLinks size={24} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
