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

//Gallery Buttons to other links (Gallery Page)

const galleryLinks = {
  ".gal-1": "https://en.wikipedia.org/wiki/David_(Michelangelo)",
  ".gal-2":
    "https://www.mnac.ro/exhibition-event-list/96/EXPOZI%C8%9AII/62/events/1",
  ".gal-3": "https://wikicro.icu/wiki/Modern_Greek_art",
  ".gal-4": "https://ro.wikipedia.org/wiki/Art_Deco",
  ".gal-5": "https://www.rijksmuseum.nl/en/collection/SK-A-3680",
  ".gal-6": "https://ro.wikipedia.org/wiki/John_Ruskin",
};
Object.entries(galleryLinks).forEach(([selector, url]) => {
  const element = document.querySelector(selector);
  if (element === null) {
    return;
  }
  element.addEventListener("click", function () {
    window.location.href = url;
  });
});
