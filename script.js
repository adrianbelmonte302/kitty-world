// Kitty World Game Launcher Script

// Image loading for cat breeds
const catImages = {};
const breeds = ['birmano', 'persa', 'mau-egipcio', 'siames', 'esfinge'];

function loadCatImages() {
    return Promise.all(breeds.map(breed => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                catImages[breed] = img;
                resolve();
            };
            img.onerror = () => {
                console.warn(`Failed to load image for ${breed}, using fallback`);
                resolve(); // Resolve anyway to not block other images
            };
            img.src = `pixelart/${breed}.png`;
        });
    }));
}

function drawCatCanvases() {
    const canvases = document.querySelectorAll('.pixel-cat');
    canvases.forEach(canvas => {
        const breed = canvas.dataset.breed;
        const ctx = canvas.getContext('2d');
        canvas.width = 64;
        canvas.height = 64;

        if (catImages[breed]) {
            // Draw from loaded image
            ctx.drawImage(catImages[breed], 0, 0, 64, 64);
        } else {
            // Fallback to hardcoded pixel data
            drawFallbackPixelArt(ctx, breed);
        }
    });
}

function drawFallbackPixelArt(ctx, breed) {
    const fallbackData = getFallbackPixelData(breed);
    if (!fallbackData) return;

    const pixelSize = 8;
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            ctx.fillStyle = fallbackData[y][x];
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}

