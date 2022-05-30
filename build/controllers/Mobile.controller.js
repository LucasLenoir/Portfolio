import { CreateMenuSvg } from "../svg/menu.svg";
import { MenuController } from "./Menu.controller";
let width = window.innerWidth;
let height = window.innerHeight;

export function checkIfMobileAndApllyStyle() {
  console.log("checkIfMobileAndApllyStyle");
  if (window.innerWidth < 640) {
    if (document.getElementById("anim")) {
      document.getElementById("anim").remove();
      document.getElementById("nav").remove();
      document.getElementById("info2").style.display = "none";
      document.getElementById("social").style.display = "none";
    }

    if (!document.getElementById("toggle")) {
      const toggle = document.createElement("div");
      toggle.setAttribute("id", "toggle");
      document.querySelector("body").appendChild(toggle);
    }

    if (!document.getElementById("navBurger")) {
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
      document.querySelector("body").appendChild(navBurger);
    }

    MenuController();
    document.querySelector("body").classList.add("isMobile");
  } else {
    document.querySelector("body").classList.remove("isMobile");
  }
}
export function checkIfIsMobileAndActivatesMenu() {
  console.log("checkIfIsMobileAndActivatesMenu");
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
  window.addEventListener("resize", (e) => {
    e.stopImmediatePropagation();
    console.log(Math.abs(window.innerWidth - width));
    console.log("resized");
    if (
    
      Math.abs(window.innerWidth - width) > 50 ||
      Math.abs(window.innerHeight - height) > 50
    ) {
      width = window.innerWidth;
      height = window.innerHeight;
      if (window.innerWidth < 640) {
        console.log("if<640");
        if (!document.querySelector("body").classList.contains("isMobile")) {
          console.log("!isMobile");
          document.querySelector("body").classList.add("isMobile");
          checkIfMobileAndApllyStyle();
          checkIfIsMobileAndActivatesMenu();
        }
      } else if (window.innerWidth > 640) {
        console.log("if>640");
        if (document.querySelector("body").classList.contains("isMobile")) {
          console.log("isMobile");
          document.querySelector("body").classList.remove("isMobile");

          document.getElementById("home").remove();
          document.getElementById("about").remove();
          document.getElementById("cases").remove();
          document.getElementById("contact").remove();
          document.getElementById("toggle")?.remove();
          document.getElementById("menu")?.remove();
          document.getElementById("navBurger")?.remove();
          document.getElementById("info2").style.display = "block";
          document.getElementById("social").style.display = "block";
        }
      }
      if (!document.getElementById("nav") && window.innerWidth > 640) {
        console.log("if !nav && >640");
        CreateMenuSvg();
        MenuController();
      } else {
        console.log("else nav && <640");
        document.querySelectorAll("animate").forEach((el) => {
          el.beginElement();
        });
      }
    }
  });
}
