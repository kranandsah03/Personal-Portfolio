import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, FileDown, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic to detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section) {
          const top = section.offsetTop;

          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Run once when page loads
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle navigation click
  const handleNavClick = (e, href) => {
    e.preventDefault();

    // Close mobile menu
    setMobileMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-dark-950/80 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* =========================================
              BRAND LOGO
              ========================================= */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 text-base sm:text-lg font-bold text-white tracking-tight"
            aria-label="Anand Kumar Portfolio Home"
          >
            <span
              className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent/30 to-accent/10 border border-accent/40 flex items-center justify-center text-accent text-sm font-mono font-semibold transition-transform group-hover:scale-105"
            >
              AK
            </span>

            <span className="group-hover:text-accent transition-colors">
              Anand Kumar
            </span>
          </a>


          {/* =========================================
              DESKTOP NAVIGATION
              ========================================= */}
          <nav
            className="nav-container hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md"
          >
            {navLinks.map((link) => {

              const isActive =
                activeSection === link.href.substring(1);

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >

                  {/* Active Section Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="active-nav-indicator absolute inset-0 bg-white/10 rounded-full border border-white/15 shadow-sm pointer-events-none"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Navigation Text */}
                  <span className="relative z-10">
                    {link.name}
                  </span>

                </a>
              );
            })}
          </nav>


          {/* =========================================
              RIGHT ACTION ICONS & RESUME
              ========================================= */}
          <div className="hidden sm:flex items-center gap-3">

            {/* GitHub */}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>


            {/* LinkedIn */}
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-accent hover:bg-accent/5 rounded-lg border border-transparent hover:border-accent/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>


            {/* Resume */}
            <a
              href={personalInfo.contact.resumeUrl}
              download="Anand-Kumar-Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-accent/15 border border-accent/40 hover:bg-accent hover:text-dark-950 rounded-lg transition-all duration-200 shadow-glow-sm"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

          </div>


          {/* =========================================
              MOBILE HAMBURGER
              ========================================= */}
          <div className="flex sm:hidden items-center gap-2">

            {/* Mobile Resume */}
            <a
              href={personalInfo.contact.resumeUrl}
              download="Anand-Kumar-Resume.pdf"
              className="p-1.5 text-xs text-accent border border-accent/30 rounded-md hover:bg-accent/10 transition-colors"
              aria-label="Resume Download"
            >
              <FileDown size={16} />
            </a>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
              aria-label={
                mobileMenuOpen
                  ? 'Close Menu'
                  : 'Open Menu'
              }
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>

          </div>

        </div>
      </div>


      {/* =========================================
          MOBILE DRAWER MENU
          ========================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
            }}
            className="sm:hidden bg-dark-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >

            <div className="px-5 pt-3 pb-6 space-y-1">

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => {

                const isActive =
                  activeSection === link.href.substring(1);

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavClick(e, link.href)
                    }
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-accent/15 text-accent border border-accent/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}


              {/* Mobile Bottom Actions */}
              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">

                {/* Social Icons */}
                <div className="flex items-center gap-3">

                  {/* GitHub */}
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>


                  {/* LinkedIn */}
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-300 hover:text-accent bg-white/5 rounded-lg border border-white/10"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>

                </div>


                {/* Download Resume */}
                <a
                  href={personalInfo.contact.resumeUrl}
                  download="Anand-Kumar-Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-accent/20 border border-accent/40 rounded-lg hover:bg-accent hover:text-dark-950 transition-colors"
                >
                  <FileDown size={14} />
                  <span>Download Resume</span>
                </a>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}