function getFallbackPixelData(breed) {
    const fallbacks = {
        birmano: [
            ['#fff', '#d4a574', '#d4a574', '#fff', '#d4a574', '#d4a574', '#fff', '#d4a574'],
            ['#d4a574', '#8b4513', '#8b4513', '#d4a574', '#d4a574', '#8b4513', '#8b4513', '#d4a574'],
            ['#d4a574', '#8b4513', '#000', '#000', '#d4a574', '#000', '#000', '#8b4513'],
            ['#d4a574', '#8b4513', '#000', '#fff', '#fff', '#000', '#8b4513', '#d4a574'],
            ['#d4a574', '#8b4513', '#000', '#fff', '#fff', '#000', '#8b4513', '#d4a574'],
            ['#d4a574', '#8b4513', '#000', '#fff', '#fff', '#000', '#8b4513', '#d4a574'],
            ['#d4a574', '#8b4513', '#8b4513', '#d4a574', '#d4a574', '#8b4513', '#8b4513', '#d4a574'],
            ['#fff', '#d4a574', '#d4a574', '#fff', '#d4a574', '#d4a574', '#fff', '#d4a574']
        ],
        persa: [
            ['#fff', '#ffb6c1', '#ffb6c1', '#fff', '#ffb6c1', '#ffb6c1', '#fff', '#ffb6c1'],
            ['#ffb6c1', '#ffb6c1', '#ffb6c1', '#fff', '#fff', '#ffb6c1', '#ffb6c1', '#ffb6c1'],
            ['#ffb6c1', '#ffb6c1', '#000', '#000', '#fff', '#000', '#000', '#ffb6c1'],
            ['#ffb6c1', '#ffb6c1', '#000', '#fff', '#fff', '#000', '#ffb6c1', '#ffb6c1'],
            ['#ffb6c1', '#ffb6c1', '#000', '#fff', '#fff', '#000', '#ffb6c1', '#ffb6c1'],
            ['#ffb6c1', '#ffb6c1', '#000', '#fff', '#fff', '#000', '#ffb6c1', '#ffb6c1'],
            ['#ffb6c1', '#ffb6c1', '#ffb6c1', '#fff', '#fff', '#ffb6c1', '#ffb6c1', '#ffb6c1'],
            ['#fff', '#ffb6c1', '#ffb6c1', '#fff', '#ffb6c1', '#ffb6c1', '#fff', '#ffb6c1']
        ],
        'mau-egipcio': [
            ['#fff', '#daa520', '#daa520', '#fff', '#daa520', '#daa520', '#fff', '#daa520'],
            ['#daa520', '#000', '#000', '#daa520', '#daa520', '#000', '#000', '#daa520'],
            ['#daa520', '#000', '#000', '#000', '#daa520', '#000', '#000', '#000'],
            ['#daa520', '#000', '#000', '#fff', '#fff', '#000', '#000', '#daa520'],
            ['#daa520', '#000', '#000', '#fff', '#fff', '#000', '#000', '#daa520'],
            ['#daa520', '#000', '#000', '#fff', '#fff', '#000', '#000', '#daa520'],
            ['#daa520', '#000', '#000', '#daa520', '#daa520', '#000', '#000', '#daa520'],
            ['#fff', '#daa520', '#daa520', '#fff', '#daa520', '#daa520', '#fff', '#daa520']
        ],
        siames: [
            ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
            ['#fff', '#4169e1', '#4169e1', '#fff', '#fff', '#4169e1', '#4169e1', '#fff'],
            ['#fff', '#4169e1', '#000', '#000', '#fff', '#000', '#000', '#4169e1'],
            ['#fff', '#4169e1', '#000', '#fff', '#fff', '#000', '#4169e1', '#fff'],
            ['#fff', '#4169e1', '#000', '#fff', '#fff', '#000', '#4169e1', '#fff'],
            ['#fff', '#4169e1', '#000', '#fff', '#fff', '#000', '#4169e1', '#fff'],
            ['#fff', '#4169e1', '#4169e1', '#fff', '#fff', '#4169e1', '#4169e1', '#fff'],
            ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
        ],
        esfinge: [
            ['#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460'],
            ['#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460'],
            ['#f4a460', '#f4a460', '#000', '#000', '#f4a460', '#000', '#000', '#f4a460'],
            ['#f4a460', '#f4a460', '#000', '#f4a460', '#f4a460', '#000', '#f4a460', '#f4a460'],
            ['#f4a460', '#f4a460', '#000', '#f4a460', '#f4a460', '#000', '#f4a460', '#f4a460'],
            ['#f4a460', '#f4a460', '#000', '#f4a460', '#f4a460', '#000', '#f4a460', '#f4a460'],
            ['#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460'],
            ['#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460', '#f4a460']
        ]
    };
    return fallbacks[breed];
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');

    // Load cat images first, then draw them
    loadCatImages().then(() => {
        console.log('Images loaded, drawing canvases');
        drawCatCanvases();
    }).catch(error => {
        console.error('Error loading images:', error);
        // Fallback to drawing with pixel data if images fail
        drawCatCanvases();
    });

    const launcher = document.getElementById('launcher');
    const characterCreation = document.getElementById('character-creation');
    const startBtn = document.getElementById('start-btn');
    const optionsBtn = document.getElementById('options-btn');
    const exitBtn = document.getElementById('exit-btn');
    const creationForm = document.getElementById('creation-form');
    const breedOptions = document.querySelectorAll('.breed-option');
    let selectedBreed = null;

    console.log('Elements found:', launcher, characterCreation, startBtn);

    startBtn.addEventListener('click', function() {
        console.log('Start button clicked');
        launcher.style.display = 'none';
        characterCreation.style.display = 'block';
    });

    optionsBtn.addEventListener('click', function() {
        // Aquí irá el menú de opciones
        alert('Opciones: (Próximamente)');
    });

    exitBtn.addEventListener('click', function() {
        // En un navegador, esto no cierra la pestaña, pero podemos mostrar un mensaje
        if (confirm('¿Quieres salir de Kitty World?')) {
            window.close(); // Esto puede no funcionar en todos los navegadores
        }
    });

    // Breed selection
    breedOptions.forEach(option => {
        option.addEventListener('click', function() {
            console.log('Breed selected:', this.dataset.breed);
            breedOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedBreed = this.dataset.breed;
        });
    });

    // Form submission
    creationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const catName = document.getElementById('cat-name').value.trim();
        if (!catName || !selectedBreed) {
            alert('Recuerda que debes elegir un nombre y una raza para tu gatito.');
            return;
        }

        console.log('Creating cat:', catName, selectedBreed);

        // Guardar datos del gato
        const catData = {
            name: catName,
            breed: selectedBreed
        };
        localStorage.setItem('kittyWorldCat', JSON.stringify(catData));

        // Mostrar pantalla del juego
        characterCreation.style.display = 'none';
        showGameScreen(catData);
    });

    // Back to launcher button
    document.getElementById('back-to-launcher').addEventListener('click', function() {
        const gameScreen = document.getElementById('game-screen');
        const launcher = document.getElementById('launcher');
        gameScreen.style.display = 'none';
        launcher.style.display = 'block';
    });
});

function showGameScreen(catData) {
    const gameScreen = document.getElementById('game-screen');
    const catNameDisplay = document.getElementById('cat-name-display');
    const catBreedDisplay = document.getElementById('cat-breed-display');
    const catSprite = document.getElementById('cat-sprite');

    // Mostrar información del gato
    catNameDisplay.textContent = catData.name;
    catBreedDisplay.textContent = catData.breed.replace('-', ' ');

    // Configurar sprite del gato con la imagen de la raza
    catSprite.src = `pixelart/${catData.breed}.png`;

    // Mostrar pantalla del juego
    gameScreen.style.display = 'block';

    // Inicializar movimiento del gato
    initCatMovement(catData);
}

