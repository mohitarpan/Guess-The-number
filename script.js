let randomNumber =(parseInt(Math.random() * 100 + 1));
 
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowerOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')
let preGuess =[]

let numGuess = 1

let playGame = true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // 
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess <1){
        alert('please enter a number more than one')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else
    preGuess.push(guess)
    if(numGuess == 11){
        dispalyGuess(guess)
        displayMessage(`Game over. Random number was ${randomNumber}`)
        endGame()
    }else {
        dispalyGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess){
    // 
    if(guess === randomNumber){
        displayMessage(`You guessed right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is too High`)
    }
}
function displayMessage(Message){
    lowerOrHi.innerHTML = `<h2> ${Message}</h2>`;
}
function dispalyGuess(guess){ 
userInput.value = ''
guessSlot.innerHTML += `${guess}  `;
numGuess++;
remaining.innerHTML = `${11 -numGuess }`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber =(parseInt(Math.random() * 100 + 1));
    preGuess =[]
    numGuess= 1 
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true
})
}