# Project Constitution

## 1. Introduction
This document defines the core principles, technology stack, and coding standards for the Knemco Manufacturing Fullstack project. This constitution serves as a guide to align development efforts across related projects for this client, ensuring consistency and ease of maintenance.

## 2. Technology Stack
*   **Frontend Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Vanilla CSS (Modular, avoiding utility classes like Tailwind to maintain custom design control)
*   **Routing/Navigation:** React Scroll (for single-page navigation)
*   **Icons:** `react-icons`
*   **Components/Sliders:** `swiper`
*   **Form Handling/Email:** `@emailjs/browser`

## 3. Project Structure
The project follows a standard Vite + React modular structure:
*   `client/src/components/`: Reusable, self-contained UI components (e.g., Buttons, Cards).
*   `client/src/sections/`: Larger page sections (e.g., Hero, About, Contact, Services).
*   `client/src/pages/`: Main views/routes of the application.
*   `client/src/styles/`: Global styles (`index.css`) and component-specific CSS files.
*   `client/src/assets/`: Static assets like images and icons.

## 4. Coding Standards
*   **Component Pattern:** Functional components using React Hooks.
*   **File Naming:** 
    *   `PascalCase` for React components (`Component.jsx`).
    *   `camelCase` for utilities and standard JS files.
    *   `PascalCase` for CSS files matching their respective components (`Component.css`).
*   **Linting:** ESLint is configured to enforce code quality. All code must pass linting before merging.
*   **Modularity:** Keep components small, reusable, and focused on a single responsibility.
*   **State Management:** Use standard Hooks (`useState`, `useEffect`) for local state. 

## 5. Collaboration & Alignment
*   This repository acts as the base reference for architecture and standards for this client.
*   Any new project for this client should adopt this stack and structure to ensure seamless developer onboarding, code sharing, and a unified ecosystem.
