import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="A Glimpse into My Journey">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-2xl items-center max-w-6xl mx-auto">
        <div className="relative group max-w-sm mx-auto lg:mx-0">
          <div className="aspect-[4/5] rounded-xl bg-bg-secondary border-2 border-accent-primary/20 overflow-hidden relative z-10 transition-transform duration-slow group-hover:-translate-y-2 group-hover:translate-x-2 shadow-2xl">
            <img 
              src="/Gemini_Generated_Image_z3st1fz3st1fz3st.png" 
              alt="Shashwat Kashyap" 
              className="w-full h-full object-cover object-[center_35%] lg:object-center transition-transform duration-slow group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-accent-primary/10 rounded-lg blur-2xl -z-10 group-hover:bg-accent-primary/15 transition-all duration-slow"></div>
          {/* Decorative frame */}
          <div className="absolute top-md left-md -z-20 w-full h-full border-2 border-accent-secondary/20 rounded-lg translate-y-sm -translate-x-sm"></div>
        </div>

        <div className="space-y-lg">
          <div className="space-y-md">
            <p className="text-xl leading-relaxed font-body text-text-secondary">
              I am a passionate <span className="text-text-primary font-semibold border-b-2 border-accent-primary/30">Full Stack Developer</span> and <span className="text-text-primary font-semibold border-b-2 border-accent-secondary/30">AI Enthusiast</span> dedicated to building scalable, intelligent web applications.
            </p>
            <p className="text-lg leading-relaxed font-body text-text-secondary opacity-80 text-justify">
              With a strong foundation in modern web technologies and a keen eye for design, I strive to create seamless digital experiences. My approach combines technical rigor with creative problem-solving, ensuring that every project I touch is not only functional but also visually compelling and user-centric.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-md pt-lg">
            {/* CGPA */}
            <div className="bg-bg-secondary/50 border border-border/50 rounded-lg p-md text-center hover:border-accent-primary/30 transition-all duration-normal hover:shadow-glow-cyan group flex flex-col items-center">
              <div className="mb-sm text-accent-primary group-hover:scale-110 transition-transform duration-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="text-4xl font-black text-text-primary mb-xs font-display group-hover:text-accent-primary transition-colors">8.08</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-display font-bold">CGPA</div>
            </div>
            {/* Projects */}
            <div className="bg-bg-secondary/50 border border-border/50 rounded-lg p-md text-center hover:border-accent-primary/30 transition-all duration-normal hover:shadow-glow-cyan group flex flex-col items-center">
              <div className="mb-sm text-accent-primary group-hover:scale-110 transition-transform duration-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <div className="text-4xl font-black text-text-primary mb-xs font-display group-hover:text-accent-primary transition-colors">4+</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-display font-bold">Core Projects</div>
            </div>
            {/* Problems Solved */}
            <div className="bg-bg-secondary/50 border border-border/50 rounded-lg p-md text-center hover:border-accent-primary/30 transition-all duration-normal hover:shadow-glow-cyan group flex flex-col items-center">
              <div className="mb-sm text-accent-primary group-hover:scale-110 transition-transform duration-normal">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="6"/>
                  <line x1="12" y1="18" x2="12" y2="22"/>
                  <path d="M9 12a3 3 0 1 1 6 0c0 1.5-1 2.5-2 3.5V18H11v-2.5C10 14.5 9 13.5 9 12z"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
              </div>
              <div className="text-4xl font-black text-text-primary mb-xs font-display group-hover:text-accent-primary transition-colors">400+</div>
              <div className="text-[10px] text-text-secondary uppercase tracking-[0.2em] font-display font-bold">Problems Solved</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
