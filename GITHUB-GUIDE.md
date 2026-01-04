# Guía para Subir Groove a GitHub

## Paso 1: Instalar Herramientas de Desarrollo de Xcode

Si se te abre una ventana emergente, haz clic en "Instalar". O ejecuta:

```bash
xcode-select --install
```

Espera a que termine la instalación (puede tardar unos minutos).

---

## Paso 2: Inicializar Git en el Proyecto

```bash
cd /Users/matiasoscaryennerich/Documents/Trabajos/2026/Groove/groove

# Inicializar repositorio
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Groove optimizado para producción"
```

---

## Paso 3: Crear Repositorio en GitHub

1. Ve a https://github.com
2. Haz clic en el botón **"+"** (arriba a la derecha) → **"New repository"**
3. Configuración:
   - **Repository name**: `groove` (o el nombre que prefieras)
   - **Description**: "Sitio web de Groove - Agencia Digital"
   - **Visibility**: Elige Public o Private
   - ❌ **NO** marques "Add README" (ya tenemos uno)
   - ❌ **NO** marques "Add .gitignore" (ya tenemos uno)
4. Haz clic en **"Create repository"**

---

## Paso 4: Conectar y Subir a GitHub

GitHub te mostrará una pantalla con comandos. Usa estos (reemplaza `TU-USUARIO` con tu usuario de GitHub):

```bash
# Añadir el repositorio remoto
git remote add origin https://github.com/TU-USUARIO/groove.git

# Cambiar a rama main (si es necesario)
git branch -M main

# Subir el código
git push -u origin main
```

Si te pide usuario y contraseña, usa tu **Personal Access Token** en lugar de la contraseña.

---

## Paso 5: Verificar en GitHub

Ve a tu repositorio en GitHub y verifica que todos los archivos estén ahí.

---

## 🎯 Archivos que se Subirán

✅ Todo el código fuente (`src/`)
✅ Archivos de configuración (`vite.config.ts`, `package.json`)
✅ Documentación (`README.md`, `DEPLOYMENT.md`)
✅ Assets y recursos (`public/`, `src/assets/`)

❌ **NO se subirá** (gracias al `.gitignore`):
- `node_modules/` (dependencias)
- `dist/` (archivos de build)
- `.env` (variables privadas)

---

## 🚀 Después de Subir a GitHub

### Opción A: Deploy con Vercel (Recomendado)

1. Ve a https://vercel.com
2. Haz clic en **"New Project"**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Vite
5. Haz clic en **"Deploy"**
6. ¡Listo! Tu sitio estará en línea en ~2 minutos

### Opción B: Deploy con Netlify

1. Ve a https://app.netlify.com
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Conecta con GitHub y selecciona tu repositorio
4. Configuración automática detectada
5. Haz clic en **"Deploy site"**
6. ¡Listo!

---

## 📝 Notas Importantes

- **La carpeta `dist/` no se sube a GitHub** porque se genera automáticamente
- **Vercel y Netlify ejecutarán `npm run build` automáticamente**
- Los cambios futuros: solo haz `git add .`, `git commit -m "mensaje"`, `git push`

---

## ❓ ¿Necesitas Ayuda?

Si tienes problemas con algún paso, avísame y te ayudo a resolverlo.
