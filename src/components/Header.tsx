
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3',
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md py-2' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-scalex-lightBlue">ScaleX AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('benefits')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            The ScaleX AI Advantage
          </button>
          <button 
            onClick={() => scrollToSection('integrations')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            Integrations
          </button>
          {/* <button 
            onClick={() => scrollToSection('use-case')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            Use Case
          </button> */}
          <button 
            onClick={() => scrollToSection('FAQs')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            FAQs
          </button>
          {/* <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            Contact
          </button> */}
          <Link 
            to="/book-demo"
            className="bg-accent text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Book A Demo
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-scalex-navy/95 backdrop-blur-lg absolute top-full left-0 right-0 p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm font-medium text-white hover:text-white transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-sm font-medium text-white hover:text-white transition-colors py-2"
            >
             The ScaleX AI Advantage
            </button>
            <button 
              onClick={() => scrollToSection('integrations')}
              className="text-sm font-medium text-white hover:text-white transition-colors py-2"
            >
              Integrations
            </button>
            {/* <button 
              onClick={() => scrollToSection('use-case')}
              className="text-sm font-medium text-white hover:text-white transition-colors py-2"
            >
              Use Case
            </button> */}
            <button 
            onClick={() => scrollToSection('FAQs')}
            className="text-sm font-medium text-white hover:text-white transition-colors"
          >
            FAQs
          </button>
            {/* <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-white hover:text-white transition-colors py-2"
            >
              Contact
            </button> */}
            <Link 
              to="/book-demo"
              className="bg-accent text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors text-center"
            >
              Book A Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
