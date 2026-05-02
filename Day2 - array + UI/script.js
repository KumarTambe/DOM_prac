let arr = [5, 12, 7, 20];

let list = document.querySelector(".list");
let inputBtn = document.querySelector(".input-button");

function showUI() {
  list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    list.innerHTML += "<li>" + arr[i] + "</li>";
  }
}

inputBtn.addEventListener("click", () => {
  let val = Number(document.querySelector(".input-field").value);

  if (isNaN(val)) return;

  arr.push(val);
  showUI();
});

showUI();