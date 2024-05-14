// function for trvia qustion 
function checkTriviaAnswer() {
    const correctAnswer = "Beijing";
    const userAnswer = document.getElementById('trivia-answer').value.toLowerCase();

    const responseDiv = document.getElementById('trivia-response');
    if (userAnswer === correctAnswer.toLowerCase()) {
        responseDiv.textContent = `You guessed ${userAnswer}. Correct!`;
    } else {
        responseDiv.textContent = `You guessed ${userAnswer}. Incorrect, try again!`;
    }
    responseDiv.style.display = 'block'; 
}


// function for checking number 
function checkNumber() {
    const number = document.getElementById('number-input').value;
    const responseDiv = document.getElementById('number-response');

    // checking that 5-digit number is entered 
    if (/^\d{5}$/.test(number)) {
        const isEven = parseInt(number, 10) % 2 === 0;
        responseDiv.textContent = `${number} is an ${isEven ? 'even' : 'odd'} number.`;
    } else {
        responseDiv.textContent = 'Please enter a valid 5-digit number.';
    }
    responseDiv.style.display = 'block';
}

// processor to run question function when pressing a button 
document.getElementById('trivia-submit').addEventListener('click', checkTriviaAnswer);

// processor to run question function when pressing Enter 
document.getElementById('trivia-answer').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkTriviaAnswer();
    }
});

// processor to run function to check number by pressing button  
document.getElementById('number-submit').addEventListener('click', checkNumber);

// processor to run function to check number by pressing Enter  
document.getElementById('number-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkNumber();
    }
});