let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerNumber = prompt('Wybierz swój ruch: wpisz 1, 2 lub 3.');

console.log('Wybrana liczba gracza to: ' + playerNumber);

let playerMove = getMoveName(playerNumber);

displayResult(computerMove , playerMove);