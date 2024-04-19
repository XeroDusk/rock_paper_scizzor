let choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
let points={
    player: 0,
    computer: 0
}
const curr = document.querySelector(".current");
const scor = document.querySelector(".points")
let html;
let score;
function getPlayerChoice(e){
    let pC = e.getAttribute("id");
    let cC = getComputerChoice();
    
    html = pC + " : " + cC + "<br>";

    playRound(pC, cC);
    score = points.player + " : " + points.computer;
    curr.innerHTML = html;
    scor.innerHTML = score;
}



function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        html += "It's a tie!";
    }
    else if (playerChoice === "rock"){
        if(computerChoice === "paper"){
            html += "Paper wins";
            points.computer++;
        }
        else{
            html += "Rock wins";
            points.player++;
        }
    }
    else if(computerChoice === "rock"){
        if(playerChoice === "paper"){
            html += "Paper wins";
            points.player++;
        }
        else{
            html += "Rock wins";
            points.computer++;
        }
    }
    else{
        if(playerChoice === "scissors"){
            html += "Scissors win";
            points.player++;
        }
        else {
            html += "Scissors wins";
            points.computer++;
        }
    }
}