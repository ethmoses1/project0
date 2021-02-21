// HTML elements
// grab the html elements we need using the DOM
const gameStatus = document.querySelector('.gameStatus');
const nextGame = document.querySelector('.nextGame');
const resetScore = document.querySelector('.resetScore');
//grab all grid elements/squares which will be stored as an array
const square = document.querySelectorAll('.square')
const xResults = document.querySelector('.xResults')
const oResults = document.querySelector('.oResults')



// game variables
const x = '×';
const o = '○';

//game variables 2
let gameIsLive = true;
let nextIsX = true;
let winner = null;



//functions
//co
const letterToSymbol = (letter) => letter === 'x' ? x : o;

countX = 0;
countO = 0;

const handleWinning = function(letter){
  gameIsLive = false;
  winner = letter;
  console.log(countX, "first round")
  if (winner === 'x') {
    countX ++
    gameStatus.innerHTML = `${letterToSymbol(winner)} has won!`;
   xResults.innerHTML = `PlayerX: ${countX}`
  }else {
    countO ++
    gameStatus.innerHTML = `<span>${letterToSymbol(winner)} has won!</span>`;
     oResults.innerHTML = `PlayerO: ${countO}`;
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
//event handler for the reset button
const handleNextGame = function (e){
  nextIsX = true;
  gameStatus.innerHTML = `${x} is first`;
  winner = null;
// loop through the square array and store the elements in a variable
for (let i = 0; i < square.length; i++) {
     const squareDiv =  square[i]
     squareDiv.classList.remove('x');
     squareDiv.classList.remove('o');
   }
};

//event handler for the squares being clicked
const handleSquareClick = function(e){
  const classList = e.target.classList;
  const location = classList[1];

if (classList[2] === 'x' || classList[2] === 'o') {
  return;
}
  if (nextIsX) {
    classList.add('x');
    checkGameStatus();

    nextIsX = !nextIsX;
  } else {
    classList.add('o');
    checkGameStatus();

    nextIsX = !nextIsX;
  }
};

const handleScore = function(e){
  console.log("works")
  countX = 0
  countO = 0
  xResults.innerHTML = `PlayerX: ${countX}`
  oResults.innerHTML = `PlayerO: ${countO}`;
}


// const h1 = document.createElement('h1');
// const textAnswer = document.createTextNode("X Total Wins: " );
// h1.setAttribute('id', 'X-wins');
// h1.appendChild(textAnswer);
// document.getElementById('x-results').appendChild(h1);




// even listeners
// set event listeners to the reset button and the nine square divs
nextGame.addEventListener('click', handleNextGame);
resetScore.addEventListener('click', handleScore);
//loop through the squares and chick which square is being clicked
for (let i = 0; i < square.length; i++) {
  squareDiv = square[i];
  squareDiv.addEventListener('click', handleSquareClick);
};
