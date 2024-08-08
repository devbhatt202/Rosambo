let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];
}
const drawgame = () =>{
    console.log("Draw Game");
    msg.innerText = "Game was Draw . Play Again !";
    msg.style.backgroundColor = "Grey";
}

const showWinner = (Userwin , userChoice , compChoice) => {
    if(Userwin===true)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
}
const playGame = (userChoice) => {
    console.log("User's choice : " , userChoice);
    //genrating user's choice
    const compChoice = genCompChoice();
    console.log("Computer's choice : ",compChoice);

if(userChoice===compChoice){
    //draw game
    drawgame();
}
else{
    let UserWin = true;
    if(userChoice==="rock")
    {
        UserWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        UserWin = compChoice === "rock" ? true : false;
    }
    else{
        UserWin = compChoice === "paper" ? true : false;
    }
    showWinner(UserWin , userChoice , compChoice);
  }
}

choices.forEach((choice) =>{
        choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
