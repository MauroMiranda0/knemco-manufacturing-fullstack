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

- [X] T001 Documentar baseline visual y capturas de referencia en `specs/001-landing-redesign-spec/research.md`
- [X] T002 Crear tokenizacion de estilo (colores, espaciado, tipografia) en `client/src/styles/index.css`
- [X] T003 [P] Verificar inventario de assets para mockup en `client/src/assets/images/`
- [X] T004 [P] Alinear estructura de secciones objetivo en `client/src/App.jsx`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Implementar bases transversales que bloquean todas las historias.

**CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Implementar estructura de navegacion sticky base en `client/src/components/Navbar.jsx`
- [X] T006 [P] Definir estilos base responsive de layout en `client/src/styles/index.css`
- [X] T007 [P] Implementar reglas base de accesibilidad (focus ring, contraste) en `client/src/styles/index.css`
- [X] T008 Configurar contenedor principal de flujo de conversion en `client/src/App.jsx`
- [X] T009 [P] Crear utilidad canonica de eventos de conversion (`cta_click_contact`, `contact_submit_attempt`, `contact_submit_success`) en `client/src/utils/conversionEvents.js`
- [X] T010 Integrar utilidad de conversion en flujo de contacto sin exponer secretos en `client/src/sections/ContactSection.jsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Claridad inmediata del valor (Priority: P1) 🎯 MVP

**Goal**: Asegurar que propuesta de valor y CTA principal sean evidentes en primer viewport.

**Independent Test**: En desktop, tablet y mobile, usuario nuevo identifica propuesta de valor y CTA sin scroll en menos de 5 segundos.

### Implementation for User Story 1

- [X] T011 [US1] Reestructurar hero above-the-fold en `client/src/sections/Hero.jsx`
- [X] T012 [P] [US1] Ajustar estilos del hero para jerarquia y legibilidad en `client/src/styles/Hero.css`
- [X] T013 [P] [US1] Asegurar CTA principal visible sin scroll en desktop/mobile/tablet en `client/src/sections/Hero.jsx`
- [X] T014 [US1] Verificar preservacion total de copy aprobado en `client/src/sections/Hero.jsx`
- [X] T015 [US1] Registrar evidencia de AC-001/AC-002 en `specs/001-landing-redesign-spec/research.md`

**Checkpoint**: User Story 1 funcional y validable como MVP

---

## Phase 4: User Story 2 - Visualizacion de mockup con contexto (Priority: P2)

**Goal**: Integrar mockup principal en bloque hero sin competir con el mensaje principal.

**Independent Test**: Usuario en primera visita identifica el mockup y su relacion con el servicio ofrecido.

### Implementation for User Story 2

- [X] T016 [P] [US2] Incorporar asset de mockup principal en `client/src/assets/images/`
- [X] T017 [US2] Integrar mockup con width/height y alt text en `client/src/sections/Hero.jsx`
- [X] T018 [P] [US2] Ajustar composicion responsive del mockup en `client/src/styles/Hero.css`
- [X] T019 [US2] Configurar prioridad de carga above-the-fold en `client/src/sections/Hero.jsx`
- [X] T020 [US2] Registrar validacion de CLS <= 0.1 en `specs/001-landing-redesign-spec/research.md`

**Checkpoint**: User Story 2 funcional e independiente

---

## Phase 5: User Story 3 - Navegacion de baja friccion (Priority: P3)

**Goal**: Optimizar recorrido hacia contacto con minima friccion y CTA persistente.

**Independent Test**: Usuario completa el flujo primario (clic CTA a contacto) sin confusion en desktop y mobile.

### Implementation for User Story 3

- [ ] T021 [US3] Limitar navegacion visible a maximo 5 items en `client/src/components/Navbar.jsx`
- [ ] T022 [P] [US3] Ajustar comportamiento sticky y estados en `client/src/styles/Navbar.css`
- [ ] T023 [US3] Disparar `cta_click_contact` en CTA principal de navegacion en `client/src/components/Navbar.jsx`
- [ ] T024 [US3] Disparar `contact_submit_attempt` y `contact_submit_success` en `client/src/sections/ContactSection.jsx`
- [ ] T025 [US3] Validar consistencia de nombres de eventos (`cta_click_contact`, `contact_submit_attempt`, `contact_submit_success`, `contact_flow_abandon`) con contrato en `specs/001-landing-redesign-spec/contracts/landing-ux-contract.md`
- [ ] T035 [US3] Implementar UX de `validation_error` con mensaje inline y foco en primer campo invalido en `client/src/sections/ContactSection.jsx`
- [ ] T036 [US3] Implementar UX de `processing_failure` y accion de `retry` sin pop-ups invasivos en `client/src/sections/ContactSection.jsx`
- [ ] T037 [US3] Preservar datos ingresados en fallos recuperables durante reintento en `client/src/sections/ContactSection.jsx`
- [ ] T038 [US3] Definir y registrar evidencia de abandono del flujo con evento canonico `contact_flow_abandon` en `client/src/utils/conversionEvents.js` y `client/src/sections/ContactSection.jsx`

**Checkpoint**: User Stories 1, 2 y 3 funcionales en conjunto sin perder independencia de validacion

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Cerrar calidad visual, accesibilidad y rendimiento antes de implementacion final.

- [X] T026 [P] Ejecutar checklist de accesibilidad visual en `specs/001-landing-redesign-spec/quickstart.md`
- [X] T027 Ejecutar validacion de rendimiento (LCP/CLS) y registrar resultados en `specs/001-landing-redesign-spec/research.md`
- [X] T028 [P] Ejecutar lint en `client/` con `npm run lint`
- [X] T029 Ejecutar build en `client/` con `npm run build`
- [X] T030 [P] Revisar coherencia de estilos entre secciones en `client/src/styles/*.css`
- [X] T031 Verificar preservacion de copy global en `client/src/sections/*.jsx`
- [X] T032 Actualizar notas finales de implementacion en `specs/001-landing-redesign-spec/quickstart.md`
- [ ] T033 Definir y ejecutar prueba moderada para SC-001 (tiempo de identificacion < 5s) y registrar evidencia en `specs/001-landing-redesign-spec/quickstart.md`
- [ ] T034 Ejecutar evaluacion comparativa antes/despues para SC-004 (claridad percibida >= 85%) y registrar resultados en `specs/001-landing-redesign-spec/research.md`
- [ ] T039 Ejecutar matriz de sesiones instrumentadas para SC-006 y verificar completitud de `cta_click_contact`, `contact_submit_attempt` y `contact_submit_success` en `specs/001-landing-redesign-spec/research.md`
- [X] T040 Instrumentar y validar proxy de bounce rate comparativo vs baseline en `client/src/utils/conversionEvents.js` y `specs/001-landing-redesign-spec/research.md`
- [X] T041 Instrumentar y validar section engagement (section view/scroll depth/interacciones clave) en `client/src/utils/conversionEvents.js` y `specs/001-landing-redesign-spec/research.md`
- [ ] T042 Definir y ejecutar medicion de proxy de lead-quality-fit y documentar rubrica/evidencia en `specs/001-landing-redesign-spec/quickstart.md` y `specs/001-landing-redesign-spec/research.md`

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
- **US3 (P3)**: Depende de base de navegacion de Foundational y de la conversion primaria definida en FR-005.

### Parallel Opportunities

- T003 y T004 en paralelo durante Setup.
- T006, T007 y T009 en paralelo durante Foundational.
- En US1: T011 y T012 en paralelo.
- En US2: T016 y T018 en paralelo.
- En US3: T021 y T023 en paralelo.
- En Polish: T039 y T041 en paralelo.

---

## Parallel Example: User Story 1

```bash
Task: "T011 [US1] Ajustar estilos del hero en client/src/styles/Hero.css"
Task: "T013 [US1] Ajustar CTA principal above-the-fold en client/src/sections/Hero.jsx"
```

## Parallel Example: User Story 2

```bash
Task: "T016 [US2] Incorporar asset de mockup en client/src/assets/images/"
Task: "T018 [US2] Ajustar composicion responsive del mockup en client/src/styles/Hero.css"
```

## Parallel Example: User Story 3

```bash
Task: "T022 [US3] Ajustar comportamiento sticky en client/src/styles/Navbar.css"
Task: "T023 [US3] Disparar cta_click_contact en client/src/components/Navbar.jsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Completar Phase 1 y Phase 2.
2. Ejecutar US1 completa (T011-T015).
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
