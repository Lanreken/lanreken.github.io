import { AnimatePresence, motion } from "motion/react";
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from "react";
import "./RotatingText.css";

type RotatingTextProps = {
  texts: string[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number;
  loop?: boolean;
  auto?: boolean;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
};

const joinClasses = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(" ");

const RotatingText = forwardRef(function RotatingText(
  {
    texts,
    transition = { type: "spring", damping: 28, stiffness: 360 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    rotationInterval = 2200,
    staggerDuration = 0.025,
    staggerFrom = "first",
    loop = true,
    auto = true,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
  }: RotatingTextProps,
  ref
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const words = useMemo(() => {
    const current = texts[currentTextIndex] ?? "";
    return current.split(" ").map((word, index, array) => ({
      word,
      needsSpace: index !== array.length - 1,
    }));
  }, [currentTextIndex, texts]);

  const getStaggerDelay = useCallback(
    (index: number, total: number) => {
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      return Math.abs(Number(staggerFrom) - index) * staggerDuration;
    },
    [staggerDuration, staggerFrom]
  );

  const next = useCallback(() => {
    setCurrentTextIndex((value) => {
      if (value === texts.length - 1) {
        return loop ? 0 : value;
      }
      return value + 1;
    });
  }, [loop, texts.length]);

  useImperativeHandle(ref, () => ({ next }), [next]);

  useEffect(() => {
    if (!auto || texts.length <= 1) return;
    const interval = window.setInterval(next, rotationInterval);
    return () => window.clearInterval(interval);
  }, [auto, next, rotationInterval, texts.length]);

  const totalChars = words.reduce((sum, item) => sum + item.word.length, 0);

  return (
    <motion.span className={joinClasses("text-rotate", mainClassName)} layout transition={transition}>
      <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={currentTextIndex} className="text-rotate" aria-hidden="true" layout>
          {words.map((wordObj, wordIndex) => {
            const previousCharsCount = words.slice(0, wordIndex).reduce((sum, item) => sum + item.word.length, 0);
            return (
              <span key={`${wordObj.word}-${wordIndex}`} className={joinClasses("text-rotate-word", splitLevelClassName)}>
                {Array.from(wordObj.word).map((character, charIndex) => (
                  <motion.span
                    key={`${character}-${charIndex}`}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{ ...transition, delay: getStaggerDelay(previousCharsCount + charIndex, totalChars) }}
                    className={joinClasses("text-rotate-element", elementLevelClassName)}
                  >
                    {character}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="text-rotate-space"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

export default RotatingText;
