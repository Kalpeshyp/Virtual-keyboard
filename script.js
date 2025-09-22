const body = document.body;
let str = "";
const keysound = new Audio("./single-key-press-393908.mp3");
body.addEventListener("keydown", function (event) {
  console.log(event.key);
  keysound.play();
  const a = document.getElementById(event.key);
  a.style.backgroundColor = "hotpink";
  a.style.color = "red";

  if (event.key === "Backspace" || event.key === "BACKSPACE") {
    str = str.slice(0, -1);
  } else if (event.key === "Enter" || event.key === "ENTER") {
    str += "\n"; // new line
  } else if (event.key === " ") {
    str += " ";
  } else if (
    event.key === "Shift" ||
    event.key === "CapsLock" ||
    event.key === "Tab" ||
    event.key === "Alt" ||
    event.key === "Control" ||
    event.key === "Meta" ||
    event.key === "ESC"
  ) {
    return; // ignore these keys
  } else {
    str += event.key;
    document.getElementById("text-area").innerText = str;
    document.getElementById(
      "key-press"
    ).innerText = `Enter Key is : ${event.key}`;
  }
});

body.addEventListener("keyup", function (event) {
  const a = document.getElementById(event.key);
  a.style.backgroundColor = "pink";
  a.style.color = "black";
});

body.addEventListener("mousedown", function (event) {
  console.log(event.target.id);
  keysound.play();
  const a = document.getElementById(event.target.id);
  a.style.backgroundColor = "hotpink";
  a.style.color = "red";
  if (event.target.id === "backspace" || event.target.id === "BACKSPACE") {
    str = str.slice(0, -1);
    document.getElementById("text-area").innerText = str;
    // document.getElementById("key-press").innerText = "";
  } else if (
    event.key == "CapsLock" ||
    event.key == "Enter" ||   
    event.key == "Tab"
  ) {
    // document.getElementById("text-area").innerText = str;
  } else if (event.target.id === "capslock") {
    document.getElementById("text-area").innerText = " ";
  } else if (event.target.id === "Enter" || event.target.id ==='enter') {
    // document.getElementById("text-area").innerText = " ";
    str += "\n";
  } else {
    str += event.target.id;
    document.getElementById("text-area").innerText = str;
    document.getElementById(
      "key-press"
    ).innerText = `Enter Key is : ${event.target.id}`;
  }
});

body.addEventListener("mouseup", function (event) {
  const a = document.getElementById(event.target.id);
  a.style.backgroundColor = "pink";
  a.style.color = "black";
});
