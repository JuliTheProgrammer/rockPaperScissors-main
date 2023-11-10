//Defining Constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//Linking to the HTLM
const rockbtn = document.getElementById("rock-button");
const paperbtn = document.getElementById("paper-button");
const scissorsbtn = document.getElementById("scissors-button");
const restbtn = document.getElementById("reset")

const resultMessage = document.getElementById("result-message");
const scoreMessage = document.getElementById("score-message")


rockbtn.addEventListener("click", () => playerInput = ROCK);
paperbtn.addEventListener("click", () => playerInput = PAPER);
scissorsbtn.addEventListener("click", () => playerInput = SCISSORS);

//This will be the score store
  const score = {
  wins: 0,
  loses: 0,
  draws: 0
};

//Make some Constants for results
const resultsConstants = {
  win : "Win",
  loss : "Loss",
  draw: "Draw"
}

//This is the constant which will store the user input result
const playerInput = null

//This will be the function which will update the score
function updateScore() {

  //We will call a instance of the bot move which will return the result of the bot move in the form of a Constant
  const bot = botMove();

  const result = null

  //We will check if the botMove is the same as the playerInput
  if (bot == playerInput){
    //Its a tie we will add it to the score draws
    score.draws += 1
    //Change the result type of draw
    result = resultsConstants.draw
  } else if (bot != playerInput) {
    //Its either a loss or a win TODO: - Change the logic
    score.wins += 1
    result = resultsConstants.win
  }

  setDisplay()
}


  

//This is what the player will input
function setDisplay() {
  
  //TODO: -Do some conditional rendering to show the icons of the bot move 
  //resultMessage.textContent = `You picked ${playerInput}. The bot picked ${botMove}, so ${result}`;

  //localStorage.setItem('score', JSON.stringify(score));

  scoreMessage.textContent = `Wins: ${score.wins}, Loses: ${score.loses}, Draws: ${score.draws}`;
  
}

//This function will generate the bot result and return it
function botMove() {
  const randomNumber = Math.random();

  let botMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    botMove = ROCK;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    botMove = PAPER;
  } else {
    botMove = SCISSORS;
  }
  return botMove;
}
