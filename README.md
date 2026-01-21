# DiaryBeast Landing Page

A minimalist landing page for DiaryBeast — a gamified Web3 diary where your writing nurtures a virtual pet.

## Tech Stack

- **Vite** — fast dev server and build tool
- **React 19** + **TypeScript**
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Option 1: Via GitHub (Recommended)

1. Push your code to a GitHub repository
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects the Vite configuration
4. Click Deploy

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Main hero section with Beast
│   ├── DemoModal.tsx         # Interactive demo (Feed/Play/Write)
│   ├── ConnectionSection.tsx # "You write → Beast grows" section
│   ├── Footer.tsx            # Footer with links
│   └── AsciiPet.tsx          # ASCII pet animation component
├── lib/
│   ├── ascii/                # ASCII art animations (cat/dog)
│   └── utils.ts              # Utilities (cn helper)
├── App.tsx                   # Root component
└── index.css                 # Global styles + Tailwind config
```

## Features

- Animated ASCII Beast with breathing and reactions
- Interactive demo modal (Feed / Play / Write)
- Scroll-triggered reveal animations
- Fully responsive design
- Clean light theme
- Production-ready

## Design

Inspired by minimalist landing pages like football.fun:
- One-screen understanding
- Show, don't tell

**Color Palette:**

| Role | Color |
|------|-------|
| Background | `#FAFBFC` |
| Primary text | `#1F2937` |
| Accent (Beast green) | `#00D395` |
| CTA (Base blue) | `#0052FF` |
