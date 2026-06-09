"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface InfiniteSliderProps {
  children: React.ReactNode;
  duration?: number;
  durationOnHover?: number;
  gap?: string;
  className?: string;
  reverse?: boolean;
}

export function InfiniteSlider({
  children,
  duration = 40,
  durationOnHover,
  gap = "1rem",
  className,
  reverse = false,
}: InfiniteSliderProps) {
  const childrenArray = React.Children.toArray(children);
  const duplicatedChildren = [...childrenArray, ...childrenArray];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex"
        style={{ gap }}
        animate={{
          x: reverse ? ["0%", "50%"] : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedChildren.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
