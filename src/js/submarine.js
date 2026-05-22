// if (document.title == "Collect the fish") {
//   const nauticaLeviathanEastereggFunction = (submarine, left) => {
//     if (leviathanSpawned) return;

//     if (left <= window.innerWidth + 500) return;
//     // Screen shake
//     document.body.animate([{ transform: "translateX(-12px)" }, { transform: "translateX(12px)" }, { transform: "translateX(-12px)" }, { transform: "translateX(12px)" }, { transform: "translateX(0px)" }], {
//       duration: 220,
//     });
//     leviathanSpawned = true;
//     let chomp = false;
//     const leviathan = document.createElement("img");
//     new Audio("../music/SFX/market/reaper-leviathan-sounds-distant.mp3").play();
//     leviathan.classList.add("js-leviathan");
//     leviathan.src = "../img/fishies/EasterEggFishy.png";

//     // Styling
//     leviathan.style.position = "absolute";
//     leviathan.style.rotate = "90deg";
//     leviathan.style.width = "2000px";
//     leviathan.style.zIndex = "9999";
//     leviathan.style.pointerEvents = "none";

//     // Smooth movement
//     leviathan.style.transition = "top 0.18s linear";
//     let submarinewidth = 150 + 75;
//     document.body.appendChild(leviathan);
//     let distance = 100;
//     const interval = setInterval(() => {
//       if (distance == -100) {
//         console.log("Yo bro theres no hidden achievement, what you doin");
//       } else if (window.innerHeight * parseInt(leviathan.style.top) <= submarine.getBoundingClientRect().top) {
//         if (chomp == false) {
//           new Audio("../music/SFX/market/chomp-1.mp3").play();
//           chomp = true;
//         }
//         setTimeout(() => {
//           location.reload();
//         }, 1000);
//       } else {
//         leviathan.style.top = `${distance}%`;
//       }
//       leviathan.style.left = parseInt(submarine.style.left) + submarinewidth - parseInt(leviathan.style.width) / 2 + "px";
//       distance -= 0.5;
//     }, 50);

//     // SCHIET OMHOOG
//   };
//   const nauticaCheck = (submarine, left) => {
//     if (left > window.innerWidth) {
//       if (eastereggnautica != true) {
//         eastereggnautica = true;
//         new Audio("../music/SFX/market/subnauticaEasteregg.mp3").play();
//         // Water donkerder maken
//         setTimeout(() => {
//           document.body.style.transition = "background 1s ease";
//           document.body.style.background = "rgb(0, 0, 30)";
//         }, 100);
//       }
//       nauticaLeviathanEastereggFunction(submarine, left);
//     } else {
//       eastereggnautica = false;
//       setTimeout(() => {
//         document.body.style.transition = "background 1s ease";
//         document.body.style.background = "rgb(59, 148, 166)";
//       }, 100);
//     }
//   };

//   function isOverlapping(a, b) {
//     const rect1 = a.getBoundingClientRect();
//     const rect2 = b.getBoundingClientRect();

//     return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
//   }

//   if (localStorage.getItem("Fishmarket" != null)) {
//   }

//   let moveDistance = 10; // Pixels to move per key press
//   let eastereggnautica = false;
//   let leviathanSpawned = false;
//   const submarine = document.querySelector(".js-market__submarine");
//   let title = document.createElement("h1");

