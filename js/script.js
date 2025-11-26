function playGame(playerNumber){    
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log('Wybrana liczba gracza to: ' + playerNumber);
    let playerMove = getMoveName(playerNumber);
    displayResult(computerMove , playerMove);
}

document.getElementById('rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('scissors').addEventListener('click', function() {
    playGame(3);
});