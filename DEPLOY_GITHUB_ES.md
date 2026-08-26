# Publicar RaceTwin AI 2026 en GitHub Pages

## Nombre exacto recomendado

**Repositorio:** `RaceTwin-AI-2026`  
**Descripción:** `Open probabilistic race forecasting engine for the 2026 regulation era.`

## Opción sencilla: subir desde el navegador

1. Descomprime `RaceTwin-AI-2026.zip`.
2. Entra a GitHub y selecciona **New repository**.
3. Escribe `RaceTwin-AI-2026` como nombre.
4. Marca el repositorio como **Public**.
5. No agregues README, licencia ni `.gitignore`: ya están incluidos.
6. Presiona **Create repository**.
7. Selecciona **uploading an existing file**.
8. Arrastra **todos los archivos y carpetas que están dentro de la carpeta descomprimida**.
9. Escribe `Initial RaceTwin AI release` y presiona **Commit changes**.

> GitHub puede limitar la cantidad de archivos subidos simultáneamente. Si no acepta todas las carpetas, usa GitHub Desktop con la opción explicada abajo.

## Activar la página

1. Dentro del repositorio, abre **Settings**.
2. En el menú izquierdo, abre **Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions**.
4. Abre la pestaña **Actions**.
5. Selecciona **Deploy RaceTwin to GitHub Pages**.
6. Presiona **Run workflow**.
7. Espera a que aparezca el check verde.

La dirección será:

`https://apepsis.github.io/RaceTwin-AI-2026/`

## Activar actualizaciones gratuitas

El proyecto incluye una automatización denominada **Refresh free prediction snapshot**. Esta consulta standings y clima mediante fuentes públicas durante los fines de semana.

Para ejecutarla manualmente:

1. Abre **Actions**.
2. Selecciona **Refresh free prediction snapshot**.
3. Presiona **Run workflow**.

La automatización nunca convierte los datos públicos en una predicción “exacta”. Genera un snapshot probabilístico y conserva la predicción anterior si una fuente no está disponible.

## Subir con GitHub Desktop

Si GitHub no permite arrastrar todas las carpetas:

1. Instala GitHub Desktop.
2. Selecciona **File → Add local repository**.
3. Elige la carpeta descomprimida.
4. Selecciona **Create a repository** si lo solicita.
5. Realiza el primer commit.
6. Presiona **Publish repository** y asegúrate de que sea público.

## Error común

No subas únicamente el archivo ZIP al repositorio. GitHub Pages necesita que `index.html`, `app.js`, `styles.css` y las carpetas estén descomprimidos en la raíz.
