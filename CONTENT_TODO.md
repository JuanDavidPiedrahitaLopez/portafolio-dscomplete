# Contenido pendiente de confirmar

Este archivo lista toda la información que quedó como placeholder durante
la revisión del portafolio (2026-08-04) porque no fue provista o no pudo
verificarse. Nada de esto se inventó — donde faltaba un dato real, se dejó
una cadena vacía, un comentario `[PLACEHOLDER: ...]` o una nota en este
documento.

## Identidad / configuración central (`src/config/site.js`)

- **GitHub**: `siteConfig.github` está vacío. El enlace de GitHub no se
  muestra en ningún lado (Hero, Footer) hasta que se complete — no se
  renderiza como `#`, simplemente se omite.
- **Dominio definitivo**: `siteConfig.siteUrl` está vacío. `robots.js` y
  `sitemap.js` usan `https://tudominio.com` como marcador de posición
  mientras tanto. **Actualizar antes de publicar**, o el sitemap
  apuntará a un dominio incorrecto.
- **Nombre completo**: se usó "Juan David Piedrahita López", derivado de
  la URL de LinkedIn que diste (`/in/juan-david-piedrahita-lópez`).
  Confirma que es el nombre exacto que quieres mostrar.

## CV (`public/cv/`)

- El botón "Descargar CV" ahora descarga un archivo distinto según el
  idioma activo (`cvPath.es` / `cvPath.en` en `src/config/site.js`).
- `juan-david-piedrahita-lopez-cv.pdf` (ES) y
  `juan-david-piedrahita-lopez-cv-en.pdf` (EN) son **PDFs de una sola
  página generados automáticamente** como marcador de posición (para
  que el botón funcione desde ya) — ninguno de los dos es tu CV real.
  Reemplázalos por los archivos reales con los mismos nombres, o
  cambia las rutas en `src/config/site.js`. Ver `public/cv/README.md`.

## Formulario de contacto (EmailJS)

- `.env.local` existe con las 3 variables vacías
  (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `_TEMPLATE_ID`, `_PUBLIC_KEY`).
  Mientras falten, el formulario muestra el aviso "El formulario todavía
  no está habilitado..." y el botón queda deshabilitado — no simula un
  envío exitoso.
- Recuerda agregar las mismas 3 variables en Vercel (Project Settings →
  Environment Variables) para que funcione en producción.

## Experiencia (`src/data/experience.js`)

Para las 4 experiencias (Docencia Universitaria, Analista de Datos, BI
Analyst, Analítica Avanzada):

- **Empresa y ubicación**: quedaron vacíos en las 4 (no se
  proporcionaron nombres de empresa reales).
- **Un logro adicional por rol**: cada experiencia tiene 2 logros reales
  (reescritos con verbos de acción, mismo significado que el contenido
  original) + un placeholder explícito `[Agregar logro verificable
  adicional de este rol.]` para completar 3 logros por rol.
- **Tecnologías**: solo se marcó "Power BI" en el rol "BI Analyst"
  porque era la única tecnología explícitamente nombrada en el
  contenido original de ese rol. Para "Analista de Datos" (herramientas
  de BI sin especificar) y "Analítica Avanzada" (nube sin especificar
  proveedor) se dejó `technologies: []` — confirma las herramientas
  exactas si quieres que aparezcan como íconos.

## Educación (`src/data/education.js`)

Sección nueva (2026-08-04), agregada con un solo registro totalmente
placeholder porque no se confirmó ningún dato académico real:

- **Institución, ubicación, fechas**: vacíos.
- **Título obtenido**: `[PLACEHOLDER: título obtenido]` — reemplaza con
  el nombre real del programa (p. ej. "Licenciatura en Matemáticas").
- **Detalle**: un placeholder `[Agregar detalle verificable...]` para
  una línea de énfasis, proyecto de grado, tesis, etc.
- El enlace "Educación" ya aparece en la navbar (`#educacion`) y la
  sección se muestra en la página principal entre Experiencia y
  Habilidades, aunque el contenido siga siendo un placeholder. Agrega
  más objetos al arreglo `education` si tienes más de un título.

## Proyectos (`src/data/projects.js`)

Para los 4 proyectos:

