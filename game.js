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
    console.log(playerChoice + " : " + computerChoice);
    if(playerChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if (playerChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("Paper wins");
            points.computer++;
        }
        else{
            console.log("Rock wins");
            points.player++;
        }
    }
    else if(computerChoice === "rock"){
        if(playerChoice === "paper"){
            console.log("Paper wins");
            points.player++;
        }
        else{
            console.log("Rock wins");
            points.computer++;
        }
    }
    else{
        if(playerChoice === "scissors"){
            console.log("Scissors win");
            points.player++;
        }
        else {
            console.log("Scissors wins");
            points.computer++;
        }
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
    else if(points.player < points.computer){
        console.log("You lose!");
    }
    else {
        console.log("Its a Tie!!")
    }
}


playGame();