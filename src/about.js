import { back } from "./script";

//Scroll up Button

let topBtn = document.getElementById("top-btn");

function visible() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > innerHeight) {
      topBtn.style.display = "block";
    } else topBtn.style.display = "none";
  });
}
visible();

const top = topBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

//Drawing box (About page)

// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("my-pics");
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
