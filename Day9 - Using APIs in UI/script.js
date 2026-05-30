let searchBar = document.getElementById("searchBar");
let list = document.getElementById("userList");
let allUsers = [];

async function loadUsers() {
    try {
        list.innerHTML = `<li>Loading users... ⏳</li>`;

        // here we are fetching API using fetch() and then we need to convert it to JSON version bcz 
        // it isnt in the proper format always.
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        allUsers = await response.json();

        list.innerHTML = allUsers.map(item => `<li>${item.name}</li>`).join('');
    } catch (error) {
        list.innerHTML = `<li>Failed to load data.</li>`;
    }
}


// now using it in UI for example a search bar
searchBar.addEventListener("input", (event) => {
    let searchText = event.target.value.toLowerCase();

    let filteredUsers = allUsers.filter(item =>
        item.name.toLowerCase().includes(searchText)
    );

    list.innerHTML = filteredUsers.map(item => `<li>${item.name}</li>`).join('');
});

loadUsers();