if (document.title == "Shooting Range - Jacques") {
  const title = document.createElement("p");
  let TargetsHit = 0;
  title.classList.add("c-targetRange__title");
  title.innerText = "Shoot all the targets!";
  document.querySelector(".c-targetRange").appendChild(title);

  document.querySelectorAll(".c-targetRange__target").forEach((target) => {
    target.addEventListener("mousedown", () => {
      target.remove();
      TargetsHit += 1;
      title.innerText = `Targets shot: ${TargetsHit}/8`;
      console.log("Targets hit:" + TargetsHit);
      if (TargetsHit == 8) {
        setTimeout(() => {
          title.innerText = "Congratulations!";
        }, 1000);
        setTimeout(() => {
          title.innerText = "You have a very keen eye";
        }, 4000);
        setTimeout(() => {
          title.innerText = "I will allow you to visit the gate";
        }, 7000);
        setTimeout(() => {
          const notificationOne = document.createElement("p");
          notificationOne.classList.add("c-notification");
          notificationOne.innerText = "PAX gate unlocked, Shooting Range unlocked";
          document.body.append(notificationOne);
          const cross = document.createElement("i");
          cross.classList.add("bi");
          cross.classList.add("bi-x-lg");
          cross.classList.add("c-notification__icon");
          document.querySelector(".c-notification").appendChild(cross);
          const notification = document.createElement("audio");
          notification.src = "../music/SFX/notification.mp3";
          notification.setAttribute("preload", "auto");
          notification.setAttribute("controls", "none");
          notification.volume = 0.5;
          notification.play();

          localStorage.setItem("PaxGate", "Jacques The General");
          cross.addEventListener("click", () => {
            notificationOne.remove();

            const overlay = document.createElement("div");
            overlay.classList.add("c-offerOverlay");
            const item = document.createElement("img");
            item.classList.add("c-offerOverlay__item");
            const title = document.createElement("div");
            title.classList.add("c-offerOverlay__title");
            const manneke = document.createElement("img");
            manneke.src = "../img/mannekeUitDeMane.png";
            manneke.classList.add("c-offerOverlay__manneke");
            item.src = `../img/${localStorage.getItem("Offering")}`;
            document.body.appendChild(overlay);
            overlay.appendChild(item);
            overlay.appendChild(title);
            overlay.appendChild(manneke);

            let top = 90;
            item.style.top = `${top}%`;

            const interval = setInterval(() => {
              if (top <= 30) {
                clearInterval(interval);
                setTimeout(() => {
                  title.innerText = "I will be taking this back to jacques";
                }, 1000);
                setTimeout(() => {
                  title.innerText = "He invites you to the Pax Gate, along the crossroads.";
                }, 5000);
                setTimeout(() => {
                  title.innerText = "Thanks for completing this offering, I will bring you back now.";
                }, 9000);
                setTimeout(() => {
                  localStorage.removeItem("Offering");
                  localStorage.setItem("watergun.png", "Fantastic Gunman");
                  window.location.href = "..";
                }, 12000);
              }

              top -= 1;
              item.style.top = `${top}%`;
            }, 50);
          });
        }, 8000);
      }
    });
    target.addEventListener("mousedown", () => {
      const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
      let number = createRandomNumber(1, 10);
      if (sessionStorage.getItem("FahEasterEgg") != null) {
        const FAHHH = document.createElement("audio");
        FAHHH.src = "../music/SFX/gunshot-fahhhh.mp3";
        FAHHH.setAttribute("preload", "auto");
        FAHHH.setAttribute("controls", "none");
        FAHHH.volume = 0.05;
        FAHHH.play();
      } else {
        const pistolshot = document.createElement("audio");
        pistolshot.src = "../music/SFX/pistol-shot.mp3";
        pistolshot.setAttribute("preload", "auto");
        pistolshot.setAttribute("controls", "none");
        pistolshot.volume = 0.4;
        pistolshot.play();
      }
      if (number == 1) {
        const niceshot = document.createElement("audio");
        niceshot.src = "../music/SFX/nice-shot.mp3";
        niceshot.setAttribute("preload", "auto");
        niceshot.setAttribute("controls", "none");
        niceshot.volume = 1;
        niceshot.play();
        console.log("Nice shot!");
      }
    });
  });

  const targetRightHorizontal = document.querySelector("#target-right--horizontal");
  const targetLeftHorizontal = document.querySelector("#target-left--horizontal");
  const targetLeftVertical = document.querySelector("#target-left--vertical");
  const targetRightVertical = document.querySelector("#target-right--vertical");

  const intervalFunction = (item, startCount, maxcount, startPosition) => {
    let count = startCount;
    let position = startPosition;
    const interval = setInterval(() => {
      if (startPosition == "right" || startPosition == "bottom") {
        if (count >= maxcount || count <= startCount) {
          switch (position) {
            case "top":
              position = "bottom";
              break;
            case "bottom":
              position = "top";
              break;
            case "left":
              position = "right";
              break;
            case "right":
              position = "left";
              break;
          }
        }
      } else if (startPosition == "left" || startPosition == "top") {
        if (count <= maxcount || count >= startCount) {
          switch (position) {
            case "top":
              position = "bottom";
              break;
            case "bottom":
              position = "top";
              break;
            case "left":
              position = "right";
              break;
            case "right":
              position = "left";
              break;
          }
        }
      }

      if (position === "top" || position === "left") {
        count++;
      } else {
        count--;
      }

      if (position === "top" || position === "bottom") {
        item.style.top = `${count}%`;
      } else {
        item.style.left = `${count}%`;
      }
    }, 50);
  };

  // From left to right
  intervalFunction(targetRightHorizontal, 20, 70, "right");
  // From right to left
  intervalFunction(targetLeftHorizontal, 70, 20, "left");

  // From bottom to top
  intervalFunction(targetLeftVertical, 49, 0, "top");
  // From top to bottom
  intervalFunction(targetRightVertical, 0, 47, "bottom");
}
