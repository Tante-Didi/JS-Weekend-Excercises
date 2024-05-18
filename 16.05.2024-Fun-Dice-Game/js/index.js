let scores, roundScore, activePlayer, gamePlaying;

// Select elements
const player0El = document.querySelector(".p-num-top");
const player1El = document.querySelector(".p-num-top-darker");
const current0El = document.querySelector(".p-num-bottom");
const current1El = document.querySelector(".p-num-bottom");
const diceEl = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
const newGameBtn = document.querySelector(".new-game");

function initGame() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  player0El.textContent = 0;
  player1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.style.display = "none";
}

function switchPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
}

function rollDice() {
  if (gamePlaying) {
    // Generate a random dice roll
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Display the dice roll
    diceEl.src = `dice-${dice1}.png`;
    diceEl.style.display = "block";

    // Update the round score if the player didn't roll a double six
    if (dice1 !== 6 || dice2 !== 6) {
      roundScore += dice1 + dice2;
      document.querySelector(`#current-${activePlayer}`).textContent =
        roundScore;
    } else {
      // Switch to the next player if the player rolled a double six
      switchPlayer();
    }
  }
}

// function holdScore() {
//   if (gamePlaying) {
//     // Add the current score to the active player's global score
//     scores[activePlayer] += roundScore;

//     // Update the UI
//     document.querySelector(`#score-${activePlayer}`).textContent =
//       scores[activePlayer];

//     // Check if the player has won
//     if (scores[activePlayer] >= 100) {
//       gamePlaying = false;
//       diceEl.style.display = "none";
//       document.querySelector(`#name-${activePlayer}`).textContent = "Winner!";
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// }
// function newGame() {
//   initGame();
// }

// rollBtn.addEventListener("click", rollDice);
// holdBtn.addEventListener("click", holdScore);
// newGameBtn.addEventListener("click", newGame);

// initGame();
