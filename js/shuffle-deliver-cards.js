
// revuelve cartas
const shuffleCards = (cards_Group)=>{

    let totalCards = cards_Group.concat(cards_Group);   
    //ordena el array con números negativos y positivos
    let result = totalCards.sort(()=>{
        return 0.5 - Math.random();
    })

    return result;
}



// reparte las cartas sobre la mesa o board
const deliverCards = (cards_Group)=>{
    let board         = document.getElementById("board");
    let shuffle_cards = shuffleCards(cards_Group);
    let fragment      = document.createDocumentFragment();
    board.innerHTML   = "";
    
    shuffle_cards.forEach(element => {
    let card = document.createElement("div");
    card.innerHTML = `<div class="card" data-src="${element}">
                        <div class="card__content">
                            <img src ="${element}" class="card__img">
                        </div>
                      </div>`;
    fragment.appendChild(card);
});
    board.appendChild(fragment);
};
