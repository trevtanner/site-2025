"use client";

import React, { useEffect, useState, useRef } from "react";
import { Progress } from "@/ui/progress";

interface ProgressBarProps {
  pkg: {
    title: string;
    value: number;
    color: string;
  };
  knowledgeIndex: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  pkg,
  knowledgeIndex,
}) => {
  const elementRef = useRef(null);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const randomDelay =
            Math.floor(Math.random() * (800 - 200 + 1)) + 200;
          const timer = setTimeout(() => {
            setProgress(pkg.value);
          }, randomDelay);
          // Once visible, disconnect if you only want the effect to run once
          observer.disconnect();
        }
      },
      {
        threshold: 1, // Adjust this value as needed
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div
      ref={elementRef}
      className="min-h-32 m-auto text-center text-xl pt-4"
      key={knowledgeIndex}
    >
      {pkg.title}
      <Progress className={`w-2/3 m-auto`} value={progress}></Progress>
      {progress}%
    </div>
  );
};
