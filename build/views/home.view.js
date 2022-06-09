import { Container } from "../components/Container";
// import { GetDate } from "../components/date";
import { mainTransition } from "../animations/main.transition";
import logo3 from "../../assets/img/loggo1.png";

// import { greyMenu } from "../animations/background.menu";

export default function HomeView() {
  // greyMenu();

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

  // GetDate(container);
  // const date = (document.main.className = "");
  const p = document.querySelector(".container_home p");
  const city = document.createElement("div");

  city.setAttribute("id", "city");
  city.style.background = `center/cover url(${logo3}) no-repeat`;
  if (window.innerWidth < 640) {
    city.style.width = "80px";
    city.style.height = "80px";
  }
  const day = document.getElementById("day");
  const month = document.getElementById("month");
  mainTransition(container, p, city);

  const baseline = document.createElement("div");
  baseline.setAttribute("id", "baseline");
  baseline.innerHTML =
    ' <span id="baseline1">When fonctionality meets an expressive design, <br>you are never far off from a sucessful</span><span id="digital">digital experience</span>';
  container.append(baseline, city);

  if (window.innerWidth < 640) {
    document.querySelector("header").style.display = "flex";
    const menu = document.querySelector("#menu");
    const toggle = document.querySelector("#toggle");
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }
}
