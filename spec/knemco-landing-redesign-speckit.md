# Knemco Manufacturing - Speckit de Rediseño de Landing

## 🎯 Objetivo del Rediseño

- Reestructurar la landing page de **Knemco Manufacturing** para que sea más clara, compacta y orientada a conversión, manteniendo intacto el contenido textual actual.
- Lograr que la propuesta de valor sea **inmediata y explícita** en el primer viewport (above the fold), sin necesidad de scroll.
- Incorporar un bloque visual para **mockup del producto/servicio** que refuerce comprensión y credibilidad en segundos.
- Reducir fricción en navegación y en el flujo de contacto/conversión mediante jerarquía visual, CTAs consistentes y arquitectura de información simplificada.
- Alinear la experiencia visual con un estilo **B2B con ADN startup**: moderno, minimalista, dinámico y con foco en audiencia millennial.

---

## 🎨 Requisitos de UI/UX (Estética Millennial y Cero Fricción)

- **Dirección visual**
  - Minimalismo funcional: menos ruido, más intención.
  - Alto contraste para legibilidad y foco en acciones.
  - Uso de espacios en blanco para separar bloques y reducir carga cognitiva.
  - Microinteracciones sutiles (hover, transiciones cortas) con propósito de feedback, no decorativas.

- **Sistema de diseño**
  - [ ] Definir paleta con 1 color primario, 1 secundario y escala neutra.
  - [ ] Tipografía moderna y legible (2 familias máximo: display + body).
  - [ ] Grid responsivo consistente (desktop/tablet/mobile) con espaciado modular.
  - [ ] Biblioteca de componentes UI reutilizables (botones, cards, badges, secciones, formularios).

- **Jerarquía de contenido (sin cambiar copy)**
  - Mantener **textos y storytelling exactos**; únicamente se permite reordenamiento visual y agrupación.
  - Priorizar en pantalla inicial:
    1) qué hace Knemco,  
    2) para quién,  
    3) acción principal (CTA).
  - Usar recursos de apoyo visual (iconografía, destacados, chips) para mejorar escaneo sin reescribir mensajes.

- **Conversión sin fricción**
  - CTA principal visible desde el primer viewport.
  - CTA secundario de soporte (ej. ver más / contacto) con menor peso visual.
  - Navegación sticky simple (máximo 5 ítems visibles).
  - Evitar saltos de layout y patrones confusos en mobile.

---

## 🖥️ Arquitectura y Visualización (Above the fold y Mockups)

- **Estructura objetivo de la landing**
  - Header compacto + navegación clara + CTA persistente.
  - Hero above the fold con mensaje central (copy actual) + mockup del producto/servicio.
  - Bloques de valor/beneficios en formato escaneable (cards o columnas).
  - Sección de confianza (logos, métricas, pruebas sociales si ya existen en contenido actual).
  - Cierre con CTA final y contacto.

- **Above the fold (no negociable)**
  - [ ] El usuario debe entender qué ofrece Knemco en menos de 3 segundos.
  - [ ] El CTA principal debe estar visible sin scroll en desktop y mobile.
  - [ ] El mockup debe ocupar un lugar protagónico, sin competir con el titular.
  - [ ] El primer viewport debe verse limpio, no sobrecargado, y con una sola acción primaria clara.

- **Área de mockup**
  - Bloque dedicado para visualización del producto/servicio (imagen estática, render o composiciones).
  - Debe incluir variantes responsive:
    - Desktop: mockup lateral o en split layout con titular.
    - Mobile: mockup debajo del mensaje principal, conservando prioridad del CTA.
  - Optimización de assets:
    - [ ] Formatos modernos (`webp`/`avif` cuando aplique).
    - [ ] Carga diferida fuera del primer viewport.
    - [ ] Dimensiones controladas para evitar CLS.

- **Wireframe de referencia (alto nivel)**

```text
[HEADER]
Logo | Nav (5 max) | CTA

[HERO - ABOVE THE FOLD]
Columna A: Titular actual + subtitulo actual + CTA principal + CTA secundario
Columna B: Mockup principal producto/servicio

[SECCION VALOR]
Cards escaneables con copy actual (sin cambios)

[SECCION CONFIANZA]
Elementos existentes (sin alterar texto)

[CIERRE]
CTA final + contacto
```

---

## 🛑 Restricciones Inquebrantables

- [ ] **Prohibido modificar copy/textos/storytelling actuales** (incluye titulares, descripciones, labels y mensajes de CTA).
- [ ] El rediseño es solo de **UI, UX y arquitectura visual**.
- [ ] No introducir nuevos bloques narrativos que alteren el mensaje de negocio.
- [ ] No eliminar secciones existentes sin validación explícita de Product Owner.
- [ ] Priorizar rendimiento y accesibilidad desde el inicio (no como etapa posterior).
- [ ] Mantener consistencia entre desktop, tablet y mobile.

---

## ✅ Criterios de Aceptación (Checklist)

- [ ] La propuesta de valor se entiende en el primer viewport sin scroll.
- [ ] El diseño final se percibe limpio, menos disperso y con jerarquía visual clara.
- [ ] Existe un área de mockup integrada, visible y alineada al mensaje principal.
- [ ] La navegación reduce fricción y guia al usuario hacia conversión.
- [ ] El CTA principal esta visible y destacado en desktop y mobile.
- [ ] El contenido textual original permanece **identico** (0 cambios de copy).
- [ ] La landing cumple estilo startup/millennial: moderna, minimalista, atractiva y dinamica.
- [ ] La implementacion responsive no rompe layout ni orden visual.
- [ ] Cumple estandares base de accesibilidad (contraste, foco, navegacion por teclado, alt text).
- [ ] Cumple objetivos de performance visual (LCP/CLS estables y sin bloqueos innecesarios).

---

### Entregables esperados para Issue/PR

- [ ] Mockup de alta fidelidad (desktop + mobile).
- [ ] Propuesta de sistema visual (colores, tipografia, componentes).
- [ ] Especificacion de layout por secciones con comportamiento responsive.
- [ ] Lista de componentes nuevos/ajustados y estados interactivos.
- [ ] Criterios de QA visual y funcional previos a release.
