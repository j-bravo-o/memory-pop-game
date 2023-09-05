// comprueba si los data-src de cada carta son iguales o no
const checkCards = (cardsToCheck)=>{
    let cardSrc_1 = cardsToCheck[0].dataset.src;
    let cardSrc_2 = cardsToCheck[1].dataset.src;
    if(cardSrc_1 === cardSrc_2 && movements < levels[runLevel].maxMov){
        //aplica el acierto en las 2 cartas volteadas
        success(cardsToCheck);
        const soundSuccess = document.getElementById("success-sound");
        soundSuccess.cloneNode().play();
    }else{
        error(cardsToCheck);
        const soundError = document.getElementById("error-sound");
        soundError.cloneNode().play();
    }
};

//descubre y voltea las cartas para proceder a compararlas
function flipCard(){
    let cardsOpen;
    let totalCardsOpen = document.querySelectorAll(".flipped:not(.success)");

    let cardsWithoutCheck;
        if (totalCardsOpen.length > 1) return;
        this.classList.add("flipped");
        const soundFlip = document.getElementById("flip-sound");
        soundFlip.cloneNode().play();

    cardsOpen = document.querySelectorAll(".flipped:not(.success)");    
    if (cardsOpen.length < 2) return;

    checkCards(cardsOpen);
    refreshMovements();

    cardsWithoutCheck = document.querySelectorAll(".card:not(.success)");

    if(cardsWithoutCheck.length === 0) setTimeout(endGame,1000);
};

