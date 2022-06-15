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
    <button id="home">${window.innerWidth}</button>
    
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
