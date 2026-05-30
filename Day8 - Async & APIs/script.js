let inventory = [
    { name: "Laptop", price: 1000, category: "Tech" },
    { name: "Headphones", price: 200, category: "Tech" },
    { name: "Coffee Maker", price: 100, category: "Home" },
    { name: "Blender", price: 50, category: "Home" }
];

let shopContainer = document.getElementById("shopContainer");
let totalDisplay = document.getElementById("totalPrice");
let input = document.getElementById("searchInput")

function updateApp(searchText, selectedCategory) {

    //  STEP 1: FILTER (The Bouncer)

    let filteredItems = inventory.filter(item => (selectedCategory === "All" || item.category === selectedCategory) && item.name.toLowerCase().includes(searchText.toLowerCase())

  //  STEP 2: REDUCE (The Snowball)
 
  let reducedItems = filteredItems.reduce((total, item) => total + item.price, 0)
  totalDisplay.innerHTML = reducedItems

  //  STEP 3: MAP & JOIN (The Assembly Line)
  
  shopContainer.innerHTML = filteredItems.map(item => `<li>${item.name}</li>`).join('')
  
  
}