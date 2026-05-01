# Pixpert Digital Agency - Next.js

A modern digital agency website built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **State Management:** React Query (TanStack Query)
- **Icons:** Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # Client-side providers
│   └── not-found.tsx      # 404 page
├── src/
│   ├── components/        # React components
│   │   ├── site/         # Site-specific components
│   │   └── ui/           # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── assets/           # Images and static assets
├── public/               # Static files
└── next.config.ts        # Next.js configuration
```

## Migration from Vite + React Router

This project has been migrated from Vite + React Router to Next.js 15:

### Key Changes:
- ✅ Replaced React Router with Next.js App Router
- ✅ Converted `Link` and `NavLink` to Next.js `Link` component
- ✅ Replaced `useLocation` with `usePathname` from `next/navigation`
- ✅ Added `"use client"` directive to components with interactivity
- ✅ Optimized images with Next.js `Image` component
- ✅ Updated build configuration from Vite to Next.js
- ✅ Maintained all existing functionality and styling

## Features

- 🎨 Modern, responsive design
- ⚡ Server-side rendering with Next.js
- 🔍 SEO optimized
- 📱 Mobile-first approach
- 🎭 Smooth animations
- 🌙 Ready for dark mode (next-themes included)
- ♿ Accessible UI components

## License

Private project
