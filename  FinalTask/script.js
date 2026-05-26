let inventory = [
    { name: "Laptop", price: 1000, category: "Tech" },
    { name: "Headphones", price: 200, category: "Tech" },
    { name: "Coffee Maker", price: 100, category: "Home" },
    { name: "Blender", price: 50, category: "Home" }
];

let shopContainer = document.getElementById("shopContainer");
let totalDisplay = document.getElementById("totalPrice");
let input = document.getElementById("searchInput");

function updateApp(searchText, selectedCategory) {

    let filteredItems = inventory.filter(item =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    let calculatedTotal = filteredItems.reduce((total, item) => total + item.price, 0);
    totalDisplay.innerText = calculatedTotal;

    shopContainer.innerHTML = filteredItems
        .map(item => `<li>${item.name} - $${item.price}</li>`)
        .join('');
}