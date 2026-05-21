// Do you understand it? I do not understand it half myself!
// Cheers
// Manneke Uit De Mane

function isOverlapping(a, b) {
  const rect1 = a.getBoundingClientRect();
  const rect2 = b.getBoundingClientRect();

  return !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

if (document.title == "Take a path") {
  let draggables = document.getElementsByClassName("js-draggable");
  let manneke = document.querySelector(".js-manneke");
  let title = document.querySelector(".js-title");
  for (let i = 0; i < draggables.length; i++) {
    let el = draggables[i];
    el.addEventListener("mouseup", () => {
      if (isOverlapping(el, manneke)) {
        let checker = `${el.firstElementChild.src}`;
        async function fetchWord(checker) {
          const response = await fetch(`http://localhost:3000/api/items?word=${checker}`);
          const json = await response.text();
          eval(json);
        }
        fetchWord(checker);
      }
    });
  }
} else if (document.title == "Diksmuide") {
  let yellowkey = document.querySelector(".js-shoppingstreet_key");
  let yellowlock = document.querySelector(".js-shoppingstreet_lock");
  yellowkey.addEventListener("mouseup", () => {
    if (isOverlapping(yellowkey, yellowlock)) {
      async function lockcheck() {
        const response = await fetch(`http://localhost:3000/api/yellowlock`);
        const json = await response.text();
        eval(json);
      }
      lockcheck();
    }
  });
}
