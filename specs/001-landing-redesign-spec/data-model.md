# Data Model: Knemco Landing Redesign Optimization

## Entity: HeroBlock

- Description: Contenedor principal de primer viewport con mensaje de valor, CTA principal y soporte visual.
- Fields:
  - `headlineText` (string, readonly): Texto actual del titular (sin cambios de copy).
  - `supportText` (string, readonly): Texto de apoyo actual (sin cambios de copy).
  - `primaryCtaLabel` (string, readonly): Label actual de CTA principal.
  - `primaryCtaTarget` (string): Destino de accion primaria (contacto).
  - `mockupAssetId` (string): Referencia al recurso visual principal.
  - `layoutMode` (enum: desktop-split, mobile-stack): Variante responsiva.
- Validation rules:
  - `headlineText`, `supportText`, `primaryCtaLabel` MUST permanecer iguales al baseline de contenido.
  - `primaryCtaTarget` MUST resolver a seccion o punto de contacto valido.
  - `layoutMode` MUST ser consistente con breakpoint activo.

## Entity: NavigationModel

- Description: Modelo de navegacion primaria para recorrido de baja friccion.
- Fields:
  - `items` (array, max 5): Accesos principales visibles.
  - `isSticky` (boolean): Estado sticky habilitado.
  - `ctaVisible` (boolean): Estado de visibilidad del CTA principal.
- Validation rules:
  - `items.length` MUST ser <= 5.
  - `ctaVisible` MUST ser true en primer viewport de desktop y mobile.

## Entity: MockupAsset

- Description: Recurso visual que representa el producto/servicio.
- Fields:
  - `src` (string): Ruta del asset.
  - `altText` (string): Texto alternativo accesible.
  - `width` (number): Ancho reservado para estabilidad de layout.
  - `height` (number): Alto reservado para estabilidad de layout.
  - `loadPriority` (enum: high, auto, lazy): Prioridad de carga.
- Validation rules:
  - `altText` MUST existir y describir el recurso.
  - `width` y `height` MUST ser > 0.
  - `loadPriority` SHOULD ser `high` solo para mockup above the fold.

## Entity: ConversionEvent

- Description: Evento de medicion de conversion primaria.
- Fields:
  - `eventName` (string): Nombre canonico del evento.
  - `eventType` (enum: cta_click_contact): Tipo de conversion definido.
  - `timestamp` (datetime): Momento del evento.
  - `deviceClass` (enum: desktop, tablet, mobile): Segmentacion por dispositivo.
- Validation rules:
  - `eventType` MUST ser `cta_click_contact`.
  - `eventName` MUST ser consistente en todas las secciones.

## Relationships

- HeroBlock `1:1` MockupAsset (un mockup principal por bloque hero).
- HeroBlock `1:1` ConversionEvent trigger (clic en CTA principal).
- NavigationModel `1:n` HeroBlock anchors (accesos a secciones).

## State Transitions

- HeroBlock:
  - `initial` -> `rendered` -> `interactive`
- MockupAsset:
  - `placeholder` -> `loaded` -> `visible`
- ConversionEvent:
  - `idle` -> `cta_clicked` -> `recorded`
