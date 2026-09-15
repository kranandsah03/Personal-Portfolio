import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = 2026; // Per prompt specification

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950 py-12 text-gray-400 text-xs sm:text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-white font-display tracking-tight">
              {personalInfo.name}
            </div>
            <div className="text-xs text-gray-400">
              Computer Science Engineer & Full-Stack Developer
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.contact.emailUrl}
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright & Built with React */}
          <div className="text-center md:text-right space-y-1 text-xs text-gray-500 font-mono">
            <div>
              © {currentYear} Anand Kumar. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-end gap-1.5 text-[11px] text-gray-400">
              <span>Built with React</span>
              <span>•</span>
              <span className="text-accent">Tailwind CSS</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
