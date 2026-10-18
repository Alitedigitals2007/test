"use client";

import { useEffect, useRef } from "react";

export default function OrbitCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h * 0.42;
      const base = Math.min(w, h) * 0.42;

      ctx.lineWidth = Math.max(1, w * 0.0016);

      const rings = [
        { angle: 0, rx: 1.0, ry: 0.42, speed: 0.28 },
        { angle: Math.PI / 3, rx: 0.96, ry: 0.4, speed: -0.2 },
        { angle: -Math.PI / 3, rx: 0.9, ry: 0.38, speed: 0.34 },
      ];

      for (let i = 0; i < rings.length; i += 1) {
        const ring = rings[i];
        const rotation = ring.angle + t * ring.speed * 0.12;
        const wobble = reduced ? 0 : Math.sin(t * 0.22 + i * 2.1) * 0.06;

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, base * ring.rx, base * ring.ry * (1 + wobble), 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(233, 199, 90, ${0.4 - i * 0.06})`;
        ctx.stroke();
        ctx.restore();

        if (!reduced) {
          const electronAngle = t * ring.speed + i * (Math.PI * 2) / 3;
          const ex = Math.cos(electronAngle);
          const ey = Math.sin(electronAngle);
          const px = Math.cos(rotation) * base * ring.rx * ex - Math.sin(rotation) * base * ring.ry * ey;
          const py = Math.sin(rotation) * base * ring.rx * ex + Math.cos(rotation) * base * ring.ry * ey;
          ctx.beginPath();
          ctx.arc(cx + px, cy + py, w * 0.006, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(233, 199, 90, 0.85)";
          ctx.fill();
        }
      }

      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.009, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(233, 199, 90, 0.95)";
      ctx.fill();

      if (!reduced) {
        t += 1 / 60;
        raf = window.requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