- **Año**: vacío en los 4 (`year: ""`).
- **Enlaces** (`repositoryUrl`, `demoUrl`, `documentationUrl`,
  `articleUrl`, `dataSourceUrl`): vacíos en los 4, excepto
  `dataSourceUrl` del proyecto de Alemania, que apunta a
  `https://www.smard.de/` (la fuente pública mencionada). Mientras
  falten, no se muestra ningún botón de enlace (nunca `href="#"`).
- **Métricas** (`metrics: []`): vacías en los 4. El proyecto de
  forecasting mostraba antes números fijos (MAPE 3.42%, etc.) en la
  página de detalle anterior — no había forma de confirmar que fueran
  reales, así que se quitaron. Agrégalos en `metrics` cuando tengas
  cifras verificadas.
- **`dataUsed`, `limitations`, `learnings`**: agregados como campos
  nuevos; donde no había información real se dejó un
  `[PLACEHOLDER: ...]` describiendo qué falta.
- **Proyecto nuevo — Pipeline de datos energéticos de Alemania
  (SMARD)**: creado a partir de la descripción que diste (API/endpoint
  de SMARD-Bundesnetzagentur, arquitectura bronze/silver/gold,
  Databricks, Microsoft Fabric, PySpark, Delta Lake). Queda marcado
  `status: "inProgress"` — **no se presenta como terminado**. El
  espacio para el diagrama de arquitectura (`architectureImage`) está
  vacío y muestra un bloque "Diagrama de arquitectura próximamente" en
  la página de detalle hasta que agregues la imagen real.
- **Categorización**: clasifiqué cada proyecto en una categoría
  (`machineLearning`, `bi`, `dataEngineering`, `dataEngineering` para
  el nuevo) según el contenido técnico que ya existía. Revisa que
  coincida con cómo tú los clasificarías.

## Investigación (`src/data/articles.js`)

**Importante**: los 3 artículos actuales ("SARIMA vs. redes
neuronales...", "Optimización bayesiana...", "Modelado semántico en
Power BI") son **contenido ilustrativo que redacté yo** en una sesión
anterior de este mismo proyecto — no son investigación real tuya ni
publicaciones existentes. Por eso ahora quedan marcados:

- `type: "article"` (la categoría de menor "peso" — nunca "tesis" ni
  "publicación").
- `status: "draft"` (nunca "publicado").
- `institution`, `authors`, `advisor`: vacíos.
- `doi: null` (nunca inventado).
- `year: ""` (el "2024"/"2023" que tenían antes tampoco estaba
  confirmado).

**Debes decidir**: reemplazar estos 3 artículos por investigación /
notas reales tuyas, o eliminarlos del archivo si no aplica. Tal como
está, el sitio ya no los presenta como publicaciones, pero siguen
siendo contenido de ejemplo.

## Habilidades (`src/data/skills.js`)

La clasificación en "Uso profesional" / "Uso en proyectos" /
"Conocimientos complementarios" se derivó así, sin inventar niveles de
dominio:

- **Uso profesional**: solo lo que ya aparece en `experience.js`
  (actualmente solo "Power BI").
- **Uso en proyectos**: lo que ya aparece en `projects.js`.
- **Conocimientos complementarios**: las áreas que tú mencionaste en tu
  mensaje (Machine Learning, Ciencia de Datos, Ingeniería de Datos,
  Series de Tiempo, Visualización de Datos) que todavía no están
  respaldadas por un rol o proyecto concreto en el sitio.

Revisa si esta clasificación refleja tu experiencia real — es la parte
más subjetiva de esta revisión.

## SEO

- Falta una fotografía profesional si quieres usarla (no se agregó
  ninguna; el sitio no tenía foto de perfil antes tampoco).
- Certificaciones: no se agregó una sección de certificaciones porque
  no existía antes y no se proporcionó información — dime si quieres
  que la cree.

## Dependencias

- Se eliminaron `emailjs` (paquete de servidor, nunca importado — el
  formulario usa `@emailjs/browser` en el cliente) y `nodemon`
  (irrelevante para un proyecto Next.js) de `package.json` por no
  usarse en ningún archivo.
- Vulnerabilidades reportadas por `npm audit`: son todas del toolchain
  (Next.js 16.2.4, PostCSS, babel, js-yaml, brace-expansion), previas a
  esta revisión. Arreglarlas con `npm audit fix --force` subiría Next.js
  a 16.3.0, fuera del rango declarado en `package.json` — no lo hice
  sin tu autorización explícita, ya que podría cambiar comportamiento
  del framework.
