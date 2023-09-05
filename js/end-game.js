const endGame = ()=>{
        const board = document.querySelector(".board-container");
        board.classList.add("hidden");
    if(runLevel < levels.length - 1){

        const modal_levelUp = document.querySelector(".up-level");
        modal_levelUp.classList.add("visible");
    }else{

        const modal_endGame = document.querySelector(".end-game");
        modal_endGame.classList.add("visible");
    }
};

const gameOver = ()=>{
    const board = document.querySelector(".board-container");
    board.classList.add("hidden");
    const modal_gameOver = document.querySelector(".game-over");
    modal_gameOver.classList.add("visible");
}

const timeOver = ()=>{
    const board = document.querySelector(".board-container");
    board.classList.add("hidden");
    const modal_timeOver = document.querySelector(".time-over");
    modal_timeOver.classList.add("visible");
}