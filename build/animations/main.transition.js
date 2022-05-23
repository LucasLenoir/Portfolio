export function mainTransition(item1, item2 = null, item3 = null) {
  const main = document.getElementById("main");

  if (item2 == null) {
    main.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    item1.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
  } else if (item3 !== null) {
    main.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    item1.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    item2.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    item3.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
  } else {
    main.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    item1.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
    item2.animate([{ opacity: "1" }], {
      duration: 1000,
      fill: "forwards",
    });
  }
}
