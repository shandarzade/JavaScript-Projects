let randomNumber = parseInt((Math.random())*100 + 1);

const submit = document.querySelector("#submit-btn");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const remain = document.querySelector(".RemainGuess");
const lowHigh = document.querySelector(".lowHigh");
const resultParams = document.querySelector(".resultParams");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(event){
        event.preventDefault()
        const guess = parseInt(userInput.value)
        validGuess(guess)
    })
}
function validGuess(guess){
    //this function check wether user input is a valid guess or not 
    if(isNaN(guess)){
        alert("please enter a number")
    }
    if(guess < 1 || guess > 100){
        alert("please enter number between 1 to 100")
    }else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`Congratulastions You Guessed it Right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Low, guess higher Number`)
    }else{
        displayMessage(`Number is High, guess Lower Number`)
    }
}

function displayGuess(guess){
    //
    userInput.value = '';
    guesses.innerHTML += `${guess} ` ;
    numGuess++;
    remain.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', ' ');
    submit.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<p id ="newGame">Start New Game </p>`
    p.style.color = "whilte";
    p.style.border = "solid 1px orange";
    p.style.backgroundColor = "black";
    p.style.width = "16%";
    p.style.margin = "2% 44%"
    p.style.borderRadius = "10px";
    p.style.cursor = "pointer";
    resultParams.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(event){
        randomNumber = parseInt((Math.random())*100 + 1);
        playGame = true;
        prevGuess = [];
        numGuess = 1;
        remain.innerHTML = `10`
        guesses.innerHTML = '';
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        resultParams.removeChild(p);
        playGame = true
    })
}