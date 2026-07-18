import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  key?: any;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const springX = useSpring(x, { damping: 20, stiffness: 120 });
  const springY = useSpring(y, { damping: 20, stiffness: 120 });

  // Map mouse positions to 3D rotations (max tilt +/- 12 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  // Handle hover moves
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized cursor position from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Border and glow adjustments based on category
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'sci-fi':
        return {
          tagBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
          hoverBorder: 'hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.02)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
          iconColor: 'text-cyan-400',
        };
      case 'logic':
        return {
          tagBg: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
          hoverBorder: 'hover:border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.02)] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
          iconColor: 'text-purple-400',
        };
      case 'strategy':
      default:
        return {
          tagBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25',
          hoverBorder: 'hover:border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.02)] hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
          iconColor: 'text-indigo-400',
        };
    }
  };

  const styles = getCategoryStyles(project.category);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={`group relative rounded-3xl glass p-6 flex flex-col justify-between h-full cursor-pointer transition-all duration-300 border border-white/10 ${styles.hoverBorder}`}
    >
      {/* Laser line flare overlay on hover */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute -inset-px bg-gradient-to-r from-transparent via-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div style={{ transform: 'translateZ(10px)' }}>
        {/* Card Header: Category & Terminal icon */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border ${styles.tagBg}`}>
            {project.type}
          </span>
          <Terminal size={14} className={`${styles.iconColor} opacity-40 group-hover:opacity-100 transition-opacity duration-200`} />
        </div>

        {/* Project Title */}
        <h3 className="font-orbitron text-base text-white tracking-wide font-medium mb-2 group-hover:text-cyan-300 transition-colors duration-200">
          {project.name}
        </h3>

        {/* Project Link */}
        <div
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors duration-150 mb-3 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
          }}
        >
          <span className="font-mono text-[11px] truncate max-w-[200px]">{project.link}</span>
          <ExternalLink size={11} className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Project Description */}
        <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4 group-hover:text-slate-300 transition-colors duration-200">
          {project.description}
        </p>

        {/* Developer Note (探索心得) */}
        {project.note && (
          <div className="mt-3 pt-3 border-t border-white/5 text-[11px] font-sans text-slate-500 italic group-hover:text-slate-400 transition-colors duration-200">
            <span className="font-bold not-italic block text-[9px] uppercase tracking-wider text-slate-500 mb-1">Developer Note // 探索心得</span>
            "{project.note}"
          </div>
        )}
      </div>

      {/* Footer Details: Embedded Link indicator */}
      <div 
        className="flex justify-end pt-2" 
        style={{ transform: 'translateZ(15px)' }}
      >
        <span className="text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1">
          LAUNCH PROJECT <span className="text-xs">→</span>
        </span>
      </div>
    </motion.div>
  );
}
