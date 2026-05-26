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

if (document.title == "Take a path") {
  setTimeout(() => {
    backgroundmusicfunction("music/HisSadCry.mp3", 0.1);
  }, 1000);
} else if (document.title == "Collect the fish") {
  setTimeout(() => {
    backgroundmusicfunction("../sound/Music/WeGoDiving__NoVocalWebsite.mp3", 0.2);
    console.log("KOMAAAAAANNN");
  }, 1000);
} else if (document.title == "Applemarket") {
  setTimeout(() => {
    backgroundmusicfunction("../sound/Music/marketbackgroundsong.mp3", 0.2);
  }, 1000);
}

// "music/HisSadCry.mp3"
// 0.1
