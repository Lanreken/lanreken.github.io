import { createElement, type ElementType, useEffect, useMemo, useRef, useState } from "react";
import "./TextType.css";

interface TextTypeProps {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  startOnVisible?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 55,
  initialDelay = 0,
  pauseDuration = 2400,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  startOnVisible = false,
  ...props
}: TextTypeProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const containerRef = useRef<HTMLElement | null>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const currentText = textArray[currentTextIndex] ?? "";
    let timeout: number;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        setCurrentIndex((value) => value + 1);
      }, displayedText.length === 0 ? initialDelay : typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      if (!loop && currentTextIndex === textArray.length - 1) return;
      timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex(0);
      setCurrentTextIndex((value) => (value + 1) % textArray.length);
    }

    return () => window.clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, deletingSpeed, displayedText, initialDelay, isDeleting, isVisible, loop, pauseDuration, textArray, typingSpeed]);

  const hideCursor = hideCursorWhileTyping && (!isDeleting && displayedText.length < (textArray[currentTextIndex] ?? "").length);

  return createElement(
    Component,
    {
      ref: containerRef as never,
      className: `text-type ${className}`.trim(),
      ...props,
    },
    <>
      <span className="text-type__content">{displayedText}</span>
      {showCursor && (
        <span className={`text-type__cursor ${cursorClassName} ${hideCursor ? "text-type__cursor--hidden" : ""}`.trim()}>
          {cursorCharacter}
        </span>
      )}
    </>
  );
};

export default TextType;
