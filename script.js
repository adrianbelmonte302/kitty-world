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

    // Mostrar información del gato
    catNameDisplay.textContent = catData.name;
    catBreedDisplay.textContent = catData.breed.replace('-', ' ');

    // Mostrar pantalla del juego
    gameScreen.style.display = 'block';

    // Inicializar movimiento del gato
    initCatMovement();
}

function initCatMovement() {
    const catSprite = document.getElementById('cat-sprite');
    let catX = 200;
    let catY = 300;
    const moveSpeed = 10;

    // Posición inicial
    catSprite.style.left = catX + 'px';
    catSprite.style.top = catY + 'px';

    // Event listeners para movimiento
    document.addEventListener('keydown', function(e) {
        const gameScreen = document.getElementById('game-screen');
        if (gameScreen.style.display !== 'block') return;

        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                catY = Math.max(0, catY - moveSpeed);
                break;
            case 'ArrowDown':
                e.preventDefault();
                catY = Math.min(window.innerHeight - 60, catY + moveSpeed);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                catX = Math.max(0, catX - moveSpeed);
                break;
            case 'ArrowRight':
                e.preventDefault();
                catX = Math.min(window.innerWidth - 60, catX + moveSpeed);
                break;
        }

        catSprite.style.left = catX + 'px';
        catSprite.style.top = catY + 'px';
    });
}