import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./MagicBento.css";

const MOBILE_BREAKPOINT = 768;

export interface MagicBentoCardData {
  label: string;
  title: string;
  description: string;
}

interface MagicBentoProps {
  cards: MagicBentoCardData[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const createParticle = (host: HTMLElement, x: number, y: number, glowColor: string) => {
  const particle = document.createElement("span");
  particle.className = "magic-bento-particle";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty("--particle-color", glowColor);
  host.appendChild(particle);

  gsap.fromTo(
    particle,
    { scale: 0, opacity: 0.9, x: 0, y: 0 },
    {
      scale: 1.8,
      opacity: 0,
      x: (Math.random() - 0.5) * 80,
      y: (Math.random() - 0.5) * 80,
      duration: 0.9 + Math.random() * 0.6,
      ease: "power2.out",
      onComplete: () => particle.remove(),
    }
  );
};

const MagicBento = ({
  cards,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 360,
  particleCount = 10,
  enableTilt = false,
  glowColor = "37, 99, 235",
  clickEffect = true,
  enableMagnetism = false,
}: MagicBentoProps) => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const glowEnabled = !disableAnimations && !isMobile;

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (!gridRef.current || !enableSpotlight || !glowEnabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "magic-bento-spotlight";
    spotlight.style.setProperty("--spotlight-color", glowColor);
    document.body.appendChild(spotlight);

    const cardsInGrid = Array.from(gridRef.current.querySelectorAll<HTMLElement>(".magic-bento-card"));

    const handleMove = (event: MouseEvent) => {
      if (!gridRef.current) return;

      const sectionRect = gridRef.current.getBoundingClientRect();
      const inside =
        event.clientX >= sectionRect.left &&
        event.clientX <= sectionRect.right &&
        event.clientY >= sectionRect.top &&
        event.clientY <= sectionRect.bottom;

      if (!inside) {
        gsap.to(spotlight, { opacity: 0, duration: 0.25, overwrite: true });
        cardsInGrid.forEach((card) => card.style.setProperty("--glow-intensity", "0"));
        return;
      }

      gsap.to(spotlight, {
        opacity: 0.9,
        x: event.clientX,
        y: event.clientY,
        duration: 0.18,
        ease: "power2.out",
        overwrite: true,
      });

      cardsInGrid.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);
        const intensity = Math.max(0, 1 - distance / spotlightRadius);
        const relativeX = ((event.clientX - rect.left) / rect.width) * 100;
        const relativeY = ((event.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--glow-x", `${relativeX}%`);
        card.style.setProperty("--glow-y", `${relativeY}%`);
        card.style.setProperty("--glow-intensity", intensity.toFixed(3));
      });
    };

    const handleLeave = () => {
      gsap.to(spotlight, { opacity: 0, duration: 0.25, overwrite: true });
      cardsInGrid.forEach((card) => card.style.setProperty("--glow-intensity", "0"));
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      spotlight.remove();
    };
  }, [enableSpotlight, glowColor, glowEnabled, spotlightRadius]);

  const cardClassName = useMemo(() => {
    return [
      "magic-bento-card",
      textAutoHide ? "magic-bento-card--text-autohide" : "",
      enableBorderGlow ? "magic-bento-card--border-glow" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }, [enableBorderGlow, textAutoHide]);

  return (
    <div className="magic-bento" ref={gridRef}>
      {cards.map((card, index) => (
        <div
          key={`${card.title}-${index}`}
          className={cardClassName}
          style={{ ["--glow-color" as string]: glowColor }}
          onMouseMove={(event) => {
            if (!glowEnabled) return;
            const element = event.currentTarget;
            const rect = element.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            if (enableTilt) {
              gsap.to(element, {
                rotateX: ((y - centerY) / centerY) * -6,
                rotateY: ((x - centerX) / centerX) * 6,
                duration: 0.14,
                ease: "power2.out",
                overwrite: true,
                transformPerspective: 1000,
              });
            }

            if (enableMagnetism) {
              gsap.to(element, {
                x: (x - centerX) * 0.03,
                y: (y - centerY) * 0.03,
                duration: 0.18,
                ease: "power2.out",
                overwrite: true,
              });
            }
          }}
          onMouseLeave={(event) => {
            const element = event.currentTarget;
            gsap.to(element, {
              rotateX: 0,
              rotateY: 0,
              x: 0,
              y: 0,
              duration: 0.28,
              ease: "power2.out",
              overwrite: true,
            });
          }}
          onClick={(event) => {
            if (!clickEffect || !glowEnabled) return;

            const host = event.currentTarget;
            const rect = host.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            if (enableStars) {
              for (let i = 0; i < particleCount; i += 1) {
                createParticle(host, x, y, glowColor);
              }
            }
          }}
        >
          <div className="magic-bento-card__header">
            <span className="magic-bento-card__label">{card.label}</span>
          </div>
          <div className="magic-bento-card__content">
            <h3 className="magic-bento-card__title">{card.title}</h3>
            <p className="magic-bento-card__description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MagicBento;
