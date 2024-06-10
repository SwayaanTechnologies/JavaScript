function fetchDataFromServer(callback) {
    // Simulate fetching data (e.g., API request)
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data); // Execute the callback with the data
    }, 1000); // Simulated delay of 1 second
}

function displayData(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// Usage: Fetch data and display it
fetchDataFromServer(displayData);
