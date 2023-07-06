# Project structure guideline

```
.
├── README.md
├── package.json
├── package-lock.json (or yarn.lock)
├── next.config.js
├── env(s)
├── .eslintrc
├── .prettierrc
├── .lintstagedrc
├── .huskyrc
├── src/
│   ├── config/
│   │   └── ...
│   ├── core/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── NavbarSlice.ts
│   │   │   │   ├── NavbarSlice.test.ts
│   │   │   │   └── index.ts
│   │   │   └── ...
│   │   ├── contexts/
│   │   │   ├── UserContext/
│   │   │   │   ├── index.tsx
│   │   │   │   ├── types.ts
│   │   │   │   └── index.ts
│   │   │   └── ...
│   │   ├── icons/
│   │   │   ├── ArrowIcon/
│   │   │   │   ├── index.tsx
│   │   │   │   └── index.ts
│   │   │   └── ...
│   │   └── hooks/
│   │       ├── usePagination/
│   │       │   ├── index.ts
│   │       │   ├── ...
│   │       └── ...
│   ├── store/
│   │   ├── index.ts
│   │   ├── ...
│   ├── utils/
│   │   ├── formatDate.ts
│   │   └── ...
│   ├── app/
│   └── styles/
│       ├── globals.css
│       └── tailwind.css
└── public/
└── ...
```

# Directory Structure and Configuration Guide

## Root Directory:
- `README.md`: This file should contain the documentation and instructions for your project.
- `package.json`: This file is used for managing your project's dependencies and scripts.
- `package-lock.json` (or `yarn.lock`): These files lock the versions of your project's dependencies for consistent builds.
- `next.config.js`: This file is used to configure Next.js settings and plugins.
- `env(s)`: This directory should contain environment-specific configuration files, such as `.env.development` or `.env.production`, for managing environment variables.

## Configuration Files:
- `.eslintrc`: This file configures ESLint, a popular JavaScript linter, to enforce coding style and best practices.
- `.prettierrc`: This file configures Prettier, a code formatter, to ensure consistent code formatting.
- `.lintstagedrc`: This file configures lint-staged, a tool that runs linters on staged files, to enforce linting before commits.
- `.huskyrc`: This file configures Husky, a Git hook tool, to set up pre-commit hooks for linting and other tasks.

## Source Code (src) Directory:
- `config/`: This directory should contain configuration files for your project, such as API endpoints or third-party integrations.
- `core/`: This directory contains the core components, contexts, icons, and hooks of your application.
  - `components/`: This directory contains reusable UI components used throughout your application.
  - `contexts/`: This directory contains React contexts that provide global state management.
  - `icons/`: This directory contains SVG icons or icon components used in your application.
  - `hooks/`: This directory contains custom React hooks for common functionality or logic.

## Store Directory:
- `index.ts`: This file exports the Redux store with configured reducers and middleware.

## Utils Directory:
- This directory contains utility functions or helper modules that can be used across your project.

## App Directory:
- The skeleton of Next application routing.

## Styles Directory:
- `globals.css`: This file contains global CSS styles that are applied throughout your application.
- `tailwind.css`: This file may contain custom CSS or overrides for Tailwind CSS, a popular CSS framework.

## Public Directory:
- This directory is used to store static files such as images, fonts, or other assets used in your application.

> Note: The directory and configuration file structure provided above is based on common conventions and best practices. However, you can customize it based on your project's specific requirements or preferences.
