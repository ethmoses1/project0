console.log('Helloworld');

// HTML elements
const gameStatus = document.querySelector('.gameStatus');
const nextGame = document.querySelector('.nextGame');
const square = document.querySelectorAll('.square')

// game variables
const xSymbol = '×';
const oSymbol = '○';
//game variables
let gameIsLive = true;
let XisNext = true;
let winner = null;


//functions
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWinning = function(letter){
  gameIsLive = false;
  winner = letter;
  if (winner === 'x') {
    gameStatus.innerHTML = `${letterToSymbol(winner)} has won!`;
  }else {
    gameStatus.innerHTML = `<span>${letterToSymbol(winner)} has won!</span>`;
  }
};

const checkGameStatus = function() {
  const top1 = square[0].classList[2];
  const top2 = square[1].classList[2];
  const top3 = square[2].classList[2];
  const middle1 = square[3].classList[2];
  const middle2 = square[4].classList[2];
  const middle3 = square[5].classList[2];
  const bottom1 = square[6].classList[2];
  const bottom2 = square[7].classList[2];
  const bottom3 = square[8].classList[2];

 //check if there is a winner
  if (top1 && top1 === top2 && top1 === top3) {
    handleWinning(top1);
  }else if(middle1 && middle1 === middle2 && middle1 === middle3) {
   handleWinning(middle1);
 }else if(bottom1 && bottom1 === bottom2 && bottom1 === bottom3) {
   handleWinning(bottom1);
 }else if(top1 && top1 === middle1 && top1 === bottom1){
   handleWinning(top1);
 }else if(top2 && top2 === middle2 && top2 === bottom2){
   handleWinning(top2);
 }else if(top3 && top3 === middle3 && top3 === bottom3){
   handleWinning(top3);
 }else if (top1 && top1 === middle2 && top1 === bottom3) {
   handleWinning(top1);
 }else if (top3 && top3 === middle2 && top3 === bottom1) {
   handleWinning(top3);
 }else if(top1 && top2 && top3 && middle1 && middle2 && middle3 && bottom1 && bottom2 && bottom3) {
   gameIsLive = false;
   gameStatus.innerHTML = 'Draw!'
 }

};

//event handlers
const handleNextGame = function (e){
  xIsNext = true;
  gameStatus.innerHTML = `${xSymbol} is next`;
  winner = null;

  for (const squareDiv of square){
    squareDiv.classList.remove('x');
    squareDiv.classList.remove('o');
  }
  console.log(e);
};

const handleSquareClick = function(e){
  const classList = e.target.classList;
  const location = classList[1];

if (classList[2] === 'x' || classList[2] === 'o') {
  return;
}
  if (XisNext) {
    classList.add('x');
    checkGameStatus();

    XisNext = !XisNext;
  } else {
    classList.add('o');
    checkGameStatus();

    XisNext = !XisNext;
  }
}

// even listeners
nextGame.addEventListener('click', handleNextGame);

for (const squareDiv of square) {
  squareDiv.addEventListener('click', handleSquareClick);
};
