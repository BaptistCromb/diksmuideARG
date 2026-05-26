const backgroundmusicfunction = (link, volume) => {
  const documentaudio = new Audio(link);
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
      sessionStorage.setItem("Music", "Muted");
      audiobutton.classList.remove("bi-volume-up");
      audiobutton.classList.add("bi-volume-mute");
      documentaudio.pause();
    } else {
      sessionStorage.removeItem("Music");
      audiobutton.classList.remove("bi-volume-mute");
      audiobutton.classList.add("bi-volume-up");
      documentaudio.play();
    }
  });

  if (sessionStorage.getItem("Music") == "Muted") {
    audiobutton.classList.remove("bi-volume-up");
    audiobutton.classList.add("bi-volume-mute");
    documentaudio.pause();
  } else {
    documentaudio.play();
  }
  documentaudio.loop = true;
  documentaudio.volume = volume;
  document.body.appendChild(audiobutton);
};
setTimeout(() => {
  if (document.title == "Take a path") {
    backgroundmusicfunction("sound/music/HisSadCry.mp3", 0.1);
  } else if (document.title == "Collect the fish") {
    backgroundmusicfunction("../sound/music/WeGoDiving__NoVocalWebsite.mp3", 0.2);
  } else if (document.title == "Applemarket") {
    backgroundmusicfunction("../sound/music/marketbackgroundsong.mp3", 0.2);
  }
}, 1000);

// "music/HisSadCry.mp3"
// 0.1
