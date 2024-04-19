let choices = ["rock", "paper", "scizzors"];
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
let points={
    player: 0,
    computer: 0
}
const curr = document.querySelector(".current");
const scor = document.querySelector(".points")
const outcome = document.querySelector(".outcome");
let html;
let score;
let res;
function playGame(e){
    if(points.player < 5 && points.computer < 5){
        let pC = e.getAttribute("id");
        let cC = getComputerChoice();
    
        html = pC + " : " + cC + "<br>";

        playRound(pC, cC);
        score = points.player + " - " + points.computer;
        curr.innerHTML = html;
        scor.innerHTML = "Score : " + score;
    }
    else{
        if(points.player > points.computer){
            res = "You Survive another day...<br>";
        }
        else{
            res = "You Lost...<br>";
        } 
        outcome.innerHTML = res;
        const again = document.createElement("a");
        again.setAttribute("href", "index.html");
        again.innerHTML = "Play Again?";
        again.setAttribute("style", "font-family: 'pigment demo';color: aliceblue;font-size: 40px;border:solid white 2px;; text-decoration:none; padding: 5px 60px");
        outcome.appendChild(again);
    }
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
        if(playerChoice === "scizzors"){
            html += "Scizzors win";
            points.player++;
        }
        else {
            html += "Scizzors wins";
            points.computer++;
        }
    }
}