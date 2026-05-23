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

## 7) Protocolo minimo de evaluacion (SC-001 y SC-004)

1. Definir muestra minima de 15 personas:
   - 8 en mobile
   - 7 en desktop
2. Ejecutar prueba de primera impresion para SC-001:
   - Medir tiempo hasta identificar propuesta de valor y CTA principal.
   - Criterio de exito: al menos 90% de participantes en <= 5 segundos.
3. Ejecutar comparativa antes/despues para SC-004:
   - Mostrar version actual y version redisenada en orden aleatorio.
   - Pregunta cerrada: "Cual version se percibe mas clara y menos dispersa?"
   - Criterio de exito: al menos 85% elige la version redisenada.
4. Registrar resultados con evidencia (fecha, dispositivo, respuesta, tiempo)
   en `specs/001-landing-redesign-spec/research.md`.
