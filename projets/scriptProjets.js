document.addEventListener("DOMContentLoaded", () => {
  const playlist = [
    { type: "image", src: "tuto arbre/options.png" },
    { type: "video", src: "tuto arbre/ajout conjoint.mp4" },
    { type: "video", src: "tuto arbre/ajout enfant.mp4" }
  ];

  let current = 0;

  const video = document.getElementById("video");
  const image = document.getElementById("image");

  function update(index) {
    const item = playlist[index];
    // mis à jour des pois et des descriptions
    for(let i = 0; i < playlist.length; i++){
        if(i === index){
            document.getElementById("s" + i).style.padding = "0.5vh";
            document.getElementById("s" + i).style.marginTop = "1.5vh";
            document.getElementById("p" + i).style.display = "block";
        } else {
            document.getElementById("s" + i).style.padding = "0";
            document.getElementById("s" + i).style.marginTop = "2vh";
            document.getElementById("p" + i).style.display = "none";
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

