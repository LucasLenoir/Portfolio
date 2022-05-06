import { Container } from "./Container";

export function GetDate(parent) {
  let result = `<p><span id="day"></span><span id="month"></span>`;
  parent.innerHTML += result;

  let date = new Date();

  let month = date.toLocaleString("default", { month: "short" });
  let day = date.getDate();

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
}
