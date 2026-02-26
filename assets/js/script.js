// função de carrossel
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

// Avançar
btnNext.addEventListener('click', () => {
    // clientWidth pega a largura visível do carrossel na tela
    carrossel.scrollBy({ 
        left: carrossel.clientWidth, 
        behavior: 'smooth' 
    });
});

// Voltar
btnPrev.addEventListener('click', () => {
    carrossel.scrollBy({ 
        left: -carrossel.clientWidth, 
        behavior: 'smooth' 
    });
});