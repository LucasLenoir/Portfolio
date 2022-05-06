export const Container = {
  CreateContainer() {
    let main = document.querySelector("#main");
    let container = document.createElement("div");
    container.setAttribute("id", "container");
    main.innerHTML = "";
    main.appendChild(container);
    return container;
  },
};

export const SecondContainer = {
  CreateSubContainer() {
    let main = document.querySelector("#main");
    Container = document.querySelector("#Container");
    document.createElement("div");
    div.setAttribute("id", "SecondContainer");
    main.appendChild("id", "SecondContainer");
  },
};
