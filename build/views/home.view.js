import { Container } from "../components/Container";
import { GetDate } from "../components/date";
import { mainTransition } from "../animations/main.transition";
import { CreateMenuSvg } from "../svg/menu.svg";
import { greyMenu } from "../animations/background.menu";

export default function HomeView() {
  greyMenu();

  const main = document.getElementById("main");
  main.className = "";
  main.className = "main_home";
  const container = Container.CreateContainer();

  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });

  container.className = "container_home";

  document.querySelectorAll("button").forEach((el) => {
    el.className = "";
  });
  home.className = "active";

  GetDate(container);
  // const date = (document.main.className = "");
  const p = document.querySelector(".container_home p");

  const day = document.getElementById("day");
  const month = document.getElementById("month");
  mainTransition(container, p);

  const baseline = document.createElement("div");
  baseline.setAttribute("id", "baseline");
  baseline.innerText =
    '"When fonctionality meets a strong design, you are never far of a sucessful digital experience"';
  container.appendChild(baseline);

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
