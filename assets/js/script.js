const carrossel = document.getElementById('carrossel');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

let animacaoTrem;
let isPaused = false;
const velocidade = 1; // Ajuste aqui: 1 é lento, 2 é mais rápido, 0.5 é muito lento

// 1. A função do trem (roda continuamente)
const moverTrem = () => {
    if (!isPaused) {
        // Empurra o carrossel X pixels para o lado
        carrossel.scrollLeft += velocidade;

        // Se o trem chegar no final da linha...
        if (Math.ceil(carrossel.scrollLeft + carrossel.clientWidth) >= carrossel.scrollWidth) {
            // ...ele volta para o início instantaneamente para continuar rodando
            carrossel.scrollLeft = 0;
        }
    }
    
    // Pede ao navegador para rodar essa função de novo no próximo quadro (loop infinito)
    animacaoTrem = requestAnimationFrame(moverTrem);
};

// 2. Funções para pausar quando o mouse/dedo estiver em cima
const pausarTrem = () => isPaused = true;
const retomarTrem = () => isPaused = false;

carrossel.addEventListener('mouseenter', pausarTrem);
carrossel.addEventListener('touchstart', pausarTrem);

carrossel.addEventListener('mouseleave', retomarTrem);
carrossel.addEventListener('touchend', retomarTrem);

// 3. Os botões ainda funcionam se o usuário quiser dar um "salto"
if (btnNext) {
    btnNext.addEventListener('click', () => {
        carrossel.scrollBy({ left: carrossel.clientWidth, behavior: 'smooth' });
    });
}

if (btnPrev) {
    btnPrev.addEventListener('click', () => {
        carrossel.scrollBy({ left: -carrossel.clientWidth, behavior: 'smooth' });
    });
}

// 4. Liga o motor do trem!
moverTrem();