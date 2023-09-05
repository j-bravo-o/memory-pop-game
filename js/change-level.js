
//incremente el nivel actual en 1
const upLevel = ()=>{
    runLevel++;
}
//actualiza el nivel en pantalla
const updateLevelText = ()=>{
    let levelText = runLevel + 1;
    if(levelText < 10) levelText = "0"+ levelText;
    document.getElementById("level").innerHTML = levelText;
}

//carga el el nuevo nivel completamente
const chargeNewLevel = ()=>{
    upLevel();
    updateLevelText();
    startGame();
}