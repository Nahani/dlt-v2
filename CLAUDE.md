# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### Package Management
Uses Yarn (yarn.lock present) instead of npm.

## Architecture

This is a Next.js 15 application built as a trading education website ("OnlyPropFirms") using:

- **Framework**: Next.js 15 with App Router
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Theme System**: next-themes with dark mode support (default: dark)
- **Font**: Inter from Google Fonts
- **Form Handling**: React Hook Form with Zod validation

### Key Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components including shadcn/ui components in `ui/` subfolder
- `hooks/` - Custom React hooks
- `lib/` - Utility functions (main utility: `cn` for Tailwind class merging)
- `public/` - Static assets
- `styles/` - Global CSS files

### Component System
Uses shadcn/ui component library with configuration in `components.json`. Components are:
- Pre-configured with Tailwind CSS
- Use CSS variables for theming
- Located in `components/ui/` for base components
- Page-specific components in `components/` root

### Build Configuration
- TypeScript and ESLint errors are ignored during builds (`next.config.mjs`)
- Images are unoptimized
- Uses path aliases (`@/` maps to root directory)