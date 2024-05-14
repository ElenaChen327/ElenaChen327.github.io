// Greeting Function
document.getElementById('greetButton').onclick = function() {
    const date = new Date();
    const hour = date.getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    alert(greeting);
};

// Button Change Function
document.getElementById('changeButton').onclick = function() {
    const button = document.getElementById('changeButton');
    console.log("Before change:", button.textContent, button.className);
    button.textContent = "Done";
    button.className = "btn btn-success";
    console.log("After change:", button.textContent, button.className);
};
