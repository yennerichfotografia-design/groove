# Rediseño del Home de Groove — estética "Spector" (Framer)

**Fecha:** 2026-06-25
**Referencia visual:** https://spector.framer.website/
**Estado:** Aprobado (dirección + estrategia + hero)

## Objetivo

Rediseñar el home de Groove adoptando el lenguaje visual y los efectos de
Spector (agencia editorial, oscuro, tipografía display gigante, grilla técnica,
bloques de metadata, motion premium), manteniendo la identidad de marca de Groove
(acento verde neón) y reutilizando los videos e información existentes.

NO es un clon pixel-a-pixel: es Groove al mismo nivel de calidad y con el mismo
vocabulario de efectos.

## Decisiones tomadas

1. **Dirección visual:** Oscuro + verde Groove. Fondo casi negro, texto blanco,
   acento `#72FF56` (en lugar del rojo de Spector).
2. **Estrategia:** Hero primero. Construir el sistema visual base + hero, validar
   en localhost, y recién después propagar a las 15 secciones restantes.
3. **Video del hero:** `hero-video.mp4` (596 KB, ya en public/).
4. **Stack:** Vite + React + TS. Librería de animación `Motion` v12 (ya instalada).
   Bilingüe es/en vía `LanguageContext` (respetar).

## Sistema visual global (base)

- Tema oscuro: fondo `#0a0a0a`, texto blanco, acento verde `#72FF56`.
- Tipografía display gigante: reutilizar tokens fluidos existentes
  (`--text-hero-lg` escala hasta 10rem). Inter pesada de base.
- Grilla técnica ("blueprint") superpuesta sobre el hero.
- Cursor custom.
- Scroll suave (estilo Lenis).
- Reutilizar tokens de easing existentes (`--ease-out-strong`, etc.) y `Motion`.

## Hero (pieza estrella)

- Fondo full-bleed: `hero-video.mp4` oscurecido + grilla encima + parallax.
- Bloques de metadata en esquinas (info real de Groove):
  - Arriba izq: `GROOVE✱` · "Estudio Digital" · ubicación (Paraná, Entre Ríos).
  - Arriba der: tag `2K26` + servicios apilados (Branding / Web / AI Photography / Strategy).
- Titular gigante (copy actual): "Tu marca merece ir más rápido", con "ir más
  rápido" en verde, animado con máscara de texto al cargar.
- CTA magnético + indicador de scroll animado.
- Bilingüe.

## Efectos a incluir (vocabulario Spector)

Reveal / máscaras de texto al scroll, parallax en el video, grilla animada,
cursor custom, botones magnéticos, scroll suave, micro-interacciones en hover.

## Validación

`npm run dev` → http://localhost:5173. Iteración por vista en el navegador del
usuario (no usa el modo headless, que falla por RAM en esta máquina).

## Alcance de esta primera etapa

Sistema visual global (tokens oscuros + utilidades: grilla, cursor, smooth scroll)
+ Hero completo. El resto de las secciones se rediseñan en etapas posteriores
reutilizando este lenguaje.
