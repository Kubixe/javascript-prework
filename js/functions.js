function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
function playGame(playerInput) {
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
printMessage(computerMove)

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if (argMoveId == 2){
    return 'papier';
  }
  else if (argMoveId == 3){
    return 'nożyce'}
  }
/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier'
}else if (randomNumber == 3){
  computerMove = 'nożyce'
}*/
printMessage('Mój ruch to: ' + computerMove);

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier'
} else if (playerInput == '3') {
  playerMove = 'nożyce'
}*/

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');}
  else if(computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Przegrałeś')}
    else if(computerMove == 'kamień' && playerMove == 'kamień'){
      printMessage('Remis')
    }else if( computerMove == 'papier' && playerMove == 'papier'){
      printMessage('Remis!');}
      else if(computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty Wygrywasz')}
        else if(computerMove == 'papier' && playerMove == 'kamień'){
          printMessage('Przegrałeś')
        }else if( computerMove == 'nożyce' && playerMove == 'papier'){
          printMessage('Przegrałeś!');}
          else if(computerMove == 'nożyce' && playerMove == 'nożyce') {
            printMessage('Remis')}
            else if(computerMove == 'nożyce' && playerMove == 'kamień'){
              printMessage('Ty wygrywasz')}
              if( computerMove == 'kamień' && playerMove == 'nieznany ruch'){
                printMessage('nieznany ruch');}
                else if(computerMove == 'kamień' && playerMove == 'nieznany ruch') {
                  printMessage('nieznany ruch')}
                  else if(computerMove == 'kamień' && playerMove == 'nieznany ruch'){
                    printMessage('nieznany ruch')
                  }
                }
  playGame()

