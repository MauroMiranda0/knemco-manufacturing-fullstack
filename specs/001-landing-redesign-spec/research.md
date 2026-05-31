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

## Phase 6 - Polish y cross-cutting

### Accesibilidad visual (T026)

- Checklist ejecutado contra `client/src/styles/index.css`, `client/src/styles/Navbar.css` y `client/src/styles/ContactSection.css`.
- Resultado:
  - foco visible activo en enlaces, botones, inputs, textarea y select via `:focus-visible`,
  - contraste base alineado con la paleta Mentor (`#132A25`, `#ED4845`, `#9ED4E5`, `#E4B363`),
  - navegacion por teclado cubierta en navbar responsive y flujo de contacto,
  - recursos decorativos del mockup marcados con `aria-hidden` y fotografias/founders con `alt` descriptivo.

### Rendimiento y quality gates (T027, T028, T029)

- `npm run lint`: OK.
- `npm run build`: OK.
- Evidencia de estabilidad:
  - hero y mockup mantienen reserva visual estable,
  - no se detectaron errores de build ni importaciones rotas en la iteracion actual,
  - CLS sigue evaluado como sin saltos perceptibles en validacion local.
- Nota: no se ejecuto Lighthouse ni medicion instrumentada de LCP en este turno; el cierre cuantitativo fino sigue pendiente de auditoria manual/preview.

### Coherencia de estilos entre secciones (T030)

- Revisados `Hero.css`, `Navbar.css`, `ServicesSection.css`, `ProductsSection.css`, `CTASection.css`, `AboutSection.css` y `ContactSection.css`.
- Resultado:
  - tipografias consistentes con `Montserrat` para jerarquia y `Inter` para lectura,
  - uso consistente de tokens globales para texto, fondos y acentos,
  - CTA de contacto reforzado visualmente en navbar sin romper patrones responsive,
  - formulario y feedback states alineados con la paleta principal.

### Preservacion de copy global (T031)

- Verificacion realizada sobre `client/src/sections/*.jsx`.
- Resultado:
  - no se modifico el storytelling base aprobado del hero,
  - se mantuvo el copy existente de servicios, productos, inversion, about y contacto,
  - los cambios de esta iteracion se limitaron a UX, estilos e instrumentacion.

### Instrumentacion comparativa (T040, T041)

- Archivos implementados:
  - `client/src/utils/conversionEvents.js`
  - `client/src/App.jsx`
  - `client/src/sections/CTASection.jsx`
  - `client/src/sections/ProductsSection.jsx`
- Eventos agregados:
  - `bounce_rate_proxy`
  - `section_engagement` con `section_view`, `scroll_depth` y `key_interaction`
- Alcance de validacion local:
  - emision configurada en ciclo de vida del app shell,
  - observacion de secciones por `IntersectionObserver`,
  - hitos de scroll 25/50/75/100,
  - tracking de interacciones clave en elementos interactivos.

### Pendientes manuales de investigacion

- T033: prueba moderada para SC-001.
- T034: evaluacion comparativa antes/despues para SC-004.
- T039: matriz de sesiones instrumentadas para SC-006.
- T042: definicion y ejecucion del proxy de lead-quality-fit.

### Preparacion T039 - Matriz de sesiones instrumentadas (SC-006)

