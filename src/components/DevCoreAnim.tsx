import React, { useEffect, useRef } from 'react';

export default function DevCoreAnim() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const tokens = [
      '0', '1', 'C++', 'vector', 'std::move', 'Agent', 'AI', 'struct', 
      'template', 'main()', '0x7FF', 'ptr', 'neuron', 'lambda', 'async', 'promise'
    ];
    
    let columns: { x: number; y: number; speed: number; chars: string[]; size: number }[] = [];

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initColumns(rect.width, rect.height);
    };

    const initColumns = (width: number, height: number) => {
      columns = [];
      const colWidth = 24;
      const count = Math.ceil(width / colWidth);

      for (let i = 0; i < count; i++) {
        const x = i * colWidth;
        const size = Math.floor(Math.random() * 4) + 10; // font size 10 to 14
        const speed = Math.random() * 1.5 + 0.8;
        const charCount = Math.floor(Math.random() * 10) + 5;
        
        const chars: string[] = [];
        for (let j = 0; j < charCount; j++) {
          chars.push(tokens[Math.floor(Math.random() * tokens.length)]);
        }

        columns.push({
          x,
          y: Math.random() * -height, // start above screen
          speed,
          chars,
          size,
        });
      }
    };

    const observer = new ResizeObserver(() => {
      resizeCanvas();
    });
    observer.observe(container);

    resizeCanvas();

    const render = () => {
      // Semi-transparent background clear to create trailing blur effect
      ctx.fillStyle = 'rgba(9, 15, 29, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.textBaseline = 'top';

      columns.forEach((col) => {
        let currentY = col.y;

        col.chars.forEach((char, index) => {
          // Fade characters down the tail
          const alpha = Math.max(0, 1 - (index / col.chars.length));
          
          ctx.font = `500 ${col.size}px "JetBrains Mono", monospace`;

          // Head of stream is cyan/white, tail is deep purple
          if (index === 0) {
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
          } else if (index < 3) {
            ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.7})`;
          }

          ctx.fillText(char, col.x, currentY);
          currentY += col.size + 4; // layout vertically
        });

        // Advance column position
        col.y += col.speed;

        // Reset if column moves fully below the container
        const rect = canvas.getBoundingClientRect();
        if (col.y > rect.height) {
          col.y = -Math.random() * 150 - 50;
          col.speed = Math.random() * 1.5 + 0.8;
          // Randomize characters
          col.chars = col.chars.map(() => tokens[Math.floor(Math.random() * tokens.length)]);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[280px] mx-auto rounded-xl bg-[#090f1d]/40 border border-white/5 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
      
      {/* Code overlay overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between font-mono text-[9px] text-purple-400 tracking-tight select-none pointer-events-none bg-gradient-to-t from-[#090f1d]/80 via-transparent to-transparent">
        <div className="text-right text-slate-500">
          <span>AGENT_RUNNING</span><br />
          <span>PORT: 3000</span>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <span className="text-purple-300">#include</span> &lt;iostream&gt;<br />
            <span className="text-purple-300">using namespace</span> std;<br />
            <span className="text-purple-400 font-bold">agent.execute();</span>
          </div>
          <span className="text-purple-300 animate-pulse">[READY]</span>
        </div>
      </div>
    </div>
  );
}
