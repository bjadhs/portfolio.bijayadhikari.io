# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite hot reload
- `npm run build` - Build for production (TypeScript compiler + Vite build)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React 18 portfolio website built with TypeScript, Vite, and Tailwind CSS v4. The project uses React Router for navigation with a single-page application structure.

### Key Architecture Patterns

**Routing Structure**: Uses React Router with a nested route pattern where `Layout.tsx` serves as the root layout containing `Header` and `Footer` components, with page content rendered through `<Outlet />`.

**Component Organization**: 
- `src/components/` - Reusable UI components (Banner, Header, Footer, MessageModel, Stacks)
- `src/components/ui/` - Design system components (Button, GlassCard)
- `src/components/ScrollAnimations.tsx` - Framer Motion animation utilities
- `src/pages/` - Route-specific page components 
- `src/contexts/` - React contexts (ThemeProvider)
- `Layout.tsx` - Root layout wrapper with header/footer

**Design System**: 
- Dark-first theme with auto light/dark toggle via system preference
- Glass-morphism + neon accent aesthetic (cyan, purple, pink)
- Fluid typography using CSS clamp() with Satoshi/Inter fonts
- 12-column responsive grid system (12→4→2 columns)
- CSS custom properties for colors and themes
- Framer Motion for micro-interactions and animations

**Styling**: Uses Tailwind CSS v4 with Vite integration and custom CSS variables for the design system.

**State Management**: Uses component-level state and React Context for theme management.

## Technology Stack

- **React 18** with TypeScript
- **Vite** for build tooling and dev server
- **Tailwind CSS v4** for styling
- **React Router v7** for navigation
- **Framer Motion** for animations
- **Lucide React** for icons
- **ESLint** for code linting

## Key Files

- `src/index.css` - Global styles and design system
- `src/contexts/ThemeContext.tsx` - Theme provider with system preference detection
- `src/components/MagneticCursor.tsx` - Desktop cursor interactions
- `src/components/ThemeToggle.tsx` - Theme switch component
- `src/utils/cn.ts` - CSS utility for combining class names