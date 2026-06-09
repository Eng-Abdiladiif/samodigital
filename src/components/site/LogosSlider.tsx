"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  icon: React.ReactNode;
}

interface LogosSliderProps {
  logos: Logo[];
  className?: string;
}

export function LogosSlider({ logos, className }: LogosSliderProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <ProgressiveBlur direction="left" />
      <ProgressiveBlur direction="right" />
      
      <InfiniteSlider duration={50} gap="4rem">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            {logo.icon}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
