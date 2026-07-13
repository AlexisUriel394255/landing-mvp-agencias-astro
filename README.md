# MVP Landing Page Premium para Agencias Digitales

MVP bilingüe (EN/ES) de alta conversión diseñado exclusivamente para agencias digitales. Construido con una arquitectura Headless acoplada a la nube para garantizar una puntuación de 100% en Core Web Vitals y PageSpeed.

## 🚀 Stack Tecnológico
- **Frontend:** Astro (SSG nativo para rendimiento extremo)
- **Estilos:** Tailwind CSS v4 via Vite plugin
- **Interactividad 3D:** React + TypeScript estricto (Componente `<RobotViewer />`)
- **Headless CMS:** Sanity CMS (`@sanity/client`) con esquemas bilingües en tiempo de ejecución

## 🛠️ Arquitectura y Características
- **Traducción Reactiva:** Sistema dinámico que conmuta el DOM instantáneamente mediante `data-attributes` e inyección de variables (`define:vars`), persistiendo la preferencia en `localStorage`.
- **Formulario Inteligente B2B:** Script del cliente con interceptor nativo, sanitización de entradas y bloqueo estricto de dominios masivos (`gmail`, `yahoo`, etc.) para asegurar leads corporativos puros.
- **Contenedores Elásticos:** Ajuste responsivo `aspect-square` para optimizar la cámara del viewport 3D de Spline sin cortes.

## 💻 Desarrollo Local

1. Instalar dependencias en la raíz:
   ```bash
   npm install
   ```
2. Levantar el entorno de la Landing Page:
   ```bash
   npm run dev
   ```
3. (Opcional) Levantar el panel local del CMS:
   ```bash
   cd agencias-mvp-cms
   npm run dev
   ```
