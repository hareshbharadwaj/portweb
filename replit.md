# Portfolio Website

## Overview

A modern, responsive portfolio website built with React and Express showcasing a developer's projects, skills, and professional experience. The application features a clean, dark-themed design with interactive components and smooth animations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state and local React state
- **Routing**: Wouter for client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Structure**: RESTful API with JSON responses
- **Storage**: In-memory storage fallback for development

## Key Components

### Data Layer
- **Database Schema**: Projects and users tables with JSON fields for flexible data storage
- **ORM**: Drizzle ORM with type-safe queries and migrations
- **Storage Interface**: Abstracted storage layer supporting both database and in-memory storage

### Frontend Components
- **Navigation**: Smooth-scrolling navigation with mobile-responsive design
- **Hero Section**: Personal introduction with gradient backgrounds and social links
- **Projects Gallery**: Dynamic project cards with modal details and technology badges
- **Experience Timeline**: Professional experience and certifications display
- **Contact Form**: Interactive contact form with toast notifications

### UI System
- **Design System**: Consistent component library based on Radix UI
- **Theme**: Dark theme with custom CSS variables and portfolio-specific colors
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Animations**: Smooth transitions and hover effects using CSS and Tailwind

## Data Flow

1. **Project Data**: Fetched from `/api/projects` endpoint using TanStack Query
2. **Client-Server Communication**: RESTful API calls with JSON responses
3. **Error Handling**: Comprehensive error boundaries and loading states
4. **State Management**: Server state cached via TanStack Query, UI state managed locally

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Database**: PostgreSQL via Neon Database, Drizzle ORM
- **UI Library**: Radix UI components, Lucide React icons
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Utilities**: Zod for validation, date-fns for date handling

### Development Tools
- **Build Tools**: Vite, ESBuild, TypeScript
- **Development**: TSX for TypeScript execution, Replit plugins
- **Code Quality**: Class Variance Authority for component variants

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds the React application to `dist/public`
- **Backend**: ESBuild bundles the Express server to `dist/index.js`
- **Database**: Drizzle migrations handle schema changes

### Environment Configuration
- **Development**: Uses `tsx` for hot reloading and development server
- **Production**: Node.js serves the built application
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Platform Optimization
- **Replit Integration**: Configured for Replit hosting with development banner
- **Static Assets**: Served efficiently in production mode
- **Database**: Serverless PostgreSQL for scalable data storage

## Changelog

```
Changelog:
- July 08, 2025: Initial setup with dark designer theme
- July 08, 2025: Added personal photo to hero section
- July 08, 2025: Reorganized projects by categories (Web Dev, Computer Vision, ML Research, App Dev)
- July 08, 2025: Created 11 projects with placeholder links for user to fill
- July 08, 2025: Added video demo sections for computer vision projects
- July 08, 2025: Set up structured link areas (LinkedIn, GitHub, Demo/Video)
- July 08, 2025: Restructured navbar to full-width with "Portfolio" logo
- July 08, 2025: Redesigned hero section layout (profile left, content right on desktop)
- July 08, 2025: Added LOR documents from Corizo and Prodigy InfoTech to experience section
- July 08, 2025: Implemented "View Credentials" button showing certificates side-by-side
- July 08, 2025: Enhanced Three.js background with continuous multi-axis animations
- July 08, 2025: Added objective section and restructured hero content flow
- July 08, 2025: Added proper padding to hero section for laptop screens
- July 08, 2025: Integrated LOR documents into unified timeline structure
- July 08, 2025: Implemented Jarvis-like AI background animations with scanning lines
- July 08, 2025: Added relevant video/image assets to project cards
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```