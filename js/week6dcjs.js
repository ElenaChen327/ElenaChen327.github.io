function lastItem(fruits, outputId) {
    fruits.sort((a, b) => a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length - 1];
    const outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = `Fruits sorted: ${fruits.join(', ')}.<br>Last Alphabetical Item: ${lastAlphabetical}`;
  }

function getAndSort() {
    let numberOfItems = parseInt(prompt('How many items would you like to enter? (2-4)'), 10);
    while (isNaN(numberOfItems) || numberOfItems < 2 || numberOfItems > 4) {
      numberOfItems = parseInt(prompt('Invalid input. Please enter a number between 2 and 4.'), 10);
    }
    let items = [];
    for (let i = 0; i < numberOfItems; i++) {
      items.push(prompt(`Enter item number ${i + 1}:`));
    }
    items.sort((a, b) => a.localeCompare(b));
    let userInputOutput = document.getElementById('userInputOutput');
    userInputOutput.innerHTML = `<h4>You entered:</h4> <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul><h4>Sorted Items:</h4> <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  }