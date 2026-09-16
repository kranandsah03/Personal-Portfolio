import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileDown, Github, Linkedin, Mail, Check, Copy, Terminal as TerminalIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const floatingIconTypes = [
  { slug: 'react', count: 4 },
  { slug: 'html5', count: 4 },
  { slug: 'css3', count: 4 },
  { slug: 'javascript', count: 4 },
  { slug: 'mongodb', count: 10 },
];

const floatingIcons = floatingIconTypes.flatMap(({ slug, count }) =>
  Array.from({ length: count }, (_, index) => ({
    id: `${slug}-${index}`,
    src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`,
  }))
);

const getFloatingIconStyle = () => ({
  '--icon-left': `${Math.random() * 100}%`,
  '--icon-top': `${Math.random() * 100}%`,
  '--icon-size': `${30 + Math.random() * 20}px`,
  '--float-x': `${(Math.random() < 0.5 ? -1 : 1) * (300 + Math.random() * 300)}px`,
  '--float-y': `${(Math.random() < 0.5 ? -1 : 1) * (300 + Math.random() * 300)}px`,
  '--float-duration': `${6 + Math.random() * 6}s`,
});

export default function Hero() {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippet = `const developer = {
  name: "Anand Kumar",
  role: "Full-Stack Developer",
  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB"
  ],
  passion: "Building software",
  status: "Open to opportunities"
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div id="floating-icons-bg" aria-hidden="true">
        {floatingIcons.map((icon) => (
          <img
            key={icon.id}
            src={icon.src}
            alt=""
            className="floating-tech-icon"
            style={getFloatingIconStyle()}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.6] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-accent-indigo/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 animate-slideInLeft"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
                {personalInfo.heroHeading}
              </h1>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-accent via-cyan-200 to-indigo-300 bg-clip-text text-transparent font-display">
                {personalInfo.heroHighlight}
              </div>
            </div>

            {/* Supporting Summary */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed font-normal">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-dark-950 font-semibold text-sm hover:bg-cyan-300 transition-all duration-200 shadow-glow-cyan hover:shadow-cyan-400/30 group"
              >
                <span>View My Projects</span>
                <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={personalInfo.contact.resumeUrl}
                download="Anand-Kumar-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-900/90 text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-accent/40 hover:bg-white/5 transition-all duration-200"
              >
                <FileDown size={16} className="text-accent" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Direct Social / Contact Links */}
            <div className="pt-4 flex items-center gap-5 text-sm text-gray-400">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">Connect:</span>
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Github size={16} />
                <span className="font-mono text-xs">GitHub</span>
              </a>
              <span className="text-gray-700">•</span>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Linkedin size={16} />
                <span className="font-mono text-xs">LinkedIn</span>
              </a>
              <span className="text-gray-700">•</span>
              <a
                href={personalInfo.contact.emailUrl}
                className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                <span className="font-mono text-xs">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-accent/20 to-indigo-500/20 rounded-[2rem] blur-2xl opacity-70 pointer-events-none" />

            <div className="relative mx-auto max-w-[440px] rounded-[2rem] border border-white/10 bg-dark-900/70 p-3 shadow-[0_30px_80px_rgba(13,16,32,0.8)] backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                <img
                  src="/anand-kumar.jpg"
                  alt="Anand Kumar smiling in a suit"
                  className="h-[620px] w-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-8 left-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-medium text-emerald-300 shadow-lg shadow-emerald-500/10 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
