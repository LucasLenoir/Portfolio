export function CreatePageBtn() {
  if (window.innerWidth > 640) {
    const nav = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    nav.setAttribute("id", "nav");
    nav.style.width = "100%";
    nav.style.height = "100%";
    document.querySelector("main").prepend(nav);
    let svg = document.querySelector("#nav");
    let height = svg.clientHeight;

    svg.innerHTML += `
    
    <g>
    <foreignObject id="homeObj" x="0%" y="${10}%" width="300px" height='60px' stroke="#fff" >
    <button id="home">home</button>
    
    </foreignObject>
    
    <foreignObject id="aboutObj" x="0%" y="${18}%" width="300px" height='60px'stroke="#fff" >
    <button id="about">about</button>
    </foreignObject>
    <foreignObject x="0%" y="${26}%" width="350px" height='60px'stroke="#fff" >
    <button id="cases">cases</button>
    </foreignObject>
    <foreignObject x="0%" y="${34}%" width="350px" height='60px'stroke="#fff" >
    <button id="contact">contact</button>
    </foreignObject>
    </g>`;
  }
}
export function CreateMenuSvg() {
  if (window.innerWidth > 640) {
    CreatePageBtn();
    const anim = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    anim.setAttribute("id", "anim");
    anim.style.width = "100%";
    anim.style.height = "100%";
    document.querySelector("main").prepend(anim);
    let svg = document.querySelector("#anim");
    let width = svg.clientWidth;
    let height = svg.clientHeight;

    svg.innerHTML += `
        <g>
      
        <text x="${-((height * 50) / 100)}" y="${
      (height * 28) / 100
    }px" fill="white" transform="rotate(-90 ${(22 * width) / 100} ${
      (25 * height) / 100
    })" >Scroll up & down & click</text>
        
        <line x1="16%" x2="16%" y1="10%" y2="10%" stroke="#fff" stroke-width="10px">
        <animate
          attributeName="y2" from="10%" to="88%" dur="1s" fill="freeze" restart='always'
           />
          </line>
          </foreignObject>
          <line x1="13%" x2="13%" y1="80%" y2="10%" stroke="#fff" stroke-width="5px">
              <animate
                attributeName="y2" from="0%" to="50%" dur="1s" fill="freeze" restart='always'
                 />
                </line>
        </g>
        `;
  }
}
