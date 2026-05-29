# Implementation Plan: Knemco Landing Redesign Optimization

**Branch**: `001-nueva-landing` | **Date**: 2026-05-29 | **Spec**: `specs/001-landing-redesign-spec/spec.md`

**Input**: Feature specification from `/specs/001-landing-redesign-spec/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Redesign the landing experience to improve immediate value clarity and increase
conversion to contact intent, while preserving approved copy and brand voice.
Implementation centers on hero-first information hierarchy, visible mockup in the
initial viewport, low-friction navigation, and front-end conversion instrumentation
for CTA click, submit attempt, and submit success events.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript (ES2023), React 19, Vite 7

**Primary Dependencies**: react, react-dom, react-scroll, react-icons, swiper, @emailjs/browser

**Storage**: N/A (front-end only; analytics events sent to existing tooling)

**Testing**: ESLint (`npm run lint`) and production build validation (`npm run build` when runtime imports/bundling are affected)

**Target Platform**: Modern desktop and mobile browsers

**Project Type**: Single-page web application (frontend)

**Performance Goals**: CLS <= 0.1, LCP <= 2.5s in comparable test conditions

**Constraints**: Preserve approved copy and narrative order; keep max 5 visible nav links; no invasive pop-ups; no CRM integration in this phase; keep EmailJS secrets in `client/.env`

**Scale/Scope**: One landing page flow with hero, navigation, contact CTA and form states across desktop/tablet/mobile

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Conversion-First Clarity: first viewport must communicate offer + primary action.
- [x] Visual Proof Over Long Copy: mockup required in initial experience.
- [x] Single Primary Action and Low-Friction Navigation: route to contact must remain explicit.
- [x] Respectful Contact Experience: success/error/retry paths must remain clear and non-invasive.
- [x] Measurable Outcomes and Verifiable Claims: conversion events and measurable outcomes are specified.
- [x] Quality Gates: lint required; build required when import/bundling changes occur.
- [x] Secrets Handling: EmailJS values remain environment-managed.

Post-Design Re-check: PASS. Phase 1 artifacts (research, data model, contract,
quickstart) preserve constitutional constraints with no unresolved violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-landing-redesign-spec/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── landing-ux-contract.md
└── tasks.md
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
client/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   ├── sections/
│   ├── styles/
│   └── assets/
├── eslint.config.js
└── package.json
```

**Structure Decision**: Single frontend application in `client/` using section-based
composition and modular CSS files aligned with existing repository conventions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
