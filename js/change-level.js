
//declaramos la función que incrementa el nivel actual en 1
const upLevel = ()=>{
    runLevel++;
}
//declaramos la función que actualiza el nivel en pantalla
const updateLevelText = ()=>{
    let levelText = runLevel + 1;
    if(levelText < 10) levelText = "0"+ levelText;
    document.getElementById("level").innerHTML = levelText;
}

//declaramos la función que carga el siguiente nivel
const chargeNewLevel = ()=>{
    upLevel();
    updateLevelText();
    startGame();
}