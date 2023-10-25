let playerMove = 'papier';
let computerMove = `kamień`;
function printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!')
{
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}