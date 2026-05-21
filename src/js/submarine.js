function isOverlapping(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();

  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

if (document.title == "Collect the fish") {
  const submarine = document.querySelector(".js-market__submarine");
  let moveDistance = 10; // Pixels to move per key press
  let title = document.createElement("h1");
  title.innerText = "Use the arrows keys, WASD or ZQSD to move the submarine!";
  title.classList.add("c-market__fishtitle");
  document.body.appendChild(title);
  document.addEventListener("keydown", (e) => {
    // getBoundingClientRect is a robust way to get current pixel locations
    let top = submarine.offsetTop;
    let left = submarine.offsetLeft;
    // console.log(e.key);
    // console.log(top);
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
        if (left > screen.width * 2) {
          submarine.style.left = left + moveDistance + "px";
          new Audio("../music/SFX/subnauticaEasteregg.mp3").play();
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
        } else {
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
          break;
        }
      case "d": // Move Right
        if (left > screen.width * 2) {
          submarine.style.left = left + moveDistance + "px";
          new Audio("../music/SFX/subnauticaEasteregg.mp3").play();
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
        } else {
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
      console.log("FIH");
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
    console.log(isOverlapping(submarine, item));
    document.addEventListener("keydown", () => {
      //   console.log(document.querySelectorAll(".js-fish"));
      if (isOverlapping(submarine, item)) {
        item.remove();
        title.textContent = `${document.querySelectorAll(".js-fish").length}/7 fishes left to collect`;
        if (document.querySelectorAll(".js-fish").length == 0) {
          console.log("Je bent gedaan!");
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
