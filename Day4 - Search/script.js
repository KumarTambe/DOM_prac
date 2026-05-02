let arr = [22, 67, 2, 69, 1, 7];
let list = document.querySelector(".list");
let search = document.querySelector(".search");


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

search.addEventListener('input',function runSearch() {
  let searchTerm = search.value;
  let filteredData = arr.filter(item => 
    item.toString().includes(searchTerm)
  );
  showUI(filteredData);
})
showUI(arr);