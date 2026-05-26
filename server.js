const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
let object1 = false,
  object2 = false,
  object3 = false,
  object4 = false,
  object5 = false;

app.use(cors());
app.use(express.json());
// Simple GET route
// app.get("/api/hello", (req, res) => {
//   res.send("document.querySelector('body').innerHTML += '<h1>Hello from backend</h1>';");
// });

app.get("/api/ourlittlesecret", (req, res) => {
  const word = req.query.word;
  if (word == "Friends") {
    res.send(`let linkalmanak = document.createElement("a");
    linkalmanak.classList.add("c-volksalmanakNavigation");
    linkalmanak.classList.add("js-volksalmanakNavigation");
    linkalmanak.href = "volksalmanak";
    let image = document.createElement("img");
    image.classList.add("js-volksalmanakNavigation__Image");
    image.src = "img/variants/volksalmanak_nothovered.png";
    document.querySelector("body").appendChild(linkalmanak);
    document.querySelector(".js-volksalmanakNavigation").appendChild(image);

    linkalmanak = document.querySelector(".js-volksalmanakNavigation");
    image = document.querySelector(".js-volksalmanakNavigation__Image");
    document.querySelector(".js-volksalmanakNavigation").addEventListener("mouseenter", () => {
      // console.log(document.querySelector(".js-volksalmanakNavigation"));
      image.src = "img/volksalmanak.png";
    });
    document.querySelector(".js-volksalmanakNavigation").addEventListener("mouseleave", () => {
      // console.log(document.querySelector(".js-volksalmanakNavigation"));
      image.src = "img/variants/volksalmanak_nothovered.png";
    });
`);
  } else if (word == "Failed") {
    res.send(`title.innerText = '"You have already clicked me"'
      setTimeout(() => {
        title.innerText = '"Click the top left book to go to the almanak"'
      }, 3000);
      setTimeout(() => {
        title.innerText = 'Give an offering to the man of the moon.'
      }, 7000);`);
  } else {
    res.send(`let title = document.querySelector(".js-title");
  const unlockvolksalmanak = () => {
    localStorage.setItem("Volksalmanakword", "Friends");
    window.location.href = "volksalmanak.html";
  };
  let draggables = document.getElementsByClassName("js-draggable");
  document.title = '"Hello Traveller!"';
  title.innerHTML = '"Oh traveller! How kind of you to click on me!"';
  for (let i = 1; i <= 2; i++) {
    document.getElementById("draggableobject" + i).remove();
  }
  document.getElementById("draggableobject3").style.display = "None";
  for (let i = 4; i <= 5; i++) {
    document.getElementById("draggableobject" + i).remove();
  }
  setTimeout(() => {
    document.title = '"Definitely not a pocket dimension"';
    title.innerHTML = '"Wait a bit, ill get my book right now."';
  }, 4000);
  setTimeout(() => {
    document.title = '"You can also keep it!"';
    title.innerHTML = '"Here, go click on that book and come meet me there aswell."';
    document.getElementById("draggableobject3").style.display = "block";
    document.getElementById("draggableobject3").firstElementChild.style.cursor = "pointer";
    document.getElementById("draggableobject3").firstElementChild.src = "img/volksalmanak.png";
    document.getElementById("draggableobject3").addEventListener("mousedown", unlockvolksalmanak);
  }, 12000);`);
  }
});
app.get("/api/yellowlock", (req, res) => {
  const word = req.query.word;
  if (word == "Unlocked") {
    res.send(`
      document.querySelector(".c-homepage__shadow--shoppingstreet").style.backgroundColor = "transparent"; 
      document.querySelector(".js-shoppingstreet_key").style.display = "none"; 
      document.querySelector(".js-shoppingstreet_lock").style.display = "none";
      const arrow = document.createElement("i");
      const link = document.createElement("a");
      link.href = "diksmuide/the_crossroads.html";
      link.classList.add("c-homepage__arrow");
      link.classList.add("c-homepage__arrow--shoppingstreet");
      arrow.classList.add("bi");
      arrow.classList.add("bi-arrow-up");
      document.querySelector(".c-homepage__shadow--shoppingstreet").appendChild(link);
      document.querySelector(".c-homepage__arrow--shoppingstreet").appendChild(arrow);
      `);
  } else {
    res.send(`
      document.querySelector(".c-homepage__shadow--shoppingstreet").style.backgroundColor = "transparent";
    const soundeffect = document.createElement("audio");
    soundeffect.src = "music/SFX/RegularUnlock.mp3";
    soundeffect.setAttribute("preload", "auto");
    soundeffect.setAttribute("controls", "none");
    soundeffect.volume = 0.3;
    soundeffect.play();
    localStorage.setItem("yellowlock", "Unlocked");
    document.querySelector(".js-shoppingstreet_key").remove()
    document.querySelector(".js-shoppingstreet_lock").remove();
    const arrow = document.createElement("i");
    const link = document.createElement("a");
    link.href = "diksmuide/the_crossroads.html";
    link.classList.add("c-homepage__arrow");
    link.classList.add("c-homepage__arrow--shoppingstreet");
    arrow.classList.add("bi");
    arrow.classList.add("bi-arrow-up");
    document.querySelector(".c-homepage__shadow--shoppingstreet").appendChild(link);
    document.querySelector(".c-homepage__arrow--shoppingstreet").appendChild(arrow);
    `);
  }
});
app.get("/api/items", (req, res) => {
  const word = req.query.word;
  if (object1 || object2 || object3 || object4 || object5) {
    if (object1 && word.endsWith("coin.png")) {
    } else if (object2 && word.endsWith("walkman.png")) {
    } else if (object4 && word.endsWith("watergun.png")) {
      res.send(`for (let i = 1; i <= 5; i++) { document.getElementById("draggableobject" + i).remove();} title.innerHTML = '"You have already completed this offering."';
        setTimeout(() => {
          title.innerHTML = '"I will be bringing you to dixmude using one of my many sticks."'
        }, 2000);
        setTimeout(() => {
          localStorage.setItem("Offering", "stick.png");
          window.location.href = "./diksmuide.html";
        }, 5000);`);
    } else {
      if (word.endsWith("coin.png")) {
        res.send(`document.title = "The Viking";
      localStorage.setItem("Offering", "coin.png");
        title.innerHTML = '"Do not trust THAT viking"';
        if(document.getElementById("draggableobject1").getAttribute("id")) {
          document.getElementById("draggableobject1").removeAttribute('id');
        }
          for (let i = 2; i <= 5; i++) {
            document.getElementById("draggableobject" + i).remove();
          }
        setTimeout(() => {
          window.location.href = "/vikinginteraction1.html";
        }, 2500);`);
      } else if (word.endsWith("cellphone.png")) {
        res.send(` manneke.src = "img/variants/mannekeUitDeMane__corrupted.png";
      localStorage.setItem("Offering", "cellphone.png");
        document.title = '"Its all my fault..."';
        title.innerText = '"Why did he give that order?"';
        setTimeout(() => {
          window.location.href = "/diksmuide.html";}, 3000);`);
      } else if (word.endsWith("walkman.png")) {
        res.send(`const mediaElements = document.querySelectorAll("audio, video");
      localStorage.setItem("Offering", "walkman.png");
          mediaElements.forEach((el) => {
            el.stop && el.stop();
            el.pause();
            el.currentTime = 0; // optional: reset to start
          });
          document.title = "The Wrong One";
          let timeoutDuration = 1000;
          setTimeout(() => {
            title.innerHTML = '"..."';
            for (let i = 1; i <= 5; i++) {
              document.getElementById("draggableobject" + i).remove();
            }
          }, timeoutDuration);
          setTimeout(() => {
            title.innerHTML = '"Are you sure you want to go that far from Dixmude?"';
          }, timeoutDuration + 4000);
          setTimeout(() => {
            const dialogueYes = document.createElement("div");
            dialogueYes.classList.add("c-introduction__checkbox");
            dialogueYes.classList.add("c-introduction__checkbox--yes");
            dialogueYes.innerText = '"Yes"';
            document.querySelector(".js-introduction").appendChild(dialogueYes);
          }, timeoutDuration + 6000);
          setTimeout(() => {
            const dialogueNo = document.createElement("div");
            dialogueNo.classList.add("c-introduction__checkbox");
            dialogueNo.classList.add("c-introduction__checkbox--no");
            dialogueNo.innerText = '"No"';
            document.querySelector(".js-introduction").appendChild(dialogueNo);
          }, timeoutDuration + 7000);`);
      } else if (word.endsWith("watergun.png")) {
        res.send(`setTimeout(() => {
      localStorage.setItem("Offering", "watergun.png");
          for (let i = 1; i <= 3; i++) {
            document.getElementById("draggableobject" + i).remove();
          }
          for (let i = 5; i <= 5; i++) {
            document.getElementById("draggableobject" + i).remove();
          }
          document.title = "The Kid"
          title.innerText = '"Oh that kid his waterpistol!"'
        }, 1000);
        setTimeout(() => {
          document.title = "... And The General"
          title.innerText = '"I am willing to bet you are looking for jacques eh?"'
        }, 5000);
        setTimeout(() => {
          title.innerText = '"I warn you, you will need a steady aim to do this one!!"'
        }, 12000);
        setTimeout(() => {
          window.location.href = "/diksmuide/shooting_range";
        }, 15000);
        `);
      } else if (word.endsWith("zusternoster.png")) {
        res.send(`document.title = "The Sister";
        title.innerHTML = '"Lets go... fishing?"';
        localStorage.setItem("Offering", "zusternoster.png");
        setTimeout(() => {
          window.location.href = "/diksmuide/vismarkt.html";
        }, 1000);`);
      } else {
        res.send("<h1>A cool thing isn't it an api</h1><h2>Or I made a stupid mistake, or you tried sneaking a peak inside the code</h2><h3>But as a hint, the man of the moon is not your enemy.</h3>");
      }
    }
  } else {
    if (word.endsWith("coin.png")) {
      res.send(`document.title = "The Viking";
      localStorage.setItem("Offering", "coin.png");
        title.innerHTML = '"Do not trust THAT viking"';
        if(document.getElementById("draggableobject1").getAttribute("id")) {
          document.getElementById("draggableobject1").removeAttribute('id');
        }
          for (let i = 2; i <= 5; i++) {
            document.getElementById("draggableobject" + i).remove();
          }
        setTimeout(() => {
          window.location.href = "/vikinginteraction1.html";
        }, 2500);`);
    } else if (word.endsWith("cellphone.png")) {
      res.send(` manneke.src = "img/variants/mannekeUitDeMane__corrupted.png";
      localStorage.setItem("Offering", "cellphone.png");
        document.title = '"Its all my fault..."';
        title.innerText = '"Why did he give that order?"';
        setTimeout(() => {
          window.location.href = "/diksmuide.html";}, 3000);`);
    } else if (word.endsWith("walkman.png")) {
      res.send(`const mediaElements = document.querySelectorAll("audio, video");
      localStorage.setItem("Offering", "walkman.png");
          mediaElements.forEach((el) => {
            el.stop && el.stop();
            el.pause();
            el.currentTime = 0; // optional: reset to start
          });
          document.title = "The Wrong One";
          let timeoutDuration = 1000;
          setTimeout(() => {
            title.innerHTML = '"..."';
            for (let i = 1; i <= 5; i++) {
              document.getElementById("draggableobject" + i).remove();
            }
          }, timeoutDuration);
          setTimeout(() => {
            title.innerHTML = '"Are you sure you want to go that far from Dixmude?"';
          }, timeoutDuration + 4000);
          setTimeout(() => {
            const dialogueYes = document.createElement("div");
            dialogueYes.classList.add("c-introduction__checkbox");
            dialogueYes.classList.add("c-introduction__checkbox--yes");
            dialogueYes.innerText = '"Yes"';
            document.querySelector(".js-introduction").appendChild(dialogueYes);
          }, timeoutDuration + 6000);
          setTimeout(() => {
            const dialogueNo = document.createElement("div");
            dialogueNo.classList.add("c-introduction__checkbox");
            dialogueNo.classList.add("c-introduction__checkbox--no");
            dialogueNo.innerText = '"No"';
            document.querySelector(".js-introduction").appendChild(dialogueNo);
          }, timeoutDuration + 7000);`);
    } else if (word.endsWith("watergun.png")) {
      res.send(`setTimeout(() => {
      localStorage.setItem("Offering", "watergun.png");
          for (let i = 1; i <= 3; i++) {
            document.getElementById("draggableobject" + i).remove();
          }
          for (let i = 5; i <= 5; i++) {
            document.getElementById("draggableobject" + i).remove();
          }
          document.title = "The Kid"
          title.innerText = '"Oh that kid his waterpistol!"'
        }, 1000);
        setTimeout(() => {
          document.title = "... And The General"
          title.innerText = '"I am willing to bet you are looking for jacques eh?"'
        }, 5000);
        setTimeout(() => {
          title.innerText = '"I warn you, you will need a steady aim to do this one!!"'
        }, 12000);
        setTimeout(() => {
          window.location.href = "/diksmuide/shooting_range";
        }, 15000);
        `);
    } else if (word.endsWith("zusternoster.png")) {
      res.send(`document.title = "The Sister";
        title.innerHTML = '"Lets go... fishing?"';
        localStorage.setItem("Offering", "zusternoster.png");
        setTimeout(() => {
          window.location.href = "/diksmuide/vismarkt.html";
        }, 1000);`);
    } else {
      res.send("<h1>A cool thing isn't it an api</h1><h2>Or I made a stupid mistake, or you tried sneaking a peak inside the code</h2><h3>But as a hint, the man of the moon is not your enemy.</h3>");
    }
  }
});

