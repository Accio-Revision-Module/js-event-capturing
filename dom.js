// Topics:
// 1. Event Propogation
//  a. Event Bubbling/Event Trickling
//  b. Event Capturing
// 3. Event Delegation

// Whenever you click on an HTML element,
// there are 2 phases:
// 1. Capturing Phase
// 2. Execution Phase
// 3. Bubbling Phase

// Event Propogation

const btn = document.getElementById("btn");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

btn.addEventListener("click", (e) => {
  console.log("Button Clicked");
  e.stopPropagation();
});

parent.addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked (Capturing)");
  },
  true,
);

parent.addEventListener("click", (e) => {
  console.log("Parent Clicked (Bubbling)");
});

// Event Delegation
// Technique that is going to use the concept
// of event bubbling to handle events at a
// higher DOM level
const lis = document.querySelectorAll("li");
const ul = document.getElementById("ul");

// Problem
// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     console.log("Li element clicked", e.target.value);
//   });
// });

// Solution
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Li element clicked", e.target.value, e.target.innerText);
  }
});
