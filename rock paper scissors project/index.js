let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove){
const computerMove = pickComputerMove();

let result = '';

if(playerMove === 'Scissors'){
    if(computerMove === 'Rock'){
        result = 'You lose.';
    } else if(computerMove === 'Paper'){
        result = 'You win.';
    } else if(computerMove === 'Scissors'){
        result = 'Tie.';
    }

} else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
        result = 'You win.';
    } else if(computerMove === 'Paper'){
        result = 'Tie.';
    } else if(computerMove === 'Scissors'){
        result = 'You lose.';
    }

} else if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
        result = 'Tie.';
    } else if(computerMove === 'Paper'){
        result = 'You lose.';
    } else if(computerMove === 'Scissors'){
        result = 'You win.';
    }
    
}

if(result === 'You win.'){
    score.wins++;
} else if(result === 'You lose.'){
    score.losses++;
} else if(result === 'Tie.'){
    score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You Picked <img src="assets/${playerMove}.png" class = "move-icon">. Computer Picked <img src="assets/${computerMove}.png" class ="move-icon">.`;

// alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }

    return computerMove;
}

let isAutoPlaying = false;
let intervalID;


// const autoPlay = () =>{

// };


document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');
});


document.body.addEventListener('keydown', () => {
    if(event.key === 'r'){
        playGame('Rock');
    } else if(event.key === 'p'){
        playGame('Paper');
    } else if(event.key === 's'){
        playGame('Scissors');
    }
});

function autoPlay(){
    if(!isAutoPlaying){
        intervalID = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000); 
        isAutoPlaying = true;
    } else{
        clearInterval(intervalID);
        isAutoPlaying = false;
    }
}