//   title.innerText = "Use the arrows keys, WASD or ZQSD to move the submarine!";
//   title.classList.add("c-market__fishtitle");
//   document.body.appendChild(title);
//   document.addEventListener("keydown", (e) => {
//     // getBoundingClientRect is a robust way to get current pixel locations
//     let top = submarine.offsetTop;
//     let left = submarine.offsetLeft;
//     switch (e.key.toLowerCase()) {
//       case "a": // Move Left
//         nauticaCheck(submarine, left);
//         submarine.style.left = left - moveDistance + "px";
//         submarine.style.transform = "scaleX(-1)"; // Flip horizontally
//         break;
//       case "arrowleft":
//         nauticaCheck(submarine, left);
//         submarine.style.left = left - moveDistance + "px";
//         submarine.style.transform = "scaleX(-1)"; // Flip horizontally
//         break;
//       case "q": // Move Left
//         nauticaCheck(submarine, left);
//         submarine.style.left = left - moveDistance + "px";
//         submarine.style.transform = "scaleX(-1)"; // Flip horizontally
//         break;
//       case "arrowright":
//         nauticaCheck(submarine, left);
//         submarine.style.left = left + moveDistance + "px";
//         submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
//         break;
//       case "d": // Move Right
//         nauticaCheck(submarine, left);
//         submarine.style.left = left + moveDistance + "px";
//         submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
//         break;
//       case "w": // Move Up
//         submarine.style.top = top - moveDistance + "px";
//         submarine.style.transform = "scaleY(1)"; // Reset vertical flip
//         break;
//       case "arrowup":
//         submarine.style.top = top - moveDistance + "px";
//         submarine.style.transform = "scaleY(1)"; // Reset vertical flip
//         break;
//       case "z":
//         submarine.style.top = top - moveDistance + "px";
//         submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
//         break;
//       case "arrowdown":
//         submarine.style.top = top + moveDistance + "px";
//         submarine.style.transform = "scaleY(1)"; // Reset vertical flip
//         break;
//       case "s": // Move Down
//         submarine.style.top = top + moveDistance + "px";
//         submarine.style.transform = "scaleY(1)"; // Reset vertical flip
//         break;
//       case "c":
//         if (top >= screen.height - submarine.clientHeight) {
//           submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
//         } else {
//           submarine.style.top = top + moveDistance * 3 + "px";
//           submarine.style.transform = "rotate(90deg)"; // Flip vertically
//           break;
//         }
//       case " ":
//         submarine.style.top = top - moveDistance * 3 + "px";
//         submarine.style.transform = "rotate(-90deg)"; // Flip vertically
//         break;
//     }
//   });
//   const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//   const fishies = document.querySelectorAll(".js-fish");
//   fishies.forEach((item) => {
//     item.style.top = createRandomNumber(40, 80) + "%";
//     item.style.left = createRandomNumber(0, 80) + "%";
//     item.addEventListener("mousedown", () => {
//       if (item.src.endsWith("eel.png")) {
//         new Audio("../music/SFX/market/hi-venomous.mp3").play();
//       } else if (createRandomNumber(1, 10) === 1) {
//         new Audio("../music/SFX/market/pufferfish.mp3").play();
//       } else if (createRandomNumber(1, 100) === 1) {
//         new Audio("../music/SFX/market/come-here-fishy-fishy.mp3").play();
//       } else {
//         new Audio("../music/SFX/market/you-sir-are-a-fish.mp3").play();
//       }
//     });
//     document.addEventListener("keydown", () => {
//       if (isOverlapping(submarine, item)) {
//         item.remove();
//         title.textContent = `${document.querySelectorAll(".js-fish").length}/7 fishes left to collect`;
//         if (document.querySelectorAll(".js-fish").length == 0) {
//           title.innerText = "Thank you for catching those fishes for me";
//           setTimeout(() => {
//             title.innerText = "I will give you access to the fishmarket, as its owner";
//           }, 3000);
//           setTimeout(() => {
//             localStorage.setItem("Fishmarket", "Come here fishy fishy");
//             document.querySelector(".c-market__submarine").remove();
//             document.querySelector(".c-market__fishtitle").remove();
//             document.body.classList.remove("c-market--diving");
//             document.body.classList.add("c-market");
//             document.body.style.backgroundColor = "white";
//           }, 6000);
//         }
//       }
//     });
//   });
// }
// // paling, alver, baars, blankvoorn, brasem, driedoornige stekelbaars, giebel, karper, kleine modderkruiper, kolblei, pos, snoekbaars, bittervoorn, bot, kroeskarper, rietvoorn, vetje, zeelt, bermpje, riviergrondel, winde, blauwband, harder en snoek.
