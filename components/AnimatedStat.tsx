"use client";

import { useEffect, useState } from "react";

type AnimatedStatProps = {
  target: number;
  suffix?: string;
  label: string;
};

export function AnimatedStat({ target, suffix = "", label }: AnimatedStatProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();
    let animationFrame = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return (
    <div>
      <p className="text-3xl font-black tracking-tight text-slate-900">
        {value}{suffix}
      </p>
      <p className="mt-1 text-sm leading-5 text-slate-500">{label}</p>
    </div>
  );
}
