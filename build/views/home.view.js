import { Container } from "../components/Container";
import { GetDate } from "../components/date";

export default function HomeView() {
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });
  let container = Container.CreateContainer();
  container.className = "container_home";
  let main = document.getElementById("main");
  main.className = "";
  GetDate(container);
}
