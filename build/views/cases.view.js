import { backgroundMenu, greyMenu } from "../animations/background.menu";
import { Container } from "../components/Container";
import { Contents } from "../contents/global.contents";
import { mainTransition } from "../animations/main.transition";
import { CasesController } from "../controllers/Cases.controller";
import MemoryView from "./cases/memory.view";
import { Logo } from "../components/logo";

export default function CasesView() {
  
  const container = Container.CreateContainer();
  backgroundMenu();
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });

  container.className = "container_cases";
  home.className = "";
  contact.className = "";
  about.className = "";
  cases.className = "active";

  container.innerHTML = `<h1>${Contents.cases.h1}</h1><ul><li id="memory">${Contents.cases.li1}</li><li  id="quizz">${Contents.cases.li2}</li><li id="resort">${Contents.cases.li3}</li></ul/>`;

  const main = document.getElementById("main");
  main.className = "";
  main.className = "main_cases";
 
  
  mainTransition(container);
  CasesController();
  MemoryView();

  if (window.innerWidth < 640) {
    document.querySelector("header").style.display = "none";
    const menu = document.querySelector("#menu");
    const toggle = document.querySelector("#toggle");
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }else{
    document.querySelector("header").style.display = "grid";

  }
}

