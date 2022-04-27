const header = document.querySelector("#logoTT");
const bc = document.querySelector("#bc");
const aboutBtn = document.querySelector("#AboutAncre");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function date() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.toLocaleString("default", { month: "short" });
  let day = date.getDate();
  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
}

function checkDevice() {
  if (window.innerWidth < 576) {
    document.body.classList.add("isMobile");
  } else if (window.innerWidth > 576) {
    document.body.classList.add("isDesktop");
  }
}
checkDevice();
date();
header.addEventListener("mouseover", function (e) {
  e.preventdefault;
  bc.style.width = "35vw";
  bc.style.height = "35vh";
  console.log("here");
});
header.addEventListener("mouseout", function (e) {
  e.preventdefault;
  bc.style.width = "200vw";
  bc.style.height = "200vh";
  console.log("h");
});
aboutBtn.addEventListener("click", () => {
  Transition();
});
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("noOverFlow");
});
