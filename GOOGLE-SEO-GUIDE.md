# Guía: Google Analytics y Search Console para Groove

## 🎯 Objetivo
Configurar Google Analytics para ver métricas de visitantes y Google Search Console para aparecer en búsquedas de Google.

---

## 📊 Parte 1: Google Analytics (Métricas)

### Paso 1: Crear cuenta de Google Analytics

1. **Ve a**: https://analytics.google.com
2. Inicia sesión con tu cuenta de Google
3. Clic en **"Empezar a medir"** o **"Start measuring"**
4. Completa los datos:
   - **Nombre de la cuenta**: "Groove"
   - **Nombre de la propiedad**: "Groove Design"
   - **Zona horaria**: Argentina (GMT-3)
   - **Moneda**: Peso argentino (ARS)
5. Acepta los términos y condiciones
6. Clic en **"Crear"**

### Paso 2: Configurar flujo de datos web

1. Selecciona plataforma: **Web**
2. Configura:
   - **URL del sitio web**: `https://groovedesign.com.ar`
   - **Nombre del flujo**: "Sitio Web Groove"
3. Clic en **"Crear flujo"**
4. **COPIA** el **ID de medición** (formato: `G-XXXXXXXXXX`)

### Paso 3: Instalar el código en tu sitio

Necesitamos agregar el código de tracking a tu sitio. Ejecuta estos comandos:

```bash
cd /Users/matiasoscaryennerich/Documents/Trabajos/2026/Groove/groove

# Crear archivo de variables de entorno
echo "VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX" > .env

# Reemplaza G-XXXXXXXXXX con tu ID real de Google Analytics
```

Luego, edita el archivo `index.html` para agregar el script de Google Analytics.

**IMPORTANTE**: Guarda el ID de medición que empieza con `G-`.

---

## 🔍 Parte 2: Google Search Console (Aparecer en Google)

### Paso 1: Agregar tu sitio a Search Console

1. **Ve a**: https://search.google.com/search-console
2. Inicia sesión con tu cuenta de Google
3. Clic en **"Agregar propiedad"** o **"Add property"**
4. Selecciona tipo: **Prefijo de URL**
5. Ingresa: `https://groovedesign.com.ar`
6. Clic en **"Continuar"**

### Paso 2: Verificar propiedad del dominio

Google te dará varias opciones de verificación. **La más fácil para Netlify**:

**Opción A: Etiqueta HTML (Recomendado)**
1. Copia el código de verificación (algo como `<meta name="google-site-verification" content="XXXXX" />`)
2. Agrégalo al `<head>` de tu `index.html`
3. Haz deploy del cambio
4. Vuelve a Search Console y clic en **"Verificar"**

**Opción B: Registro DNS**
1. Google te dará un registro TXT
2. Ve a Netlify DNS
3. Agrega un registro TXT con el valor que te dio Google
4. Espera 15 minutos
5. Vuelve a Search Console y clic en **"Verificar"**

### Paso 3: Enviar Sitemap

Tu sitio necesita un sitemap para que Google indexe todas las páginas.

1. En Search Console, ve a **"Sitemaps"** en el menú lateral
2. Agrega esta URL: `https://groovedesign.com.ar/sitemap.xml`
3. Clic en **"Enviar"**

---

## 📄 Crear Sitemap.xml

Crea un archivo `sitemap.xml` en la carpeta `public/`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://groovedesign.com.ar/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://groovedesign.com.ar/sobre-mi</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://groovedesign.com.ar/preguntas-frecuentes</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://groovedesign.com.ar/fotografia-ia</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 🚀 Implementación Rápida

### Script de instalación de Google Analytics

Te voy a ayudar a agregar Google Analytics automáticamente. Solo necesito que me des:

**Tu ID de medición de Google Analytics** (ejemplo: `G-ABC123XYZ`)

Y yo:
1. Creo el sitemap.xml
2. Agrego el código de Google Analytics al index.html
3. Configuro el meta tag de verificación de Search Console (si me lo proporcionas)
4. Hago commit y push automático

---

## ⏱️ Tiempos de Indexación

- **Google Analytics**: Datos en tiempo real inmediatos
- **Google Search Console**: 
  - Verificación: Inmediata
  - Indexación de páginas: 1-7 días
  - Aparecer en resultados: 1-4 semanas

---

## 📊 ¿Qué Verás en Google Analytics?

- Visitantes en tiempo real
- Páginas más visitadas
- De dónde vienen tus visitantes
- Dispositivos usados (móvil, desktop)
- Tiempo en el sitio
- Tasa de rebote

## 🔍 ¿Qué Verás en Search Console?

- Posición en búsquedas de Google
- Palabras clave que usan para encontrarte
- Número de clics desde Google
- Errores de indexación
- Mejoras de SEO

---

## ✅ Checklist

- [ ] Crear cuenta de Google Analytics
- [ ] Obtener ID de medición (G-XXXXXXXXXX)
- [ ] Instalar código de Analytics en el sitio
- [ ] Crear cuenta de Search Console
- [ ] Verificar propiedad del dominio
- [ ] Crear y subir sitemap.xml
- [ ] Enviar sitemap a Search Console

---

## 🆘 ¿Necesitas Ayuda?

Dime en qué paso estás y te ayudo a completarlo o lo hago automáticamente si me das los IDs necesarios.
