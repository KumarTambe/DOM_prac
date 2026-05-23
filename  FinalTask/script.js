let inventory = [
    { name: "Laptop", price: 1000, category: "Tech" },
    { name: "Headphones", price: 200, category: "Tech" },
    { name: "Coffee Maker", price: 100, category: "Home" },
    { name: "Blender", price: 50, category: "Home" }
];

let shopContainer = document.getElementById("shopContainer");
let totalDisplay = document.getElementById("totalPrice");

function updateApp(searchText, selectedCategory) {

    // 🧱 STEP 1: FILTER (The Bouncer)
    // Check two things: 
    // 1. Does item.category === selectedCategory? (Or is selectedCategory === "All"?)
    // 2. Does item.name.toLowerCase().includes(searchText.toLowerCase())?
    let filteredItems = inventory.filter(item =>
        _____________________________________________
    );

    // 🧱 STEP 2: REDUCE (The Snowball)
    // Use .reduce() on your new `filteredItems` array to get the total price.
    let calculatedTotal = filteredItems.reduce(___________________);
    totalDisplay.innerText = calculatedTotal;

    // 🧱 STEP 3: MAP & JOIN (The Assembly Line)
    // Use .map() on your `filteredItems` array to wrap them in <li> tags, 
    // join them, and inject them into the shopContainer.innerHTML
    shopContainer.innerHTML = filteredItems.map(___________________).join('');
}