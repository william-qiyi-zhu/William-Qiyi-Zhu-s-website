import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  originalX: number;
  originalY: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 60;
    const connectionDist = 120;
    const mouseInfluenceDist = 180;

    // Handle high-DPI screens
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initParticles(rect.width, rect.height);
    };

    const initParticles = (width: number, height: number) => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
    observer.observe(container);

    // Initial setup
    resizeCanvas();

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse coordinates
      const mouse = mouseRef.current;
      if (mouse.targetX === -1000) {
        mouse.x += (-1000 - mouse.x) * 0.1;
        mouse.y += (-1000 - mouse.y) * 0.1;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.1;
        mouse.y += (mouse.targetY - mouse.y) * 0.1;
      }

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Update and draw particles
      particles.forEach((p) => {
        // Natural movement
        p.originalX += p.vx;
        p.originalY += p.vy;

        // Wrap around bounds
        if (p.originalX < 0) p.originalX = width;
        if (p.originalX > width) p.originalX = 0;
        if (p.originalY < 0) p.originalY = height;
        if (p.originalY > height) p.originalY = 0;

        // Mouse displacement
        let targetX = p.originalX;
        let targetY = p.originalY;

        if (mouse.x !== -1000) {
          const dx = mouse.x - p.originalX;
          const dy = mouse.y - p.originalY;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseInfluenceDist) {
            // Push away or pull based on distance
            const force = (mouseInfluenceDist - dist) / mouseInfluenceDist;
            const angle = Math.atan2(dy, dx);
            // Push away
            targetX -= Math.cos(angle) * force * 30;
            targetY -= Math.sin(angle) * force * 30;
          }
        }

        // Interpolate to target position
        p.x += (targetX - p.x) * 0.15;
        p.y += (targetY - p.y) * 0.15;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.fill();
      });

      // Draw connection lines (low polygon network)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            // Gradient or neon line
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block pointer-events-auto" />
    </div>
  );
}
