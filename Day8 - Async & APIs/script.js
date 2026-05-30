// setTimeout function

console.log("Burger delivered")

setTimeout(() => {
  console.log("Fries delivered")
}, 3000) // = 3 sec

console.log("Coke delivered")

// Promise keyword

let orderCoffee = new Promise((resolve, reject) => {
  let machineWorking = false;

  setTimeout(() => {
    if (machineWorking) {
      resolve("Here is your Vanilla Latte! ☕");
    } else {
      reject("Error: The espresso machine is broken.");
    }
  }, 2000);
});

orderCoffee
  .then(message => console.log(message))
  .catch(error => console.log(error));

// but if we had multiple things to wait for then it would get messy as
// we would need multiple .then and .catch chained together

// therefore we use async/await

// aysnc/await

async function getBreakfast() {
  try {
    let message = await orderCoffee();
    console.log(message)
  } catch (error) {
    console.log(error)
  }
}

// fetching API and using async/await on it

async function loadUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let users = await response.json()
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}

loadUsers();

// using this in UI 

