let choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function getPlayerChoice(){
    return prompt("Rock, Paper, Scissors?").toLowerCase();
}
let points = {
    player: 0,
    computer: 0
}
function playRound(playerChoice, computerChoice){
    console.log(playerChoice + " : " + computerChoice)
    if(playerChoice === computerChoice){
        console.log("It's a tie!");
    }
}

function playGame(){
    for(i = 0;i<5; i++){
        let pl = getPlayerChoice();
        let com = getComputerChoice();
        playRound(pl,com);
    }
    if(points.player > points.computer){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}


playGame();