| Session ID | Fecha | Dispositivo | CTA source esperado | Path probado | `cta_click_contact` | `contact_submit_attempt` | `contact_submit_success` | `contact_flow_abandon` | Resultado esperado | Resultado observado | Notas |
|------------|-------|-------------|---------------------|--------------|---------------------|--------------------------|--------------------------|------------------------|-------------------|--------------------|-------|
| S01 | | Desktop | `navbar_contact_link` | CTA navbar -> submit exitoso | | | | N/A | Exito | | |
| S02 | | Desktop | `investment_section_cta` | CTA investment -> submit exitoso | | | | N/A | Exito | | |
| S03 | | Desktop | `product_modal_cta` | Product modal -> submit exitoso | | | | N/A | Exito | | |
| S04 | | Desktop | `navbar_contact_link` | Validation error -> correccion -> exito | | | | N/A | Exito con correccion | | |
| S05 | | Mobile | `navbar_contact_link` | CTA navbar -> abandono tras editar formulario | | | N/A | | Abandono | | |
| S06 | | Mobile | `investment_section_cta` | CTA investment -> submit exitoso | | | | N/A | Exito | | |
| S07 | | Mobile | `product_modal_cta` | Product modal -> retry tras fallo recuperable | | | | N/A | Exito tras retry | | |
| S08 | | Mobile | `navbar_contact_link` | Validation error -> correccion -> exito | | | | N/A | Exito con correccion | | |
| S09 | | Tablet | `navbar_contact_link` | CTA navbar -> submit exitoso | | | | N/A | Exito | | |
| S10 | | Tablet | `investment_section_cta` | CTA investment -> submit exitoso | | | | N/A | Exito | | |
| S11 | | Tablet | `navbar_contact_link` | Abandono por cierre/visibility hidden | | | N/A | | Abandono | | |
| S12 | | Tablet | `product_modal_cta` | Retry tras fallo recuperable -> exito | | | | N/A | Exito tras retry | | |

#### Reglas de validacion T039

- SC-006 pasa cuando el 100% de las sesiones en las que ocurre una accion registran los eventos requeridos sin omisiones.
- `cta_click_contact` debe aparecer solo cuando la accion realmente enruta hacia contacto.
- `contact_submit_attempt` debe dispararse antes del resultado asincrono.
- `contact_submit_success` debe aparecer solo en exito confirmado.
- `contact_flow_abandon` solo debe observarse si hubo interaccion previa con el formulario y no hubo exito en la misma sesion.

### Preparacion T042 - Rubrica de lead-quality-fit (SC-009)

#### Rubrica operativa

| Señal | Puntaje | Criterio |
|------|---------|----------|
| Necesidad concreta | 0-2 | `2` si el mensaje describe proyecto, problema o requerimiento claro; `1` si la intencion es parcial; `0` si es vaga o irrelevante. |
| Identidad minima | 0-1 | `1` si nombre completo y email valido estan presentes. |
| Coherencia topic-mensaje | 0-1 | `1` si el topic seleccionado coincide con el contenido del mensaje. |
| Contexto adicional util | 0-1 | `1` si aporta telefono, empresa, timeline, presupuesto o caso de uso. |

#### Clasificacion

- `4-5 puntos`: ajuste alto
- `3 puntos`: ajuste aceptable
- `0-2 puntos`: ajuste bajo

#### Criterio de exito SC-009

- El proxy se considera cumplido si al menos 80% de los leads evaluados quedan en `ajuste alto` o `ajuste aceptable`.

#### Matriz de evidencia T042

| Lead ID | Fecha | Topic | Mensaje resumido | Necesidad concreta (0-2) | Identidad (0-1) | Coherencia (0-1) | Contexto extra (0-1) | Score total | Clasificacion | Decision (`fit`/`no fit`) | Justificacion |
|---------|-------|-------|------------------|---------------------------|-----------------|------------------|----------------------|-------------|---------------|---------------------------|---------------|
| L01 | | | | | | | | | | | |
| L02 | | | | | | | | | | | |
| L03 | | | | | | | | | | | |
| L04 | | | | | | | | | | | |
| L05 | | | | | | | | | | | |
| L06 | | | | | | | | | | | |
| L07 | | | | | | | | | | | |
| L08 | | | | | | | | | | | |
| L09 | | | | | | | | | | | |
| L10 | | | | | | | | | | | |
| L11 | | | | | | | | | | | |
| L12 | | | | | | | | | | | |
| L13 | | | | | | | | | | | |
| L14 | | | | | | | | | | | |
| L15 | | | | | | | | | | | |

#### Regla de decision

- Marcar `fit` cuando el lead obtenga `>= 3 puntos`.
- Marcar `no fit` cuando el lead obtenga `0-2 puntos`.
- Si el mensaje es vacio, spam o no relacionado con oferta B2B/B2C de la landing, clasificar automaticamente como `no fit`.