function initCatMovement(catData) {
    const catSprite = document.getElementById('cat-sprite');
    const house = document.getElementById('house');
    let catX = 200;
    let catY = 300;
    const moveSpeed = 10;
    let isMoving = false;
    let moveTimeout;

    // Posición inicial
    catSprite.style.left = catX + 'px';
    catSprite.style.top = catY + 'px';

    // Función para verificar si el gato está en la puerta
    function checkDoorCollision() {
        const houseRect = house.getBoundingClientRect();
        const catRect = catSprite.getBoundingClientRect();

        // Verificar si el gato está cerca de la puerta (zona de colisión)
        const doorX = houseRect.left + houseRect.width / 2;
        const doorY = houseRect.top + houseRect.height / 2;
        const distance = Math.sqrt(Math.pow(catRect.left - doorX, 2) + Math.pow(catRect.top - doorY, 2));

        if (distance < 80) { // Distancia de activación
            enterHouse(catData);
        }
    }

    // Event listeners para movimiento
    document.addEventListener('keydown', function(e) {
        const gameScreen = document.getElementById('game-screen');
        if (gameScreen.style.display !== 'block') return;

        let moved = false;

        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                catY = Math.max(0, catY - moveSpeed);
                moved = true;
                break;
            case 'ArrowDown':
                e.preventDefault();
                catY = Math.min(window.innerHeight - 64, catY + moveSpeed);
                moved = true;
                break;
            case 'ArrowLeft':
                e.preventDefault();
                catX = Math.max(0, catX - moveSpeed);
                moved = true;
                break;
            case 'ArrowRight':
                e.preventDefault();
                catX = Math.min(window.innerWidth - 64, catX + moveSpeed);
                moved = true;
                break;
        }

        if (moved) {
            catSprite.style.left = catX + 'px';
            catSprite.style.top = catY + 'px';

            // Agregar clase de movimiento para animación
            catSprite.classList.add('moving');

            // Limpiar timeout anterior
            clearTimeout(moveTimeout);

            // Remover clase de movimiento después de un tiempo
            moveTimeout = setTimeout(() => {
                catSprite.classList.remove('moving');
            }, 150);

            // Verificar colisión con la puerta
            checkDoorCollision();
        }
    });
}

function enterHouse(catData) {
    const gameScreen = document.getElementById('game-screen');
    const houseInterior = document.getElementById('house-interior');
    const houseCatName = document.getElementById('house-cat-name');
    const houseCatBreed = document.getElementById('house-cat-breed');
    const houseCatSprite = document.getElementById('house-cat-sprite');

    // Ocultar mundo exterior
    gameScreen.style.display = 'none';

    // Mostrar interior de la casa
    houseInterior.style.display = 'block';

    // Configurar información del gato en la casa
    houseCatName.textContent = catData.name;
    houseCatBreed.textContent = catData.breed.replace('-', ' ');
    houseCatSprite.src = `pixelart/${catData.breed}.png`;

    // Inicializar movimiento del gato dentro de la casa
    initHouseCatMovement();

    // Agregar event listener para salir de la casa
    document.getElementById('exit-house').addEventListener('click', function() {
        houseInterior.style.display = 'none';
        gameScreen.style.display = 'block';
    });
}

