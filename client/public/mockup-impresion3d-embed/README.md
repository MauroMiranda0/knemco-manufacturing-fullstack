# Mockup embebible: Impresion 3D v5

## Contenido
- `knemco-impresion3d.embed.js`: loader del web component.
- `app-embed.jsx`, `cards.jsx`, `icons.jsx`, `printer-v4.jsx`: fuentes React.
- `styles.css`, `styles-v2.css`, `styles-v4.css`, `styles-v5.css`: estilos.
- `assets/gear.png`, `assets/printer-head.png`: recursos.
- `demo.html`: ejemplo funcional.

## Integracion en otro proyecto
1. Copia toda esta carpeta al proyecto destino (por ejemplo en `/public/mockups/impresion3d`).
2. Inserta el script y el tag:

```html
<script src="/mockups/impresion3d/knemco-impresion3d.embed.js" data-knemco-embed></script>
<knemco-impresion3d></knemco-impresion3d>
```

## Notas tecnicas
- El mockup se encapsula en `Shadow DOM` con un custom element.
- El loader compila JSX en runtime con Babel standalone y carga React/ReactDOM desde CDN.
- Requiere servir por `http(s)` (no `file://`) porque usa `fetch` para CSS/JS.
