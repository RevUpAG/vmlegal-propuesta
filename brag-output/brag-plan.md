# Brag Plan: VM Legal — Propuesta de sitio web

## What is this app?
Una propuesta comercial navegable para una firma de abogados de Medellín: una
página que argumenta el rediseño con hallazgos medibles del sitio actual, y
detrás de un CTA, el sitio nuevo completo y funcionando.

## The angle
**Los números son la historia.** No se trata de "hicimos una página bonita":
se trata de que el sitio anterior entregaba 404 KB de HTML en 74 archivos y
bloqueaba el zoom, y el nuevo pesa 109 KB en 6 archivos y no falla un solo
criterio de contraste. El video es un before/after de cifras verificables que
aterriza en el producto real funcionando en un celular.

Específico de este proyecto: ningún otro video puede usar estas cifras. Salieron
de medir el código publicado, no de un template de agencia.

## Hook (first 2-3 seconds)
Negro (#101820). Sin logo, sin intro. Entra **404 KB** a pantalla casi completa
en Oswald ligero, y debajo, pequeño: `en una sola página`. Un número tan absurdo
para una página de texto que obliga a quedarse a ver de qué se trata.

## Key moments (the middle)
- El apilado del diagnóstico: **404 KB** → **74 archivos** → **0 metadatos**,
  llegando uno por uno y quedándose juntos en pantalla.
- El corte: las tres cifras colapsan y entra **109 KB · 6 archivos**.
- El sitio real en un celular: el hero, el carrusel de áreas deslizándose,
  un desplegable abriéndose y el filtro de circulares respondiendo a un toque.

## Outro / punchline
El logo de VM Legal sobre blanco, y una sola línea: **"El mismo contenido.
Una cuarta parte del peso."** Luego el link. Silencio, no chiste.

## User flow worth showing
Sí, hay flujo y es el centro del video:
1. **Entrada** — la propuesta abre en el hero y el visitante baja al diagnóstico.
2. **Acción clave** — pulsa el CTA y entra al sitio terminado; ahí desliza el
   carrusel de áreas, abre un desplegable y toca un chip de área en circulares.
3. **Resultado** — la lista de circulares aparece filtrada, sin recargar.

Las escenas 3 y 4 son ese flujo. Las escenas 1, 2 y 5 lo enmarcan.

## Tone
- Preset: `polished`
- Creative direction: informe de auditoría que se convierte en producto
- Interpretation: nada grita. Las cifras entran con peso y se quedan quietas;
  el producto se muestra funcionando, no se describe. Tipografía ligera y
  espaciada, transiciones suaves, y una sola idea por escena. La contención
  es el argumento: una firma de abogados no necesita que le vendan con ruido.

## Format: landscape — 1920x1080
## Duration: 22s

> Nota: `polished` pide 3-4 escenas y este plan usa 5. La quinta existe porque
> el flujo real del producto (deslizar, abrir, filtrar) no cabe en una sola
> escena sin atropellarlo, y mostrar el producto en uso manda sobre la regla.

## Visual identity (from the project)
Tomado de `assets/css/brand.css`, que a su vez salió del sitio oficial.

- Background (oscuro): `#101820`
- Background (claro): `#F2F7FB` · superficie `#FFFFFF` · borde `#E4E9EE`
- Accent (teal del logo): `#0093BD`
- Accent sobre fondo oscuro: `#5CC8E8`
- Accent sólido / texto teal: `#04748f`
- Text: `#232323` (titulares) · `#545454` (cuerpo) · `#706F6F` (secundario)
- Display font: **Oswald** (200-400, mayúsculas, letter-spacing amplio)
- Body font: **Open Sans** (300-700)
- Strongest visual element: el logo VM Legal — "VM" en teal con trazos
  geométricos abiertos sobre "Villegas Melo | Legal" en gris. Archivos listos:
  `assets/img/logo-vmlegal.webp` (color) y `logo-vmlegal-white.webp` (calado).

## Share copy (draft)
Le medimos el sitio a una firma de abogados: 404 KB de HTML en 74 archivos, y el
zoom bloqueado. El reemplazo pesa 109 KB en 6 archivos y no falla un solo
criterio de contraste. 👉 revupag.github.io/vmlegal-propuesta

## Audio direction
- Role: cama musical corporativa sobria con acentos secos y escasos
- Music: `happy-beats-business-moves-vol-12-by-ende-dot-app.mp3` (steady y limpio,
  el indicado para `polished`)
- Music treatment: arranca en 0.0 a volumen 0.32, sin fade-in marcado; fade-out
  de 1.2s desde 20.8s hasta el final. Nunca compite con la lectura.
- Music cue guidance: preset leído en
  `<skill-dir>/assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json`
  — tempo 109.96 BPM, rejilla de beats cada ~0.55s.
  **Tres anclajes fuertes (los únicos tres):** `8.74s` (el celular entra),
  `10.93s` (el carrusel desliza), `18.56s` (el logo del cierre).
  Ventanas de rejilla para revelados secuenciales: las tres cifras del
  diagnóstico en `1.64 / 2.73 / 3.82` (cada dos beats, ~1.09s de separación:
  por encima del piso de lectura de 0.8s). El resto ignora los cues.
- Audio-reactive treatment: sutil; que el halo teal detrás del celular y la
  viñeta del fondo oscuro respiren con el RMS. Nada de ondas, barras ni
  ecualizadores, y que el texto no escale nunca con la música.
- SFX posture: escaso, pegado al movimiento real. Máximo 7 cues en todo el
  video, todos entre 0.50 y 0.70 de volumen. Si alguno suena de más, se quita.
- Audio-coupled moments: llegada de cada cifra del diagnóstico (drop suave);
  el golpe de "109 KB" (un solo impacto sordo); el deslizamiento del carrusel
  (card slide); el toque en el chip de área (click de interfaz); el
  desplegable abriéndose (switch corto); el logo del cierre (campana suave).
- Restraint rule: ni un sonido en los momentos de lectura pura. Nada de
  whooshes en las transiciones. El silencio entre cifras es parte del tono.

## Storyboard

### Scene 1 — El diagnóstico — 5.3s  (0.0 → 5.3)
Fondo `#101820`, viñeta suave. Arriba, pequeño y espaciado, el eyebrow
`EL SITIO ANTERIOR, MEDIDO` en `#5CC8E8`. En el centro entran tres cifras en
Oswald 200, blancas, con su etiqueta en Open Sans 300 gris claro debajo:
**404 KB** `de HTML en una sola página` · **74** `archivos CSS y JS` ·
**0** `metadatos para compartir`.
Llegan de a una y **se quedan las tres** hasta el final de la escena.
Sequential/interaction: sí — las tres cifras entran una por una en 1.64 / 2.73 / 3.82,
cada una con un fast-in de ~0.35s y luego quietas; las tres sostenidas juntas
de 3.82 a 5.3 (1.48s de lectura conjunta).
Audio intent: que cada cifra caiga con peso y deje silencio detrás.
Audio-coupled idea: drop suave por cifra, el tercero apenas más presente.
Music: entra la cama a 0.32, sobria.
Transition mood: clean (las cifras colapsan hacia el centro) → Scene 2

### Scene 2 — El corte — 3.44s  (5.3 → 8.74)
El fondo pasa de `#101820` a blanco en un barrido limpio. Las cifras viejas
se apagan y entra, en Oswald 300 `#04748f`: **109 KB** y debajo **6 archivos**.
Etiqueta pequeña arriba en `#706F6F`: `EL SITIO NUEVO`.
Sequential/interaction: no — un solo golpe. Las dos cifras entran juntas en ~6.56
y se sostienen 2.18s.
Audio intent: el punto de giro. Un impacto sordo, nada metálico.
Audio-coupled idea: un único `impactSoft_medium_*` alineado al inicio de la entrada.
Transition mood: soft → Scene 3

### Scene 3 — La página, en la mano — 5.46s  (8.74 → 14.2)
Fondo `#F2F7FB` con halo teal. Entra un marco de celular (proporción 375x812)
ocupando el alto del cuadro. Dentro, el sitio real: header con el logo VM Legal,
y el hero `ASESORÍA LEGAL CON CRITERIO DE NEGOCIO.` — "DE NEGOCIO" en `#0093BD`.
Se desliza el carrusel de áreas: la tarjeta **DERECHO TRIBUTARIO** sale y entra
**DERECHO COMERCIAL**, con la flecha superpuesta visible.
Caption superpuesto a la derecha, Open Sans 300: `Mobile-first de verdad.`
Sequential/interaction: sí — se simula un swipe sobre el carrusel; la tarjeta
se desplaza con snap. La entrada del celular se ancla al cue fuerte de 8.74; el
swipe arranca en 10.93.
Audio intent: que se sienta táctil, no animado.
Audio-coupled idea: `card-slide` al inicio del desplazamiento, nada más.
Transition mood: soft → Scene 4

### Scene 4 — Se abre y se filtra — 4.36s  (14.2 → 18.56)
Mismo celular, se acerca un poco. Dos gestos encadenados:
1. Toque en `VER DETALLE` → el chevron gira y el panel se despliega mostrando el
   texto del área y las etiquetas en píldora (`Planeación fiscal`, `DIAN`, `ICA`).
2. Corte corto a la sección de circulares en su estado inicial —buscador, chips,
   ningún filtro activo— y un toque en el chip `TRIBUTARIO`: aparecen las tarjetas.
Caption superpuesto: `Nada se recarga.`
Sequential/interaction: sí — dos interacciones simuladas con cursor/toque visible.
El desplegable abre ~15.84; el toque en el chip cae ~17.47.
Audio intent: precisión, no juguete.
Audio-coupled idea: `switch_*` corto en el desplegable, `click_*` en el chip.
Transition mood: clean → Scene 5

### Scene 5 — Cierre — 3.44s  (18.56 → 22.0)
Blanco limpio. El logo VM Legal a color entra centrado y se asienta.
Debajo, en Oswald 300 espaciado, una sola línea:
`El mismo contenido. Una cuarta parte del peso.`
Al pie, pequeño en `#04748f`: `revupag.github.io/vmlegal-propuesta`
Sequential/interaction: no.
Audio intent: cerrar, no celebrar.
Audio-coupled idea: campana suave (`bong_001`) sobre la llegada del logo en 18.56.
Music: fade-out de 1.2s desde 20.8s.
Transition mood: — (fin)

**Music mood for this video:** polished — cama corporativa sobria, sin euforia.
**Audio summary:** la cama entra sobria, deja silencio entre las tres cifras del
diagnóstico, marca el giro con un solo impacto, acompaña los gestos del celular
con dos acentos táctiles, y cierra con una campana suave que se apaga en fade.

---

## Restricciones de contenido (obligatorias)

- **Nada de datos de contacto en pantalla.** El sitio real muestra el correo y el
  teléfono de la firma; no deben aparecer en el video. Si una escena encuadra la
  sección de contacto, se recorta o se sustituye por texto genérico.
- **Nombres del equipo:** los siete perfiles son personas reales. No se enfoca
  ninguna ficha del equipo; el carrusel que se muestra es el de áreas.
- **Sin credenciales, rutas locales ni URLs internas.** La única URL en pantalla
  es la pública de GitHub Pages.

## Fuentes de material (todo existe ya en el repo)

| Necesidad | De dónde sale |
|---|---|
| Logo color / calado | `assets/img/logo-vmlegal.webp` · `logo-vmlegal-white.webp` |
| Paleta y tipografía | `assets/css/brand.css` (`:root`) |
| Hero del sitio | `sitio/index.html` → `.s-hero__title` |
| Tarjetas de áreas + etiquetas | `sitio/index.html` → `.area`, `.area__tags` |
| Estado inicial de circulares | `sitio/index.html` → `.filters`, `#circularsStart` |
| Cifras del diagnóstico | `index.html` → `.findings` (medidas sobre el sitio real) |
| Cifras del sitio nuevo | `README.md` → sección de decisiones técnicas |
