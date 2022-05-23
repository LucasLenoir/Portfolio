import { CreateMenuSvg } from "../svg/menu.svg";
import { MenuController } from "./Menu.controller";

export function checkIfMobileAndApllyStyle() {
  if (window.innerWidth < 640) {
    if (document.getElementById("anim")) {
      document.getElementById("anim").remove();
      document.getElementById("nav").remove();
      document.getElementById("info2").style.display = "none";
      document.getElementById("social").style.display = "none";
    }

    const toggle = document.createElement("div");
    toggle.setAttribute("id", "toggle");
    const navBurger = document.createElement("nav");
    navBurger.setAttribute("id", "navBurger");
    const ulBurger = document.createElement("ul");
    ulBurger.setAttribute("id", "menu");
    const home = document.createElement("li");
    home.setAttribute("id", "home");
    home.innerHTML += "home";
    const about = document.createElement("li");
    about.setAttribute("id", "about");
    about.innerHTML += "about";
    const cases = document.createElement("li");
    cases.setAttribute("id", "cases");
    cases.innerHTML += "cases";
    const contact = document.createElement("li");
    contact.setAttribute("id", "contact");
    contact.innerHTML += "contact";
    ulBurger.append(home, about, cases, contact);
    navBurger.appendChild(ulBurger);
    document.querySelector("body").append(navBurger, toggle);
    MenuController();
    document.querySelector("body").classList.add("isMobile");
  } else {
    document.querySelector("body").classList.remove("isMobile");
  }
}
export function checkIfIsMobileAndActivatesMenu() {
  if (document.querySelector("body").classList.contains("isMobile")) {
    const toggle = document.querySelector("#toggle");
    const menu = document.querySelector("#menu");

    toggle.addEventListener("click", (e) => {
      toggle.classList.toggle("active");
      if (document.getElementById("baseline")) {
        document.getElementById("baseline").style.visibility = "hidden";
      } else {
        document.getElementById("container").style.visibility = "hidden";
      }

      menu.classList.toggle("active");
    });
  }
}

export function isMobile() {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 640) {
      document.querySelector("body").classList.add("isMobile");
      checkIfMobileAndApllyStyle();
      checkIfIsMobileAndActivatesMenu();
    } else {
      document.querySelector("body").classList.remove("isMobile");

      document.getElementById("home").remove();
      document.getElementById("about").remove();
      document.getElementById("cases").remove();
      document.getElementById("contact").remove();
      document.getElementById("toggle").remove();
      document.getElementById("menu").remove();
      document.getElementById("info2").style.display = "block";
      document.getElementById("social").style.display = "block";
      CreateMenuSvg();
      MenuController();
    }
  });
}
