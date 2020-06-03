function computerPlay(){
  arr = ['Rock', 'Paper', 'Scissors'];
  let play = arr[Math.floor(Math.random() * arr.length)];
  return play;
}

function playRound(playerSelection, computerSelection){
  if(playerSelection == computerSelection){
    return "Draw!"
  }
  else if((playerSelection == "Rock") && (computerSelection == "Scissors")){
    return "Player won!"
  }
  else if((playerSelection == "Paper") && (computerSelection == "Rock")){
    return "Player won!"
  }
  else if((playerSelection == "Scissors") && (computerSelection == "Paper")){
    return "Player won!"
  }
  else if((playerSelection == "Paper") && (computerSelection == "Scissors")){
    return "Computer won!"
  }
  else if((playerSelection == "Scissors") && (computerSelection == "Rock")){
    return "Computer won!"
  }
  else if((playerSelection == "Rock") && (computerSelection == "Paper")){
    return "Computer won!"
  }
}
