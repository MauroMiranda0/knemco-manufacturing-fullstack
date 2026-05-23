# Quickstart: Knemco Landing Redesign Optimization

## 1) Preparacion

1. Abrir proyecto en la rama `001-landing-redesign-spec`.
2. Instalar dependencias del frontend:
   - `cd client`
   - `npm install`

## 2) Ejecucion local

1. Iniciar entorno local:
   - `npm run dev`
2. Abrir la landing en navegador desktop y mobile.

## 3) Validacion funcional

1. Confirmar propuesta de valor y CTA principal visibles sin scroll en primer viewport.
2. Confirmar bloque de mockup visible y alineado al mensaje principal.
3. Verificar que el copy no cambie respecto al baseline aprobado.
4. Validar que la conversion primaria sea clic en CTA hacia contacto.

## 4) Validacion UX y calidad

1. Verificar navegacion sticky compacta (maximo 5 accesos).
2. Verificar flujo de baja friccion hacia contacto.
3. Validar accesibilidad base:
   - contraste,
   - foco visible,
   - navegacion por teclado,
   - alt text en mockup.

## 5) Validacion de rendimiento

1. Ejecutar auditoria de rendimiento en entorno local/preview.
2. Confirmar metas:
   - LCP <= 2.5s
   - CLS <= 0.1

## 6) Criterio de salida

La feature queda lista para tareas cuando todos los checks del spec y plan se
cumplen sin cambios de copy y con conversion primaria medible.
