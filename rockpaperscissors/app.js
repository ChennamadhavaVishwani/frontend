// let userScore = 0;
// let computerScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");
// const userScoreCount = document.querySelector("#user-score");
// const compScoreCount = document.querySelector("#computer-score")

// const showWinner = (userWinner) => {
//     if (useWin){
//         userScore++;
//         userScoreCount.innerText = userScore;
//         console.log("you win")
//         msg.innerText = "You win!"
//         msg.style.backgroundColour = "green";
//     }
//     else{
//         computerScore++;
//         compScoreCount.innerText = computerScore;
//         console.log("you lost");
//         msg.innerText("you lost");
//         msg.style.backgroundColour = "red";
//     }
// }

// const generateComputerChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randIdx = Math.floor(Math.random() * 3);
//     return options[randIdx];
// };

// const drawGame = () =>{
//     console.log("It is a tie");
// };

// const playGame = () =>{
//     console.log("userchoice = ", userChoice);
//     const compChoice = generateComputerChoice;
//     if (userChoice === compChoice){
//         drawGame();
//     } else {
//         let userWin = true;
//         if(userChoice === "rock"){
//             userWin = compChoice === "paper" ? false : true;
//         } else if (userChoice === "paper"){
//             userWin = compChoice === "scissors" ? false :true;
//         } else {
//             userWin = compChoice === "rock" ? false : true;
//         }
//     }
//     showWinner(userWin)
//     console.log("computer choice is ", compChoice );

// };

// choices.forEach((choice) => {
//     console.log(choice);
//     choice.addEventListener("click", () => {
//         const userChoice = choice.getAttribute("id");
//         console.log("choice was clicked", userChoice);
// });
// });

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-Score");
const compScoreCount = document.querySelector("#computer-score");

const showWinner = (userWinner) => {
    if (userWinner) {
        userScore++;
        userScoreCount.innerText = userScore;
        console.log("You win");
        msg.innerText = "You win!";
        // msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScoreCount.innerText = computerScore;
        console.log("You lost");
        msg.innerText = "You lost!";
        // msg.style.backgroundColor = "red";
    }
};

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("It is a tie");
    msg.innerText = "It's a tie!";
    // msg.style.backgroundColor = "gray";
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = generateComputerChoice();
    console.log("Computer choice is", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});
