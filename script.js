// Kitty World Game Launcher Script

document.addEventListener('DOMContentLoaded', function() {
    const launcher = document.getElementById('launcher');
    const characterCreation = document.getElementById('character-creation');
    const startBtn = document.getElementById('start-btn');
    const optionsBtn = document.getElementById('options-btn');
    const exitBtn = document.getElementById('exit-btn');
    const creationForm = document.getElementById('creation-form');
    const breedOptions = document.querySelectorAll('.breed-option');
    let selectedBreed = null;

    startBtn.addEventListener('click', function() {
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