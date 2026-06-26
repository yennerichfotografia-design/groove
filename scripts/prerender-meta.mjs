/**
 * Prerender estático del <head> por ruta.
 *
 * Corre DESPUÉS de `vite build`. Toma dist/index.html (con los assets ya hasheados)
 * y genera una copia por ruta con los meta tags (title, description, canonical,
 * Open Graph, Twitter) reemplazados por los de esa ruta.
 *
 * Resultado: cuando un robot SIN JavaScript (WhatsApp, Facebook, LinkedIn, X) pide
 * /proyecto/isla-brew, recibe el HTML con el título e imagen de ESE proyecto.
 * Los usuarios reales reciben lo mismo y la SPA hidrata normalmente encima.
 *
 * No usa navegador/Chromium: es puro string replace sobre el HTML.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES, PROJECTS, SITE } from './seo-data.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const template = readFileSync(join(DIST, 'index.html'), 'utf8');

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Reemplaza por valor literal (sin interpretar $) usando función de reemplazo. */
const sub = (html, regex, value) => html.replace(regex, () => value);

function injectMeta(html, meta) {
  const { title, description, keywords, canonical, image, type = 'website' } = meta;
  const t = esc(title);
  const d = esc(description);
  const k = esc(keywords || '');
  let h = html;

  // \s+ tolera meta tags escritos en una o dos líneas (atributo y content separados).
  h = sub(h, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  h = sub(h, /<meta name="title"\s+content="[^"]*"/, `<meta name="title" content="${t}"`);
  h = sub(h, /<meta name="description"\s+content="[^"]*"/, `<meta name="description" content="${d}"`);
  if (k) h = sub(h, /<meta name="keywords"\s+content="[^"]*"/, `<meta name="keywords" content="${k}"`);
  h = sub(h, /<link rel="canonical"\s+href="[^"]*"/, `<link rel="canonical" href="${canonical}"`);

  // Open Graph
  h = sub(h, /<meta property="og:type"\s+content="[^"]*"/, `<meta property="og:type" content="${esc(type)}"`);
  h = sub(h, /<meta property="og:url"\s+content="[^"]*"/, `<meta property="og:url" content="${canonical}"`);
  h = sub(h, /<meta property="og:title"\s+content="[^"]*"/, `<meta property="og:title" content="${t}"`);
  h = sub(h, /<meta property="og:description"\s+content="[^"]*"/, `<meta property="og:description" content="${d}"`);
  h = sub(h, /<meta property="og:image"\s+content="[^"]*"/, `<meta property="og:image" content="${image}"`);
  h = sub(h, /<meta property="og:image:secure_url"\s+content="[^"]*"/, `<meta property="og:image:secure_url" content="${image}"`);

  // Twitter
  h = sub(h, /<meta name="twitter:url"\s+content="[^"]*"/, `<meta name="twitter:url" content="${canonical}"`);
  h = sub(h, /<meta name="twitter:title"\s+content="[^"]*"/, `<meta name="twitter:title" content="${t}"`);
  h = sub(h, /<meta name="twitter:description"\s+content="[^"]*"/, `<meta name="twitter:description" content="${d}"`);
  h = sub(h, /<meta name="twitter:image"\s+content="[^"]*"/, `<meta name="twitter:image" content="${image}"`);

  return h;
}

function writeRoute(routePath, html) {
  // /sobre-mi -> dist/sobre-mi/index.html  (Vercel sirve el index.html del directorio)
  const outDir = join(DIST, routePath);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html, 'utf8');
}

let count = 0;

// Rutas estáticas
for (const [path, meta] of Object.entries(ROUTES)) {
  const canonical = `${SITE}${path}`;
  writeRoute(path, injectMeta(template, { ...meta, canonical }));
  count++;
}

// Proyectos
for (const [slug, p] of Object.entries(PROJECTS)) {
  const canonical = `${SITE}/proyecto/${slug}`;
  const meta = {
    title: `${p.title} · ${p.category} | Proyectos Groove`,
    description: p.description,
    keywords: `${p.title}, ${p.category}, portfolio Groove, proyecto de branding, caso de éxito`,
    canonical,
    image: p.image,
    type: 'article',
  };
  writeRoute(`/proyecto/${slug}`, injectMeta(template, meta));
  count++;
}

console.log(`✓ prerender-meta: ${count} rutas con <head> propio generadas en dist/`);
