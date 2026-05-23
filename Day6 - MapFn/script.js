let numbers = [1, 5, 7, 10, 11]

let newNumbers = numbers.map(item => item * 2);


// map function
let list = document.querySelector(".showList")

list.innerHTML = numbers.map(item => `<li>${item}</li>`).join('')


// filter function
let evenNumbers = numbers.filter(item => item % 2 == 0)

let oddNumbers = numbers.filter(item => item % 2 != 0)

let names = ["Alice", "Bob", "Amanda", "Charlie", "Alex"];

//.starsWith("x")
let aNames = names.filter(item => item.startsWith("A"))

// reduce function

let totalSum = names.reduce((total, item) => item + total, 0)

//  chaining multiple methods

let ages = [12, 18, 25, 10, 30];

let adultLabels = ages.filter(item => item >= 18).map(item => `Adult:${item}`)

// using objects

let inventory = [
    { name: "Laptop", price: 1000, category: "Tech" },
    { name: "Coffee Maker", price: 100, category: "Home" },
    { name: "Headphones", price: 200, category: "Tech" },
    { name: "Blender", price: 50, category: "Home" }
];

let shopContainer = document.getElementById("shop");

shopContainer.innerHTML = inventory.filter(item => item.price < 500 && item.category === "Tech").map(item => `<li>${item.name} + ${item.category}</li>`).join('')