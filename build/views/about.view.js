import { backgroundMenu } from "../animations/background.menu";
import { Container } from "../components/Container";
import { Contents } from "../contents/global.contents";
import "../components/Bust";
import { Bust } from "../components/Bust";

export default function AboutView() {
  backgroundMenu();
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });
  let container = Container.CreateContainer();

  container.className = "container_about";
  home.className = "";
  cases.className = "";
  contact.className = "";
  about.className = "active";
  container.innerHTML = `<h1>${Contents.about.h1}</h1><p>${Contents.about.p}</p>`;

  let main = document.getElementById("main");
  main.className = "main_about";

  Bust();
}