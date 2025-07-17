# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture Overview

This is a Next.js 15 application for "newpreneur" - a startup platform where entrepreneurs can pitch startups and connect with others.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Authentication**: NextAuth.js v5 with GitHub provider
- **TypeScript**: Strict mode enabled
- **Font**: Work Sans (locally hosted)

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `(root)/` - Main application pages
  - `api/auth/` - NextAuth.js API routes
- `components/` - Reusable React components
  - `ui/` - Base UI components (buttons, etc.)
- `lib/` - Utility functions and configurations
- `auth.ts` - NextAuth.js configuration

### Key Components
- `StartupCard` - Displays startup information with view counts, author details
- `SearchForm` - Search functionality for startups
- `MouseTracker` - Interactive mouse tracking component
- `Navbar` - Navigation component

### Design System
- **Colors**: Custom primary (#EE2B69), secondary (#FBE843), and black/white variants
- **Shadows**: Custom box shadows (100, 200, 300)
- **Typography**: Work Sans font family with multiple weights
- **Responsive**: Custom 'xs' breakpoint at 475px

### Authentication
- GitHub OAuth integration via NextAuth.js
- Environment variables required: `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`

### Type Definitions
Uses TypeScript with custom types for startup data structures. Note: Some type references in the code (e.g., `StartupCardType`, `StartupTypeCard`) may need proper definition.

### Path Aliases
- `@/*` maps to root directory for clean imports