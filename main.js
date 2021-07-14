
const options = [...document.querySelectorAll("img")];
const btnPlay = document.querySelector("button.start");

let yourEndChoice = document.querySelector('[data-summary = "your-choice"]');
let aiEndChoice = document.querySelector('[data-summary = "ai-choice"]');
let whoWin = document.querySelector('[data-summary = "who-win"]');

let numbersOfgame = document.querySelector('.numbers span');
let wins = document.querySelector('.wins span');
let losses = document.querySelector('.losses span');
let draws = document.querySelector(".draws span");

let yourChoice = "";
let aiChoice = "";  

const reset = () => {
    yourEndChoice.textContent = "";
    aiEndChoice.textContent = "";
    whoWin.textContent = "";
};

const fullReset = () => {
    reset();
    options.forEach(choice => choice.style.boxShadow = "");
    yourChoice = "";
    aiChoice = "";
};  

const selectOptions = options.forEach(choice => {
    choice.addEventListener("click", e => {
        if(e.target.dataset.option === yourChoice){
            fullReset();
            
        } else {
            options.forEach(choice => choice.style.boxShadow = "");
            reset();
            e.target.style.boxShadow = "0 0 0 4px yellow";
            yourChoice = e.target.dataset.option;
            aiChoice = options[Math.floor(Math.random() * options.length)].dataset.option;
            
        };
    });
});

const letsPlay = () => {
    if (!yourChoice) {
        alert("Wybierz jedną z opcji, żeby zagrać!");
    } else if (whoWin.textContent) {
        alert("Wybierz od nowa, aby rozpocząć nową grę");
        fullReset();


    } else {
        yourEndChoice.textContent = yourChoice;
        aiEndChoice.textContent = aiChoice;
        ++numbersOfgame.textContent;

        if (yourChoice === aiChoice){
            whoWin.textContent = "Remis!";
            ++draws.textContent;
        } else if ((yourChoice === "kamień" && aiChoice === "nożyczki") || (yourChoice === "nożyczki" && aiChoice === "papier") || (yourChoice === "papier" && aiChoice === "kamień")){
            whoWin.textContent = "Wygrałeś! :))";
            ++wins.textContent;
        } else {
            whoWin.textContent = "Wygroł kompiuter :(";
            ++losses.textContent;
        }


    }
};


btnPlay.addEventListener('click', letsPlay);










