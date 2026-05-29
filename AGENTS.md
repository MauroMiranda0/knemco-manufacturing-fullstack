# AGENTS

## Scope and structure
- This repo currently contains one runnable app: `client/` (React 19 + Vite 7). There is no backend service code yet.
- Work from `client/` for all app commands; the repository root has no `package.json` scripts.
- The active feature docs live under `specs/001-landing-redesign-spec/` (`spec.md`, `plan.md`, `tasks.md`).
- Treat spec artifacts as living documents for this repo; implementation expectations are currently driven by that feature folder.

## Verified dev commands
- Install deps: `npm install` (run in `client/`).
- Start dev server: `npm run dev` (Vite).
- Lint: `npm run lint` (ESLint flat config in `client/eslint.config.js`).
- Build: `npm run build`.
- Preview production build: `npm run preview`.
- There is no `test` script in `client/package.json`; do not assume Jest/Vitest/Playwright commands exist.
- `npm run lint` uses `eslint .` from `client/` with flat config and ignores only `dist/` globally.

## Validation expectations
- For code changes, use `npm run lint` as the primary automated check; use `npm run build` when changes may affect bundling/runtime imports.

## App entrypoints and key wiring
- App bootstrap: `client/src/main.jsx`.
- Top-level composition: `client/src/App.jsx` (single-page section stack: Navbar -> Hero -> Services -> Products -> CTA -> About -> Contact -> Footer).
- Current section filenames are `Hero.jsx`, `ServicesSection.jsx`, `ProductsSection.jsx`, `CTASection.jsx`, `AboutSection.jsx`, `ContactSection.jsx` in `client/src/sections/`.
- Current nav/footer components are in `client/src/components/` (for example `Navbar.jsx`, `Footer.jsx`).
- Contact form integration uses EmailJS directly in `client/src/sections/ContactSection.jsx` via:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`

## Env and secrets
- Keep EmailJS values in `client/.env` (already gitignored in root `.gitignore`).
- Do not hardcode or commit credentials in JSX/CSS/config files.

## Repo-specific gotchas
- `README.md` at root is minimal and not authoritative for commands; trust `client/package.json` scripts.
- `client/README.md` is the default Vite template; prefer actual project files over template guidance.
- `.specify/` and `.github/` include Spec Kit scaffolding added by `specify init`; keep changes there intentional (do not edit casually during feature work).
- Canonical Hero files are `client/src/sections/Hero.jsx` and `client/src/styles/Hero.css`.

## Verification workflow
- Default check for code edits: run `npm run lint` in `client/`.
- Also run `npm run build` in `client/` when touching runtime imports, Vite wiring, or assets used by first viewport.

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read `specs/001-landing-redesign-spec/plan.md`
<!-- SPECKIT END -->
