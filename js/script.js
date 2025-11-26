let computerWin = 0;
let playerWin = 0;

function playGame(playerNumber){    
    clearMessages();
    let randomNumber = getProbability(playerNumber);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log('Wybrana liczba gracza to: ' + playerNumber);
    let playerMove = getMoveName(playerNumber);
    displayResult(computerMove , playerMove);
}

document.getElementById('computer-win').innerHTML = computerWin;
document.getElementById('player-win').innerHTML = playerWin;
document.getElementById('rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('scissors').addEventListener('click', function() {
    playGame(3);
});