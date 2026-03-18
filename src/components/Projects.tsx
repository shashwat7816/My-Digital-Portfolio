import React from 'react';
import Section from './Section';
import { ExternalLink, Github, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiVercel, SiHtml5, SiCss, SiPython, SiPhp, SiMysql, SiTailwindcss, SiJavascript
} from 'react-icons/si';

// Map tag name → { icon, color }
const TAG_META: Record<string, { icon: React.ReactNode; color: string }> = {
  'React.js':     { icon: <SiReact size={14} />,       color: '#61DAFB' },
  'Node.js':      { icon: <SiNodedotjs size={14} />,   color: '#339933' },
  'Express.js':   { icon: <SiExpress size={14} />,     color: '#AAAAAA' },
  'MongoDB':      { icon: <SiMongodb size={14} />,     color: '#47A248' },
  'Vercel':       { icon: <SiVercel size={14} />,      color: '#FFFFFF' },
  'HTML5':        { icon: <SiHtml5 size={14} />,       color: '#E34F26' },
  'CSS3':         { icon: <SiCss size={14} />,         color: '#1572B6' },
  'Python':       { icon: <SiPython size={14} />,      color: '#3776AB' },
  'PHP':          { icon: <SiPhp size={14} />,         color: '#777BB4' },
  'MySQL':        { icon: <SiMysql size={14} />,       color: '#4479A1' },
  'Tailwind CSS': { icon: <SiTailwindcss size={14} />, color: '#06B6D4' },
  'JavaScript':   { icon: <SiJavascript size={14} />,  color: '#F7DF1E' },
  'Gen AI':       { icon: <span style={{ fontSize: 12, lineHeight: 1 }}>✦</span>, color: '#A259FF' },
};

const projects = [
  {
    title: 'TicketFlow',
    date: 'Dec 2025',
    bullets: [
      'Built a venue ticketing platform with event browsing, seat selection, and secure ticket booking flows.',
      'Implemented season pass management, customer support portal, and admin dashboard for venue operators.',
      'Deployed with a React + Vite frontend backed by Node.js/Express REST API and MongoDB Atlas.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'Gen AI'],
    github: 'https://github.com/shashwat7816/TicketFlow',
    live: 'https://ticket-flow-plum.vercel.app/',
    screenshot: '/projects/ticketflow.png',
  },
  {
    title: 'SkillBridge',
    date: 'July 2025',
    bullets: [
      'AI-powered roadmap generator creating personalized week-by-week learning plans adaptive to user goals and skill level.',
      'Interactive dashboard with progress tracking, skill completion management, and career path recommendations.',
      'Secure authentication with profile customization, session persistence, and light/dark theme switching.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vercel', 'Gen AI'],
    github: 'https://github.com/Keshav833/SkillBridge_Project',
    live: 'https://skillbridge-project-cew7.onrender.com/',
    screenshot: '/projects/skillbridge.png',
  },
  {
    title: 'Code Guardian',
    date: 'April 2025',
    bullets: [
      'Powered by Google Gemini 1.5 Pro for AI-driven debugging across 12+ languages including Python, Java, C++, and JavaScript.',
      'Supports multiple modes — Standard Debugging, Performance Analysis, Security Review, and Code Explanation.',
      'Tkinter GUI with scrollable chat history, save/load session support, and automatic language detection from files.',
    ],
    tags: ['HTML5', 'CSS3', 'Python', 'Vercel'],
    github: 'https://github.com/shashwat7816/code-debugger',
    live: 'https://code-debugger-shashwat-kashyaps-projects.vercel.app/',
    screenshot: '/projects/codeguardian.png',
  },
  {
    title: 'EduGov Connect',
    date: 'April 2025',
    bullets: [
      'Engineered dual portals — government officials monitor institutions; universities manage students, courses and departments.',
      'Built real-time analytics dashboards with education metrics, trends, and centralized reporting for data-driven decisions.',
      'Role-based access control with separate registration and authentication flows for government and university users.',
    ],
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'HTML5', 'JavaScript'],
    github: 'https://github.com/DhruvSingh21/Government-University-Portal',
    live: '',
    screenshot: '/projects/edugovconnect.png',
  },
];

const placeholderGradients = [
  'from-cyan-900/40 via-bg-secondary to-indigo-900/40',
  'from-emerald-900/40 via-bg-secondary to-cyan-900/40',
  'from-violet-900/40 via-bg-secondary to-pink-900/40',
  'from-amber-900/40 via-bg-secondary to-orange-900/40',
];

interface Project {
  title: string;
  date: string;
  bullets: string[];
  tags: string[];
  github: string;
  live: string;
  screenshot: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } }
      }}
      className="flex flex-col rounded-xl overflow-hidden border border-border/40 bg-bg-secondary/50 hover:border-accent-primary/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,229,255,0.08)] group"
    >
      {/* Browser mockup header */}
      <div className="flex items-center gap-xs px-md py-sm bg-bg-tertiary border-b border-border/30 shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-sm flex-1 bg-bg-primary/60 rounded-sm px-sm py-[3px] text-[9px] font-mono text-text-tertiary truncate">
          {project.github.replace('https://', '')}
        </div>
      </div>

      {/* Screenshot or Placeholder */}
      <div className="relative overflow-hidden" style={{ height: '185px' }}>
        {!imgError ? (
          <img
            src={project.screenshot}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${placeholderGradients[index % placeholderGradients.length]} flex items-center justify-center`}>
            <Monitor size={40} className="text-accent-primary/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Card content */}
      <div className="flex flex-col gap-sm p-md flex-1">
        {/* Title + date */}
        <div className="flex items-start justify-between gap-sm">
          <h3 className="text-base font-bold text-text-primary font-display tracking-tight">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono text-cyan-neon/50 whitespace-nowrap mt-0.5">
            {project.date}
          </span>
        </div>

        {/* Bullet points */}
        <ul className="space-y-2 flex-1">
          {project.bullets.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed font-body">
              <span className="text-accent-primary mt-[3px] shrink-0 font-bold">›</span>
              {point}
            </li>
          ))}
        </ul>

        {/* Colorful tech tags */}
        <div className="flex flex-wrap gap-xs pt-xs">
          {project.tags.map(tag => {
            const meta = TAG_META[tag];
            return (
              <span
                key={tag}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm bg-bg-tertiary border border-border/50 font-mono whitespace-nowrap hover:border-accent-primary/40 transition-colors duration-fast"
                style={{ color: meta?.color ?? '#00E5FF' }}
              >
                {meta?.icon}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex items-center gap-md pt-xs border-t border-border/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs text-text-tertiary hover:text-cyan-neon transition-colors duration-fast text-xs font-mono"
          >
            <Github size={14} />
            <span>Source</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-text-tertiary hover:text-cyan-neon transition-colors duration-fast text-xs font-mono"
            >
              <ExternalLink size={14} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" subtitle="Featured Works">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-xl"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
