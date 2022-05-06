import HomeView from "../views/home.view";
import AboutView from "../views/about.view";

export function MenuController() {
  window.addEventListener("onload", HomeView());
  home.addEventListener("click", () => HomeView());
  about.addEventListener("click", () => AboutView());
}
