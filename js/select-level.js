//mostramos las categorías de juego disponibles
const btnPlay = document.getElementById("btn-play");
btnPlay.addEventListener("click",()=>{
    btnPlay.classList.add("hidden");
    const levelContainer = document.querySelector(".grid-container-levels");
    levelContainer.classList.remove("hidden");
})


//capturamos la categoría seleccionada
const btnLevel = document.querySelectorAll(".btn-level");
btnLevel.forEach(e => {
    e.addEventListener("click", ()=>{
        let level_selected = e.value;
        if (level_selected === "Anime"){
            selectAnime();
            startGame();
        }
        if (level_selected === "Games"){
            selectGames();
            startGame();
        }
        if (level_selected === "Series"){
            selectSeries();
            startGame();
        }
        if (level_selected === "Movies"){
            selectMovies();
            startGame();
        }
    });
});

//se retorna a la pantalla con las categorías de juego
const btnChangeMode = document.querySelectorAll(".btn-change-mode");
btnChangeMode.forEach(e => {
    e.addEventListener("click", ()=>{
        movs_by_level = [];
        time_by_level = [];
        
        const headboard = document.querySelector(".headboard");
        headboard.classList.add("hidden");
        const levelContainer = document.querySelector(".grid-container-levels");
        levelContainer.classList.remove("hidden");
        const board = document.querySelector(".board-container");
        board.classList.add("hidden");
        const upLevel = document.querySelector(".up-level");
        upLevel.classList.remove("visible");
        const endGame = document.querySelector(".end-game");
        endGame.classList.remove("visible");
        const gameOver = document.querySelector(".game-over");
        gameOver.classList.remove("visible");
        const timeOver = document.querySelector(".time-over");
        timeOver.classList.remove("visible");
})
});