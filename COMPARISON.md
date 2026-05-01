# Quick Reference: Vite vs Next.js

## Side-by-Side Comparison

### Development Server
| Vite | Next.js |
|------|---------|
| `npm run dev` (port 8080) | `npm run dev` (port 3000) |

### Build Commands
| Vite | Next.js |
|------|---------|
| `npm run build` | `npm run build` |
| `npm run preview` | `npm start` |

### Routing
| Vite + React Router | Next.js App Router |
|---------------------|-------------------|
| `src/pages/Index.tsx` | `app/page.tsx` |
| `src/pages/About.tsx` | `app/about/page.tsx` |
| `src/pages/Services.tsx` | `app/services/page.tsx` |
| Route config in App.tsx | File-system based |

### Navigation Components
```tsx
// VITE + REACT ROUTER
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>

<NavLink 
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
```

```tsx
// NEXT.JS
import Link from "next/link";
import { usePathname } from "next/navigation";

<Link href="/about">About</Link>

// For active state detection
"use client";
const pathname = usePathname();
<Link 
  href="/about"
  className={pathname === "/about" ? "active" : ""}
>
  About
</Link>
```

### Location/Pathname
```tsx
// VITE + REACT ROUTER
import { useLocation } from "react-router-dom";
const { pathname } = useLocation();
```

```tsx
// NEXT.JS
"use client";
import { usePathname } from "next/navigation";
const pathname = usePathname();
```

### Images
```tsx
// VITE
import heroImg from "@/assets/hero.jpg";
<img src={heroImg} alt="Hero" />
```

```tsx
// NEXT.JS (Basic)
import heroImg from "@/assets/hero.jpg";
<img src={heroImg.src} alt="Hero" />

// NEXT.JS (Optimized)
import Image from "next/image";
import heroImg from "@/assets/hero.jpg";
<Image src={heroImg} alt="Hero" fill className="object-cover" />
```

### Root Component
```tsx
// VITE (src/main.tsx + src/App.tsx)
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);

// App.tsx
const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        ...
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
```

```tsx
// NEXT.JS (app/layout.tsx + app/providers.tsx)
// layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// providers.tsx
"use client";
export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

### Client-Side Interactivity
```tsx
// VITE
// All components are client-side by default
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

```tsx
// NEXT.JS
// Add "use client" for interactive components
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Configuration Files
| Vite | Next.js |
|------|---------|
| `vite.config.ts` | `next.config.ts` |
| `index.html` | Not needed |
| `tsconfig.json` | `tsconfig.json` (updated) |

### 404 Page
| Vite + React Router | Next.js |
|---------------------|---------|
| `<Route path="*" element={<NotFound />} />` | `app/not-found.tsx` |

## File Structure Comparison

### Before (Vite)
```
src/
├── pages/
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── ...
├── App.tsx
├── main.tsx
└── index.css
```

### After (Next.js)
```
app/
├── page.tsx (home)
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
├── layout.tsx
└── providers.tsx

src/
├── components/
├── hooks/
├── lib/
└── index.css
```

## Key Differences

### Rendering
- **Vite:** Client-side rendering only
- **Next.js:** Server-side rendering by default, opt-in to client-side

### Routing
- **Vite:** Manual route configuration
- **Next.js:** File-system based, automatic

### Performance
- **Vite:** Fast dev server, client-side only
- **Next.js:** SSR, automatic code splitting, image optimization

### SEO
- **Vite:** Requires additional setup
- **Next.js:** Built-in SEO support with metadata API

### Deployment
- **Vite:** Static files, any host
- **Next.js:** Static or SSR, optimized for Vercel

## When to Use Each

### Use Vite When:
- Building a SPA (Single Page Application)
- No SEO requirements
- Client-side only is sufficient
- Maximum dev server speed is priority

### Use Next.js When:
- SEO is important
- Need server-side rendering
- Want automatic optimizations
- Building a production app
- Need API routes
- Want better performance out of the box

---

**Your project is now using Next.js 15! 🚀**
