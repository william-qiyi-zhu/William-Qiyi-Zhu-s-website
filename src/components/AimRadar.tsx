import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function AimRadar() {
  const [coordinates, setCoordinates] = useState({ x: 120, y: 150 });
  const [locked, setLocked] = useState(false);

  // Animate coordinates to simulate tracking
  useEffect(() => {
    const interval = setInterval(() => {
      if (!locked) {
        setCoordinates({
          x: Math.floor(Math.random() * 200) + 50,
          y: Math.floor(Math.random() * 200) + 50,
        });
        // Trigger temporary target lock
        if (Math.random() > 0.7) {
          setLocked(true);
          setTimeout(() => setLocked(false), 1500);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [locked]);

  return (
    <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center p-4 rounded-xl bg-[#090f1d]/40 border border-white/5 overflow-hidden">
      {/* Radar grid lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[85%] h-[85%] border border-cyan-500/10 rounded-full animate-pulse" />
        <div className="w-[60%] h-[60%] border border-cyan-500/15 rounded-full" />
        <div className="w-[35%] h-[35%] border border-cyan-500/20 rounded-full" />
        {/* Horizontal & Vertical Crosshair axes */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-cyan-500/10" />
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-cyan-500/10" />
      </div>

      {/* Sweeping Radar line */}
      <div className="absolute w-1/2 h-[2px] bg-gradient-to-r from-cyan-500/40 to-transparent top-1/2 left-1/2 origin-left animate-[spin_4s_linear_infinite]" />

      {/* Interactive Aim Pointer */}
      <motion.div
        animate={{ x: coordinates.x - 150, y: coordinates.y - 150 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="absolute w-8 h-8 flex items-center justify-center pointer-events-none"
      >
        {/* Lock indicator */}
        <span className={`absolute -top-6 text-[9px] font-mono font-bold tracking-wider px-1 rounded transition-colors duration-200 ${locked ? 'bg-rose-500 text-white' : 'bg-cyan-500/10 text-cyan-400'}`}>
          {locked ? 'LOCK_ON' : 'TRK_09'}
        </span>

        {/* Reticle brackets */}
        <div className={`absolute inset-0 border-2 rounded-full transition-colors duration-200 ${locked ? 'border-rose-500 animate-ping scale-110' : 'border-cyan-400/50'}`} />
        <div className={`w-2 h-2 rounded-full transition-colors duration-200 ${locked ? 'bg-rose-500' : 'bg-cyan-400'}`} />
        
        {/* Radar dot blip line */}
        <div className={`absolute w-[1px] h-10 -bottom-10 transition-colors duration-200 ${locked ? 'bg-rose-500/30' : 'bg-cyan-400/20'}`} />
      </motion.div>

      {/* Live HUD telemetry values */}
      <div className="absolute bottom-3 left-4 right-4 flex justify-between font-mono text-[9px] text-slate-400 tracking-tight select-none">
        <div>
          <span className="text-cyan-400">FPS:</span> 360.0<br />
          <span className="text-cyan-400">LAT:</span> 1.2ms
        </div>
        <div className="text-right">
          <span className="text-cyan-400">AIM_X:</span> {coordinates.x}<br />
          <span className="text-cyan-400">AIM_Y:</span> {coordinates.y}
        </div>
      </div>

      {/* Target status flashing box */}
      <div className="absolute top-3 right-4 font-mono text-[9px] tracking-widest text-slate-500 flex items-center gap-1">
        <span className={`w-1.5 h-1.5 rounded-full ${locked ? 'bg-rose-500 animate-ping' : 'bg-cyan-400 animate-pulse'}`} />
        <span className={locked ? 'text-rose-400' : 'text-cyan-400'}>{locked ? 'ACQUIRING' : 'SCANNING'}</span>
      </div>
    </div>
  );
}
