// Kitty World Game Launcher Script

// Pixel art data for cat breeds (8x8 grid)
const pixelData = {
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

document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');

    // Draw pixel art on canvases
    const canvases = document.querySelectorAll('.pixel-cat');
    canvases.forEach(canvas => {
        const breed = canvas.dataset.breed;
        const data = pixelData[breed];
        if (!data) return;
        const ctx = canvas.getContext('2d');
        canvas.width = 64;
        canvas.height = 64;
        const pixelSize = 8;
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                ctx.fillStyle = data[y][x];
                ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
            }
        }
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
        if (!catName) {
            alert('Por favor, ingresa un nombre para tu gatito.');
            return;
        }
        if (!selectedBreed) {
            alert('Por favor, selecciona una raza para tu gatito.');
            return;
        }

        console.log('Creating cat:', catName, selectedBreed);

        // Aquí guardaremos los datos del gato (por ahora en localStorage)
        const catData = {
            name: catName,
            breed: selectedBreed
        };
        localStorage.setItem('kittyWorldCat', JSON.stringify(catData));

        // Ocultar creación y mostrar juego (placeholder)
        characterCreation.style.display = 'none';
        alert(`¡Bienvenido, ${catName} el ${selectedBreed.replace('-', ' ')}! El juego comenzará pronto.`);

        // Aquí irá la lógica para iniciar el juego
        // Por ahora, recargamos para volver al launcher
        setTimeout(() => {
            location.reload();
        }, 2000);
    });
});