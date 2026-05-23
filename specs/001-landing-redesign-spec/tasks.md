---

description: "Task list for Knemco landing redesign"
---

# Tasks: Knemco Landing Redesign Optimization

**Input**: Design documents from `/specs/001-landing-redesign-spec/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Se prioriza validacion UX/UI y de rendimiento definida en spec/plan; se incluyen tareas de verificacion funcional y quality gates.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Preparar baseline visual, recursos y criterios de QA para el rediseño.

- [ ] T001 Documentar baseline visual y capturas de referencia en `specs/001-landing-redesign-spec/research.md`
- [ ] T002 Crear tokenizacion de estilo (colores, espaciado, tipografia) en `client/src/styles/index.css`
- [ ] T003 [P] Verificar inventario de assets para mockup en `client/src/assets/images/`
- [ ] T004 [P] Alinear estructura de secciones objetivo en `client/src/App.jsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Implementar bases transversales que bloquean todas las historias.

**CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Implementar estructura de navegacion sticky base en `client/src/components/Navbar.jsx`
- [ ] T006 [P] Definir estilos base responsive de layout en `client/src/styles/index.css`
- [ ] T007 [P] Implementar reglas base de accesibilidad (focus ring, contraste) en `client/src/styles/index.css`
- [ ] T008 Configurar contenedor principal de flujo de conversion en `client/src/App.jsx`
- [ ] T009 [P] Preparar hooks de metrica de conversion (evento CTA contacto) en `client/src/sections/CTASection.jsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Claridad inmediata del valor (Priority: P1) 🎯 MVP

**Goal**: Asegurar que propuesta de valor y CTA principal sean evidentes en primer viewport.

**Independent Test**: En desktop y mobile, usuario nuevo identifica propuesta de valor y CTA sin scroll en menos de 5 segundos.

### Implementation for User Story 1

- [ ] T010 [US1] Reestructurar hero above-the-fold en `client/src/sections/Hero.jsx`
- [ ] T011 [P] [US1] Ajustar estilos del hero para jerarquia y legibilidad en `client/src/styles/Hero.css`
- [ ] T012 [P] [US1] Ajustar navbar para priorizar accion principal en `client/src/styles/Navbar.css`
- [ ] T013 [US1] Alinear CTA principal de hero con destino de contacto en `client/src/sections/Hero.jsx`
- [ ] T014 [US1] Verificar preservacion total de copy en `client/src/sections/Hero.jsx`

**Checkpoint**: User Story 1 funcional y validable como MVP

---

## Phase 4: User Story 2 - Visualizacion de mockup con contexto (Priority: P2)

**Goal**: Integrar mockup principal en bloque hero sin competir con el mensaje principal.

**Independent Test**: Usuario en primera visita identifica el mockup y su relacion con el servicio ofrecido.

### Implementation for User Story 2

- [ ] T015 [P] [US2] Incorporar asset de mockup principal en `client/src/sections/Hero.jsx`
- [ ] T016 [US2] Reservar dimensiones del mockup para estabilidad visual en `client/src/styles/Hero.css`
- [ ] T017 [P] [US2] Definir texto alternativo descriptivo del mockup en `client/src/sections/Hero.jsx`
- [ ] T018 [US2] Ajustar composicion responsive del mockup (desktop split/mobile stack) en `client/src/styles/Hero.css`
- [ ] T019 [US2] Validar no alteracion de narrativa y foco visual en `client/src/sections/Hero.jsx`

**Checkpoint**: User Story 2 funcional e independiente

---

## Phase 5: User Story 3 - Navegacion de baja friccion (Priority: P3)

**Goal**: Optimizar recorrido hacia contacto con minima friccion y CTA persistente.

**Independent Test**: Usuario completa el flujo primario (clic CTA a contacto) sin confusion en desktop y mobile.

### Implementation for User Story 3

- [ ] T020 [US3] Simplificar estructura de items de navegacion (max 5) en `client/src/components/Navbar.jsx`
- [ ] T021 [P] [US3] Ajustar comportamiento sticky y estados de navegacion en `client/src/styles/Navbar.css`
- [ ] T022 [US3] Reforzar flujo de CTA hacia contacto en `client/src/sections/CTASection.jsx`
- [ ] T023 [P] [US3] Optimizar legibilidad y continuidad visual de secciones en `client/src/styles/CTASection.css`
- [ ] T024 [US3] Verificar consistencia del flujo de conversion en `client/src/App.jsx`

**Checkpoint**: User Stories 1, 2 y 3 funcionales en conjunto sin perder independencia de validacion

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Cerrar calidad visual, accesibilidad y rendimiento antes de implementacion final.

- [ ] T025 [P] Ejecutar checklist de accesibilidad visual en `specs/001-landing-redesign-spec/quickstart.md`
- [ ] T026 Ejecutar validacion de rendimiento (LCP/CLS) y registrar resultados en `specs/001-landing-redesign-spec/research.md`
- [ ] T027 [P] Revisar coherencia de estilos entre secciones en `client/src/styles/*.css`
- [ ] T028 Verificar preservacion de copy global en `client/src/sections/*.jsx`
- [ ] T029 Actualizar notas finales de implementacion en `specs/001-landing-redesign-spec/quickstart.md`
- [ ] T030 Definir y ejecutar prueba moderada para SC-001 (tiempo de identificacion < 5s) y registrar evidencia en `specs/001-landing-redesign-spec/quickstart.md`
- [ ] T031 Ejecutar evaluacion comparativa antes/despues para SC-004 (claridad percibida >= 85%) y registrar resultados en `specs/001-landing-redesign-spec/research.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Sin dependencias.
- **Foundational (Phase 2)**: Depende de Setup y bloquea historias.
- **US1/US2/US3 (Phases 3-5)**: Inician tras completar Foundational; prioridad sugerida P1 -> P2 -> P3.
- **Polish (Phase 6)**: Requiere cierre de historias objetivo.

### User Story Dependencies

- **US1 (P1)**: Base de MVP y sin dependencia funcional de otras historias.
- **US2 (P2)**: Depende de estructura hero de US1 para integrar mockup.
- **US3 (P3)**: Depende de base de navegacion de Foundational e integra CTA definido en US1.

### Parallel Opportunities

- T003 y T004 en paralelo durante Setup.
- T006, T007 y T009 en paralelo durante Foundational.
- En US1: T011 y T012 en paralelo.
- En US2: T015 y T017 en paralelo.
- En US3: T021 y T023 en paralelo.
- En Polish: T025 y T027 en paralelo.

---

## Parallel Example: User Story 1

```bash
Task: "T011 [US1] Ajustar estilos del hero en client/src/styles/Hero.css"
Task: "T012 [US1] Ajustar navbar para CTA principal en client/src/styles/Navbar.css"
```

## Parallel Example: User Story 2

```bash
Task: "T015 [US2] Incorporar asset de mockup en client/src/sections/Hero.jsx"
Task: "T017 [US2] Definir alt text del mockup en client/src/sections/Hero.jsx"
```

## Parallel Example: User Story 3

```bash
Task: "T021 [US3] Ajustar comportamiento sticky en client/src/styles/Navbar.css"
Task: "T023 [US3] Optimizar continuidad visual en client/src/styles/CTASection.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Completar Phase 1 y Phase 2.
2. Ejecutar US1 completa (T010-T014).
3. Validar criterio independiente de US1.

### Incremental Delivery

1. MVP con US1.
2. Agregar US2 y validar comprension visual del mockup.
3. Agregar US3 y validar conversion primaria de punta a punta.

### Parallel Team Strategy

1. Equipo completo en Setup + Foundational.
2. Luego reparto por historia:
   - Perfil A: US1
   - Perfil B: US2
   - Perfil C: US3
