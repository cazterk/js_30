const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); // dtop bubbling
  //   console.log(this);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: true })
);

button.addEventListener(
  "click",
  () => {
    console.log("clicked!!!!!");
  },
  { once: true }
);
