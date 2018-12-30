const current = window.location.pathname.split("/").pop();

// @ts-ignore
const elems = [...document.querySelectorAll("li a")];

const elem = elems.find((e) => e.innerText.toLowerCase() === current);

elem.classList.add("hovered");
