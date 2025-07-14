const btnProjets = document.getElementById('projets');
const btnAutres = document.getElementById('autres');
const divPresentation = document.body.querySelector('.presentatn');
const divMesProjets = document.body.querySelector('.mes-projets');
const divAutres = document.body.querySelector('.mes-autres-reas');
const btnretourProjets = document.body.querySelector('.retour-projets');
const btnRetourAutres = document.body.querySelector('.retour-projets.autres');

let sectionOuverture = null;

btnProjets.addEventListener('click', pousserProjets, { once: true });
btnAutres.addEventListener('click', pousserAutres);
btnretourProjets.addEventListener('click', revenirDeProjets, { once: true });

function pousserProjets() {
    if (sectionOuverture) return; // Si une section est déjà ouverte, ne rien faire
    sectionOuverture = 'projets'; // Marque la section comme ouverte
    // retire toutes les classes d'animation de présentation
    divPresentation.classList.remove('RdeP', 'P', 'A', 'RdeA');
    divMesProjets.classList.remove('RdeP', 'P');
    // ajoute l'animation de poussée
    divPresentation.classList.add('P');
    divMesProjets.classList.add('P');
    btnretourProjets.addEventListener('click', revenirDeProjets, { once: true });
}

function revenirDeProjets() {
    sectionOuverture = null; // Réinitialise la section ouverte
    divPresentation.classList.remove('P', 'A', 'RdeA');
    divPresentation.classList.add('RdeP');
    divMesProjets.classList.remove('P');
    divMesProjets.classList.add('RdeP');
    btnProjets.addEventListener('click', pousserProjets, { once: true });
}

function pousserAutres() {
    if (sectionOuverture) return; // Si une section est déjà ouverte, ne rien faire
    sectionOuverture = 'autres'; // Marque la section comme ouverte
    // retire toutes les classes d'animation de présentation
    divPresentation.classList.remove('RdeA', 'A', 'P', 'RdeP');
    divAutres.classList.remove('RdeA', 'A');
    divPresentation.classList.add('A');
    divAutres.classList.add('A');
    btnRetourAutres.addEventListener('click', revenirDeAutres, { once: true });
}

function revenirDeAutres() {
    sectionOuverture = null; // Réinitialise la section ouverte
    // retire toutes les classes d'animation de présentation
    divPresentation.classList.remove('A', 'P', 'RdeP');
    divPresentation.classList.add('RdeA');
    divAutres.classList.remove('A');
    divAutres.classList.add('RdeA');
    btnProjets.addEventListener('click', pousserProjets, { once: true });
    btnAutres.addEventListener('click', pousserAutres, { once: true });
}

// Fonction pour afficher la section de bienvenue
const lienBienvenue = document.querySelector('.tuto-lien');
lienBienvenue.addEventListener('click', afficherBienvenue);
function afficherBienvenue() {
    const sectionBienvenue = document.getElementById('bienvenue');
    const sombre = document.getElementById('sombre');
    sombre.style.display = 'block';
    sectionBienvenue.style.display = 'flex';
    const boutonBienvenue = document.querySelector('.bouton-bienvenue');
    // avec fontion flechée
    boutonBienvenue.addEventListener('click', () => {
        sectionBienvenue.style.display = 'none';
        sombre.style.display = 'none';
    });
}

// desactiver desciption quand on clique ailleurs
document.addEventListener('click', function (event) {
    const description = document.querySelector('.description');
    if (!event.target.closest('.bloc-bouton') && description) {
        description.style.display = 'none';
    }
});