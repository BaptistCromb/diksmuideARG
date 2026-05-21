if (document.title == "Diksmuide" || document.title == "About Us" || document.title == "Shootingrange" || document.title == "History") {
  let chevron = document.querySelector(".js-nav__icons--chevron");
  let moon = document.querySelector(".js-nav__icons--moon");
  let icons = document.querySelector(".js-nav__icons");
  let nav = document.querySelector(".js-nav");
  let collapsed = false;
  console.log(icons);

  chevron.addEventListener("click", () => {
    iconchange();
  });
  moon.addEventListener("click", () => {
    iconchange();
  });

  const toggle = (collapsed) => {
    if (collapsed == true) {
      return (collapsed = false);
    } else {
      return (collapsed = true);
    }
  };
  const iconchange = () => {
    collapsed = toggle(collapsed);
    if (collapsed) {
      icons.style.top = "calc(80vh - 1rem)";
      chevron.classList.remove("bi-chevron-double-up");
      chevron.classList.add("bi-chevron-double-down");
      moon.classList.remove("bi-moon-fill");
      moon.classList.add("bi-moon");
      nav.style.opacity = "100";
      nav.style.top = "calc(80vh + 2rem)";
    } else {
      icons.style.top = "calc(80vh + 2rem)";
      chevron.classList.remove("bi-chevron-double-down");
      chevron.classList.add("bi-chevron-double-up");
      moon.classList.add("bi-moon-fill");
      moon.classList.remove("bi-moon");
      nav.style.opacity = "0";
      nav.style.top = "calc(80vh + 4rem)";
    }
  };
}
