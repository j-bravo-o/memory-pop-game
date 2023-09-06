
// declaramos la función que refresca los movimientos en el marcador de juego
const refreshMovements = ()=>{
    let textMovements;
    movements++;
    textMovements = movements;

    if(movements < 10) textMovements = "0" + movements;
    document.getElementById("mov").innerHTML = textMovements; 
    //verificamos que una vez superados los movimientos máximos, se de por terminado el juego con una derrota
    if(movements> levels[runLevel].maxMov){
        gameOver();
        return
    }
};
//declaramos la función que actualiza los movimientos máximos iniciales en cada nivel
const updateMovements = ()=>{
    const totalMovs = document.getElementById("total-movs");
    if (levels[runLevel].maxMov < 10) totalMovs.innerHTML = "0" + levels[runLevel].maxMov;
    else totalMovs.innerHTML = levels[runLevel].maxMov;
};