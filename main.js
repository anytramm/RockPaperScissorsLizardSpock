const gamesStats = {
    countUserWin: 0,
    countCompWin: 0,
    countDraw: 0,
}

const gameResult = {
    userHand: "",
    compHand: "",
}

const allHands = [...document.body.querySelectorAll(".choices__item--button")];
allHands.forEach((hand, index) => allHands[index] = hand.getAttribute('data-option'));

const userChoise = e => {
    // gameResult.userHand = e.target;
}

function compChoise(hands) {
    return allHands[Math.floor(Math.random * allHands.length)];
}

const modal = document.body.querySelector('.modal');
const modalTitle = document.body.querySelector('h4');

const handBattle = (gameResult, gamesStats) =>{
    if(userHand === compHand){
        
    }

}

const countdown = () => {
    let countdown = 3;
    modal.style.display = "flex";
    modalTitle.textContent = (countdown).toString()
    let interval = setInterval(function(){
        modal.style.display = "flex";
        modalTitle.textContent = (--countdown).toString()
        if (countdown === 0) {
            clearInterval(interval);
        }
    },1000);
    handBattle(gameResult, gamesStats);
}

document.querySelector('.choices__item--button').addEventListener("click", countdown);



// document.body.querySelector('#results__win').textContent = `You: ${countUserWin}`;
// document.body.querySelector('#results__fail').textContent = `Computer: ${countCompWin}`;
// document.body.querySelector('#results__draw').textContent = `Draw: ${countDraw}`;

// const resultImage = document.body.querySelector('.results__image');
// if(countUserWin > countCompWin){
//     const iElement = document.createElement('i');
//     iElement.classList="far fa-smile"
//     resultImage.appendChild(iElement);
// } else if(countUserWin > countCompWin){
//     const iElement = document.createElement('i');
//     iElement.classList="far fa-frow"
//     resultImage.appendChild(iElement);
// } else{
//     const iElement = document.createElement('i');
//     iElement.classList="far fa-meh"
//     resultImage.appendChild(iElement);
// }