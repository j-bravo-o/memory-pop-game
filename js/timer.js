
//creamos el cronómetro 
const timerInitialization = ()=>{
    // se declaran las variables del cronómetro
    let seconds = levels[runLevel].maxTime;
    let minutes = 0;
    let secondsText;
    let minutesText;
    let timer;
    // resfresca el cronómetro en vivo en pantalla
    const refreshTimer = ()=>{
    //capturamos la cantida de cartas que no han sido reveladas    
    cardsWithoutCheck = document.querySelectorAll(".card:not(.success)");
    //si no quedan cartas por revelar, reseteamos el cronómetro debido a que se superó el nivel
    if(cardsWithoutCheck.length === 0 || movements > levels[runLevel].maxMov)clearInterval(timer); 
        //disminuimos los segundos y los minutos respectivos
        seconds--;
        seconds_by_level = seconds;
        if(seconds < 0){
            seconds = 0;
            minutes--;
        }
        if(minutes < 0){
            seconds = 0;
            minutes = 0;
            //si los minutos pasan a ser negativos, quiere decir que se acabó el tiempo
            //limpiamos el cronómetro y ejecutamos timeover para anunciar que se agotó el tiempo
            clearInterval(timer);
            timeOver();
        }
        //insertamos el valor de segundos y minutos en el marcador de texto en la cabecera
        secondsText = seconds;
        minutesText = minutes;
        if(seconds < 10) secondsText = "0"+seconds;
        if(minutes < 1) minutesText = "0"+minutes;
        document.getElementById("seconds").innerHTML = secondsText;
        document.getElementById("minutes").innerHTML = minutesText;
    };
    //referescamos el cronómetro cada 1 segundo o 1000ms
    timer = setInterval(refreshTimer,1000);

};

//actualiza en pantalla el cronómetro inicial de cada nivel, según el tiempo máximo establecido
const updateTimer = ()=>{
    const secondsText = document.getElementById("seconds");
    if(levels[runLevel].maxTime < 10)secondsText.innerHTML = "0"+ levels[runLevel].maxTime;
    else secondsText.innerHTML = levels[runLevel].maxTime;
};


