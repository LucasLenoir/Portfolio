export function CreateMenuSvg() {
  let svg = document.querySelector("#nav");
  let width = svg.clientWidth;
  let height = svg.clientHeight;

  svg.innerHTML += `
      <g>
      <text x="-10px" y="30%" fill="white" transform="rotate(270 ${
        (10 * width) / 100
      } ${(30 * height) / 100})" >Scroll up & down</text>
      <text x="10" y="30%" fill="white" transform="rotate(270 ${
        (22 * width) / 100
      } ${(30 * height) / 100})" >& click</text>
      
      <line x1="16%" x2="16%" y1="10%" y2="10%" stroke="#fff" stroke-width="10px">
      <animate
        attributeName="y2" from="10%" to="88%" dur="1s" fill="freeze" restart='always'
         />
        </line>
      </g>
      `;
  CreatePageBtn();
}

export function CreatePageBtn() {
  let svg = document.querySelector("#nav");
  let height = (svg.clientHeight * 50) / 100;

  svg.innerHTML += `
  
  <g>
  <foreignObject id="homeObj" x="30%" y="${
    (height * 10) / 100
  }%" width="300px" height='80px' >
  <button id="home">home</button>
  
  </foreignObject>
  <line x1="13%" x2="13%" y1="80%" y2="10%" stroke="#fff" stroke-width="5px">
      <animate
        attributeName="y2" from="0%" to="50%" dur="1s" fill="freeze" restart='always'
         />
        </line>
  <foreignObject id="aboutObj" x="30%" y="${
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
