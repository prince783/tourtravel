"use client";

import { useEffect, useState } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function BlurText({ text, className = "", delay = 0 }: BlurTextProps) {
  const [visible, setVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <span aria-label={text} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="inline-block transition-[filter,opacity,transform] duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0)" : "blur(10px)",
            transform: visible ? "translateY(0)" : "translateY(0.35em)",
            transitionDelay: `${index * 55}ms`,
          }}
        >
          {word}{index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  );
}
