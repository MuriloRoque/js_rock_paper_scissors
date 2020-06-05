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
    return "Draw!"
  }
  else if((playerSelection == "rock") && (computerSelection == "scissors")){
    return "Player won!"
  }
  else if((playerSelection == "paper") && (computerSelection == "rock")){
    return "Player won!"
  }
  else if((playerSelection == "scissors") && (computerSelection == "paper")){
    return "Player won!"
  }
  else if((playerSelection == "paper") && (computerSelection == "scissors")){
    return "Computer won!"
  }
  else if((playerSelection == "scissors") && (computerSelection == "rock")){
    return "Computer won!"
  }
  else if((playerSelection == "rock") && (computerSelection == "paper")){
    return "Computer won!"
  }
  else{
    return "Error"
  }
}

function playGame(playerSelection){
  let computerVar = computerPlay()
  return playRound(playerSelection, computerVar);
}

rock.addEventListener('click', function (e) {
  alert(playGame("rock"));
});

paper.addEventListener('click', function (e) {
  alert(playGame("paper"));
});

scissors.addEventListener('click', function (e) {
  alert(playGame("scissors"));
});

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
