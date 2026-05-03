let arr = [22, 67, 2, 69, 1, 7];
let display = document.querySelector(".showbtn")
let list = document.querySelector(".list");
let search = document.querySelector(".search");
let evenbtn = document.querySelector(".even");
let oddbtn = document.querySelector(".odd");

function showUI(dataToDisplay) {
  list.innerHTML = "";
  
  for(let i = 0; i < dataToDisplay.length; i++) {
    let val = dataToDisplay[i]; 
    let element = document.createElement('li');
    let delbtn = document.createElement('button');
    
    element.innerText = val;
    delbtn.innerText = "Delete";
    
    element.append(delbtn);
    list.append(element);

    delbtn.addEventListener('click', function() {
      let masterIndex = arr.indexOf(val);
      arr.splice(masterIndex, 1);
      runSearch(); 
    });
  }
}

display.addEventListener('click',function(){
  showUI(arr);
})

search.addEventListener('input',function runSearch() {
  let searchTerm = search.value;
  let filteredData = arr.filter(item => 
    item.toString().includes(searchTerm)
  );
  showUI(filteredData);
})

showUI(arr);



evenbtn.addEventListener('click',function evem(){
  let EvenArr = arr.filter(item => item % 2 == 0)
  showUI(EvenArr)
})

oddbtn.addEventListener('click',function odd(){
  let OddArr = arr.filter(item => item % 2 != 0)
  showUI(OddArr)
})