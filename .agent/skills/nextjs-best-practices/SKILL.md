---
name: nextjs-best-practices
description: "Guidelines for modern Next.js development using React and TypeScript, focusing on architecture, patterns, and performance."
---

# Next.js Best Practices Skill

This skill provides a comprehensive guide for setting up and maintaining Next.js projects following industry-standard best practices for architecture, design patterns, and performance.

## Project Architecture

### 1. Directory Structure (App Router)
Use a modular and scalable structure. Favor the `src` directory for better organization.

- `src/app/`: File-based routing, server components by default.
- `src/components/`: Reusable UI components. Subdivide by:
  - `ui/`: Shared, primitive components (buttons, inputs).
  - `features/`: Feature-specific components.
  - `layout/`: Global layout components (Header, Footer).
- `src/lib/`: Third-party library configurations (prisma, stripe, etc.).
- `src/hooks/`: Custom React hooks.
- `src/services/`: Business logic, API calls, or database operations.
- `src/types/`: Shared TypeScript interfaces and types.
- `src/utils/`: Generic utility functions.
- `src/styles/`: Global CSS/SASS files and theme definitions.

### 2. Component Organization
Follow the "Colocation" principle: keep related files (tests, styles, sub-components) close to the component.
```
src/components/features/auth/
├── LoginForm/
│   ├── LoginForm.tsx
│   ├── LoginForm.test.tsx
│   ├── LoginForm.styles.css
│   └── index.ts
```

## TypeScript Best Practices

### 1. Strict Typing
Ensure `strict: true` in `tsconfig.json`. Avoid `any` at all costs; use `unknown` if the type is truly dynamic and perform type narrowing.

### 2. Interfaces vs. Types
- Use `interface` for public APIs and whenever you need declaration merging (e.g., library extensions).
- Use `type` for unions, intersections, and primitives.

### 3. Zod for Validation
Use [Zod](https://zod.dev/) for runtime schema validation, especially for API responses and form inputs.

## React & Next.js Patterns

### 1. Server vs. Client Components
- **Server Components (Default)**: Use for data fetching, SEO-critical content, and large dependencies.
- **Client Components**: Use `'use client'` strictly for interactivity (`useState`, `useEffect`, event listeners) or browser-only APIs.

### 2. Data Fetching
- Prefer **Server-side fetching** in the `app` directory.
- Use `fetch` with Next.js specific extensions for caching (`next: { revalidate: ... }`).
- For complex data management in client components, use **React Query** (SWR) for caching and optimistic updates.

### 3. State Management
- **Local State**: `useState`, `useReducer`.
- **Global UI State**: Context API (keep it lean) or Zustand.
- **Server State**: Server Components or React Query.

## Performance Optimization

- **Image Optimization**: Always use `next/image` to prevent CLS and enable automatic resizing/WebP.
- **Dynamic Imports**: Use `next/dynamic` for large components that are not immediately visible.
- **Font Optimization**: Use `next/font` for zero-layout-shift font loading.

## Best Practices Checklist

- [ ] All components are typed correctly without `any`.
- [ ] Business logic is separated from UI (Services layout).
- [ ] Environment variables are validated at runtime.
- [ ] Proper error boundaries are implemented.
- [ ] Layout shifts are minimized (Image/Font optimization).
