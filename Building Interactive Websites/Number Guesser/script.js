let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target) {
    return Math.abs(humanGuess - target) <= Math.abs(computerGuess - target);
}

function updateScore(str) {
    if (str === 'human') {
        humanScore++;
    } 
    else if (str === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

/*
console.log('Testing "generateTarget" function');
console.log(generateTarget());
console.log(generateTarget());
console.log(generateTarget());
console.log('');

console.log('Testing "compareGuesses" function');
console.log(compareGuesses(2, 7, 3));
console.log(compareGuesses(4, 4, 6));
console.log(compareGuesses(1, 7, 9));
console.log('');

console.log('Testing "updateScore" function');
console.log(humanScore);
console.log(computerScore);
updateScore('human');
updateScore('computer');
console.log(humanScore);
console.log(computerScore);
console.log('');

console.log('Testing "advanceRound" function');
console.log(currentRoundNumber);
advanceRound();
console.log(currentRoundNumber);
*/