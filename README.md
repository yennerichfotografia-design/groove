# Groove - Agencia Digital

Sitio web profesional para Groove, agencia digital especializada en diseño web, branding, identidad de marca y fotografía con IA.

## 🚀 Características

- ✅ **Diseño Responsivo**: Optimizado para todos los dispositivos
- ✅ **SEO Optimizado**: Meta tags completos, Open Graph y Twitter Cards
- ✅ **Alto Rendimiento**: Lazy loading, code splitting y optimizaciones
- ✅ **PWA Ready**: Manifest y configuración para Progressive Web App
- ✅ **Error Handling**: Error Boundaries y página 404 personalizada
- ✅ **Accesibilidad**: Diseño accesible y semántico

## 🛠️ Stack Tecnológico

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI
- **Animations**: Motion (Framer Motion)
- **TypeScript**: Tipado completo

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview
```

## 🎯 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm run preview` - Preview del build de producción
- `npm run build:analyze` - Build con análisis de bundle

## 📁 Estructura del Proyecto

```
groove/
├── public/              # Assets estáticos
│   ├── robots.txt      # SEO crawlers
│   ├── manifest.json   # PWA manifest
│   └── _redirects      # Netlify redirects
├── src/
│   ├── app/
│   │   ├── components/ # Componentes React
│   │   ├── contexts/   # Context providers
│   │   └── pages/      # Páginas de la aplicación
│   └── styles/         # Estilos globales y tema
├── index.html          # HTML principal con SEO
├── vite.config.ts      # Configuración de Vite
└── package.json        # Dependencias y scripts
```

## 🚀 Despliegue

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas de despliegue.

### Quick Deploy

**Vercel**:
```bash
npm i -g vercel
vercel
```

**Netlify**:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## ⚡ Optimizaciones Incluidas

- **Code Splitting**: Chunks separados para React, UI y animaciones
- **Lazy Loading**: Carga diferida de rutas
- **Minificación**: Código minificado con Terser
- **Tree Shaking**: Eliminación de código no usado
- **Asset Optimization**: Organización y caché de assets
- **Console Removal**: Logs removidos en producción
- **Font Optimization**: Google Fonts con display swap

## 📝 Licencia

Este proyecto fue desarrollado específicamente para Groove.

## 🔗 Links

- Diseño original: [Figma](https://www.figma.com/design/q1OxuTcZnWno7eVKAzqlpr/groove)