import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CertificateIcon from './icons/CertificateIcon.jsx';
import DocumentIcon from './icons/DocumentIcon.jsx';
import SunIcon from './icons/SunIcon.jsx';
import MoonIcon from './icons/MoonIcon.jsx';
import MenuIcon from './icons/MenuIcon.jsx';
import CloseIcon from './icons/CloseIcon.jsx';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const renderThemeChanger = () => {
    if (!mounted) {
      return <div className="w-6 h-6" />;
    }

    if (theme === 'dark') {
      return <SunIcon className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors duration-300" />;
    } else {
      return <MoonIcon className="w-6 h-6 text-slate-600 hover:text-navy-dark transition-colors duration-300" />;
    }
  };

  return (
    <>
      <header className="bg-white/80 dark:bg-navy-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-teal-600 dark:text-mint-green text-2xl font-bold font-mono transition-all duration-300 drop-shadow-glow-light dark:drop-shadow-glow-dark">
              <Link href="/">SIAM</Link>
            </div>

            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link href={link.href} className={`${isActive ? 'text-teal-600 dark:text-mint-green' : 'text-slate-800 dark:text-light-slate hover:text-teal-600 dark:hover:text-mint-green'} transition-colors duration-300 font-medium`}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/certificates" className="flex items-center space-x-2 px-4 py-2 border border-teal-600 dark:border-mint-green text-teal-600 dark:text-mint-green rounded-md hover:bg-teal-600/10 dark:hover:bg-mint-green/10 transition-colors duration-300">
                <CertificateIcon className="w-5 h-5" />
                <span>Certificates</span>
              </Link>
              <a href="/SiamCV.pdf" download className="flex items-center space-x-2 px-4 py-2 border border-slate-400 dark:border-slate text-slate-600 dark:text-slate rounded-md hover:bg-slate-400/10 dark:hover:bg-slate/10 transition-colors duration-300">
                <DocumentIcon className="w-5 h-5" />
                <span>CV</span>
              </a>
              <button onClick={handleThemeToggle} aria-label="Toggle theme">
                {renderThemeChanger()}
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-teal-600 dark:text-mint-green focus:outline-none"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <MenuIcon className="w-7 h-7" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
        <div 
          className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white dark:bg-navy-dark p-6 shadow-xl transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center mb-8">
              <div className="text-teal-600 dark:text-mint-green text-2xl font-bold font-mono">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>SIAM</Link>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-600 dark:text-slate" aria-label="Close menu">
                  <CloseIcon className="w-7 h-7" />
              </button>
          </div>
          
          <nav className="flex flex-col h-full">
              <ul className="flex flex-col items-start space-y-6">
                {navLinks.map((link) => {
                  const isActive = router.pathname === link.href;
                  return (
                    <li key={link.name}>
                      <Link href={link.href} className={`${isActive ? 'text-teal-600 dark:text-mint-green' : 'text-slate-800 dark:text-light-slate hover:text-teal-600 dark:hover:text-mint-green'} transition-colors duration-300 text-lg font-medium`} onClick={() => setIsMobileMenuOpen(false)}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col items-center space-y-4 mt-8 pt-6 border-t border-slate-300/20 dark:border-slate/20">
                 <Link href="/certificates" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center items-center space-x-2 px-4 py-2 border border-teal-600 dark:border-mint-green text-teal-600 dark:text-mint-green rounded-md hover:bg-teal-600/10 dark:hover:bg-mint-green/10 transition-colors duration-300">
                  <CertificateIcon className="w-5 h-5" />
                  <span>Certificates</span>
                </Link>
                <a href="/SiamCV.pdf" download className="w-full flex justify-center items-center space-x-2 px-4 py-2 border border-slate-400 dark:border-slate text-slate-600 dark:text-slate rounded-md hover:bg-slate-400/10 dark:hover:bg-slate/10 transition-colors duration-300">
                  <DocumentIcon className="w-5 h-5" />
                  <span>CV</span>
                </a>
                <button
                  onClick={handleThemeToggle}
                  className="w-full flex justify-center items-center space-x-2 px-4 py-2 border border-slate-400 dark:border-slate text-slate-600 dark:text-slate rounded-md hover:bg-slate-400/10 dark:hover:bg-slate/10 transition-colors duration-300"
                  aria-label="Toggle theme"
                >
                  {renderThemeChanger()}
                  <span>{mounted && (theme === 'dark' ? 'Light Mode' : 'Dark Mode')}</span>
                </button>
              </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
