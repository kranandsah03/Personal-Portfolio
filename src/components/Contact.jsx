import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({ submitted: false, error: 'Please fill in all fields before sending.' });
      return;
    }

    // Open Gmail compose so the message does not use the OS default mail app.
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.contact.email)}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

    setFormStatus({ submitted: true, error: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono mb-3">
            <span>// INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Let's Connect
          </h2>
          <p className="mt-2 text-base text-gray-400 max-w-xl">
            I'm open to software development opportunities, projects, and conversations around technology.
          </p>
          <div className="h-1 w-12 bg-accent rounded-full mt-3" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Copy Controls */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.08] flex items-center justify-between group hover:border-accent/30 transition-all duration-200">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href={personalInfo.contact.emailUrl}
                    className="text-sm sm:text-base font-semibold text-white hover:text-accent truncate block transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  <AnimatePresence>
                    {copiedEmail && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-7 right-0 text-[10px] font-mono bg-emerald-500 text-dark-950 font-bold px-1.5 py-0.5 rounded shadow"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.08] flex items-center justify-between group hover:border-accent/30 transition-all duration-200">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Phone Number
                  </div>
                  <a
                    href={personalInfo.contact.phoneUrl}
                    className="text-sm sm:text-base font-semibold text-white hover:text-accent truncate block transition-colors"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  <AnimatePresence>
                    {copiedPhone && (
                      <motion.span
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-7 right-0 text-[10px] font-mono bg-emerald-500 text-dark-950 font-bold px-1.5 py-0.5 rounded shadow"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                Professional Profiles
              </div>
              
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-accent" />
                  <span className="text-sm text-gray-300 group-hover:text-white">
                    {personalInfo.contact.linkedinDisplay}
                  </span>
                </div>
                <ExternalLink size={14} className="text-gray-500 group-hover:text-accent" />
              </a>

              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Github size={18} className="text-gray-300 group-hover:text-white" />
                  <span className="text-sm text-gray-300 group-hover:text-white">
                    {personalInfo.contact.githubDisplay}
                  </span>
                </div>
                <ExternalLink size={14} className="text-gray-500 group-hover:text-accent" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl relative">
              <div className="flex items-center gap-2 text-white font-display text-lg font-bold mb-1">
                <MessageSquare size={18} className="text-accent" />
                <span>Send a Message</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-6 font-mono">
                Direct transmission via Gmail
              </p>

              {formStatus.submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Ready to Send!
                  </h4>
                  <p className="text-sm text-gray-300">
                    Gmail was opened with your message pre-filled. If it didn't open automatically, you can email me directly at{' '}
                    <span className="text-accent font-mono">{personalInfo.contact.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({ name: '', email: '', message: '' });
                      setFormStatus({ submitted: false, error: '' });
                    }}
                    className="mt-2 text-xs font-mono text-accent underline hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
                      {formStatus.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-gray-300 block">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-gray-300 block">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-gray-300 block">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Anand, I'd like to talk about an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-accent text-dark-950 font-semibold text-sm hover:bg-cyan-300 transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-sm group"
                  >
                    <span>Send Message</span>
                    <Send size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
