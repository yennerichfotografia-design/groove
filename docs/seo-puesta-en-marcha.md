# Puesta en marcha SEO — Groove

Guía paso a paso para que Google indexe el sitio y aparezcas en búsquedas locales.
Hacelo en este orden. Todo lo técnico del sitio ya está hecho; esto es lo que va por fuera del código.

---

## 1. Google Search Console (~5 min) — para que Google te indexe rápido

1. Entrá a https://search.google.com/search-console
2. "Agregar propiedad" → elegí **"Prefijo de la URL"** → pegá `https://groovedesign.com.ar`
3. **Verificación**: como el sitio ya tiene Google Analytics (GA4, `G-STSGCJ9R4Y`), elegí el método **"Google Analytics"** y verifica en 1 clic.
   - Tenés que estar logueado con la **misma cuenta de Google** que administra ese GA4.
   - Si ese método no aparece o falla, elegí **"Etiqueta HTML"**, copiá el código `google-site-verification` y pasámelo: lo pego en `index.html` (ya dejé el lugar preparado) y redeployamos.
4. Verificado → menú izquierdo → **Sitemaps** → escribí `sitemap.xml` → **Enviar**.
5. Menú → **Inspección de URLs** → pegá `https://groovedesign.com.ar` → **"Solicitar indexación"**.
   Repetí con 2-3 páginas clave (ej: `/sobre-mi`, un proyecto).

## 2. Bing Webmaster Tools (~3 min) — bonus

Alimenta Bing y también las búsquedas de ChatGPT / Copilot.
1. https://www.bing.com/webmasters → **"Importar desde Google Search Console"** (1 clic, trae todo).

## 3. Perfil de Empresa de Google (~15 min) — EL MÁS IMPORTANTE

Es lo que te hace aparecer en "diseño web Paraná" y en Google Maps. Gratis y rápido.

1. https://www.google.com/business → "Administrar ahora"
2. **Nombre**: `Groove` (o "Groove · Estudio creativo")
3. **Categoría principal**: "Diseñador de sitios web".
   Secundarias: "Agencia de diseño gráfico", "Agencia de marketing".
4. **Ubicación**: si no tenés local de atención, elegí **"Entrego servicios online / a domicilio"** y configurá la zona: **Paraná, Entre Ríos** (+ Argentina). No expongas dirección si no querés.
5. **Datos**: Teléfono `+54 9 3436 98-7030` · Sitio `groovedesign.com.ar`
6. **Verificación**: Google te pide confirmar (teléfono, email o video según el caso). Seguí los pasos.
7. Cuando esté activo: subí **logo + fotos** (podés usar las de la carpeta `Redes/`), completá **horarios**, **descripción** y **servicios** (Branding, Diseño Web, Apps & SaaS, Fotografía, Reels).

## 4. Reseñas (continuo) — peso enorme en local

- Pedile a cada cliente una reseña en el Perfil de Empresa. Google te da un **link directo** para compartir por WhatsApp.

## 5. Backlinks gratis (continuo)

- En el footer de cada web que entregás a clientes: **"Sitio por Groove ↗"** con link a `groovedesign.com.ar`. Cada cliente = un backlink de calidad.
- Directorios: Behance (ya), Clutch, Sortlist, Google sites locales.

---

## Qué esperar

| Acción | Cuándo se ve |
|---|---|
| Indexación tras enviar el sitemap | días a ~2 semanas |
| Perfil de Empresa en Maps | días |
| Rankear orgánico en términos competidos | semanas / meses |

Lo más rápido para que te encuentren: **Perfil de Empresa + reseñas + compartir el sitio**.
