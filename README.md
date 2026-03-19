# Kitty World - Juego de Gatos

Un juego web divertido ambientado en el mundo de los gatos, creado con HTML5, CSS y JavaScript.

## Cómo ejecutar

1. Abre `index.html` en tu navegador web favorito.
2. Haz clic en "Empezar Juego" para crear tu personaje.
3. Elige un nombre y selecciona una raza de gato.
4. ¡Explora el mundo virtual moviendo a tu gato con las flechas del teclado!
5. Acércate a la casa para entrar al interior.

## Características del Juego

- **Creación de Personaje**: Elige nombre y raza de gato (Birmano, Persa, Mau Egipcio, Siamés, Esfinge)
- **Mundo Exterior**: Jardín con casa, árboles y río
- **Movimiento**: Controla a tu gato con las flechas del teclado
- **Animación**: El gato "camina" cuando se mueve
- **Casa Interior**: Explora el interior con cama, comida, juguetes y ventana
- **Sprites Personalizados**: Usa tus propias imágenes de pixel art para los gatos

## Despliegue en servidor

Para desplegar el juego en un servidor (como una VM local), sigue estos pasos:

1. Clona el repositorio: `git clone https://github.com/adrianbelmonte302/kitty-world.git`
2. Entra al directorio: `cd kitty-world`
3. Ejecuta el script de instalación: `bash install.sh` (requiere sudo)
4. Accede al juego en `http://localhost` o `http://<IP-del-servidor>`

El script instala Nginx y configura el sitio en el puerto 80.

## Estructura del proyecto

- `index.html`: Página principal con el launcher
- `styles.css`: Estilos para la interfaz
- `script.js`: Lógica JavaScript básica
- `pixelart/`: Carpeta para imágenes personalizadas de pixel art
- `README.md`: Este archivo

## Pixel Art Personalizado

Puedes crear tus propias imágenes de pixel art para los gatos. Las especificaciones son:

- **Formato**: PNG con transparencia
- **Tamaño**: 64x64 píxeles
- **Estilo**: Pixel art (colores sólidos, sin anti-aliasing)

Coloca tus imágenes en la carpeta `pixelart/` con estos nombres:
- `birmano.png`
- `persa.png`
- `mau-egipcio.png`
- `siames.png`
- `esfinge.png`

Si no hay imágenes personalizadas, el juego usará pixel art generado por código como respaldo.

## Próximos pasos

- Implementar la lógica del juego
- Agregar gráficos y sonidos
- Crear niveles y mecánicas de juego
- Mejorar la interfaz de usuario

¡Diviértete programando tu juego de gatos!