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
        //aplica el error en las 2 cartas volteadas
        error(cardsToCheck);
        const soundError = document.getElementById("error-sound");
        soundError.cloneNode().play();
    }
};

//descubre y voltea las cartas para proceder a compararlas
function flipCard(){
    let cardsOpen;
    //capturamos las cartas volteadas
    let totalCardsOpen = document.querySelectorAll(".flipped:not(.success)");

    let cardsWithoutCheck;
        //verificamos que no existan más de 2 cartas volteadas al mismo tiempo
        if (totalCardsOpen.length > 1) return;
        this.classList.add("flipped");
        //añade el sonido al voltear la carta
        const soundFlip = document.getElementById("flip-sound");
        soundFlip.cloneNode().play();

    //volvemos a capturar las cartas volteadas
    cardsOpen = document.querySelectorAll(".flipped:not(.success)");  
    //verificamos nuevamente que no existan más de 2 cartas volteadas al mismo tiempo  
    if (cardsOpen.length < 2) return;

    //enviamos las 2 cartas volteadas a ser chequedas con un posible acierto o error
    checkCards(cardsOpen);
    //añadimos un nuevo movimiento ejecutado luego de seleccionar 2 cartas
    refreshMovements();
    //capturamos todas las cartas que no han sido acertadas
    cardsWithoutCheck = document.querySelectorAll(".card:not(.success)");
    //verificamos que no quedan cartas por comparar, lo que implica que se completó el nivel en curso
    if(cardsWithoutCheck.length === 0) setTimeout(()=>{endGame(movements,seconds_by_level)},1000);
};

