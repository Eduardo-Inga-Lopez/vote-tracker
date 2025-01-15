document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    const voteButton = document.querySelector('.vote-button');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const cycleCounter = document.getElementById('cycleCounter');
    const toggleDarkModeButton = document.createElement('button');
    let cycleCount = 0;

    toggleDarkModeButton.textContent = 'Toggle Dark Mode';
    toggleDarkModeButton.classList.add('nav-button');
    document.querySelector('.header').appendChild(toggleDarkModeButton);

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Eliminar la clase 'selected' de todos los elementos inmediatamente
            productCards.forEach(c => c.classList.remove('selected', 'voted'));

            // Agregar la clase 'selected' al elemento clicado
            card.classList.add('selected');

            // Habilitar el botón de votar
            voteButton.disabled = false;
        });
    });

    voteButton.addEventListener('click', registerVote);

    function registerVote() {
        const selectedCard = document.querySelector('.product-card.selected');
        if (selectedCard) {
            // Simular la confirmación visual del voto
            selectedCard.classList.add('voted');
            feedbackMessage.textContent = '¡Voto registrado!';
            setTimeout(() => {
                selectedCard.classList.remove('voted');
                feedbackMessage.textContent = '';
            }, 2000); // Duración de la confirmación visual

            // Incrementar el contador de ciclos
            cycleCount++;
            cycleCounter.textContent = `Ciclos: ${cycleCount}`;
        } else {
            alert('Por favor, seleccione un producto antes de registrar su voto.');
        }
    }
});