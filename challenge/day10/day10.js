const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const btn = document.querySelector(".change-btn");
  const body = document.querySelector("body");
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");

  btn.addEventListener("click", () => { //중복 없애고싶은데..
    let num1 = Math.floor(Math.random() * (colors.length + 1));
    let num2 = Math.floor(Math.random() * colors.length + 1);
    body.style.background = `linear-gradient(90deg, ${colors[num1]}, ${colors[num2]})`;
    left.innerHTML = `${colors[num1]}`;
    right.innerHTML = `${colors[num2]}`;
  });
  