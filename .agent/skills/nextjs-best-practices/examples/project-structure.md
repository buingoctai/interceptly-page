# Example Next.js Project Structure

This example demonstrates a scalable directory structure using the `src` directory and App Router.

```text
.
├── public/                  # Static assets
├── src/
│   ├── app/                # App Router (Routes, API, Layouts)
│   │   ├── api/            # API Route handlers
│   │   ├── (auth)/         # Route grouping for Authentication
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/    # Route grouping for Main Application
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page
│   ├── components/         # React Components
│   │   ├── ui/             # Shadcn/UI primitives
│   │   ├── layout/         # Header, Sidebar, Footer
│   │   └── shared/         # Reusable business components
│   ├── hooks/              # Custom React Hooks
│   ├── lib/                # Library configs (prisma.ts, utils.ts)
│   ├── services/           # Data access layer / Business logic
│   ├── types/              # TS Interfaces/Types
│   ├── utils/              # Helper functions
│   └── styles/             # Global CSS
├── .env.example
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Key Organization Patterns

### Feature-based Folders
For larger projects, you can organize by feature:
```text
src/features/
├── authentication/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── types.ts
├── profile/
└── messages/
```

### Components Colocation
```text
src/components/shared/Button/
├── Button.tsx
├── Button.test.tsx
└── index.ts
```
