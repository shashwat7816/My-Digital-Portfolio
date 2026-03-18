import React from 'react';
import Section from './Section';
import CyberCard from './CyberCard';
import { Trophy } from 'lucide-react';

const achievements = [
  { 
    id: 'python-5star',
    title: '5-Star Python Developer', 
    desc: 'Achieved 5-Star Rating and Gold Badge in Python proficiency on HackerRank (Nov 2025).',
    icon: <Trophy size={32} />
  },
  { 
    id: 'neocolab',
    title: 'NeoColab Excellence', 
    desc: 'Resolved 400+ technical challenges with consistent problem-solving activity (Dec 2024).',
    icon: <Trophy size={32} />
  },
];

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements" subtitle="Milestones & Recognition">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl max-w-4xl mx-auto px-4">
        {achievements.map((item) => (
          <div key={item.id} className="min-h-[240px] h-full"> 
            <CyberCard 
              title="ACHIEVEMENT"
              frontContent={
                <div className="flex flex-col items-center justify-center p-md text-center h-full w-full">
                  <div className="mb-sm p-sm rounded-full bg-accent-primary/10 text-accent-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary tracking-tight font-display">{item.title}</h3>
                </div>
              }
            >
              <div className="flex flex-col items-center justify-center p-md text-center h-full w-full">
                <p className="text-text-secondary leading-relaxed italic font-body text-sm">"{item.desc}"</p>
              </div>
            </CyberCard>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
