const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("hello i am a %s string!", "😊");

// Styled

console.log(
  "%c i am some great text",
  "font-size:50px; background:red; text-shadow:10px 10px 0 blue"
);

console.clear();
// warning!
console.warn("oh noo");

// Error :|
console.error("damn");

// Info
console.info("crocodiles eat 3-4 people per year");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "that is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("wes");
console.count("wes");
console.count("steve");
console.count("steve");
console.count("wes");
console.count("wes");
console.count("steve");
console.count("wes");
console.count("steve");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/cazterk")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
