if (document.title == "Take a path") {
  const audiobutton = document.createElement("i");
  audiobutton.classList.add("bi");
  audiobutton.classList.add("bi-volume-up");
  audiobutton.style.fontSize = "3rem";
  audiobutton.style.position = "fixed";
  audiobutton.style.top = "1rem";
  audiobutton.style.left = "1rem";
  audiobutton.style.cursor = "pointer";
  audiobutton.style.color = "white";
  audiobutton.addEventListener("click", () => {
    if (audiobutton.classList.contains("bi-volume-up")) {
      audiobutton.classList.remove("bi-volume-up");
      audiobutton.classList.add("bi-volume-mute");
      documentaudio.pause();
    } else {
      audiobutton.classList.remove("bi-volume-mute");
      audiobutton.classList.add("bi-volume-up");
      documentaudio.play();
    }
  });
  document.body.appendChild(audiobutton);
  const documentaudio = new Audio("music/HisSadCry.mp3");
  documentaudio.loop = true;
  documentaudio.volume = 0.1;
  documentaudio.play();
}
if (document.title == "Collect the fish") {
  const audiobutton = document.createElement("i");
  audiobutton.classList.add("bi");
  audiobutton.classList.add("bi-volume-up");
  audiobutton.style.fontSize = "3rem";
  audiobutton.style.position = "fixed";
  audiobutton.style.top = "1rem";
  audiobutton.style.left = "1rem";
  audiobutton.style.cursor = "pointer";
  audiobutton.style.color = "white";
  audiobutton.addEventListener("click", () => {
    if (audiobutton.classList.contains("bi-volume-up")) {
      audiobutton.classList.remove("bi-volume-up");
      audiobutton.classList.add("bi-volume-mute");
      documentaudio.pause();
    } else {
      audiobutton.classList.remove("bi-volume-mute");
      audiobutton.classList.add("bi-volume-up");
      documentaudio.play();
    }
  });
  document.body.appendChild(audiobutton);
  const documentaudio = new Audio("../music/Music/WeGoDiving__NoVocalWebsite.mp3");
  documentaudio.loop = true;
  documentaudio.volume = 0.2;
  documentaudio.play();
}
