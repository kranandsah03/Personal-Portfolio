import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Github, Linkedin, Mail, Play, CornerDownLeft, Sparkles } from 'lucide-react';
import { personalInfo, terminalCommands } from '../data/portfolio';

export default function Terminal() {
  const [history, setHistory] = useState([
    { cmd: 'whoami', out: 'Anand Kumar' },
    { cmd: 'role', out: 'Full-Stack Developer & Computer Science Engineer' },
    { cmd: 'stack', out: 'React.js | Node.js | Express.js | MongoDB | C++ | MySQL' },
    { cmd: 'focus', out: 'Responsive Web Apps, REST APIs & Algorithmic Problem Solving' },
    { cmd: 'status', out: 'Ready for opportunities — Open to Full-Stack / Software Engineering roles' },
  ]);
  const [inputVal, setInputVal] = useState('');

  const executeCmd = (commandName) => {
    const found = terminalCommands.find(
      (c) => c.command.toLowerCase() === commandName.trim().toLowerCase()
    );

    let outputText = '';
    if (found) {
      outputText = found.output;
    } else if (commandName.trim().toLowerCase() === 'help') {
      outputText = 'Available commands: ' + terminalCommands.map((c) => c.command).join(', ') + ', clear, help';
    } else if (commandName.trim().toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      outputText = `Command not recognized: "${commandName}". Type "help" or click the suggestion chips.`;
    }

    setHistory((prev) => [...prev, { cmd: commandName, out: outputText }]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      executeCmd(inputVal);
    }
  };

  return (
    <section className="py-24 relative bg-dark-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono mb-3">
            <Sparkles size={12} />
            <span>// INTERACTIVE CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Let's Build Something
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Query my developer environment directly or execute quick inspection commands.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-950 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-gray-400 hidden sm:inline">anand@portfolio: ~</span>
            </div>
            <div className="text-[11px] text-accent flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>bash session active</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 bg-dark-950/80 min-h-[260px] max-h-[420px] overflow-y-auto space-y-4 no-scrollbar">
            <div className="text-gray-500 text-xs">
              Welcome to Anand's interactive profile terminal. Click quick commands below or type your own.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-emerald-400">anand@dev:~$</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <div className="pl-6 text-gray-300 leading-relaxed">
                  {item.out}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-2 text-accent">
              <span className="text-emerald-400 shrink-0">anand@dev:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. whoami, stack, clear)..."
                className="w-full bg-transparent border-none text-white focus:outline-none placeholder-gray-600 font-mono text-xs sm:text-sm"
              />
              <button
                onClick={() => inputVal.trim() && executeCmd(inputVal)}
                className="p-1 rounded text-gray-400 hover:text-accent"
                aria-label="Submit command"
              >
                <CornerDownLeft size={14} />
              </button>
            </div>
          </div>

          {/* Quick Command Suggestions Chips */}
          <div className="px-4 py-3 bg-dark-900 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-xs">
            <span className="text-gray-500 font-mono text-[11px] mr-1">Suggested:</span>
            {terminalCommands.map((c) => (
              <button
                key={c.command}
                onClick={() => executeCmd(c.command)}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] hover:border-accent/40 text-gray-300 hover:text-accent font-mono transition-colors"
              >
                ${c.command}
              </button>
            ))}
            <button
              onClick={() => executeCmd('clear')}
              className="px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.06] hover:border-rose-500/40 text-gray-400 hover:text-rose-400 font-mono transition-colors ml-auto"
            >
              $clear
            </button>
          </div>

          {/* Terminal Bottom CTA Bar */}
          <div className="p-5 sm:p-6 bg-dark-900/90 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm font-semibold text-white font-sans">
                Let's connect and build something useful.
              </div>
              <div className="text-xs text-gray-400">
                Direct channels to discuss engineering collaborations or roles.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.contact.emailUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-dark-950 text-xs font-semibold hover:bg-cyan-300 transition-colors shadow-glow-sm"
              >
                <Mail size={14} />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
