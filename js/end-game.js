//declaramos la función que termina un nivel una vez que es completado
const endGame = (movs_record,seconds_record)=>{
        //llenamos las estadísticas de movimientos y tiempo obtenidas por nivel
        movs_by_level.push(movs_record);
        time_by_level.push(seconds_record);
        stats=[movs_by_level,time_by_level];

        //ocultamos el board con las tarjetas
        const board = document.querySelector(".board-container");
        board.classList.add("hidden");
    //verificamos que el nivel actual sea menor a los niveles totales
    if(runLevel < levels.length - 1){
        //mostramos la opción de siguiente nivel
        const modal_levelUp = document.querySelector(".up-level");
        modal_levelUp.classList.add("visible");
    }else{
        //si el nivel actual es el último nivel del juego
        //mostramos el mensaje avisando que se completó el juego
        const headboard = document.querySelector(".headboard");
        headboard.classList.add("hidden");
        const modal_endGame = document.querySelector(".end-game");
        modal_endGame.classList.add("visible");
    };
};

//declaramos la función que muestra al jugador cada vez que falla al completar un nivel
//esto ocurre cuando se le acaban los movimientos
const gameOver = ()=>{
    const board = document.querySelector(".board-container");
    board.classList.add("hidden");
    const modal_gameOver = document.querySelector(".game-over");
    modal_gameOver.classList.add("visible");
};

//declaramos la función que muestra al jugador cuando se ha quedado sin tiempo
const timeOver = ()=>{
    const board = document.querySelector(".board-container");
    board.classList.add("hidden");
    const modal_timeOver = document.querySelector(".time-over");
    modal_timeOver.classList.add("visible");
};


// se declara el botón que permite mostras las estadísticas por nivel al hacer click
const btnStats = document.querySelector(".btn-stats");
btnStats.addEventListener("click", ()=>{
    //desplegamos el div con las estadísticas
    const stats_container = document.querySelector(".game-stats-container");
    //verificamos si está visible
    //en caso de estar visible, lo ocultamos y eliminamos las estadísitcas para dejar vacío el campo de datos
    if (stats_container.classList.contains("visible")){
        stats_container.classList.remove("visible");
        while(stats_container.firstChild)stats_container.removeChild(stats_container.firstChild);
    //en caso de no estar visible, insertamos las estadísitcas en el div correspondiente
    }else{
        stats_container.classList.add("visible");
        let fragment      = document.createDocumentFragment();

        //por cada nivel de juego, capturamos las estadísticas que hemos llenado previamente en la función endGame
        for (let i = 0; i < levels.length ; i++) {

            //creamos el div con las estadísticas
            let game_stats = document.createElement("div");
            game_stats.classList.add("game-stats");
            //lo llenamos con las posiciones del arreglo de stats o estadísticas
            game_stats.innerHTML = `
                                    <span class="level-stats"><b>Level ${i+1}</b><br></span>
                                    <span class="mov-stats"><b>${stats[0][i]}</b> movs</span>
                                    <span class="time-stats"><b>${(levels[i].maxTime)-stats[1][i]}</b> secs</span>

                                    `;
            fragment.appendChild(game_stats);
        }
        //añadimos el div hijo al div de stats padre
        stats_container.appendChild(fragment);
    };
});