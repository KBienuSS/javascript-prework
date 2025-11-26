let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if{randomNumber ==2}{
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

let playerNumber = prompt('Wybierz swój ruch: wpisz 1, 2 lub 3.');

console.log('Wybrana liczba gracza to: ' + playerNumber);

let playerMove = 'nieznany ruch';

if(playerNumber == 1){
  playerMove = 'kamień';
} else if{playerNumber ==2}{
    play = 'papier';
} else {
    playerNumber = 'nożyce';
}

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to '+ playerMove +', to wygrywasz!');