import { backgroundMenu } from "../animations/background.menu";
import { mainTransition } from "../animations/main.transition";
import { Container } from "../components/Container";
import { Contents } from "../contents/global.contents";
import "../components/Bust";
import { Bust } from "../components/Bust";
import { CreateMenuSvg } from "../svg/menu.svg";

export default function AboutView() {
  const container = Container.CreateContainer();
  backgroundMenu();
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });

  if (window.innerWidth > 640) {
    Bust();
  }

  container.className = "container_about";
  home.className = "";
  cases.className = "";
  contact.className = "";
  about.className = "active";
  const main = document.getElementById("main");
  main.className = "";
  main.className = "main_about";

  setTimeout(() => {
    container.innerHTML = `<h1>${Contents.about.h1}</h1><p>${Contents.about.p}</p>`;
    const canvas = document.querySelector("#main canvas");

    mainTransition(container, canvas);
  }, 200);

  if (window.innerWidth < 640) {
    document.querySelector("header").style.display = "flex";
    const menu = document.querySelector("#menu");
    const toggle = document.querySelector("#toggle");
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }else{
    document.querySelector("header").style.display = "grid";

  }
}

