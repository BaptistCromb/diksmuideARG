let draggables = document.getElementsByClassName("js-draggable");
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    elmnt.style.cursor = "grabbing";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.cursor = "grab";
  }
}
if (document.title == "Take a path") {
  for (let i = 0; i < draggables.length; i++) {
    draggables.item(i).id = "draggableobject" + (i + 1);
    dragElement(draggables.item(i));
    // console.log("Abcdefg");
  }

  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  // }
} else if (document.title == "Diksmuide") {
  console.log(draggables);
  const yellowkey = document.querySelector(".js-shoppingstreet_key");
  dragElement(yellowkey);
  // console.log("Abcdefg");
}
