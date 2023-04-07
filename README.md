# Boilerplate de Next.js con Material UI y i18next

Este es un proyecto de inicio para crear aplicaciones con Next.js utilizando Material UI y i18next.
La aplicación también está diseñada para ser una PWA (Aplicación Web Progresiva),
lo que significa que se puede instalar en el dispositivo del usuario y funciona offline.

## Scripts

Los siguientes scripts están disponibles:

- **dev**: Inicia el servidor de desarrollo de Next.js.
- **build**: Compila la aplicación para producción.
- **start**: Inicia la aplicación en modo producción.
- **check**-lint: Verifica el código utilizando ESLint.
- **check**-format: Verifica el formato del código utilizando Prettier.
- **check**-all: Ejecuta los comandos check-lint y check-format.
- **lint**: Verifica y corrige problemas de código utilizando ESLint.
- **format**: Corrige el formato del código utilizando Prettier.
- **format**-all: Ejecuta los comandos format y lint.
- **commit**: Inicia el asistente de Git Commitizen para crear commits con un formato estandarizado.

## Cómo utilizar este proyecto

1. Clona este repositorio.
2. Ejecuta yarn o npm install para instalar las dependencias.
3. Ejecuta yarn dev o npm run dev para iniciar el servidor de desarrollo.
4. Comienza a desarrollar tu aplicación.

## Características adicionales

- La aplicación utiliza la técnica de "code-splitting" de Next.js para cargar solo el código necesario en cada página, lo que resulta en tiempos de carga más rápidos.
- Material UI proporciona un conjunto de componentes predefinidos para construir interfaces de usuario rápidas y coherentes.
- i18next facilita la internacionalización de la aplicación.
- El uso de Prettier y ESLint garantiza que el código se mantenga limpio y legible.
