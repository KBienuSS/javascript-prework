let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else{
    computerMove = 'nożyce';
}

let playerNumber = prompt('Wybierz swój ruch: wpisz 1, 2 lub 3.');

console.log('Wybrana liczba gracza to: ' + playerNumber);

let playerMove = 'nieznany ruch';

if(playerNumber == 1){
  playerMove = 'kamień';
} else if(playerNumber == 2){
    playerMove = 'papier';
} else if(playerNumber == 3){
    playerMove = 'nożyce';
}

if (
    (playerMove == 'papier' && computerMove == 'kamień') ||
    (playerMove == 'kamień' && computerMove == 'nożyce') ||
    (playerMove == 'nożyce' && computerMove == 'papier')
) {
    printMessage('Ty wygrywasz!');
} else if (
    (computerMove == 'papier' && playerMove == 'kamień') ||
    (computerMove == 'kamień' && playerMove == 'nożyce') ||
    (computerMove == 'nożyce' && playerMove == 'papier')
) {
    printMessage('Komputer wygrywa!');
} else if (playerMove == computerMove) {
    printMessage('Mamy remis!');
} else {
    printMessage('Wpisz poprawną liczbę!');
}