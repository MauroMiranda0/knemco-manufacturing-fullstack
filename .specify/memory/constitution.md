<!--
Sync Impact Report
- Version change: N/A -> 1.0.0
- Modified principles: Initial adoption (no prior principle titles)
- Added sections: Core Principles, Product and UX Constraints, Delivery Workflow and Quality Gates, Governance
- Removed sections: None
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (aligned; Constitution Check placeholder remains valid)
  - ✅ .specify/templates/spec-template.md (aligned with measurable outcomes and acceptance scenarios)
  - ✅ .specify/templates/tasks-template.md (aligned with phased delivery and story independence)
  - ✅ .specify/extensions/git/commands/speckit.git.initialize.md (no outdated agent-specific references)
  - ✅ .specify/extensions/git/commands/speckit.git.commit.md (no outdated agent-specific references)
  - ✅ .specify/extensions/git/commands/speckit.git.feature.md (no outdated agent-specific references)
  - ✅ README.md (no conflicting governance references)
- Follow-up TODOs: None
-->

# Knemco Manufacturing Fullstack Constitution

## Core Principles

### I. Conversion-First Clarity
Every landing-page change MUST optimize immediate comprehension of the offer and
qualified-lead conversion. The first viewport MUST communicate what the company
does and MUST present a clear primary next action.
Rationale: the main business problem is high bounce and low understanding in the
first seconds.

### II. Visual Proof Over Long Copy
The product or service mockup MUST be visible in the initial experience and MUST
support value comprehension without requiring long text blocks. Content owners
MUST prefer concise copy and explicit message hierarchy.
Rationale: the audience decides quickly and penalizes high reading friction.

### III. Single Primary Action and Low-Friction Navigation
The interface MUST maintain one primary contact action visible consistently
through key sections. Navigation MUST preserve context and provide a direct path
to the primary action from any strategic section.
Rationale: ambiguous routes reduce progression to contact intent.

### IV. Respectful Contact Experience
The contact flow MUST support success, validation error, processing failure,
re-attempt, and abandonment states with clear and non-punitive messaging. The
experience MUST NOT use invasive pop-ups and MUST preserve user-entered data on
recoverable failures.
Rationale: trust and completion rate depend on transparent and non-intrusive UX.

### V. Measurable Outcomes and Verifiable Claims
All changes MUST be traceable to measurable outcomes: form completion rate,
lead quality fit, bounce rate, and section engagement. Marketing or product
claims in the landing MUST be verifiable and MUST NOT be speculative.
Rationale: decisions and copy quality must be governed by evidence, not opinion.

## Product and UX Constraints

- Brand identity is mandatory: clear/direct voice, consultative tone, blue
  technology palette, clean typography, and unchanged logo/mission.
- Style direction is mandatory: minimal, technological, and warm.
- Prohibited direction: cold corporate tone, rigid industrial tone, excessive
  formality, generic context-free visuals, and excessive text density.
- Scope baseline for this product line includes narrative restructuring,
  conversion-oriented contact flow, and early visual mockup integration.
- CRM integration is outside current scope unless explicitly approved in a
  future amendment.

## Delivery Workflow and Quality Gates

- Every feature specification MUST define independent user scenarios and
  measurable acceptance criteria using Given/When/Then.
- Planning MUST include a constitution check before research and after design,
  with explicit handling of any violations.
- Task breakdown MUST preserve independent delivery by user story priority and
  identify parallel-safe work where possible.
- For this repository, `npm run lint` in `client/` is the mandatory automated
  quality gate for code changes; `npm run build` is mandatory when bundling or
  runtime imports are touched.
- Secrets (including EmailJS values) MUST remain in local environment files and
  MUST NOT be committed to source files.

## Governance

This constitution supersedes conflicting local conventions for product,
specification, and implementation decisions.

Amendment procedure:
- Any amendment MUST include rationale, impacted principles/sections, and a
  synchronization review of `.specify/templates/*` and relevant guidance files.
- Amendment approval MUST be explicit in project decision records or equivalent
  team agreement before enforcement.

Versioning policy:
- Semantic versioning applies to this constitution.
- MAJOR for incompatible governance changes or principle removals/redefinitions.
- MINOR for new principles/sections or materially expanded obligations.
- PATCH for clarifications, wording improvements, and non-semantic refinements.

Compliance review expectations:
- Plans and task lists MUST demonstrate constitutional compliance before
  implementation starts.
- Reviews MUST reject changes that violate mandatory MUST/MUST NOT rules unless
  the constitution is amended first.

**Version**: 1.0.0 | **Ratified**: 2026-05-28 | **Last Amended**: 2026-05-28
