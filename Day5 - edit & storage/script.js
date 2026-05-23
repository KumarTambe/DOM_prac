let savedNumbers = localStorage.getItem("savedNumbers")
let arr;
if (savedNumbers) {
  arr = JSON.parse(savedNumbers)
} else {
  arr = [32, 67, 27, 19, 10, 78];
}


let display = document.querySelector(".showbtn")
let list = document.querySelector(".list");
let search = document.querySelector(".search");
let evenbtn = document.querySelector(".even");
let oddbtn = document.querySelector(".odd");
let userInput = document.getElementById("userInput")
let addbtn = document.querySelector(".addBtn")
let ascBtn = document.querySelector(".ascBtn");
let descBtn = document.querySelector(".descBtn");
// let lightBtn = document.getElementsByClassName("highlight")[0]

function showUI(dataToDisplay) {
  list.innerHTML = "";

  for (let i = 0; i < dataToDisplay.length; i++) {
    let val = dataToDisplay[i];
    let element = document.createElement('li');
    let delbtn = document.createElement('button');
    let editbtn = document.createElement('button');

    editbtn.innerText = "Edit"
    delbtn.innerText = "Delete";
    element.innerText = val;
    element.append(delbtn);
    element.append(editbtn);
    list.append(element);

    // if(val > 50){
    //   element.style.color = 'red'
    // }

    //delete button
    delbtn.addEventListener('click', function () {
      let targetIndex = arr.indexOf(val);
      arr.splice(targetIndex, 1);
      runSearch();
    });

    //edit button
    editbtn.addEventListener('click', function () {
      let newVal = prompt('Enter the value you want to edit')
      let targetIndex = arr.indexOf(val);
      if (newVal) {
        let newNumber = Number(newVal)
        if (!isNaN(newNumber)) {
          let foundIndex = arr.indexOf(newNumber)
          if (foundIndex != -1 && foundIndex != targetIndex) {
            alert("Number already exists")
            return;
          } else {
            arr[targetIndex] = newNumber
            runSearch()
          }
        }
      }
    })
  }
}

// adv show array
function runSearch() {
  let searchInput = search.value;
  let filteredData = arr.filter(item =>
    item.toString().includes(searchInput)
  );
  localStorage.setItem("savedNumbers", JSON.stringify(arr))
  showUI(filteredData);
}

// normal show array
display.addEventListener('click', function () {
  showUI(arr);
})

//add button
addbtn.addEventListener('click', function add() {
  let value = userInput.value;
  if (value) {
    let newNumber = Number(value)
    if (!isNaN(newNumber)) {
      if (arr.includes(newNumber)) {
        alert("Number already in array")
        return;
      } else {
        arr.push(newNumber)
        runSearch()
      }
    }
  }
})

// search
search.addEventListener('input', function () {
  runSearch();
})

//show even button
evenbtn.addEventListener('click', function even() {
  let EvenArr = arr.filter(item => item % 2 == 0)
  showUI(EvenArr)
})

// show odd button
oddbtn.addEventListener('click', function odd() {
  let OddArr = arr.filter(item => item % 2 != 0)
  showUI(OddArr)
})

//sorting buttons

ascBtn.addEventListener('click', function () {
  arr.sort((a, b) => a - b)
  runSearch()
})
descBtn.addEventListener('click', function () {
  arr.sort((a, b) => b - a)
  runSearch()
})

