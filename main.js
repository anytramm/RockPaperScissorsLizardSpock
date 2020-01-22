const gamesStats = {
    countUserWin: 0,
    countCompWin: 0,
    countDraw: 0,
    update() {
        document.body.querySelector('#results__win').textContent = `You: ${this.countUserWin}`;
        document.body.querySelector('#results__fail').textContent = `Computer: ${this.countCompWin}`;
        document.body.querySelector('#results__draw').textContent = `Draw: ${this.countDraw}`;
    }
}

const gameResult = {
    userHand: "",
    compHand: "",
}

const allHands = [...document.body.querySelectorAll(".choices__item--button")];

const userChoise = e => {
    if (e.target.getAttribute('data-option') === null){
        gameResult.userHand = e.target.parentElement.getAttribute('data-option');
    }else{
        gameResult.userHand = e.target.getAttribute('data-option');
    }
}

const compChoise = () => {
    gameResult.compHand = allHands[Math.floor(Math.random() * allHands.length)].getAttribute('data-option');
}

const modal = document.body.querySelector('.modal');
const modalTitle = document.body.querySelector('.modal__title');
const modalResult = document.body.querySelector('.modal__result');

const handBattle = e => {
    compChoise();
    userChoise(e);

    const result = [[0, 1, -1, -1, 1], 
                    [-1, 0, 1, 1, -1], 
                    [1, -1, 0, -1, 1], 
                    [1, -1, 1, 0, -1], 
                    [-1, 1, -1, 1, 0]];

    const actions = [["", "covers", "crushes", "crushes", "vaponized"], 
                    ["covers", "", "cuts", "eats", "disaproves"], 
                    ["crushes", "cuts", "", "decapitates", "smashed"], 
                    ["crushes", "eats", "decapitates", "", "poisons"],
                    ["vaponized", "disaprove", "smashed", "poisons", ""]]; 
    
    const userHandElement = document.createElement('i');
    userHandElement.classList = `fas fa-hand-${gameResult.userHand.toString()}`;
    const userHandDivElement = document.createElement('div');
    userHandDivElement.textContent = "You: ";
    const compHandElement = document.createElement('i');
    compHandElement.classList = `fas fa-hand-${gameResult.compHand.toString()}`;
    const compHandDivElement = document.createElement('div');
    compHandDivElement.textContent = "Computer: ";

    for(let i = 0 ; i < allHands.length ; i++){
        if(gameResult.compHand === allHands[i].getAttribute('data-option')){
            for(let j = 0 ; j < allHands.length ; j++){
                if(gameResult.userHand === allHands[j].getAttribute('data-option')){
                    if(result[i][j] === -1){
                        gamesStats.countCompWin++;
                        
                        modalTitle.textContent = `${gameResult.compHand.toString()} ${actions[i][j].toString()} ${gameResult.userHand.toString()}`;
                        compHandDivElement.style.color = "crimson";
                    }
                    else if(result[i][j] === 1){
                        gamesStats.countUserWin++;

                        modalTitle.textContent = `${gameResult.userHand.toString()} ${actions[i][j].toString()} ${gameResult.compHand.toString()}`;
                        userHandDivElement.style.color = "crimson";
                    }
                    else{
                        gamesStats.countDraw++;

                        modalTitle.textContent = "Draw";

                    }
                }
            }
        }
    }

    modal.appendChild(userHandDivElement);
    userHandDivElement.appendChild(userHandElement);
    modal.appendChild(compHandDivElement);
    compHandDivElement.appendChild(compHandElement);

    const closeModalButton = document.createElement('button');
    closeModalButton.textContent = "Play again!";
    modal.appendChild(closeModalButton);

    gamesStats.update();

    closeModalButton.addEventListener("click", () => {
        gameResult.compHand = "";
        gameResult.userHand = "";

        modal.removeChild(userHandDivElement);
        modal.removeChild(compHandDivElement);
        modal.removeChild(closeModalButton);

        modalTitle.textContent = "";

        modal.style.display = "none";
    });
}

const countdown = e => {
    let countdown = 3;
    modal.style.display = "flex";
    modalTitle.textContent = (countdown).toString()
    let interval = setInterval(function(){
        modal.style.display = "flex";
        modalTitle.textContent = (--countdown).toString()
        if (countdown === 0) {
            clearInterval(interval);
            handBattle(e);
        }
    },1000);

}

allHands.forEach(hand => hand.addEventListener("click", countdown));