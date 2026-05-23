<!--
Sync Impact Report
- Version change: N/A -> 1.0.0
- Modified principles:
  - [PRINCIPLE_1_NAME] -> I. Claridad Inmediata de Propuesta de Valor
  - [PRINCIPLE_2_NAME] -> II. Rediseno Visual Sin Cambios de Copy
  - [PRINCIPLE_3_NAME] -> III. Flujo de Conversion de Cero Friccion
  - [PRINCIPLE_4_NAME] -> IV. UX Responsive y Accesible por Defecto
  - [PRINCIPLE_5_NAME] -> V. Rendimiento Visual y Calidad de Entrega
- Added sections:
  - Restricciones Operativas del Producto
  - Flujo de Trabajo y Control de Calidad
- Removed sections:
  - Ninguna (se reemplazaron secciones de plantilla)
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md (alineado, sin cambios)
  - ✅ .specify/templates/spec-template.md (alineado, sin cambios)
  - ✅ .specify/templates/tasks-template.md (alineado, sin cambios)
  - ✅ .specify/templates/commands/*.md (no existe en este repositorio)
- Follow-up TODOs:
  - Ninguno
-->

# Knemco Manufacturing Fullstack Constitution

## Core Principles

### I. Claridad Inmediata de Propuesta de Valor
Toda experiencia de landing MUST comunicar que hace Knemco en el primer viewport,
sin depender de scroll ni interacciones adicionales. El bloque principal MUST priorizar
mensaje, audiencia objetivo y CTA principal con jerarquia visual explicita.
Rationale: en contexto B2B con ritmo startup, la comprension temprana reduce abandono
y mejora conversion en trafico frio.

### II. Rediseno Visual Sin Cambios de Copy
El contenido textual y storytelling aprobados MUST permanecer identicos en cada
iteracion de rediseno. Se permite ajustar estructura visual, jerarquia, espaciado,
componentes e ilustraciones, pero no se permite reescribir mensajes ni alterar su
intencion original.
Rationale: el objetivo del ciclo es optimizacion visual y de experiencia, no cambio
de narrativa comercial.

### III. Flujo de Conversion de Cero Friccion
La navegacion y los caminos de accion MUST minimizar pasos, ambiguedad y distracciones.
Cada pantalla MUST tener accion primaria inequívoca y CTA visible en desktop y mobile.
Los elementos de interfaz SHOULD reducir carga cognitiva con patrones consistentes,
siempre que no comprometan la claridad del mensaje principal.
Rationale: menor friccion incrementa tasa de avance hacia contacto o accion comercial.

### IV. UX Responsive y Accesible por Defecto
Todo cambio visual MUST implementarse con paridad funcional y de legibilidad en
desktop, tablet y mobile. Los criterios minimos de accesibilidad MUST incluir
contraste adecuado, foco visible, navegacion por teclado y textos alternativos.
Rationale: la experiencia consistente y accesible protege conversion y alcance real.

### V. Rendimiento Visual y Calidad de Entrega
Las decisiones de UI MUST proteger estabilidad visual y tiempos de carga percibidos.
Cada entrega MUST verificar como minimo LCP y CLS dentro de umbrales acordados por el
equipo, junto con QA responsive antes de merge.
Rationale: performance y calidad visual son parte del producto, no actividades finales.

## Restricciones Operativas del Producto

- Queda prohibido modificar copy, titulares, labels y storytelling en tareas de rediseno.
- El alcance de iniciativas de landing se limita a UI, UX y arquitectura de informacion visual.
- Toda propuesta de componentes nuevos MUST mapearse a objetivos de claridad, conversion o confianza.
- Ninguna seccion existente se elimina sin aprobacion explicita del Product Owner.
- La documentacion de spec MUST incluir checklist de aceptacion verificable y medible.

## Flujo de Trabajo y Control de Calidad

1. Definicion: toda iniciativa inicia con spec formal y criterios de exito medibles.
2. Planificacion: el plan MUST pasar Constitution Check antes de implementacion.
3. Ejecucion: tareas se organizan por historias independientes y prioridad de negocio.
4. Revision: todo PR MUST demostrar cumplimiento de copy intacto, claridad above the fold,
   responsive y accesibilidad.
5. Cierre: no se considera terminado sin evidencia de QA visual y validacion de performance.

## Governance

- Esta constitucion prevalece sobre practicas locales en conflicto para alcance de producto,
  experiencia visual y calidad de entrega.
- Cualquier enmienda MUST incluir: contexto, impacto esperado, artefactos afectados y plan de
  adopcion en plantillas activas.
- Politica de versionado:
  - MAJOR: cambios incompatibles en principios o eliminacion de reglas base.
  - MINOR: adicion de principios o expansion material de criterios obligatorios.
  - PATCH: aclaraciones editoriales sin cambio de obligacion.
- Revision de cumplimiento:
  - En planificacion: validar gates de constitucion en plan.md.
  - En implementacion: validar criterios en tasks.md y evidencia en PR.
  - En cierre: confirmar checklist de aceptacion completo.

**Version**: 1.0.0 | **Ratified**: 2026-05-23 | **Last Amended**: 2026-05-23
