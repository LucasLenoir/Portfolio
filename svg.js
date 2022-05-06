export function createsvg(view) {
  let text, text2;
  switch (view) {
    case "about":
      text = "home";
      text2 = "project";
      break;
    case "home":
      text = "";
      text2 = "about";
      break;
    case "Projects":
      text = "about";
      text2 = "contact";
      break;
    case "Contact":
      text = "project";
      text2 = "home";
      break;
    default:
      text = "";
      text2 = "about";
      break;
  }

  let svg = document.querySelector("svg");
  let heightTotal = svg.clientHeight;
  let widthTotal = svg.clientWidth;

  svg.innerHTML = `
    <g>
        <text x="40%" y="5%">${text}</text>
        <line x1="50%" x2="50%" y1="10%" y2="10%" stroke="#fff">
        <animate
        attributeName="y2" from="10%" to="88%" dur="1s" fill="freeze" restart='always'
        id="test"
         />
        </line>
        <path stroke="#fff" fill="none" d="M${(47 * widthTotal) / 100} ${
    (heightTotal * 90) / 100
  } L${(widthTotal * 50) / 100} ${(heightTotal * 95) / 100} L${
    (53 * widthTotal) / 100
  } ${(heightTotal * 90) / 100} ">
        </path>
        <text x="40%" y="100%">${text2}</text>
    </g>
    `;
}

export function checkurl() {
  let view = document.location.href.split("#")[1];
  return view;
}
