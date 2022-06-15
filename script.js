"use-strict";

import "./assets/styles/css/output.css";
import { MenuController } from "./build/controllers/Menu.controller.js";
import { CreatePageBtn } from "./build/svg/menu.svg.js";
import HomeView from "./build/views/home.view.js";
import AboutView from "./build/views/about.view.js";
import CasesView from "./build/views/cases.view.js";
import ContactView from "./build/views/contact.view.js";
import { Container } from "./build/components/Container.js";
import {
  checkIfIsMobileAndActivatesMenu,
  checkIfMobileAndApllyStyle,
  isMobile,
} from "./build/controllers/Mobile.controller";

document.addEventListener("onload", checkIfMobileAndApllyStyle());
checkIfMobileAndApllyStyle();
checkIfIsMobileAndActivatesMenu();
isMobile();
function homeControllers() {
  CreatePageBtn();

  MenuController();
}

function scroll() {
  if (window.innerWidth > 640) {
    let index = 0;
    let wheelcount = 0;
    window.addEventListener("wheel", (e) => {
      wheelcount++;

      if (wheelcount === 6) {
        if (e.deltaY > 0) {
          index++;
        }
        if (e.deltaY < 0) {
          index--;
        }
        if (index > 3) {
          index = 0;
        }
        if (index < 0) {
          index = 3;
        }

        let fo = document.querySelectorAll("foreignObject");
        fo.forEach((el) => {
          el.removeAttribute("class");
        });
        fo[index].setAttribute("class", "glow");
        switch (index) {
          case 0:
            HomeView();
            Container.className = "container_home";
            wheelcount = 0;

            break;
          case 1:
            AboutView();
            Container.className = "container_about";
            wheelcount = 0;
            break;
          case 2:
            CasesView();
            Container.className = "container_cases";
            wheelcount = 0;

            break;
          case 3:
            ContactView();
            Container.className = "container_contact";
            wheelcount = 0;

            break;

          default:
            break;
        }
      }
    });
  }
}

homeControllers();
scroll();
