function computerPlay(){
  arr = [1, 2, 3];
  let play = arr[Math.floor(Math.random() * 3)];
  if(play === 1){
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
}
