const success = (cardsMatch)=>{
    cardsMatch.forEach(card =>{
        card.classList.add("success");
    })
}
const error = (cardsMatch)=>{
    cardsMatch.forEach(card =>{
        card.classList.add("error");
    })

    setTimeout(()=>{
        cardsMatch.forEach(card =>{
            card.classList.remove("error");
            card.classList.remove("flipped");
        })
    },800)
}

