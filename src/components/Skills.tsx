import React from 'react';
import Section from './Section';
import { Code2, Brain, Wrench, Users, Target, Zap, Monitor } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import CyberCard from './CyberCard';
import {
  SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiVercel, SiPython, SiCplusplus, SiJavascript,
  SiHtml5, SiCss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const technicalSkills = [
  {
    category: 'Languages',
    skills: [
      { name: 'C++',        icon: <SiCplusplus   size={16} color="#00599C" /> },
      { name: 'Java',       icon: <FaJava         size={16} color="#ED8B00" /> },
      { name: 'Python',     icon: <SiPython       size={16} color="#3776AB" /> },
      { name: 'JavaScript', icon: <SiJavascript   size={16} color="#F7DF1E" /> },
    ],
    icon: <Code2 size={24} />
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js',    icon: <SiReact        size={16} color="#61DAFB" /> },
      { name: 'HTML5',       icon: <SiHtml5        size={16} color="#E34F26" /> },
      { name: 'CSS3',        icon: <SiCss          size={16} color="#1572B6" /> },
      { name: 'Tailwind CSS',icon: <SiTailwindcss  size={16} color="#06B6D4" /> },
    ],
    icon: <Monitor size={24} />
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js',    icon: <SiNodedotjs size={16} color="#339933" /> },
      { name: 'Express.js', icon: <SiExpress   size={16} color="#AAAAAA" /> },
      { name: 'REST API',   icon: <Zap         size={16} color="#00E5FF" /> },
      { name: 'MySQL',      icon: <SiMysql     size={16} color="#4479A1" /> },
      { name: 'MongoDB',    icon: <SiMongodb   size={16} color="#47A248" /> },
    ],
    icon: <Brain size={24} />
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git/GitHub',    icon: <SiGit               size={16} color="#F05032" /> },
      { name: 'VS Code',       icon: <VscVscode            size={16} color="#007ACC" /> },
      { name: 'Antigravity',   icon: <Zap                 size={16} color="#00E5FF" /> },
      { name: 'Vercel',        icon: <SiVercel            size={16} color="#FFFFFF" /> },
      { name: 'MongoDB Atlas', icon: <SiMongodb           size={16} color="#47A248" /> },
    ],
    icon: <Wrench size={24} />
  },
];

const softSkills = [
  { name: 'Team Player', level: 95, icon: <Users size={18} /> },
  { name: 'Problem-Solving', level: 90, icon: <Target size={18} /> },
  { name: 'Adaptability', level: 85, icon: <Zap size={18} /> },
];

const Skills: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "circOut" }
    }
  };

  return (
    <Section id="skills" title="Skills" subtitle="My Technical Expertise">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
        {/* Technical Skills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-lg"
        >
          {technicalSkills.map((cat) => (
            <motion.div key={cat.category} variants={itemVariants} className="h-[200px]">
              <CyberCard 
                title={cat.category}
                frontContent={
                  <div className="flex flex-col items-center justify-center p-md text-center h-full">
                    <div className="mb-sm p-sm rounded-md bg-accent-primary/10 text-accent-primary group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-bold text-text-primary tracking-widest uppercase font-display">{cat.category}</h3>
                  </div>
                }
                icon={cat.icon}
              >
                <div className="flex flex-wrap gap-2 justify-center px-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-bg-tertiary text-text-secondary border border-border/50 hover:border-cyan-neon/50 hover:text-cyan-neon transition-all duration-fast cursor-default font-mono whitespace-nowrap"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-xl h-full flex flex-col justify-center py-md px-lg bg-bg-secondary rounded-lg border border-border/20"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-md font-display underline decoration-accent-primary/30 underline-offset-8">Behavioral</h3>
          {softSkills.map((skill) => (
            <div key={skill.name} className="space-y-sm">
              <div className="flex justify-between items-center text-sm font-semibold">
                <div className="flex items-center gap-sm text-text-secondary uppercase tracking-widest text-[10px]">
                  <span className="text-accent-secondary">{skill.icon}</span>
                  {skill.name}
                </div>
                <span className="text-accent-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-border/30 rounded-full overflow-hidden border border-border/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
