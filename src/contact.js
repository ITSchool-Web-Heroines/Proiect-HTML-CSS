import { topBtn } from "./script";
import { top } from "./script";
import { back } from "./script";

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
