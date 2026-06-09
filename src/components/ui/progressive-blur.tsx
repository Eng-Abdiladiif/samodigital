"use client";

import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  direction?: "left" | "right";
}

export function ProgressiveBlur({ className, direction = "left" }: ProgressiveBlurProps) {
  const gradientDirection = direction === "left" 
    ? "bg-gradient-to-r" 
    : "bg-gradient-to-l";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 z-10 w-1/6",
        direction === "left" ? "left-0" : "right-0",
        className
      )}
    >
      <div
        className={cn(
          "h-full w-full",
          gradientDirection,
          "from-background via-background/80 to-transparent"
        )}
      />
    </div>
  );
}
