# S.v. NULL website

The official website for **s.v. NULL**, the study association for ICT students at the Christian University of Applied Sciences Ede (CHE). This repository contains the source code for the website, built with modern web technologies to provide information about events, committees, partners, and the association board.

## 🚀 Tech stack

- **Framework:** [Next.js](https://nextjs.org/) (App router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting & formatting:** ESLint, Prettier
- **Git hooks:** Husky (pre-commit hooks)
- **Commit convention:** CommitLint (Conventional Commits)
- **Content management:** Markdown (`.md`) & static config

## 🛠️ Getting started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sv-null/website.git
   cd website
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment variables:**
   Copy the example environment file to create your local configuration.
   ```bash
   cp .env.example .env
   ```
   Note: open `.env` and fill in any required configuration strings if necessary.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## 📁 Project structure

```
/ (root)
├─ .github/            # CI/CD workflows
├─ .husky/             # Git hooks (pre-commit, commit-msg)
├─ app/                # Next.js app router pages and layouts
├─ components/         # Resuable UI components
│  ├─ features/        # Specific components per feature (e.g., calendar, partners)
│  ├─ layout/          # Global layout components (Navbar, Footer)
|  ├─ sections/        # Specific section components
|  ├─ ui/              # Generic UI elements
├─ config/             # Static configuration files (board members, menus, etc.)
├─ content/            # Markdown-content voor SSG-pagina’s
│  ├─ calendar/        # Event descriptions
│  ├─ partners/        # Partner descriptions
│  └─ ...
├─ hooks/              # Custom React hooks
├─ lib/                # Utility libraries and content loaders
├─ public/             # Static assets (images, PDFs)
└─ types/              # TypeScript type definitions
```

## 📝 Content management

This website uses a hybrid approach for content management:

**1. Markdown content (`/content`)**
Dynamic content such as **events (`/content/calendar`)**, **partners (`/content/partners`)**, and **vacancies** are stored as Markdown files.

- To add an event, create a new `/.md` file in `/content/calendar/`.
- Ensure the frontmatter (metadata at the top of the file) matches the required schema.

**2. Static configuration (`/config`)**
Structured data that rarely changes format is kept in TypeScript files in the `/config/` folder.

- **Committees:** edit `/config/committee.ts` to update committee info.
- **Board members:** edit `/config/board.ts` or `/config/person.ts`.
- **Navigation:** edit `/config/navigation.ts` to change menu items.

## ✅ Code quality & contributing

We enfore high code quality standards to keep the codebase clean and maintainable.

### **Commit Messages**

We use **Conventional Commits**. Your commit messages must follow this format:

- `feat: add new calendar component`
- `fix: resolve typo in footer`
- `style: update button padding`
- etc

_The commit will be rejected by Husky if it does not follow this standard._

### Linting & formatting

Code is automatically checked before every commit. You can also run checks manually:

```bash
# Run ESLint
npm run lint

# Check formatting with Prettier
npm run format:check

# Check TypeScript types
npm run typecheck

# Automatically fix Prettier formatting
npm run format
```

## 📜 License

This project is proprietary to s.v. NULL. Please see the [LICENSE](https://github.com/SV-NULL/Website?tab=MIT-1-ov-file#readme) file for more details.
