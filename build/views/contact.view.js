// import { backgroundMenu } from "../animations/background.menu";
import { Container } from "../components/Container";
import { Logo } from "../components/logo";
import { Contents } from "../contents/global.contents";
import { mainTransition } from "../animations/main.transition";

import LinkeinImg from "/assets/icone/linkedin.png";
import MailImg from "/assets/icone/mail.png";
import GithubImg from "/assets/icone/github.png";

export default function ContactView() {
  const container = Container.CreateContainer();

  // backgroundMenu();
  document.querySelectorAll("animate").forEach((el) => {
    el.beginElement();
  });
  if (window.innerWidth > 640) {
    Logo();
   
    const canvas = document.querySelector("#main canvas");
    mainTransition(canvas);
    container.appendChild(canvas);
  }

  container.className = "container_contact";
  home.className = "";
  about.className = "";
  cases.className = "";
  contact.className = "active";
  const leftcontact = document.createElement("div");
  container.appendChild(leftcontact);
  leftcontact.innerHTML = `<h1>${Contents.contact.h1}</h1>`;
  leftcontact.setAttribute("id", "leftContact");

  const main = document.getElementById("main");
  main.className = "";
  main.className = "main_contact";
  mainTransition(container);

  const socials = document.createElement("ul");
  socials.style.width = "100%";
  socials.style.height = "100%";
  const mail = document.createElement("li");
  mail.style.width = "15%";
  mail.style.height = "33%";

  const mailA = document.createElement("a");
  mailA.href = "mailto: lucas.lenoirdarcheville@gmail.com";
  mailA.style.background = `center/contain url('${MailImg}') no-repeat`;
  mailA.style.filter = "invert(100%)";
  mail.appendChild(mailA);
  const linkedin = document.createElement("li");

  linkedin.style.width = "12%";
  linkedin.style.height = "33%";

  const linkedinA = document.createElement("a");
  linkedinA.style.filter = "invert(100%)";
  linkedinA.href = "https://www.linkedin.com/in/lucas-lenoir-darcheville";
  linkedinA.style.background = `center/contain url('${LinkeinImg}') no-repeat`;
  linkedinA.setAttribute("target", "_blank");
  linkedin.appendChild(linkedinA);

  const github = document.createElement("li");

  github.style.width = "12%";
  github.style.height = "33%";
  const githubA = document.createElement("a");
  githubA.style.filter = "invert(100%)";
  githubA.href = "https://github.com/LucasLenoir";
  githubA.style.background = ` center/contain url('${GithubImg}') no-repeat`;
  githubA.setAttribute("target", "_blank");
  github.appendChild(githubA);

  socials.append(mail, linkedin, github);
  leftcontact.appendChild(socials);

  if (window.innerWidth < 640) {
    document.querySelector("header").style.display = "flex";
    const menu = document.querySelector("#menu");
    const toggle = document.querySelector("#toggle");
    menu.classList.remove("active");
    toggle.classList.remove("active");
  }
}
