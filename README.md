# Recetas con Essen 🥘

**Recetas con Essen** es una aplicación web moderna diseñada para inspirar a los usuarios con recetas deliciosas, prácticas y caseras preparadas utilizando los productos de alta calidad **Essen**. Este proyecto busca facilitar la experiencia de cocina diaria, combinando sabor, estilo y practicidad.

## 🚀 Características

*   **Catálogo de Productos**: Exploración detallada de productos Essen (`src/features/products`).
*   **Diseño Responsivo**: Interfaz optimizada para dispositivos móviles y de escritorio.
*   **Sistema de Diseño Personalizado**: Estilos CSS basados en variables para una identidad visual consistente (sin frameworks CSS pesados).
*   **Integración de Analíticas**: Configuración profesional con Google Tag Manager y Google Analytics.
*   **Optimización de Fuentes**: Uso de `next/font` con la tipografía **Poppins** para una mejor performance y estética.
*   **Arquitectura Modular**: Estructura de código organizada por funcionalidades (`features`) para mayor escalabilidad.

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un stack moderno y eficiente:

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Librería UI**: [React 19](https://react.dev/)
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
*   **Estilos**: CSS Modules & CSS Variables (Custom Design System)
*   **Iconos**: [FontAwesome](https://fontawesome.com/)
*   **Analíticas**: `@next/third-parties` (Google Analytics, GTM)

## 🏁 Comenzando

Sigue estos pasos para levantar el proyecto en tu entorno local.

### Prerrequisitos

*   Node.js (versión 20 o superior recomendada)
*   npm, yarn, pnpm o bun

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd ollas-essen
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    # o
    pnpm install
    ```

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

> **Nota**: El servidor se iniciará por defecto en el puerto `3008` (configurado en `package.json`).
> Abre [http://localhost:3008](http://localhost:3008) en tu navegador para ver la aplicación.

### Construcción (Build)

Para crear una versión optimizada para producción:

```bash
npm run build
```

Para previsualizar la versión de producción localmente:

```bash
npm run start
```

## 📂 Estructura del Proyecto

El código fuente se encuentra principalmente en la carpeta `src/`.

```
src/
├── app/            # Rutas y layouts de Next.js (App Router)
├── config/         # Configuraciones globales
├── data/           # Datos estáticos o mock data
├── features/       # Módulos principales de la aplicación
│   ├── home/       # Lógica y componentes de la página de inicio
│   ├── products/   # Funcionalidad relacionada con productos
│   └── tracking/   # Funcionalidad de seguimiento
├── layouts/        # Componentes de estructura (Header, Footer)
└── lib/            # Utilidades y constantes compartidas
```

## 🚢 Despliegue

### Script de Despliegue
El proyecto incluye un script de automatización `deploy.sh`. Asegúrate de tener los permisos necesarios antes de ejecutarlo.