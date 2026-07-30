import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
    >
      {isDarkMode ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Activities', href: '#activities' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center justify-between py-4">
              {/* Logo */}
              <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  WC
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <ThemeToggle />
              </div>

              {/* Mobile Controls */}
              <div className="flex md:hidden items-center space-x-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Toggle menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : 'translate-y-[-4px]'
                    }`} />
                    <span className={`w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-[4px]'
                    }`} />
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ zIndex: 40 }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-bold text-gray-900 dark:text-white hover:text-blue-400 py-4 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay: `${i * 100}ms`
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
