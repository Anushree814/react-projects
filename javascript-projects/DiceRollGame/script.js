'use strict';

const score0Element = document.querySelector('#score--0'); //one way of selecting an html ele by id using query selector
const score1Element = document.getElementById('score--1'); // other of selecting an html ele by id using getElementById
// getElementById is faster than querySelector
const diceElement = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
const currentScore0Element = document.querySelector('#current--0');
const currentScore1Element = document.querySelector('#current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

let currentScore, activePlayer, totalScore, winnerFound;
//Setting the initial conditions
const init = () => {
  currentScore = 0;
  activePlayer = 0;
  totalScore = [0, 0];
  winnerFound = false;
  diceElement.classList.add('hidden'); // adding hidden class to dice element to initially hide the dice
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
  score0Element.textContent = 0;
  currentScore0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore1Element.textContent = 0;
};
init();

//Switch player
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active'); //toggle does the work of checking if a class is present and act accordingly
  player1Element.classList.toggle('player--active');
};

//Rolling dice functionality
rollDiceBtn.addEventListener('click', function () {
  if (!winnerFound) {
    //1. Generating a random number
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    //2. Displaying the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNum}.png`;

    //3. Checking if dice has 1, if yes then switch to other player
    if (diceNum !== 1) {
      //Add diceNum to current score
      currentScore += diceNum;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Holding Score functionality
holdbtn.addEventListener('click', () => {
  if (!winnerFound) {
    //1. Add current score to total score, set current score to 0
    if (totalScore[activePlayer] === 0 && currentScore === 0) switchPlayer();
    else {
      totalScore[activePlayer] += currentScore;
      document.querySelector(`#score--${activePlayer}`).textContent =
        totalScore[activePlayer];
      currentScore = 0;
    }

    //2. Check if current score of active player >=20, if yes declare winner
    if (totalScore[activePlayer] >= 20) {
      winnerFound = true;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      //Adding a winner message dynamically
      const winnerMsgElement = document.createElement('h1');
      winnerMsgElement.setAttribute('class', 'winner');
      winnerMsgElement.textContent = `Winner is Player${activePlayer + 1}🏆`;
      const parentSectionElement = document.querySelector(
        `.player--${activePlayer}`
      );
      parentSectionElement.insertBefore(
        winnerMsgElement,
        parentSectionElement.childNodes[0]
      );
    } else {
      //3. switch player
      switchPlayer();
    }
  }
});

//Resetting to start new game
newGameBtn.addEventListener('click', function () {
  diceElement.classList.add('hidden');
  if (winnerFound) {
    winnerFound = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .removeChild(document.querySelector('.winner'));
    init();
  } else init();
});
