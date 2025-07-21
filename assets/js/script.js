const skillKeys = document.querySelectorAll('.skill-key');
const skillTextDisplay = document.querySelector('.skill-text-display');
const skillGrid = document.querySelector('.skills-grid');
const bongoCat = document.querySelector('.bongo-cat');
const navlinks = document.querySelectorAll('.nav-link');

let skillTimeout;
let bongoCatTimeout;

skillKeys.forEach(key => {
    key.addEventListener('click', () => {
        clearTimeout(skillTimeout);
        clearTimeout(bongoCatTimeout);

        const skillText = key.dataset.skillText;
        skillTextDisplay.textContent = skillText;
        skillTextDisplay.classList.add('active');

        skillGrid.classList.add('text-active');
        skillKeys.forEach(k => k.classList.remove('pressed'));
        key.classList.add('pressed');

        skillTimeout = setTimeout(() => {
            skillTextDisplay.classList.remove('active');
            skillGrid.classList.remove('text-active');
            skillKeys.forEach(k => k.classList.remove('pressed'));
        }, 3000);

        bongoCat.style.opacity = '1';
        bongoCat.style.transform = 'scale(1)';

        bongoCatTimeout = setTimeout(() => {
            bongoCat.style.opacity = '0';
            bongoCat.style.transform = 'scale(0.8)';
        }, 3000);
    });
});

navlinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            navlinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
