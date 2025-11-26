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
	} else if (
		(argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
		(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
		(argComputerMove == 'nożyce' && argPlayerMove == 'papier')
	) {
		printMessage('Komputer wygrywa!');
	} else if (argPlayerMove == argComputerMove) {
		printMessage('Mamy remis!');
	} else {
		printMessage('Wpisz poprawną liczbę!');
	}
}