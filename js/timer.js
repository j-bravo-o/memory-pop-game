
//creamos el cronómetro 
const timerInitialization = ()=>{

    let seconds = levels[runLevel].maxTime;
    let minutes = 0;
    let secondsText;
    let minutesText;
    let timer;
    // resfresca el cronómetro en vivo en pantalla
    const refreshTimer = ()=>{
        
    cardsWithoutCheck = document.querySelectorAll(".card:not(.success)");

    if(cardsWithoutCheck.length === 0 || movements > levels[runLevel].maxMov)clearInterval(timer); 

        seconds--;
        if(seconds < 0){
            seconds = 0;
            minutes--;
        }
        if(minutes < 0){
            seconds = 0;
            minutes = 0;
            clearInterval(timer);
            timeOver();
        }
        secondsText = seconds;
        minutesText = minutes;
        if(seconds < 10) secondsText = "0"+seconds;
        if(minutes < 1) minutesText = "0"+minutes;
        document.getElementById("seconds").innerHTML = secondsText;
        document.getElementById("minutes").innerHTML = minutesText;
    };

    timer = setInterval(refreshTimer,1000);

};

//actualiza en pantalla el cronómetro inicial de cada nivel
const updateTimer = ()=>{
    const secondsText = document.getElementById("seconds");
    if(levels[runLevel].maxTime < 10)secondsText.innerHTML = "0"+ levels[runLevel].maxTime;
    else secondsText.innerHTML = levels[runLevel].maxTime;
};


