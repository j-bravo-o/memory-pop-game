
// declaramos la función que mezcla aleatoriamente cartas
const shuffleCards = (cards_Group)=>{

    let totalCards = cards_Group.concat(cards_Group);   
    //ordena el array con números negativos y positivos
    let result = totalCards.sort(()=>{
        return 0.5 - Math.random();
    })
    return result;
};



// declaramos la función que reparte las cartas sobre el board principal, recibe las cartas desde startGame
const deliverCards = (cards_Group)=>{
    let board         = document.getElementById("board");
    //llamamos la funcion que mezcla y le pasamos las cartas recibidas como parámetro
    //estas cartas vienen de
    let shuffle_cards = shuffleCards(cards_Group);
    let fragment      = document.createDocumentFragment();
    board.innerHTML   = "";
    
    //una vez revueltas las cartas, procedemos a insertarlas en el board
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
