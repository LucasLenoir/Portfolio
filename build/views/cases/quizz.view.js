import { Case1 } from "../../components/Case1";
import { Container } from "../../components/Container";
import { Contents } from "../../contents/global.contents";
import { CasesController } from "../../controllers/Cases.controller";
import quizC from "/assets/img/quizz1.png";
import githubPic from "/assets/icone/github.png";

export default function QuizzView() {
  const container = document.getElementById("container");

  container.innerHTML = `<h1>${Contents.cases.h1}</h1><ul><li id="memory">${Contents.cases.li1}</li><li  id="quizz">${Contents.cases.li2}</li><li id="resort">${Contents.cases.li3}</li></ul/>`;
  if (window.innerWidth < 640) {
    const img = document.createElement("div");
    img.style.height = "100%";
    img.style.width = "100%";
    container.appendChild(img);
    img.style.background =
    `center/ contain url('${quizC}') no-repeat`;
  }

  const txt = document.createElement("div");
  txt.classList.add("txt1");
  txt.innerHTML = `<h2>${Contents.quizz.h2}</h2>`;
  container.innerHTML += `<p>${Contents.quizz.p}</p>`;
  container.appendChild(txt);
  document.getElementById("quizz").classList.add("active");

  let github = document.createElement("div");
  github.style.background = ` center/ contain url('${githubPic}') no-repeat`;
  github.style.width = "50px";
  github.style.height = "50px";
  github.style.filter = "invert(100%)";

  let githubA = document.createElement("a");
  githubA.style.display = "inline-block";
  githubA.setAttribute("target", "_blank");

  githubA.href = "https://github.com/LucasLenoir/Quizz_Game";
  githubA.style.width = "100%";

  githubA.style.height = "100%";

  github.appendChild(githubA);
  container.appendChild(github);
  if (window.innerWidth > 640) {
    Case1(quizC);
  }

  CasesController();
}
