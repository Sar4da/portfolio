document.addEventListener('DOMContentLoaded', function () {
    const btnAutres = document.querySelector('.reas button:nth-child(2)');
    const transitionSection = document.querySelector('.transition');
    const spanAutres = document.querySelector('.transition span:nth-child(2)');

    btnAutres.addEventListener('click', function () {
        // Affiche la section transition
        transitionSection.style.display = 'flex';

        // Lance l'animation sur le span
        spanAutres.classList.remove('anim'); // reset si déjà animée
        void spanAutres.offsetWidth; // force le reflow
        spanAutres.classList.add('anim');
    });
});