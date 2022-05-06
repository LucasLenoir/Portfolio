import { createsvg } from "../../svg";

export function CreateMenuSvg() {
  CreateSvg();

  CreatePageBtn();
}

export function CreatePageBtn() {
  let svg = document.querySelector("svg");
  let height = (svg.clientHeight * 50) / 100;

  svg.innerHTML += `
  
  <g>
  <foreignObject x="30%" y="${
    (height * 10) / 100
  }%" width="300px" height='80px' >
  <button id="home">home</button>
  </foreignObject>
  <foreignObject x="30%" y="${
    (height * 13) / 100
  }%" width="300px" height='80px' >
  <button id="about">about</button>
  </foreignObject>
  <foreignObject x="30%" y="${
    (height * 16) / 100
  }%" width="300px" height='80px' >
  <button id="cases">cases</button>
  </foreignObject>
  <foreignObject x="30%" y="${
    (height * 19) / 100
  }%" width="300px" height='80px' >
  <button id="contact">contact</button>
  </foreignObject>
  </g>`;
}
window.addEventListener("resize", () => {
  CreateSvg();
  let line = document.querySelector("svg g line");
  line.setAttribute("y2", "88%");
  
});
function CreateSvg() {
  let svg = document.querySelector("svg");
  let width = svg.clientWidth;
  let height = svg.clientHeight;
  svg.innerHTML = "";
  svg.innerHTML += `
  <g>
  <text x="0" y="30%" fill="white" transform="rotate(270 ${
    (10 * width) / 100
  } ${(30 * height) / 100})" >Scroll up & down</text>
  <text x="30%" y="30%" fill="white" transform="rotate(270 ${
    (22 * width) / 100
  } ${(30 * height) / 100})" >& click</text>
  
  <line x1="15%" x2="15%" y1="10%" y2="10%" stroke="#fff" stroke-width="10px">
  <animate
    attributeName="y2" from="10%" to="88%" dur="1s" fill="freeze" restart="always"
        />
    </line>
  </g>
  `;
}
