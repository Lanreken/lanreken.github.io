import { type ReactNode, useEffect, useRef } from "react";
import "./ScrollStack.css";

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  stackPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
}

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem = ({ children, itemClassName = "" }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 104,
  itemScale = 0.03,
  stackPosition = "14%",
  baseScale = 0.94,
  rotationAmount = 0.35,
  blurAmount = 0,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll<HTMLDivElement>(".scroll-stack-card"));

    cards.forEach((card, index) => {
      card.style.setProperty("--stack-index", `${index}`);
      card.style.setProperty("--stack-gap", `${itemDistance}px`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, [baseScale, blurAmount, itemDistance, itemScale, rotationAmount, stackPosition]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">{children}</div>
    </div>
  );
};

export default ScrollStack;
