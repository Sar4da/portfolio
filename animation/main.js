document.addEventListener("DOMContentLoaded", () => {
  const playlist = [
    { type: "image", src: "tuto arbre/options.png" },
    { type: "video", src: "tuto arbre/ajout conjoint.mp4" },
    { type: "video", src: "tuto arbre/ajout enfant.mp4" }
  ];

  let current = 0;

  const video = document.getElementById("video");
  const image = document.getElementById("image");
  const pois = document.getElementById("p" + current);
  //afficher dans la console le nom du pois actuelle
  console.log(pois);


  function update(index) {
    const item = playlist[index];
    // mis à jour des pois
    for(let i = 0; i< playlist.length; i++){
        if(document.getElementById("p" + i) == document.getElementById("p" + current)){
            document.getElementById("p" + i).style.padding = "0.5vh";
            document.getElementById("p" + i).style.marginTop = "1.5vh";
        }
        else {
            document.getElementById("p" + i).style.padding = "0";
            document.getElementById("p" + i).style.marginTop = "2vh";
        }
    }

    if (item.type === "video") {
      image.style.display = "none";
      video.style.display = "block";
      video.src = item.src;
      video.load();
    } else {
      video.style.display = "none";
      image.style.display = "block";
      image.src = item.src;
    }
  }

  update(current); // afficher le premier élément

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % playlist.length;
    update(current);
  });

  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + playlist.length) % playlist.length;
    update(current);
  });
});


