{
   
    let computerWin = 0;
        playerWin = 0;

    const computerWinDiv = document.getElementById('computer-win');
          playerWinDiv = document.getElementById('player-win');
          rockDiv = document.getElementById('rock');
          paperDiv = document.getElementById('paper');
          scissorsDiv = document.getElementById('scissors');
          messageDiv = document.getElementById('messages');

	const printMessage = function(msg){
		const div = document.createElement('div');
		div.innerHTML = msg;
		messageDiv.appendChild(div);
	};

	const clearMessages = function(){
		messageDiv.innerHTML = '';
	};

	const getMoveName = function(moveNumber) {
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
	};

	const displayResult = function(argComputerMove , argPlayerMove){
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
	};

	const getProbability = function(playerNumber){
		let weight = Math.floor(Math.random() * 4 + 1);
			randomNumber = 0;

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
	};

	const playGame = function(playerNumber){    
        clearMessages();
        let randomNumber = getProbability(playerNumber);
        console.log('Wylosowana liczba to: ' + randomNumber);
        let computerMove = getMoveName(randomNumber);
        console.log('Wybrana liczba gracza to: ' + playerNumber);
        let playerMove = getMoveName(playerNumber);
        displayResult(computerMove , playerMove);
    };

    computerWinDiv.innerHTML = computerWin;
    playerWinDiv.innerHTML = playerWin;
    rockDiv.addEventListener('click', function() {
        playGame(1);
    });
    paperDiv.addEventListener('click', function() {
        playGame(2);
    });
    scissorsDiv.addEventListener('click', function() {
        playGame(3);
    });
}