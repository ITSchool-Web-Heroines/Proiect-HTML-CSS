//Gallery Buttons to other links (Gallery Page)

document.querySelector(".gal-1").addEventListener("click", function () {
  window.location.href = "https://en.wikipedia.org/wiki/David_(Michelangelo)";
});
document.querySelector(".gal-2").addEventListener("click", function () {
  window.location.href =
    "https://www.mnac.ro/exhibition-event-list/96/EXPOZI%C8%9AII/62/events/1";
});
document.querySelector(".gal-3").addEventListener("click", function () {
  window.location.href = "https://wikicro.icu/wiki/Modern_Greek_art";
});
document.querySelector(".gal-4").addEventListener("click", function () {
  window.location.href = "https://ro.wikipedia.org/wiki/Art_Deco";
});
document.querySelector(".gal-5").addEventListener("click", function () {
  window.location.href = "https://www.rijksmuseum.nl/en/collection/SK-A-3680";
});
document.querySelector(".gal-6").addEventListener("click", function () {
  window.location.href = "https://ro.wikipedia.org/wiki/John_Ruskin";
});

//Scroll up Button

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelector("#myBtn").addEventListener("click", () => topFunction());

//Left and right Button

document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});

document.getElementById("go-forward").addEventListener("click", () => {
  history.forward();
});

//Drawing box (About page)

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
myPics.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
