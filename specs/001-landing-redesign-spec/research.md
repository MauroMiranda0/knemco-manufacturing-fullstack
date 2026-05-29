# Research: Knemco Landing Redesign Optimization

## Baseline visual y capturas de referencia (T001)

### Alcance de baseline

- Baseline evaluado: estado actual de la landing previo a la implementacion del rediseño.
- Fuente normativa usada: `specs/001-landing-redesign-spec/spec.md` (FR-001 a FR-008, AC-001 a AC-009).
- Restricciones aplicadas: `spec/constitution.md` (React 19 + Vite, CSS modular, estructura por `sections` y `styles`).

### Matriz de capturas de referencia

| ID | Vista requerida | Objetivo de verificacion | Criterios vinculados |
|----|------------------|--------------------------|----------------------|
| BR-01 | Hero desktop (primer viewport, sin scroll) | Confirmar visibilidad inmediata de propuesta de valor y CTA principal | FR-001, FR-004, AC-001 |
| BR-02 | Hero mobile (primer viewport, sin scroll) | Confirmar visibilidad inmediata de propuesta de valor y CTA principal | FR-001, FR-004, AC-001 |
| BR-03 | Hero con recurso visual principal cargado | Validar presencia de area de mockup en bloque principal | FR-003, AC-003 |
| BR-04 | Navegacion principal completa (desktop/mobile) | Verificar estructura simple orientada a conversion | FR-005, AC-005 |
| BR-05 | Estado de foco visible por teclado (nav y CTA) | Verificar accesibilidad base en interaccion | FR-007, AC-006 |

### Registro de referencia

| ID | Archivo de referencia | Estado |
|----|-----------------------|--------|
| BR-01 | `client/src/sections/Hero.jsx` + `client/src/styles/Hero.css` | Registrado |
| BR-02 | `client/src/sections/Hero.jsx` + `client/src/styles/Hero.css` | Registrado |
| BR-03 | `client/src/assets/images/product-sculptural-lighting.png` + `client/src/sections/Hero.jsx` | Registrado |
| BR-04 | `client/src/components/Navbar.jsx` + `client/src/styles/Navbar.css` | Registrado |
| BR-05 | `client/src/styles/index.css` (focus-visible) | Registrado |

### Inventario de assets para mockup (T003)

- Directorio verificado: `client/src/assets/images/`.
- Candidato principal para mockup hero: `product-sculptural-lighting.png`.
- Assets alternativos disponibles para pruebas visuales: `product-cat-fountain.png`, `product-designer-planters.png`, `product-personalized-gifts.png`.

### Evidencia AC-001 y AC-002 (T015)

- AC-001: El Hero se reestructuro para mantener propuesta de valor + CTA principal en primer viewport en desktop/tablet/mobile con layout responsivo en `client/src/styles/Hero.css`.
- AC-002: Se preservo el copy original del bloque hero (titulo, descripcion y texto de CTA) en `client/src/sections/Hero.jsx`.

## Decision 1: Conversion primaria

- Decision: Definir conversion primaria como clic en CTA hacia contacto (incluye formulario y otros medios).
- Rationale: Permite una metrica unica, evita ambiguedad en analitica y alinea jerarquia visual con objetivo de negocio.
- Alternatives considered:
  - Envio de formulario unicamente.
  - Cualquier interaccion con CTA.

## Decision 2: Jerarquia above the fold

- Decision: Hero en dos columnas (mensaje + CTA, mockup) en desktop y apilado en mobile.
- Rationale: Mantiene lectura inmediata de propuesta de valor y visibilidad del CTA en primer viewport.
- Alternatives considered:
  - Hero centrado con mockup secundario.
  - Hero solo textual sin recurso visual principal.

## Decision 3: Estrategia de mockup

- Decision: Usar mockup principal optimizado, con dimensiones reservadas y prioridad de carga controlada.
- Rationale: Refuerza comprension del servicio evitando inestabilidad visual y bloqueos de render.
- Alternatives considered:
  - Galeria de mockups en carrusel.
  - Video auto-play como pieza principal.

## Decision 4: Reduccion de friccion en navegacion

- Decision: Navegacion sticky compacta con maximo 5 accesos y CTA persistente.
- Rationale: Reduce decision fatigue y acorta ruta hacia contacto.
- Alternatives considered:
  - Navegacion extensa con multiples subniveles.
  - Navegacion no sticky.

## Decision 5: Accesibilidad y calidad visual

- Decision: Establecer criterios minimos de contraste, foco visible, teclado y alt text como gate obligatorio.
- Rationale: Garantiza uso inclusivo y consistencia funcional en desktop/mobile.
- Alternatives considered:
  - Validacion parcial solo de contraste.
  - Accesibilidad tratada como mejora posterior.

## Decision 6: Metas de rendimiento

- Decision: Fijar como objetivos LCP <= 2.5s y CLS <= 0.1 para la landing.
- Rationale: Protege experiencia percibida y evita degradacion del flujo de conversion.
- Alternatives considered:
  - Sin metas numericas.
  - Metas solo cualitativas.

## Validacion de rendimiento mockup (T020)

- Escenario: Hero con mockup principal integrado en primer viewport (`client/src/sections/Hero.jsx`).
- Medidas de estabilidad aplicadas:
  - Se definieron `width` y `height` explicitos en la imagen del mockup.
  - Se mantuvo composicion responsiva estable en `client/src/styles/Hero.css` para desktop/tablet/mobile.
  - Se configuro carga prioritaria above-the-fold con `loading="eager"`.
- Resultado de validacion: comportamiento sin saltos visibles de layout en pruebas locales y cumplimiento del objetivo funcional de CLS <= 0.1 para esta iteracion de implementacion.
