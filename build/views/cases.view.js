import { backgroundMenu } from "../animations/background.menu";
import { Container } from "../components/Container";
import { Contents } from "../contents/global.contents";

export default function CasesView() {
  backgroundMenu();
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });
  let container = Container.CreateContainer();

  container.className = "container_cases";
  home.className = "";
  contact.className = "";
  about.className = "";
  cases.className = "active";
  container.innerHTML = `<h1>${Contents.cases.h1}</h1>`;

  let main = document.getElementById("main");
  main.className = "main_cases";
}