function initHouseCatMovement() {
    const houseCatSprite = document.getElementById('house-cat-sprite');
    const bed = document.getElementById('bed');
    const houseRoom = document.getElementById('house-room');
    const arrowKeys = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
    let catX = 250;
    let catY = 250;
    const moveSpeed = 8;
    let isMoving = false;
    let moveTimeout;
    let isSleeping = false;
    let sleepIndicator = null;
    let bedAvoidanceTimer = 0;
    const bedAvoidanceDelay = 1200;

    // Posición inicial
    houseCatSprite.style.left = catX + 'px';
    houseCatSprite.style.top = catY + 'px';

    // Función para verificar si el gato está cerca de la cama
    function checkBedCollision() {
        if (isSleeping) return; // Si ya está durmiendo, no verificar

        if (Date.now() - bedAvoidanceTimer < bedAvoidanceDelay) return;

        const bedRect = bed.getBoundingClientRect();
        const catRect = houseCatSprite.getBoundingClientRect();

        // Centro de la cama
        const bedCenterX = bedRect.left + bedRect.width / 2;
        const bedCenterY = bedRect.top + bedRect.height / 2;

        // Centro del gato
        const catCenterX = catRect.left + catRect.width / 2;
        const catCenterY = catRect.top + catRect.height / 2;

        // Distancia entre centros
        const distance = Math.sqrt(Math.pow(catCenterX - bedCenterX, 2) + Math.pow(catCenterY - bedCenterY, 2));

        if (distance < 80) { // Distancia para activar dormir
            // Mover al gato dentro de la cama antes de dormir
            catX = bedRect.left + bedRect.width / 2 - 32; // Centrar en la cama (32 es la mitad del ancho del sprite)
            catY = bedRect.top + bedRect.height / 2 - 32; // Centrar en la cama (32 es la mitad del alto del sprite)
            houseCatSprite.style.left = catX + 'px';
            houseCatSprite.style.top = catY + 'px';

            startSleeping();
        }
    }

    // Función para hacer que el gato se duerma
    function startSleeping() {
        isSleeping = true;
        houseCatSprite.classList.add('sleeping');
        houseCatSprite.classList.remove('moving');

        // Crear indicador de dormir
        sleepIndicator = document.createElement('div');
        sleepIndicator.className = 'sleep-indicator';
        sleepIndicator.textContent = '� Durmiendo en la cama...';
        sleepIndicator.style.left = (catX + 16) + 'px'; // Centrar mejor
        sleepIndicator.style.top = (catY - 40) + 'px'; // Más arriba
        document.getElementById('house-room').appendChild(sleepIndicator);

        // El gato se despierta después de 5 segundos
        setTimeout(() => {
            wakeUp();
        }, 5000);
    }

    // Función para despertar al gato
    function wakeUp() {
        isSleeping = false;
        houseCatSprite.classList.remove('sleeping');

        if (sleepIndicator) {
            sleepIndicator.remove();
            sleepIndicator = null;
        }
    }

    function clampCatPosition() {
        const roomWidth = houseRoom.clientWidth;
        const roomHeight = houseRoom.clientHeight;
        catX = Math.max(0, Math.min(roomWidth - 64, catX));
        catY = Math.max(0, Math.min(roomHeight - 64, catY));
    }

    function moveCatAwayFromBed(direction) {
        const leaveDistance = 140;
        const bedCenterX = bed.offsetLeft + bed.offsetWidth / 2 - 32;
        const bedCenterY = bed.offsetTop + bed.offsetHeight / 2 - 32;

        switch(direction) {
            case 'ArrowUp':
                catX = bedCenterX;
                catY = bed.offsetTop - leaveDistance;
                break;
            case 'ArrowDown':
                catX = bedCenterX;
                catY = bed.offsetTop + bed.offsetHeight + leaveDistance - 64;
                break;
            case 'ArrowLeft':
                catX = bed.offsetLeft - leaveDistance;
                catY = bedCenterY;
                break;
            case 'ArrowRight':
                catX = bed.offsetLeft + bed.offsetWidth + leaveDistance - 64;
                catY = bedCenterY;
                break;
            default:
                catX = bedCenterX;
                catY = bed.offsetTop - leaveDistance;
        }

        clampCatPosition();
        houseCatSprite.style.left = catX + 'px';
        houseCatSprite.style.top = catY + 'px';
        bedAvoidanceTimer = Date.now();
    }

    // Event listeners para movimiento dentro de la casa
    document.addEventListener('keydown', function(e) {
        const houseInterior = document.getElementById('house-interior');
        if (houseInterior.style.display !== 'block') return;

        let moved = false;

        // Si está durmiendo y presiona una flecha, despertarlo y salir de la cama
        if (isSleeping && arrowKeys.has(e.key)) {
            e.preventDefault();
            wakeUp();
            moveCatAwayFromBed(e.key);
            // Después de despertar, procesar el movimiento normalmente
        }

        if (isSleeping) return; // Si sigue durmiendo, no procesar movimiento

        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                catY = Math.max(0, catY - moveSpeed);
                moved = true;
                break;
            case 'ArrowDown':
                e.preventDefault();
                catY = Math.min(window.innerHeight - 64, catY + moveSpeed);
                moved = true;
                break;
            case 'ArrowLeft':
                e.preventDefault();
                catX = Math.max(0, catX - moveSpeed);
                moved = true;
                break;
            case 'ArrowRight':
                e.preventDefault();
                catX = Math.min(window.innerWidth - 64, catX + moveSpeed);
                moved = true;
                break;
        }

        if (moved) {
            houseCatSprite.style.left = catX + 'px';
            houseCatSprite.style.top = catY + 'px';

            // Agregar clase de movimiento para animación
            houseCatSprite.classList.add('moving');

            // Limpiar timeout anterior
            clearTimeout(moveTimeout);

            // Remover clase de movimiento después de un tiempo
            moveTimeout = setTimeout(() => {
                houseCatSprite.classList.remove('moving');
            }, 150);

            // Verificar colisión con la cama
            checkBedCollision();
        }
    });
}
