const countUserWin = 0;
const countCompWin = 0;
const countDraw = 0;

const gameItems = ["rock", "paper", "scissors", "lizard", "spock"];

const modal = document.body.querySelector('.modal');
const modalContent = document.body.querySelector('h4');

// const resultImage = document.body.querySelector('.results__image');

// document.body.querySelector('#results__win').textContent = `You: ${countUserWin}`;
// document.body.querySelector('#results__fail').textContent = `Computer: ${countCompWin}`;
// document.body.querySelector('#results__draw').textContent = `Draw: ${countDraw}`;


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

const computerMove = () => {
    const random = Math.floor(Math.random() * 5);
}


const countdown = e => {
    modal.style.display = "flex";
    let countdown = 4;

    while(countdown =! 0){
        countdown--;
        // modalContent.textContent = (--countdown).toString();
    }
    modal.style.display = "none";
}

document.querySelector('.choices__item--button').addEventListener("click" , countdown);


