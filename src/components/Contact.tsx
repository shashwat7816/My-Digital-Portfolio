import React, { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, Phone, MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [showPhone, setShowPhone] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setShowPhone(false);
      }
    };
    if (showPhone) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showPhone]);

  return (
    <footer id="contact" className="bg-surface-elevated py-3xl px-lg border-t border-border-default/10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-xl tracking-tight font-display">
          Let's <span className="text-cyan-neon">Collaborate</span>.
        </h2>

        <p className="text-text-secondary max-w-xl mx-auto mb-2xl text-lg font-body">
          I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a
          href="mailto:shashwatkashyap123@gmail.com"
          className="btn-primary py-lg px-2xl text-xl inline-flex items-center gap-md mb-2xl hover:shadow-neon-cyan"
        >
          <Mail size={24} />
          shashwatkashyap123@gmail.com
        </a>

        <div className="flex justify-center items-center gap-xl mb-2xl">
          <a href="https://linkedin.com/in/shashwat-kashyap" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-cyan-neon transition-colors duration-fast">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/shashwat7816" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-cyan-neon transition-colors duration-fast">
            <Github size={28} />
          </a>

          {/* Phone with popover */}
          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setShowPhone(v => !v)}
              className="text-text-muted hover:text-cyan-neon transition-colors duration-fast"
              aria-label="Show phone number"
            >
              <Phone size={28} />
            </button>

            <AnimatePresence>
              {showPhone && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute bottom-full mb-4 z-50 w-[280px]"
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  <div className="bg-bg-secondary border border-accent-primary/30 rounded-xl p-md shadow-[0_0_30px_rgba(0,229,255,0.15)] text-center relative">
                    {/* Close button */}
                    <button
                      onClick={() => setShowPhone(false)}
                      className="absolute top-xs right-xs text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      <X size={14} />
                    </button>

                    <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-text-tertiary mb-xs">
                      Phone / WhatsApp
                    </p>

                    {/* Big bold number */}
                    <a
                      href="tel:+919473152700"
                      className="block text-2xl font-black font-display text-cyan-neon tracking-wider hover:text-white transition-colors mb-md"
                    >
                      +91 94731 52700
                    </a>

                    {/* WhatsApp button */}
                    <a
                      href="https://wa.me/919473152700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-sm w-full py-sm px-md bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] rounded-lg font-bold text-sm font-display uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-all duration-300"
                    >
                      <MessageCircle size={16} />
                      Chat on WhatsApp
                    </a>

                    {/* Arrow */}
                    <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-bg-secondary border-r border-b border-accent-primary/30 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="text-[10px] text-text-muted font-mono uppercase tracking-[0.4em] pt-xl border-t border-border-default/10">
          &copy; {new Date().getFullYear()} Shashwat Kashyap. Built with Passion & AI.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
