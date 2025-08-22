document.addEventListener("DOMContentLoaded", () => {
  // Playlist de 20 éléments pour le montage PC
  const playlist_ancienne = [
    { type: "image", src: "tuto pc/1.jpg", title: "Carte mère et autres composants", id: 1 },
    { type: "image", src: "tuto pc/2.jpg", title: "Carte mère et les vices", id: 2 },
    { type: "video", src: "tuto pc/3.MP4", title: "Première étape d'installation", id: 3 },
    { type: "image", src: "tuto pc/4.jpg", title: "Câblage déjà installé par le fabricant", id: 4 },
    { type: "video", src: "tuto pc/5.MP4", title: "Carton venu avec le boîtier avec accessoires et manuel", id: 5 },
    { type: "image", src: "tuto pc/6.jpg", title: "Manuel du boîtier", id: 6 },
    { type: "video", src: "tuto pc/7.MP4", title: "Installation du refroidisseur à eau", id: 7 },
    { type: "video", src: "tuto pc/8.MP4", title: "Installation du refroidisseur à eau", id: 8 },
    { type: "image", src: "tuto pc/9.JPEG", title: "Carte graphique", id: 9 },
    { type: "image", src: "tuto pc/10.JPEG", title: "Carte graphique", id: 10 },
    { type: "video", src: "tuto pc/11.MP4", title: "Premier allumage", id: 11 },
    { type: "video", src: "tuto pc/12.mp4", title: "Le Watercooling s'allume", id: 12 },
    { type: "video", src: "tuto pc/13.MP4", title: "Test de LED Watercooling et RAM qui s'allume pas encore", id: 13 },
    { type: "video", src: "tuto pc/14.mp4", title: "Tout s'allume", id: 14 },
    { type: "video", src: "tuto pc/15.MP4", title: "Boîtier fini", id: 15 },
    { type: "video", src: "tuto pc/16.MP4", title: "Installation de Windows", id: 16 },
    { type: "video", src: "tuto pc/17.MP4", title: "Premier démarrage de Windows", id: 17 },
    { type: "video", src: "tuto pc/18.mp4", title: "Retrait du film plastique", id: 18 },
    { type: "video", src: "tuto pc/19.MP4", title: "Résultat final", id: 19 },
    { type: "image", src: "tuto pc/20.jpg", title: "Résultat final", id: 20 }
  ];

  let currentPage = 0;

  const itemsPerPage = 4; // 2x2 matrice

  //calcul de playlist avec playlist_ancienne
const playlist = [];
for (let i = 0; i < playlist_ancienne.length; i += 4) {
  // On prend les éléments de i à i+3 (soit 4 éléments)
  playlist.push(playlist_ancienne.slice(i, i + 4));
}


function cellulesPlaylist(tab){
  //boucle pour ajouter les éléments à la cellule
  for (let i = 0; i < itemsPerPage; i++) {
    const cellule = tab && tab[i];
    const domIndex = i + 1; // i:0->domIndex:1 (i1..i4 / v1..v4)
    const image = document.getElementById("i" + domIndex);
    const video = document.getElementById("v" + domIndex);
    const cell = document.getElementById("c" + i);
    const p = document.getElementById("p" + i);
    p.textContent = cellule.title;

    if (!cellule) {
      // pas d'élément pour cette cellule
      if (image) image.style.display = "none";
      if (video) video.style.display = "none";
      if (cell) cell.style.display = "none";
      continue;
    }

    // afficher la cellule
    if (cell) cell.style.display = "block";

    if (cellule.type === "image") {
      if (image) {
        image.style.display = "block";
        image.src = cellule.src;
      }
      if (video) video.style.display = "none";
    } else if (cellule.type === "video") {
      if (video) {
        video.style.display = "block";
        video.src = cellule.src;
        video.load();
      }
      if (image) image.style.display = "none";
    } else {
      if (image) image.style.display = "none";
      if (video) video.style.display = "none";
    }
  }
}

function updateCellules(index){
  const pageActuelle = playlist[index];
      for(let i = 0; i < playlist.length; i++){
        if(i === index){
            document.getElementById("s" + i).style.padding = "0.5vh";
            document.getElementById("s" + i).style.marginTop = "1.5vh";
        } else {
            document.getElementById("s" + i).style.padding = "0";
            document.getElementById("s" + i).style.marginTop = "2vh";
        }
    }
  cellulesPlaylist(pageActuelle);
}

updateCellules(currentPage);

document.getElementById("next").addEventListener("click", () => {
  // navigation cyclique : incrémente et wrap avec modulo
  currentPage = (currentPage + 1) % playlist.length;
  updateCellules(currentPage);
});

document.getElementById("prev").addEventListener("click", () => {
  // navigation cyclique : décrémente et wrap avec modulo
  currentPage = (currentPage - 1 + playlist.length) % playlist.length;
  updateCellules(currentPage);
});
});
