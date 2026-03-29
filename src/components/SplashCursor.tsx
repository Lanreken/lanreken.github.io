import { useEffect, useRef } from "react";
import "./SplashCursor.css";

interface SplashCursorProps {
  color?: string;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  hue: number;
  velocity: number;
}

const SplashCursor = ({ color = "37, 99, 235" }: SplashCursorProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerQuery.matches || motionQuery.matches) {
      return;
    }

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const spawnRipple = (x: number, y: number, intensity = 1) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 12,
        alpha: 0.32 * intensity,
        hue: 208 + Math.random() * 18,
        velocity: 1.8 + Math.random() * 1.6,
      });

      if (ripplesRef.current.length > 32) {
        ripplesRef.current.shift();
      }
    };

    let lastX = 0;
    let lastY = 0;
    let moveTick = 0;

    const handlePointerMove = (event: PointerEvent) => {
      moveTick += 1;
      const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      if (moveTick % 2 === 0 || distance > 22) {
        spawnRipple(event.clientX, event.clientY, Math.min(1.2, 0.7 + distance / 40));
        lastX = event.clientX;
        lastY = event.clientY;
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      spawnRipple(event.clientX, event.clientY, 1.5);
      spawnRipple(event.clientX, event.clientY, 1);
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      ripplesRef.current = ripplesRef.current.filter((ripple) => ripple.alpha > 0.01);

      ripplesRef.current.forEach((ripple) => {
        ripple.radius += ripple.velocity;
        ripple.alpha *= 0.965;

        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          0,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        gradient.addColorStop(0, `rgba(${color}, ${Math.min(0.24, ripple.alpha)})`);
        gradient.addColorStop(0.35, `hsla(${ripple.hue}, 95%, 70%, ${ripple.alpha})`);
        gradient.addColorStop(1, "rgba(15, 23, 42, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = window.requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [color]);

  return <canvas ref={canvasRef} className="splash-cursor-canvas" aria-hidden="true" />;
};

export default SplashCursor;
