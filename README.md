# Beachbutler - aplicación para huéspedes

Beachbutler es una Progressive Web App (PWA) diseñada para los huéspedes del hotel que buscan una experiencia gastronómica sin complicaciones durante su estadía en la playa. Con esta aplicación, los usuarios pueden ordenar comida, bebidas y otros productos desde su dispositivo móvil, y recibirlos en la comodidad de su habitación o en la playa.

La interfaz de usuario intuitiva y fácil de usar de Beachbutler permite a los huéspedes navegar por el menú, elegir sus platos y bebidas favoritas y realizar pedidos de manera rápida y sencilla. Además, la aplicación ofrece la opción de personalizar las órdenes, añadiendo o eliminando ingredientes y eligiendo el nivel de condimento deseado.

Beachbutler también cuenta con una función de seguimiento de pedidos en tiempo real, lo que permite a los usuarios saber exactamente cuándo sus órdenes estarán listas para su entrega. Y gracias a la integración con el sistema de pagos del hotel, los huéspedes pueden realizar sus pagos de manera segura y conveniente desde la aplicación.

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

## Características adicionales

- La aplicación utiliza la técnica de "code-splitting" de Next.js para cargar solo el código necesario en cada página, lo que resulta en tiempos de carga más rápidos.
- Material UI proporciona un conjunto de componentes predefinidos para construir interfaces de usuario rápidas y coherentes.
- i18next facilita la internacionalización de la aplicación.
- El uso de Prettier y ESLint garantiza que el código se mantenga limpio y legible.
