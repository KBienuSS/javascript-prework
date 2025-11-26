function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(moveNumber) {
	if(moveNumber == 1){
		moveName = 'kamień';
		return moveName;
	} else if(moveNumber == 2){
		moveName = 'papier';
		return moveName;
	} else if(moveNumber == 3){
		moveName = 'nożyce';
		return moveName;
	}

	moveName = 'Wpisz poprawną liczbę!';
	return moveName;
}

function displayResult(argComputerMove , argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if (
		(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
		(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
		(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
	) {
		printMessage('Ty wygrywasz!');
        console.log(playerWin);
		playerWin++;
        document.getElementById('player-win').innerHTML = playerWin;
	} else if (
		(argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
		(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
		(argComputerMove == 'nożyce' && argPlayerMove == 'papier')
	) {
		printMessage('Komputer wygrywa!');
        console.log(computerWin);
        computerWin++;
        document.getElementById('computer-win').innerHTML = computerWin;
	} else if (argPlayerMove == argComputerMove) {
		printMessage('Mamy remis!');
	} else {
		printMessage('Wpisz poprawną liczbę!');
	}
}

function getProbability(playerNumber){
    let weight = Math.floor(Math.random() * 4 + 1);
    let randomNumber = 0;

    if(playerNumber == 1 && weight<4){
        randomNumber = 3;
    } else if (playerNumber == 1 && weight == 4){
        randomNumber = Math.floor(Math.random() * 2) + 1;
    } else if (playerNumber == 2 && weight<4){
        randomNumber = 1;
    } else if (playerNumber == 2 && weight == 4){
        randomNumber = Math.floor(Math.random() * 2) + 2;
    } else if (playerNumber == 3 && weight<4){
        randomNumber = 2;
    } else if (playerNumber == 3 && weight == 4){
        let randomNumbers = Math.floor(Math.random() * 2);
        if (randomNumbers === 0) {
            randomNumber = 1;
        } else {
            randomNumber = 3;
        }
    }
    return randomNumber;
}