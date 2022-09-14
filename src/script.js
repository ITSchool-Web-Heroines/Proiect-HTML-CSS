//Scroll up Button

export let topBtn = document.getElementById("top-btn");

export function visible() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > innerHeight) {
      topBtn.style.display = "block";
    } else topBtn.style.display = "none";
  });
}

export const top = topBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  visible();
});

// let mybutton = document.getElementById("myBtn");
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// document.querySelector("#myBtn").addEventListener("click", () => topFunction());

//Back Button

export const back = document
  .getElementById("go-back")
  .addEventListener("click", () => {
    history.back();
  });
