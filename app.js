import { createsvg } from "./svg.js";

const header = document.querySelector("#logoTT");
const bc = document.querySelector("#bc");
const aboutBtn = document.querySelector("#AboutAncre");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const Ancre = document.querySelectorAll(".Ancre");

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
createsvg(window.location.href);
let secondAncre = document.querySelectorAll(" svg > g > text");
Ancre.forEach((el) => {
  el.addEventListener("click", (e) => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");

    // el.location.href.split("#")[1];
    let view = e.path[8].location.hash.split("#")[1];
    createsvg(e.target.textContent);
    document.getElementById("test").beginElement();
  });
});
secondAncre.forEach((el) => {
  el.addEventListener("touchmove", () => console.log("salut"));
  el.addEventListener("click", (e) => {
    console.log(e);
    let test = e.target.textContent;
    switch (test) {
      case "about":
        console.log("bite");
        document.location("AboutAncre");
        break;
      case "home":
        text = "";
        text2 = "about";
        break;
      case "Projects":
        text = "about";
        text2 = "contact";
        break;
      case "Contact":
        text = "project";
        text2 = "home";
        break;
      default:
        text = "";
        text2 = "about";
        break;
    }
  });
});
