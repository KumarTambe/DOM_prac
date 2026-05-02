let count = 0;

let counter = document.getElementById("counter");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let rst = document.querySelector(".rst");

inc.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

dec.addEventListener("click", () => {
  if (count > 0) count--;
  counter.innerText = count;
});

rst.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});