const startGame = ()=>{
//establece nuevamente los movimientos en cero
movements = 0;
// se reestablecen los contadores de nivel, movimientos y cronómetro cada vez que se inicia un nivel
document.getElementById("mov").innerHTML = "00";
updateLevelText();
updateMovements();
updateTimer();

//limpiamos el div con las estadísitcas cada vez que se inicie el juego
const stats_container = document.querySelector(".game-stats-container");
stats_container.classList.remove("visible");
while(stats_container.firstChild)stats_container.removeChild(stats_container.firstChild);


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


//llamamos la funcion que reparte las cartas en el board principal , pasandole las cartas como parámetro
deliverCards(levels[runLevel].cards);
//selecciona todas las cartas y les agrega el evento click para poder llamar a la función que voltea y compara
let cardHidden = document.querySelectorAll(".card");
cardHidden.forEach(card => {
    card.addEventListener("click",flipCard);
});
//inicia cronómetro
timerInitialization();

};

//declaramos la función que reinicia el nivel en curso, desde el nivel 1
const restart = ()=>{
    runLevel = 0;
    movs_by_level = [];
    time_by_level = [];
    stats = [];
    startGame();
};

//declaramos el botón para Reiniciar el juego
const btnRestart = document.querySelectorAll(".btn-restart");
btnRestart.forEach(e => {
    e.addEventListener("click",restart);
})

//declaramos el botón que permite cargar el siguiente nivel de juego
//este se muestra solo si un nivel ha sido completado
const btnNextLevel = document.getElementById("btn-next-level");
btnNextLevel.addEventListener("click", chargeNewLevel);


