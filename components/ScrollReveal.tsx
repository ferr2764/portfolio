"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({ children, delay = 0, className = "", direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  let initialTransform = "translateY(0)";
  if (direction === "up") initialTransform = "translateY(40px)";
  if (direction === "down") initialTransform = "translateY(-40px)";
  if (direction === "left") initialTransform = "translateX(40px)";
  if (direction === "right") initialTransform = "translateX(-40px)";

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : initialTransform,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
