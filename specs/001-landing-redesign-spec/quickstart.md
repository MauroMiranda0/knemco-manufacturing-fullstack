# Quickstart: Knemco Landing Redesign Optimization

## 1) Preparacion

1. Abrir proyecto en la rama que contiene el rediseño activo (`main` o la branch de trabajo equivalente).
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
3. Verificar que el storytelling base no cambie respecto al baseline aprobado, salvo el label del CTA principal del hero.
4. Validar que la conversion primaria sea clic en CTA hacia contacto.

## 4) Validacion UX y calidad

1. Verificar navegacion sticky compacta (maximo 5 accesos).
2. Verificar flujo de baja friccion hacia contacto.
3. Validar accesibilidad base:
   - contraste,
   - foco visible,
   - navegacion por teclado,
   - tratamiento accesible coherente del mockup (decorativo u opcionalmente descriptivo segun su rol).

## 5) Validacion de rendimiento

1. Ejecutar auditoria de rendimiento en entorno local/preview.
2. Confirmar metas:
   - LCP <= 2.5s
   - CLS <= 0.1

## 6) Criterio de salida

La feature queda lista para tareas cuando todos los checks del spec y plan se
cumplen sin alterar el storytelling base y con conversion primaria medible.

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

## 8) Notas finales de implementacion

1. Estado automatizado validado en esta iteracion:
   - `npm run lint` OK.
   - `npm run build` OK.
   - Hero con CTA principal hacia contacto (`Start Your Project`) y tracking `hero_primary_cta`.
   - Navegacion sticky con 5 accesos visibles y CTA de contacto destacado.
   - Formulario con estados de `validation_error`, `processing_failure`, `retry`, `success` y `contact_flow_abandon`.
   - Instrumentacion adicional de `bounce_rate_proxy` y `section_engagement` activa desde `client/src/utils/conversionEvents.js`.
   - Ajustes responsive aplicados a hero, navbar, product cards, modal, footer y bloque About.
2. Checklist de accesibilidad visual ejecutado sobre la implementacion actual:
   - contraste base validado contra la paleta definida en `client/src/styles/index.css`,
   - foco visible mantenido via `:focus-visible`,
   - navegacion por teclado soportada en navbar, CTAs y formulario,
   - recursos visuales con texto alternativo o `aria-hidden` segun su rol.
3. Pendientes manuales para cierre total de success criteria:
   - SC-001 prueba con muestra de usuarios,
   - SC-004 comparativa antes/despues,
   - SC-006 matriz de sesiones instrumentadas,
   - SC-009 rubrica y medicion de lead-quality-fit.

## 9) Preparacion de sesiones instrumentadas (T039)

1. Abrir DevTools y registrar listener temporal para observar eventos:
   ```js
   window.addEventListener('knemco:conversion', ({ detail }) => console.log(detail));
   ```
2. Ejecutar una matriz minima de 12 sesiones manuales:
   - 4 desktop,
   - 4 mobile,
   - 4 tablet.
3. Cubrir al menos estos caminos:
   - CTA navbar -> submit exitoso,
   - CTA investment -> submit exitoso,
   - CTA product modal -> submit exitoso,
   - abandono tras empezar formulario,
   - validation error -> correccion -> exito,
   - processing failure -> retry -> exito.
4. Verificar por sesion que, cuando aplique, aparezcan exactamente:
   - `cta_click_contact`,
   - `contact_submit_attempt`,
   - `contact_submit_success`.
5. Registrar evidencia en la matriz de `research.md`:
   - fecha,
   - dispositivo,
   - source del CTA,
   - eventos observados,
   - resultado final,
   - notas de consistencia.

## 10) Protocolo de lead-quality-fit proxy (T042)

1. Usar una muestra minima de 15 leads de prueba o sesiones equivalentes con formulario completado.
2. Evaluar cada lead con la siguiente rubrica de 0 a 5:
   - `2 puntos`: mensaje describe necesidad concreta o proyecto real,
   - `1 punto`: email valido y nombre completo presentes,
   - `1 punto`: seleccion de tema coherente con el mensaje,
   - `1 punto`: incluye contexto adicional util (telefono, empresa, timeline, presupuesto o caso de uso).
3. Clasificacion operativa:
   - `4-5`: ajuste alto,
   - `3`: ajuste aceptable,
   - `0-2`: ajuste bajo.
4. Criterio de exito para SC-009:
   - al menos 80% de los leads evaluados deben caer en `ajuste alto` o `ajuste aceptable`.
5. Registrar en `research.md`:
   - identificador de lead/sesion,
   - topic,
   - score,
   - clasificacion,
   - justificacion breve,
   - decision final (`fit` / `no fit`).
