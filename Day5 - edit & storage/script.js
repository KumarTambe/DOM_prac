let arr = [22, 67, 2, 69, 1, 7];
let display = document.querySelector(".showbtn")
let list = document.querySelector(".list");
let search = document.querySelector(".search");
let evenbtn = document.querySelector(".even");
let oddbtn = document.querySelector(".odd");
let userInput = document.querySelector("#userInput")
let addbtn = document.querySelector(".addBtn")

function showUI(dataToDisplay) {
  list.innerHTML = "";
  
  for(let i = 0; i < dataToDisplay.length; i++) {
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

    delbtn.addEventListener('click', function() {
      let targetIndex= arr.indexOf(val);
      arr.splice(targetIndex, 1);
      runSearch(); 
    });
    
    editbtn.addEventListener('click',function(){
        let newVal = prompt('Enter the value you want to edit')
        let targetIndex = arr.indexOf(val);
        if(newVal){
          let newNumber = Number(newVal)
          if(!isNaN(newNumber)){
            arr[targetIndex] = newNumber;
            runSearch();
          }
        }
    })
  }
}


display.addEventListener('click',function(){
  showUI(arr);
  
})

addbtn.addEventListener('click',function add(){
  let value = userInput.value;
  if(value){
    let newNumber = Number(value)
    if(!isNaN(newNumber)){
      if(arr.includes(newNumber)){
        alert("Number already in array")
        return;
      } else {
        arr.push(newNumber)
        runSearch()
      }
    }
  }
})


search.addEventListener('input',function runSearch() {
  let searchInput = search.value;
  let filteredData = arr.filter(item => 
    item.toString().includes(searchInput)
  );
  showUI(filteredData);
})

evenbtn.addEventListener('click',function even(){
  let EvenArr = arr.filter(item => item % 2 == 0)
  showUI(EvenArr)
})

oddbtn.addEventListener('click',function odd(){
  let OddArr = arr.filter(item => item % 2 != 0)
  showUI(OddArr)
})