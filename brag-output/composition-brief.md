# Composition Brief: VM Legal — Video de Propuesta

**For:** Hyperframes CLI render  
**Format:** landscape 1920x1080 | 22 seconds | polished tone  
**Music:** happy-beats-business-moves-vol-12-by-ende-dot-app.mp3  
**SFX:** select (button presses), subtle transitions  

---

## Scene 1: Hook (2 seconds)
**Visual:** Black background (#101820)  
**Text (centered, Oswald 200, 140px, white):** `404 KB`  
**Subtext (Oswald 100, 36px, light gray):** en una sola página

**Action:** Text slides in from top, settles center-top  
**Audio:** Music bed fades in (subtle entry)

---

## Scene 2: Diagnosis Stacked (5 seconds)
**Visual:** Black background (#101820)  
**Layout:** Vertical stack, centered, one per line (Oswald 400, 90px, white)

```
404 KB
↓ (1s pause)
74 archivos  
↓ (1s pause)
0 metadatos
```

**Action:** Each line slides in left-to-right with light teal glow (#5CC8E8) on entry  
**Audio:** Subtle SFX click on each entry (select.mp3, low volume)

---

## Scene 3: The Cut / Transition (2 seconds)
**Visual:** Three lines collapse into center, fade to black momentarily  
**Text (Oswald 100, white, staggered entry):** New numbers emerge

```
109 KB
6 archivos
```

**Action:** Previous text shrinks and exits; new text slides in with success tone  
**Audio:** Subtle chime or "done" SFX (from kenney library)

---

## Scene 4: Product in Action on Mobile (8 seconds)
**Visual:** iPhone frame (silver) centered, portrait orientation  
**Screen content sequence:**

1. **Hero section** (2s) — VM Legal logo top, heading "El mismo contenido", light teal accent line  
2. **Carousel swipe** (2s) — User swipes horizontally; cards slide (areas: Laboral, Civil, Penal)  
3. **Dropdown open** (2s) — Tap on a dropdown; content expands smoothly  
4. **Filter action** (2s) — Tap on "Circulares" category chip; list filters in-view (no reload)

**Phone colors:** Match brand (light background #F2F7FB, teal accents #0093BD)  
**Action:** Smooth, natural interactions; no stutter  
**Audio:** Subtle UI sounds (tap.mp3) on each interaction, music continues under

---

## Scene 5: Outro / Punchline (3 seconds)
**Visual:** White background (#FFFFFF)  
**Center (Oswald 400, 90px, teal #04748f):** VM Legal logo (logo-vmlegal.webp)  
**Subtext (Open Sans 300, 48px, dark gray #232323):** El mismo contenido. Una cuarta parte del peso.

**Action:** Logo and text slide in together from bottom, settle, hold 1.5s  
**Audio:** Final music swell, no SFX  
**Outro:** Fade to white, music trails (outro cut at 22s mark)

---

## Color Palette (from brand.css)
- **Dark background:** #101820
- **Light background:** #F2F7FB
- **Accent (teal):** #0093BD (solid) / #5CC8E8 (bright on dark)
- **Text (dark):** #232323
- **Text (body):** #545454
- **Text (secondary):** #706F6F
- **Border:** #E4E9EE

---

## Typography
- **Display:** Oswald (weights: 200, 400; uppercase; letter-spacing: wide)
- **Body:** Open Sans (weights: 300–700)
- **Rendering:** Anti-aliased, no rasterization

---

## Audio Files
- **Music:** happy-beats-business-moves-vol-12-by-ende-dot-app.mp3 (from bundle)
- **SFX 1:** select.mp3 or button-click.mp3 (scene 2 entries)
- **SFX 2:** success-chime.mp3 or done.mp3 (scene 3 transition)
- **SFX 3:** tap.mp3 (scene 4 interactions)
- All SFX at low volume (–12dB), under music bed

---

## Technical Notes
- **Aspect ratio:** 16:9 (1920×1080)
- **Frame rate:** 30fps
- **Codec:** H.264 or ProRes (as per Hyperframes output)
- **Transition type:** Smooth easing (cubic-easeInOut)
- **Font rendering:** Subpixel anti-aliasing enabled
- **Phone mockup:** Use iPhone 14 Pro outline (or generic frame)

---

## Delivery
- **Output file:** brag.mp4
- **Quality:** High (intended for web + social media)
- **Duration:** Exactly 22 seconds (strict)

---

## Notes for Hyperframes
- Scene 4 (product interaction) is the narrative center; spend most rendering cycles here
- All text is read-only; no dynamic generation
- Phone frame is a static overlay (not an embedded video)
- Music crossfade into outro (not a hard cut) at 20.5s
