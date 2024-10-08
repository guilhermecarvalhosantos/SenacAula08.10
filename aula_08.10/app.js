function toggleCard(card) {
    const content = card.querySelector('.card-content');
    const isActive = card.classList.contains('active');

    // Fecha todos os outros cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('active');
            const otherContent = c.querySelector('.card-content');
            otherContent.style.display = 'none';
            otherContent.style.opacity = '0';
        }
    });

    // Alterna o estado do card clicado
    if (isActive) {
        card.classList.remove('active');
        content.style.display = 'none';
        content.style.opacity = '0';
    } else {
        card.classList.add('active');
        content.style.display = 'block';
        setTimeout(() => {
            content.style.opacity = '1';
        }, 10); // Adiciona um pequeno delay para a animação
    }
}