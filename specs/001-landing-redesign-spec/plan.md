# Implementation Plan: Knemco Landing Redesign Optimization

**Branch**: `001-landing-redesign-spec` | **Date**: 2026-05-29 | **Spec**: `specs/001-landing-redesign-spec/spec.md`

**Input**: Feature specification from `/specs/001-landing-redesign-spec/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Redesign the landing experience to improve immediate value clarity and increase
conversion to contact intent, while preserving approved copy and brand voice.
Implementation centers on hero-first information hierarchy, visible mockup in the
initial viewport, low-friction navigation, and front-end conversion instrumentation
for CTA click, submit attempt, and submit success events.

## Technical Context


**Language/Version**: JavaScript (ES2023), React 19, Vite 7

**Primary Dependencies**: react, react-dom, react-scroll, react-icons, swiper, @emailjs/browser

**Storage**: N/A (front-end only; analytics events sent to existing tooling)

**Testing**: ESLint (`npm run lint`) and production build validation (`npm run build` when runtime imports/bundling are affected)

**Target Platform**: Modern desktop and mobile browsers

**Project Type**: Single-page web application (frontend)

**Performance Goals**: CLS <= 0.1, LCP <= 2.5s in comparable test conditions

**Constraints**: Preserve approved copy and narrative order; keep max 5 visible nav links; no invasive pop-ups; no CRM integration in this phase; keep EmailJS secrets in `client/.env`

**Scale/Scope**: One landing page flow with hero, navigation, contact CTA and form states across desktop/tablet/mobile

## Measurement Methodology

- **Baseline window**: 14-day period immediately before rollout (2026-05-15 to 2026-05-28).
- **Comparable traffic criteria**: same primary acquisition sources in analytics,
  segmented by desktop/tablet/mobile, with minimum 500 sessions per device segment
  in baseline and evaluation windows.
- **Attribution rule**:
  - `cta_click_contact`: fire once per user interaction when primary CTA routes to contact.
  - `contact_submit_attempt`: fire on user-initiated submit attempt before async send result.
  - `contact_submit_success`: fire only after confirmed successful send response.
  - `contact_flow_abandon`: fire when the user exits the current route or closes/reloads the page after interacting with at least one contact-form field and before `contact_submit_success` in the same session.
  - Funnel for SC-003: `cta_click_contact -> contact_submit_success` in same session.
- **Operational definitions**:
  - **Bounce rate**: percentage of sessions with no meaningful interaction beyond initial landing view.
  - **Section engagement**: tracked through consistent events (section view, key CTA interaction, and scroll depth thresholds).
  - **Lead quality fit (proxy)**: front-end signal quality based on required form fields completeness and manual review rubric documented in research artifacts.

## Contact Flow State Matrix

| State | Expected UX Result | Evidence Required in Tasks |
|-------|--------------------|----------------------------|
| `validation_error` | Inline, non-invasive validation feedback with clear correction guidance; focus moves to first invalid field. | Task(s) that implement and verify error rendering + keyboard focus behavior. |
| `processing_failure` | Clear failure message without data loss; no blocking pop-ups. | Task(s) that simulate/send failure and verify persisted input values. |
| `retry` | User can retry submission from current state with preserved data and visible status. | Task(s) validating retry action path and second-attempt instrumentation. |
| `abandonment` | Exit/leave path does not punish user; partial progress handling is explicit. | Task(s) defining abandonment signal/event and verification method. |
| `success` | Explicit confirmation state after successful send with clear next-step message. | Task(s) verifying success state UX and `contact_submit_success` emission. |

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Conversion-First Clarity: first viewport must communicate offer + primary action.
- [x] Visual Proof Over Long Copy: mockup required in initial experience.
- [x] Single Primary Action and Low-Friction Navigation: route to contact must remain explicit.
- [x] Respectful Contact Experience: success/error/retry paths must remain clear and non-invasive.
- [x] Measurable Outcomes and Verifiable Claims: conversion events and measurable outcomes are specified.
- [x] Quality Gates: lint required; build required when import/bundling changes occur.
- [x] Secrets Handling: EmailJS values remain environment-managed.
- [x] Telemetry Validation: SC-006 event completeness must be verified in instrumented test sessions.

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
