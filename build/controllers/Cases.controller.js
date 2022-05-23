import MemoryView from "../views/cases/memory.view";
import QuizzView from "../views/cases/quizz.view";
import ResortView from "../views/cases/resort.view";

export function CasesController() {
  memory.addEventListener("click", () => MemoryView());
  quizz.addEventListener("click", () => QuizzView());
  resort.addEventListener("click", () => ResortView());
}
