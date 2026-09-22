# VM Legal — Propuesta de sitio web

Propuesta comercial y demostración navegable del nuevo sitio web de
**VM Legal S.A.S.** (Medellín, Colombia).

### ▶ Ver en vivo

**https://revupag.github.io/vmlegal-propuesta/**

Ese es el enlace para enviarle al cliente. Abre en la propuesta; el botón
“Sí, quiero ver mi página” lleva al sitio terminado, y desde el sitio hay un
enlace de vuelta. Pensado para abrirse desde el celular.

---

## Qué contiene

| Ruta | Qué es |
|---|---|
| `index.html` | La **propuesta**: diagnóstico del sitio actual, beneficios, comparativa antes/después, proceso y entregables. Termina en el CTA que lleva al sitio. |
| `sitio/index.html` | El **sitio terminado**, navegable y funcional: inicio, la firma, áreas de práctica y equipo en carrusel, actualidad con buscador y contacto. |
| `assets/css/brand.css` | Sistema de marca: color, tipografía, escala y componentes base. |
| `assets/css/propuesta.css` | Estilos de la propuesta. |
| `assets/css/sitio.css` | Estilos del sitio. |
| `assets/js/*.js` | Interacciones, sin librerías externas. |
| `assets/img/` | Logo original de VM Legal en WebP y PNG, más el favicon. |

---

## Branding

Todo se extrajo del sitio oficial `vmlegal.com.co`; nada se inventó.

**Color** — muestreado píxel a píxel del logo original y del CSS del sitio:

| Token | Valor | Origen | Uso |
|---|---|---|---|
| `--vm-teal` | `#0093BD` | Trazo «VM» del logo | Íconos, acentos, títulos grandes |
| `--vm-teal-deep` | `#1986AC` | Acento de UI del sitio actual | Cifras y titulares secundarios |
| `--vm-gray` | `#706F6F` | Palabra «Legal» del logo | Texto secundario |
| `--vm-mist` | `#DFEAF3` | Fondo azul claro del sitio actual | Superficies y bordes |
| `--vm-ink` | `#232323` | Barra oscura del sitio actual | Titulares y fondo oscuro |

**Tipografía** — las mismas del sitio actual:
**Oswald** para titulares (mayúsculas, peso ligero, letra espaciada) y
**Open Sans** para el texto corrido.

**Logo** — es el archivo original `LOGO-VM-LEGAL.png` de VM Legal, recortado
al contenido y con el fondo blanco convertido en transparencia. No se
redibujó, ni se cambiaron sus proporciones ni sus colores.

### Una nota honesta sobre el color y la accesibilidad

El teal del logo, `#0093BD`, da **3.55:1** de contraste sobre blanco. Eso
alcanza para gráficos y títulos grandes, pero **no** para texto pequeño ni
para texto blanco encima (WCAG AA exige 4.5:1).

Para poder cumplir AA sin cambiar la marca, el texto pequeño en teal y los
rellenos con texto blanco encima usan `#04748f` (**5.4:1**): el mismo color,
solo oscurecido. El logo, los íconos y los titulares grandes conservan
`#0093BD` exacto.

Si el cliente prefiere el teal original en todas partes, es una línea en
`assets/css/brand.css`:

```css
--vm-teal-text:  #0093BD;
--vm-teal-solid: #0093BD;
```

---

## Cómo verlo en local

No requiere compilación ni dependencias. Basta con servir la carpeta:

```bash
python3 -m http.server 4173
```

Y abrir `http://localhost:4173`.

---

## Publicación

Ya está publicado con **GitHub Pages** desde la rama `main`, carpeta raíz.
El archivo `.nojekyll` hace que GitHub sirva la carpeta tal cual, sin
procesarla.

Para actualizar el sitio en vivo basta con subir los cambios; el deploy
tarda un par de minutos:

```bash
git add -A && git commit -m "..." && git push
```

Ambas páginas llevan `<meta name="robots" content="noindex, nofollow">`,
así que no aparecen en Google aunque el repositorio sea público. Conviene
quitarlo el día que el sitio se publique de verdad bajo el dominio de la
firma.

---

## Decisiones técnicas

- **HTML, CSS y JavaScript planos.** Sin framework, sin build, sin
  dependencias. Se puede alojar en cualquier parte y sobrevive sin
  mantenimiento.
- **Mobile-first.** Todo se diseñó primero a 375 px y luego se expandió.
  Tipografía fluida con `clamp()`, objetivos táctiles de 48 px mínimo y
  cero desplazamiento horizontal.
- **Carruseles sin librerías.** Áreas y equipo usan `scroll-snap` nativo:
  inercia real al deslizar en el celular y navegables con el teclado. Los
  puntos y el estado de las flechas se sincronizan con la posición real del
  scroll. En móvil las flechas van superpuestas a los lados del track y
  centradas en vertical, lejos de los botones flotantes del borde inferior;
  de tablet en adelante pasan a la fila de controles.
- **Circulares bajo demanda.** La sección arranca sin ningún filtro
  seleccionado: se ven el buscador y las áreas, y la lista solo aparece al
  elegir un área, escribir algo o pulsar «Ver todas». Volver a tocar el área
  activa la deselecciona. Así la sección ocupa 785 px en lugar de 2.900 px
  al entrar.
- **Desplegables.** El detalle de cada área y cada perfil se abre con un
  `aria-expanded` y se anima con `grid-template-rows: 0fr → 1fr`, sin medir
  alturas en JavaScript.
- **Accesibilidad.** Un solo `h1` por página, jerarquía de encabezados sin
  saltos, todo el formulario etiquetado, navegación completa por teclado,
  foco visible, `prefers-reduced-motion` respetado y **cero fallos de
  contraste** en la auditoría automática de ambas páginas, incluso con todos
  los desplegables abiertos.
- **Rendimiento.** La página del sitio pesa **≈ 109 KB en 6 archivos**
  (≈ 181 KB contando las fuentes de Google). El sitio actual entrega
  404 KB solo de HTML, repartidos en 74 archivos CSS y JS.
- **Sin bloqueo de zoom.** El `viewport` no lleva `maximum-scale`, a
  diferencia del sitio actual.

---

## Qué falta definir con el cliente

- **Fotografías del equipo.** El sitio actual no las tiene, así que se usan
  monogramas con las iniciales. Con fotos reales queda mejor.
- **Textos de las áreas de práctica.** El sitio actual solo muestra los
  títulos, sin descripción. Los textos aquí son una propuesta de redacción
  y deben ser aprobados por la firma.
- **Versión en inglés.** Está contemplada en el alcance; en esta
  demostración el selector ENG/ESP es visual.
- **Circulares.** Se cargaron nueve reales, con sus PDF originales. En el
  sitio final se migra el archivo completo (más de 150).
- **Formulario.** Valida en el navegador pero no envía: falta conectarlo al
  correo de la firma.
- **Propuesta económica.** Se entrega en documento aparte.

---

Preparado por **RevUp Agency Group** · 2026
