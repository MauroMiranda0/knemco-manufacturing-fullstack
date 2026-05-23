# Research: Knemco Landing Redesign Optimization

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
