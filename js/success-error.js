
//declaramos la función que recibe las cartas comparadas con éxito y le añadimos la clase de acierto
const success = (cardsMatch)=>{
    cardsMatch.forEach(card =>{
        card.classList.add("success");
    })
};
//declaramos la función que recibe las cartas comparadas sin éxito y le añadimos la clase de error
const error = (cardsMatch)=>{
    cardsMatch.forEach(card =>{
        card.classList.add("error");
    })
    //establecemos un timeout de 1 segundo para que las cartas sufran la animación de shake, demostrando el error
    setTimeout(()=>{
        cardsMatch.forEach(card =>{
            card.classList.remove("error");
            card.classList.remove("flipped");
        })
    },800)
};

