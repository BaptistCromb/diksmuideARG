import { hide } from "@popperjs/core";

let input = "";
document.addEventListener("keydown", (e) => {
  if (e.key.length === 1) {
    input += e.key.toLowerCase();
  }
  if (document.title != "Take a path") {
    if (input.endsWith("offer") | input.endsWith("moony") | input.endsWith("manneke")) {
      const overlay = document.createElement("div");
      overlay.classList.add("c-offerOverlay");
      const item = document.createElement("img");
      item.classList.add("c-offerOverlay__item");
      const title = document.createElement("div");
      title.classList.add("c-offerOverlay__title");
      const manneke = document.createElement("img");
      manneke.src = "img/mannekeUitDeMane.png";
      manneke.classList.add("c-offerOverlay__manneke");
      item.src = `img/${localStorage.getItem("Offering")}`;
      document.body.appendChild(overlay);
      overlay.appendChild(item);
      overlay.appendChild(title);
      overlay.appendChild(manneke);

      let top = 90;
      item.style.top = `${top}%`;
      console.log(window.location.href);
      const interval = setInterval(() => {
        if (top <= 30) {
          clearInterval(interval);
          setTimeout(() => {
            title.innerText = "Thanks for returning the offering!";
          }, 1000);
          setTimeout(() => {
            title.innerText = "You will now be brought back to my dimension";
          }, 4000);
          setTimeout(() => {
            localStorage.removeItem("Offering");
            if (window.location.href.includes("diksmuide")) {
              window.location.href = "../";
            }
            window.location.href = ".";
          }, 7000);
        }

        top -= 1;
        item.style.top = `${top}%`;
      }, 50);
    }
  }
  if (document.title == "Take a path") {
    if (input.endsWith("cursed")) {
      console.log("You shouldn't be here.");
      document.querySelector(".js-cellphone").src = "img/cellphone2CURSED.png";
      input = "";
    }

    if (input.endsWith("valhalla")) {
      console.log("Valhalla kaller på oss");
      for (let i = 1; i <= 4; i++) {
        document.getElementById("draggableobject" + i).firstElementChild.src = "img/variants/rune" + i + ".png";
      }
      document.getElementById("draggableobject5").firstElementChild.src = "img/variants/theyarecalling.png";
      if (document.querySelectorAll(".js-draggable__completed")) {
        document.querySelectorAll(".js-draggable__completed").forEach((e) => {
          e.remove();
        });
        document.querySelectorAll(".js-draggable__completed--icon").forEach((e) => {
          e.remove();
        });
      }
      document.querySelector(".js-manneke").src = "img/variants/dixmuda.jpg";
      document.querySelector(".js-title").innerHTML = "Pillage the city, bring back our blood.";
      const valhallaaudio = new Audio("music/valhallacall.mp3");
      valhallaaudio.loop = true;
      valhallaaudio.volume = 0.1;
      valhallaaudio.play();
      input = "";
    }
  } else if (document.title == "Diksmuide") {
    if (input.endsWith("jacques")) {
      let monument = document.createElement("div");
      monument.classList.add("c-homepage__monument");
      monument.classList.add("js-jacques");
      let image = document.createElement("img");
      image.style.width = "100%";
      image.src = "img/jacques.png";
      document.querySelector("body").appendChild(monument);
      document.querySelector(".js-jacques").appendChild(image);
    }
    if (input.endsWith("cursor")) {
      let i = 0;
      let txt = "Dit is een enorme lange tekst die je kan hebben bij de hover dus ik ben dit aan het doen om het limiet te bekijken en bla bla bla bla bla"; /* The text */
      let speed = 50; /* The speed/duration of the effect in milliseconds */

      let dialogue = document.createElement("div");
      dialogue.classList.add("c-dialogue");
      dialogue.classList.add("js-dialogue--statue1");
      dialogue.style.display = "none";
      let tekst = document.createElement("p");
      tekst.classList.add("js-dialogue__text");
      document.querySelector("body").appendChild(dialogue);
      document.querySelector(".js-dialogue--statue1").appendChild(tekst);
      const cursorRounded = document.querySelector(".js-dialogue--statue1");

      const moveCursor = (e) => {
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        cursorRounded.style.top = `${mouseY + 10}px`;
        cursorRounded.style.left = `${mouseX + 10}px`;
        // cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      };

      function typeWriter() {
        if (i < txt.length) {
          document.querySelector(".js-dialogue__text").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      document.querySelector(".js-mannekemoane").addEventListener("mouseenter", () => {
        document.querySelector(".js-dialogue--statue1").style.display = "flex";
        window.addEventListener("mousemove", moveCursor);
        typeWriter();
      });
      document.querySelector(".js-mannekemoane").addEventListener("mouseleave", () => {
        i = 0;
        document.querySelector(".js-dialogue__text").innerText = "";
        document.querySelector(".js-dialogue--statue1").style.display = "none";
        console.log("LEFT");
      });
    }
  } else if (document.title == "Shooting Range - Jacques" || document.title == "Shooting Range") {
    if (input.endsWith("fah")) {
      sessionStorage.setItem("FahEasterEgg", "Yeah");
      console.log("Really.");
    }
  }
});
