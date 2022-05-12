import { backgroundMenu } from "../animations/background.menu";
import { Container } from "../components/Container";
import { Logo } from "../components/logo";
import { Contents } from "../contents/global.contents";

export default function ContactView() {
  backgroundMenu();
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });
  let container = Container.CreateContainer();

  container.className = "container_contact";
  home.className = "";
  about.className = "";
  cases.className = "";
  contact.className = "active";
  container.innerHTML = `<h1>${Contents.contact.h1}</h1>`;

  let main = document.getElementById("main");
  main.className = "main_contact";
  Logo();
}