app.get("/api/offeringsCompleted", (req, res) => {
  const vikingcoin = req.query.one;
  const cellphone = req.query.two;
  const walkman = req.query.three;
  const watergun = req.query.four;
  const zusternoster = req.query.five;
  if (req.query.four == "Fantastic Gunman") {
    res.send(`let div = document.createElement("div");
    div.classList.add("js-draggable__completed");
    let icon = document.createElement("i");
    icon.classList.add("bi");
    icon.classList.add("bi-check-lg");
    icon.classList.add("js-draggable__completed--icon");
    div.classList.add("js-draggable__completed");
    document.querySelector("#draggableobject4").append(div);
    document.querySelector("#draggableobject4").append(icon); console.log("Watergun completed");`);
    object4 = true;
  }
});
app.get("/api/market", (req, res) => {
  const word = req.query.word;
  if (word == "Amazing Fisher") {
    res.send(`document.body.classList.remove('c-market--diving'); 
      let fishesbyebye = document.querySelectorAll(".js-fish"); 
      for (let i = 0; i < fishesbyebye.length; i++) { 
      let fish = fishesbyebye[i] 
      fish.remove() 
      };
      document.querySelector(".js-market__submarine").remove();
      document.title = "Applemarket"
      let title = document.createElement('h1'); title.innerText='Hallo'; document.body.append(title); 
    `);
  } else {
    res.send(`const nauticaLeviathanEastereggFunction = (submarine, left) => {
      if (leviathanSpawned) return;
  
      if (left <= window.innerWidth + 500) return;
      // Screen shake
      document.body.animate([{ transform: "translateX(-12px)" }, { transform: "translateX(12px)" }, { transform: "translateX(-12px)" }, { transform: "translateX(12px)" }, { transform: "translateX(0px)" }], {
        duration: 220,
      });
      leviathanSpawned = true;
      let chomp = false;
      const leviathan = document.createElement("img");
      new Audio("../music/SFX/market/reaper-leviathan-sounds-distant.mp3").play();
      leviathan.classList.add("js-leviathan");
      leviathan.src = "../img/fishies/EasterEggFishy.png";
  
      leviathan.style.position = "absolute";
      leviathan.style.rotate = "90deg";
      leviathan.style.width = "2000px";
      leviathan.style.zIndex = "9";
  
      // Smooth movement
      leviathan.style.transition = "top 0.18s linear";
      let submarinewidth = 150 + 75;
      document.body.appendChild(leviathan);
      let distance = 100;
      const interval = setInterval(() => {
        if (distance == -100) {
          console.log("Yo bro theres no hidden achievement, what you doin' up there");
        } else if (window.innerHeight * parseInt(leviathan.style.top) <= submarine.getBoundingClientRect().top) {
          if (chomp == false) {
            new Audio("../music/SFX/market/chomp-1.mp3").play();
            chomp = true;
          }
          setTimeout(() => {
            location.reload();
          }, 1000);
        } else {
          leviathan.style.top = distance + '%';
        }
        leviathan.style.left = parseInt(submarine.style.left) + submarinewidth - parseInt(leviathan.style.width) / 2 + "px";
        distance -= 0.5;
      }, 50);
    };
    const nauticaCheck = (submarine, left) => {
      if (left > window.innerWidth) {
        if (eastereggnautica != true) {
          eastereggnautica = true;
          new Audio("../music/SFX/market/subnauticaEasteregg.mp3").play();
          // Water donkerder maken
          setTimeout(() => {
            document.body.style.transition = "background 1s ease";
            document.body.style.background = "rgb(0, 0, 30)";
          }, 100);
        }
        nauticaLeviathanEastereggFunction(submarine, left);
      } else {
        eastereggnautica = false;
        setTimeout(() => {
          document.body.style.transition = "background 1s ease";
          document.body.style.background = "rgb(59, 148, 166)";
        }, 100);
      }
    };
  
    function isOverlapping(a, b) {
      const rect1 = a.getBoundingClientRect();
      const rect2 = b.getBoundingClientRect();
  
      return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
    }

  
    let moveDistance = 10; // Pixels to move per key press
    let eastereggnautica = false;
    let leviathanSpawned = false;
    const submarine = document.querySelector(".js-market__submarine");
    let title = document.createElement("h1");
  
    title.innerText = "Use the arrows keys, WASD or ZQSD to move the submarine!";
    title.classList.add("c-market__fishtitle");
    document.body.appendChild(title);
    document.addEventListener("keydown", (e) => {
      // getBoundingClientRect is a robust way to get current pixel locations
      let top = submarine.offsetTop;
      let left = submarine.offsetLeft;
      switch (e.key.toLowerCase()) {
        case "a": // Move Left
          nauticaCheck(submarine, left);
          submarine.style.left = left - moveDistance + "px";
          submarine.style.transform = "scaleX(-1)"; // Flip horizontally
          break;
        case "arrowleft":
          nauticaCheck(submarine, left);
          submarine.style.left = left - moveDistance + "px";
          submarine.style.transform = "scaleX(-1)"; // Flip horizontally
          break;
        case "q": // Move Left
          nauticaCheck(submarine, left);
          submarine.style.left = left - moveDistance + "px";
          submarine.style.transform = "scaleX(-1)"; // Flip horizontally
          break;
        case "arrowright":
          nauticaCheck(submarine, left);
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
          break;
        case "d": // Move Right
          nauticaCheck(submarine, left);
          submarine.style.left = left + moveDistance + "px";
          submarine.style.transform = "scaleX(1)"; // Reset horizontal flip
          break;
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
          title.textContent = document.querySelectorAll(".js-fish").length + "/7 fishes left to collect";
          if (document.querySelectorAll(".js-fish").length == 0) {
            title.innerText = "Thank you for catching those fishes for me";
            setTimeout(() => {
              title.innerText = "I will give you access to the fishmarket, as its owner";
            }, 3000);
            setTimeout(() => {
              localStorage.setItem("Fishmarket", "Amazing Fisher");
              document.querySelector(".c-market__submarine").remove();
              document.querySelector(".c-market__fishtitle").remove();
              document.body.classList.remove("c-market--diving");
              document.body.classList.add("c-market");
              document.body.style.backgroundColor = "white";
            }, 6000);
          }
        }
      });
    });`);
  }
});
// app.get("/api/websitesaved", (req, res) => {
//   const operation = req.query.one;
//   const operationcode = req.query.two;
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
