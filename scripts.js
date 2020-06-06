function computerPlay(){
  arr = [1, 2, 3];
  let play = arr[Math.floor(Math.random() * 3)];
  if(play == 1){
    return "rock";
  }
  else if(play == 2){
    return "paper";
  }
  else{
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Draw!";
  }
  else if((playerSelection == "rock") && (computerSelection == "scissors")){
    return "Player won!";
  }
  else if((playerSelection == "paper") && (computerSelection == "rock")){
    return "Player won!";
  }
  else if((playerSelection == "scissors") && (computerSelection == "paper")){
    return "Player won!";
  }
  else if((playerSelection == "paper") && (computerSelection == "scissors")){
    return "Computer won!";
  }
  else if((playerSelection == "scissors") && (computerSelection == "rock")){
    return "Computer won!";
  }
  else if((playerSelection == "rock") && (computerSelection == "paper")){
    return "Computer won!";
  }
}

function playGame(playerSelection){
  let computerVar = computerPlay();
  return playRound(playerSelection, computerVar);
}

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
let pScore = 0;
let cScore = 0;

rock.addEventListener('click', function (e) {
  let game = playGame("rock");
  if (game == "Player won!"){
    pScore += 1;
  }
  else if(game == "Computer won!"){
    cScore += 1;
  }
  if(pScore == 5){
    alert("Player won!");
    pScore = 0;
    cScore = 0;
  }
  else if(cScore == 5){
    alert("Computer won!");
    pScore = 0;
    cScore = 0;
  }
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
});

paper.addEventListener('click', function (e) {
  let game = playGame("paper");
  if (game == "Player won!"){
    pScore += 1;
  }
  else if(game == "Computer won!"){
    cScore += 1;
  }
  if(pScore == 5){
    alert("Player won!");
    pScore = 0;
    cScore = 0;
  }
  else if(cScore == 5){
    alert("Computer won!");
    pScore = 0;
    cScore = 0;
  }
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
});

scissors.addEventListener('click', function (e) {
  let game = playGame("scissors");
  if (game == "Player won!"){
    pScore += 1;
  }
  else if(game == "Computer won!"){
    cScore += 1;
  }
  if(pScore == 5){
    alert("Player won!");
    pScore = 0;
    cScore = 0;
  }
  else if(cScore == 5){
    alert("Computer won!");
    pScore = 0;
    cScore = 0;
  }
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
});

// function score(player){
//   let i = 0;
//   let playerScore = 0;
//   let computerScore = 0;
//   let winner = "";
//   let decision = playGame();
//   if(decision == "Player won!"){
//     playerScore ++;
//   }
//   else if(decision == "Computer won!"){
//     computerScore ++;
//   }
//   i++;
// }
//   if(playerScore > computerScore){
//     winner = "Player!";
//   }
//   else if(computerScore > playerScore){
//     winner = "Computer!";
//   }
//   else{
//     winner = "Draw!";
//   }
//   return "Final results: player " + playerScore + " and computer " + computerScore + ". Winner: " + winner;
// } 

// function game(){
//   let i = 0;
//   let playerScore = 0;
//   let computerScore = 0;
//   let winner = "";
//   while(i < 5){
//     let decision = playGame();
//     if(decision == "Player won!"){
//       playerScore ++;
//     }
//     else if(decision == "Computer won!"){
//       computerScore ++;
//     }
//     i++;
//   }
//   if(playerScore > computerScore){
//     winner = "Player!";
//   }
//   else if(computerScore > playerScore){
//     winner = "Computer!";
//   }
//   else{
//     winner = "Draw!";
//   }
//   return "Final results: player " + playerScore + " and computer " + computerScore + ". Winner: " + winner;
// } 
