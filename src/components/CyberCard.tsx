import React, { type ReactNode } from 'react';
import styles from './CyberCard.module.css';

interface CyberCardProps {
  title: string;
  subtitle?: string;
  frontTitle?: string;
  frontIcon?: ReactNode;
  frontContent?: ReactNode;
  prompt?: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  children?: ReactNode;
}

const CyberCard: React.FC<CyberCardProps> = ({ 
  title, 
  subtitle = "", 
  frontTitle,
  frontIcon,
  frontContent,
  prompt = "", 
  href, 
  onClick, 
  icon,
  children
}) => {
  const content = (
    <div className={`${styles.container} noselect`}>
      <div className={styles.canvas}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`${styles.tracker} ${styles[`tr_${i + 1}`]}`} />
        ))}
        
        <div id={styles.card}>
          <div className={styles.card_content}>
            <div className={styles.card_glare} />
            
            {/* Front Layer (Visible Initially) */}
            <div className={styles.front_content}>
              {frontContent ? frontContent : (
                <>
                  <div className={styles.front_icon}>{frontIcon || icon}</div>
                  <div className={styles.front_title}>{frontTitle || title}</div>
                </>
              )}
            </div>

            {/* Detail Layer (Visible on Hover) */}
            <div className={styles.detail_content}>
              {/* Cyber Lines */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <span className="absolute top-[20%] left-0 w-full h-[1px] bg-cyan-neon/30 group-hover:animate-pulse"></span>
                <span className="absolute top-[40%] left-0 w-full h-[1px] bg-cyan-neon/30"></span>
                <span className="absolute top-[60%] left-0 w-full h-[1px] bg-cyan-neon/30"></span>
                <span className="absolute top-[80%] left-0 w-full h-[1px] bg-cyan-neon/30"></span>
              </div>

              {prompt && <p id={styles.prompt}>{prompt}</p>}
              
              <div className="mb-4 text-cyan-neon">{icon}</div>
              
              <div className={styles.title}>{title}</div>
              
              <div className={styles.glowing_elements}>
                <div className={styles.glow_1} />
                <div className={styles.glow_2} />
                <div className={styles.glow_3} />
              </div>

              {subtitle && (
                <div className={styles.subtitle}>
                  <span>{subtitle}</span>
                </div>
              )}

              {/* Custom Children (e.g., Skill badges or project description) */}
              <div className="mt-2 w-full">
                {children}
              </div>
            </div>

            <div className={styles.corner_elements}>
              <span /><span /><span /><span />
            </div>
            
            <div className={styles.scan_line} />
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className="cursor-pointer h-full">
      {content}
    </div>
  );
};

export default CyberCard;
