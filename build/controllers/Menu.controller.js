import HomeView from "../views/home.view";
import AboutView from "../views/about.view";
import ContactView from "../views/contact.view";
import CasesView from "../views/cases.view";

export function MenuController() {
  window.addEventListener("onload", HomeView());
  home.addEventListener("click", () => HomeView());
  about.addEventListener("click", () => AboutView());
  contact.addEventListener("click", () => ContactView());
  cases.addEventListener("click", () => CasesView());
}
