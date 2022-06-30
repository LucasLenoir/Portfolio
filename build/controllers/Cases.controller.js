import MemoryView from "../views/cases/memory.view";
import QuizzView from "../views/cases/quizz.view";
import MovieView from "../views/cases/movie.view";

export function CasesController() {
  memory.addEventListener("click", () => MemoryView());
  quizz.addEventListener("click", () => QuizzView());
  movie.addEventListener("click", () => MovieView());
}
