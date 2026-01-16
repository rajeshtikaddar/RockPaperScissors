let userScore = 0;
let compScore = 0;
let count = 0;

const choices = document.querySelectorAll(".choice");
const messg = document.querySelector("#msg");
const UserScore = document.querySelector("#yourscore");
const CompScore = document.querySelector("#compscore");
const drawScore = document.querySelector("#draw");

const restart = document.querySelector("#reset");

const genCompChoice = ()=>{
    const options =["rock" ,"paper" ,"scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
    
}

const drawGame = ()=>{
    count++;
    drawScore.innerText = count;
    messg.innerText = "Game Draw ! Play Again";
    messg.style.backgroundColor = "grey";
    console.log(`game draw`);
}

const playgame =(userChoice) =>{
    //Generate computer choice
    const compChoice = genCompChoice();
    // console.log("Comp input =",compChoice);
    if(userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    } 
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        // console.log("User input =",userChoice);
        playgame(userChoice);
    });
});

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        UserScore.innerText = userScore ;
        messg.innerText = `You win ! ${userChoice} beats ${compChoice}`;
        // console.log(`user win ${userChoice} beats ${compChoice}`);
        messg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        CompScore.innerText = compScore ;
        messg.innerText = `You loose ! Play Again. `;
        messg.style.backgroundColor = "red";
    }
   
}

restart.addEventListener("click" , ()=> {
    drawScore.innerText = 0;
    UserScore.innerText=0;
    CompScore.innerText = 0;
    compScore = 0;
    userScore= 0;
    count=0;
    messg.innerText = "Pick Your Move";
    messg.style.backgroundColor ="black";

});
