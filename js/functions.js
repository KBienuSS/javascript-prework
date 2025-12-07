	const printMessage = function(msg){
		const div = document.createElement('div');
		div.innerHTML = msg;
		messageDiv.appendChild(div);
	};

	const clearMessages = function(){
		messageDiv.innerHTML = '';
	};