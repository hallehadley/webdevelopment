// This function shows a message when the button is clicked
function showMessage() {
    alert("Hello! Welcome to my webpage.");
}

// This function changes the background color of the page
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#ffcccb"; // Light pink
}

// Single event listener for the joke button
document.getElementById("jokeButton").addEventListener("click", function() {
    const jokes = [
        "Why don't skeletons fight each other? They don't have the guts!",
        "What do you call fake spaghetti? An impasta!",
        "Why don't oysters share their pearls? Because they are shellfish!"
    ];

    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("jokeOutput").innerText = randomJoke;
});
