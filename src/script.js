//Scroll up Button

export let topBtn = document.getElementById("top-btn");

export function visible() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > innerHeight) {
      topBtn.style.display = "block";
    } else topBtn.style.display = "none";
  });
}
visible();

export const top = topBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

//Back Button

export const back = document
  .getElementById("go-back")
  .addEventListener("click", () => {
    history.back();
  });
