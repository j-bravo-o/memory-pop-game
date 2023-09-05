
// resfresca los movimientos en vivo en pantalla
const refreshMovements = ()=>{
    let textMovements;
    movements++;
    textMovements = movements;

    if(movements < 10) textMovements = "0" + movements;
    document.getElementById("mov").innerHTML = textMovements; 

    if(movements> levels[runLevel].maxMov){
        gameOver();
        return
    }
};
//actualiza los movimientos máximos iniciales en cada nivel
const updateMovements = ()=>{
    const totalMovs = document.getElementById("total-movs");
    if (levels[runLevel].maxMov < 10) totalMovs.innerHTML = "0" + levels[runLevel].maxMov;
    else totalMovs.innerHTML = levels[runLevel].maxMov;
};