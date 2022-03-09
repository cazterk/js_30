const checkboxes = document.querySelectorAll(" .inbox [type=checkbox]");
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // check ig they had the shift key down
  // and check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do ehat we please
    // loop over every single checkbok
    checkboxes.forEach((checkbox) => {
      console.log("check: ", checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check them inbetween");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
