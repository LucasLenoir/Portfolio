import { Case1 } from "../../components/Case1";
import { Container } from "../../components/Container";
import { Contents } from "../../contents/global.contents";
import { CasesController } from "../../controllers/Cases.controller";

export default function MemoryView() {
  const container = document.getElementById("container");
  container.innerHTML = ``;
  container.innerHTML = `<h1>${Contents.cases.h1}</h1><ul><li id="memory">${Contents.cases.li1}</li><li  id="quizz">${Contents.cases.li2}</li><li id="resort">${Contents.cases.li3}</li></ul/>`;

  if (window.innerWidth < 640) {
    const img = document.createElement("div");
    img.setAttribute("id", "img");
    img.style.height = "100%";
    img.style.width = "100%";
    container.appendChild(img);
    img.style.background =
      " center/ contain url(../../assets/img/memory.png) no-repeat";
  }

  const txt = document.createElement("div");
  txt.classList.add("txt1");
  txt.innerHTML = `<h2>${Contents.memory.h2}</h2>`;
  container.innerHTML += `<p>${Contents.memory.p}</p>`;
  container.appendChild(txt);
  document.getElementById("memory").classList.add("active");

  if (window.innerWidth > 640) {
    Case1("../../assets/img/memory.png");
  }

  CasesController();
}
