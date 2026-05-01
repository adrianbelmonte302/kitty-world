# Kitty World - Juego de Gatos

Juego web ambientado en el mundo de los gatos, creado con HTML5, CSS y JavaScript.

## Como ejecutar

1. Abre `index.html` en tu navegador.
2. Haz clic en `Empezar Juego`.
3. Escribe un nombre y elige una raza.
4. Mueve al gatito con las flechas del teclado.
5. Acercate a la casa para entrar.

## Caracteristicas

- Creacion de personaje con nombre y raza.
- Mundo exterior con casa, jardin y rio.
- Interior de casa con cama, comida, ventana, lana y armario.
- Movimiento con teclado en ambos escenarios.
- Animacion de movimiento del gatito.
- Sistema de sueno al acercarte a la cama.
- Sprites personalizados por raza desde `pixelart/`.

## Despliegue en servidor

Para desplegar en una VM Ubuntu/Debian:

1. Clona el repo: `git clone https://github.com/adrianbelmonte302/kitty-world.git`
2. Entra al directorio: `cd kitty-world`
3. Ejecuta el script: `bash install.sh` (usa `sudo`)
4. Abre `http://localhost` o `http://<IP-del-servidor>`

El script instala Nginx y publica el sitio en el puerto 80.

## Estructura

- `index.html`: pantalla principal y vistas del juego.
- `styles.css`: estilos de la interfaz.
- `script.js`: logica del juego.
- `pixelart/`: imagenes PNG de las razas.
- `install.sh`: script de despliegue en VM Linux.

## Pixel Art personalizado

Coloca imagenes PNG de `64x64` en `pixelart/` con estos nombres:

- `birmano.png`
- `persa.png`
- `mau-egipcio.png`
- `siames.png`
- `esfinge.png`

Si falta alguna imagen, el juego usa pixel art de respaldo generado por codigo.
