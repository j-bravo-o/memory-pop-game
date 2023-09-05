const startGame = ()=>{
//establece nuevamente los movimientos en cero
movements = 0;

document.getElementById("mov").innerHTML = "00";
updateLevelText();
updateMovements();
updateTimer();

//se remueven los modales y reaparece el board con tarjetas nuevas repartidas
const headboard = document.querySelector(".headboard");
headboard.classList.remove("hidden");
const levelContainer = document.querySelector(".grid-container-levels");
levelContainer.classList.add("hidden");
const board = document.querySelector(".board-container");
board.classList.remove("hidden");
const upLevel = document.querySelector(".up-level");
upLevel.classList.remove("visible");
const endGame = document.querySelector(".end-game");
endGame.classList.remove("visible");
const gameOver = document.querySelector(".game-over");
gameOver.classList.remove("visible");
const timeOver = document.querySelector(".time-over");
timeOver.classList.remove("visible");


    //llama la funcion que reparte
deliverCards(levels[runLevel].cards);
//selecciona todas las cartas y les agregar el evento click para poder llamar a la función que voltea y compara
let cardHidden = document.querySelectorAll(".card");
cardHidden.forEach(card => {
    card.addEventListener("click",flipCard);
});
//inicia cronómetro
timerInitialization();

};

const restart = ()=>{
    runLevel = 0;
    startGame();
};

//botón para REiniciar el juego
const btnRestart = document.querySelectorAll(".btn-restart");
btnRestart.forEach(e => {
    e.addEventListener("click",restart);
})

//botón para iniciar el juego cargando el siguiente nivel
const btnNextLevel = document.getElementById("btn-next-level");
btnNextLevel.addEventListener("click", chargeNewLevel);


