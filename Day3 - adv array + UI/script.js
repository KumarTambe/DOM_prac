let arr = [3, 4, 67, 19];

let list = document.querySelector(".list");
let addBtn = document.querySelector(".add");
let clearBtn = document.querySelector(".clear");

function showUI() {
  list.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerText = arr[i];

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    li.appendChild(delBtn);
    list.appendChild(li);

    delBtn.addEventListener("click", () => {
      arr.splice(i, 1);
      showUI();
    });
  }
}

addBtn.addEventListener("click", () => {
  let val = Number(document.querySelector(".input-field").value);
  if (isNaN(val)) return;

  arr.push(val);
  showUI();
});

clearBtn.addEventListener("click", () => {
  arr.splice(0, arr.length);
  showUI();
});

showUI();