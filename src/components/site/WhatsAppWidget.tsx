"use client";

import { useEffect } from "react";

export const WhatsAppWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-754aa2bb-d214-4cda-a6c7-beb605e2d9f1"
      data-elfsight-app-lazy
    />
  );
};
