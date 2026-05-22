function isOverlapping(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();

  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

let leviathanSpawned = false;

const nauticaEastereggFunction = (submarine, left) => {
  if (leviathanSpawned) return;

  if (left <= window.innerWidth + 500) return;

  leviathanSpawned = true;

  const leviathan = document.createElement("img");

  leviathan.classList.add("js-leviathan");
  leviathan.src = "../img/fishies/EasterEggFishy.png";

  // Styling
  leviathan.style.position = "absolute";
  leviathan.style.rotate = "90deg";
  leviathan.style.width = "2000px";
  leviathan.style.zIndex = "9999";
  leviathan.style.pointerEvents = "none";

  // Smooth movement
  leviathan.style.transition = "top 0.18s linear";
  let submarinewidth = 75;
  console.log(parseInt(submarine.style.left));
  console.log(submarinewidth);
  document.body.appendChild(leviathan);
  let distance = 100;
  const interval = setInterval(() => {
    if (distance == -100) {
      console.log("Ik ben gedaan :D");
    } else if (parseInt(submarine.style.top) == null) {
      if (parseInt(leviathan.style.top) * window.innerHeight == parseInt(document.querySelector(".c-market__submarine"))) {
        console.log("OKKK");
      } else if (parseInt(leviathan.style.top) * window.innerHeight == parseInt(submarine.style.top)) {
        console.log("gepakt :D");
      }
    } else {
      leviathan.style.top = `${distance}%`;
    }
    leviathan.style.left = parseInt(submarine.style.left) + submarinewidth - parseInt(leviathan.style.width) / 2 + "px";
    // console.log(leviathan.style.width);
    console.log(window.innerHeight * parseInt(leviathan.style.top), parseInt(submarine.style.top));
    // console.log(leviathan.style.left);
    distance -= 1;
  }, 50);

  // SCHIET OMHOOG
};

if (document.title == "Collect the fish") {
  const submarine = document.querySelector(".js-market__submarine");
  let moveDistance = 10; // Pixels to move per key press
  let title = document.createElement("h1");
  let eastereggnautica = false;
  title.innerText = "Use the arrows keys, WASD or ZQSD to move the submarine!";
  title.classList.add("c-market__fishtitle");
  document.body.appendChild(title);
  document.addEventListener("keydown", (e) => {
    // getBoundingClientRect is a robust way to get current pixel locations
    let top = submarine.offsetTop;
    let left = submarine.offsetLeft;
    switch (e.key.toLowerCase()) {
      case "a": // Move Left
        submarine.style.left = left - moveDistance + "px";
        submarine.style.transform = "scaleX(-1)"; // Flip horizontally
        break;
      case "arrowleft":
        submarine.style.left = left - moveDistance + "px";
        submarine.style.transform = "scaleX(-1)"; // Flip horizontally
        break;
      case "q": // Move Left
        submarine.style.left = left - moveDistance + "px";
        submarine.style.transform = "scaleX(-1)"; // Flip horizontally
        break;
      case "arrowright":
        if (left > screen.width) {
          if (sessionStorage.getItem("Nautica") == null) {
            sessionStorage.setItem("Nautica", "Sub");
            new Audio("../music/SFX/subnauticaEasteregg.mp3").play();
          }
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
        } else {
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
          break;
        }
      case "d": // Move Right
        if (left > screen.width) {
          if (eastereggnautica != true) {
            eastereggnautica = true;
            new Audio("../music/SFX/market/subnauticaEasteregg.mp3").play();
            // Screen shake
            document.body.animate([{ transform: "translateX(-12px)" }, { transform: "translateX(12px)" }, { transform: "translateX(-12px)" }, { transform: "translateX(12px)" }, { transform: "translateX(0px)" }], {
              duration: 220,
            });

            // Water donkerder maken
            setTimeout(() => {
              document.body.style.transition = "background 1s ease";
              document.body.style.background = "rgb(0, 0, 30)";
            }, 100);
          }
          nauticaEastereggFunction(submarine, left);
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
          break;
        } else {
          eastereggnautica = false;
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
          break;
        }
      case "w": // Move Up
        submarine.style.top = top - moveDistance + "px";
        submarine.style.transform = "scaleY(1)"; // Reset vertical flip
        break;
      case "arrowup":
        submarine.style.top = top - moveDistance + "px";
        submarine.style.transform = "scaleY(1)"; // Reset vertical flip
        break;
      case "z":
        submarine.style.top = top - moveDistance + "px";
        submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
        break;
      case "arrowdown":
        submarine.style.top = top + moveDistance + "px";
        submarine.style.transform = "scaleY(1)"; // Reset vertical flip
        break;
      case "s": // Move Down
        submarine.style.top = top + moveDistance + "px";
        submarine.style.transform = "scaleY(1)"; // Reset vertical flip
        break;
      case "c":
        if (top >= screen.height - submarine.clientHeight) {
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
        } else {
          submarine.style.top = top + moveDistance * 3 + "px";
          submarine.style.transform = "rotate(90deg)"; // Flip vertically
          break;
        }
      case " ":
        submarine.style.top = top - moveDistance * 3 + "px";
        submarine.style.transform = "rotate(-90deg)"; // Flip vertically
        break;
    }
  });
  const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const fishies = document.querySelectorAll(".js-fish");
  fishies.forEach((item) => {
    item.style.top = createRandomNumber(40, 80) + "%";
    item.style.left = createRandomNumber(0, 80) + "%";
    item.addEventListener("mousedown", () => {
      if (item.src.endsWith("eel.png")) {
        new Audio("../music/SFX/market/hi-venomous.mp3").play();
      } else if (createRandomNumber(1, 10) === 1) {
        new Audio("../music/SFX/market/pufferfish.mp3").play();
      } else if (createRandomNumber(1, 100) === 1) {
        new Audio("../music/SFX/market/come-here-fishy-fishy.mp3").play();
      } else {
        new Audio("../music/SFX/market/you-sir-are-a-fish.mp3").play();
      }
    });
    document.addEventListener("keydown", () => {
      if (isOverlapping(submarine, item)) {
        item.remove();
        title.textContent = `${document.querySelectorAll(".js-fish").length}/7 fishes left to collect`;
        if (document.querySelectorAll(".js-fish").length == 0) {
          title.innerText = "Hmmmmm";
          setTimeout(() => {
            title.innerText = "Yup";
          }, 2000);
          setTimeout(() => {
            title.innerText = "Mhm";
          }, 4000);
          setTimeout(() => {
            title.innerText = "Nog een dialoog";
          }, 6000);
        }
      }
    });
  });
}
// paling, alver, baars, blankvoorn, brasem, driedoornige stekelbaars, giebel, karper, kleine modderkruiper, kolblei, pos, snoekbaars, bittervoorn, bot, kroeskarper, rietvoorn, vetje, zeelt, bermpje, riviergrondel, winde, blauwband, harder en snoek.
