import type { Metadata } from "next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/index.css";
import { Providers } from "./providers";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Samo Digital Solution",
  description: "High-impact agency specializing in building unique digital products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
            <WhatsAppWidget />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
