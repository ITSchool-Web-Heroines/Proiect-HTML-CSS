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

//Input form

const form = document.querySelector(".form");
const input = document.getElementById("em");
const submitBtn = document.querySelector(".submit");

function formSub(ev) {
  log.textContent = "Feliciări! Te-ai înscris cu succes!";
  ev.preventDefault();
}
form.addEventListener("submit", formSub);
form.addEventListener(
  "focus",
  (ev) => {
    ev.target.style.background = "pink";
  },
  true
);
