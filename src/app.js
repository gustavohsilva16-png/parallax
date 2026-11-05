document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.Hero_parallax') || document.querySelector('.camada');
    const camadas = document.querySelectorAll('.camada');
    const prefereReducaoMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefereReducaoMovimento || !heroSection) return;

    let ticado = false;

    function aplicarParallax() {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        const heroHeight = heroSection.offsetHeight;

        if (scrollY <= heroHeight) {
            camadas.forEach((camada) => {
                const velocidade = parseFloat(camada.getAttribute('data-speed')) || 0;
                const deslocamento = -(scrollY * velocidade);
                camada.style.transform = `translate3d(0, ${deslocamento}px, 0)`;
            });
        }

        ticado = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticado) {
            window.requestAnimationFrame(aplicarParallax);
            ticado = true;
        }
    });
});