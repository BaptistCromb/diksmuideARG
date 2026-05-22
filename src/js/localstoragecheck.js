if (document.title == "Take a path") {
  if (localStorage.getItem("Volksalmanakword") != null) {
    async function checkfunction() {
      let word = localStorage.getItem("Volksalmanakword");
      const response = await fetch(`http://localhost:3000/api/ourlittlesecret?word=${word}`);
      const json = await response.text();
      eval(json);
    }
    checkfunction();
  }
  if (localStorage.getItem("watergun.png") != null) {
    let four = localStorage.getItem("watergun.png");
    const response = await fetch(`http://localhost:3000/api/offeringsCompleted?four=${four}`);
    const json = await response.text();
    eval(json);
  }
} else if (document.title == "Diksmuide") {
  if (localStorage.getItem("yellowlock") != null) {
    async function checkfunction() {
      let word = localStorage.getItem("yellowlock");
      // console.log("Bananen zijn gezond");
      const response = await fetch(`http://localhost:3000/api/yellowlock?word=${word}`);
      const json = await response.text();
      eval(json);
    }
    checkfunction();
  }
} else if (document.title == "Shooting Range - Jacques") {
  const offering = localStorage.getItem("Offering");
  if (localStorage.getItem("Offering") != null) {
    if (offering.endsWith("watergun.png")) {
      console.log("Jaja");
    } else {
      document.location.href = "../diksmuide.html";
    }
  }
} else if (document.title == "Collect the fish") {
  if (localStorage.getItem("Fishmarket") != null) {
    console.log("banaan");
  } else {
    const response = await fetch(`http://localhost:3000/api/market`);
    const json = await response.text();
    eval(json);
  }
}
