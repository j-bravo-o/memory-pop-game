
// se definen las variables globales
let cards_Group;
let levels;
let movements  = 0;
let runLevel;

let seconds_by_level;
let movs_by_level = [];
let time_by_level = [];
let stats =[];
// las siguientes 3 funciones determinan las imágenes según el modo seleccionado
//adicionalmente establecimos el máximo de movimientos y tiempo por nivel
//la posición del array determina el nivel
//la posición 0, es el nivel 1 y así consecutivamente
const selectAnime = ()=>{
    cards_Group      = [["img/anime/2.jpg","img/anime/12.png"],
    ["img/anime/4.jpg","img/anime/5.jpg"],
    ["img/anime/7.jpg","img/anime/8.png"],
    ["img/anime/10.jpg","img/anime/3.jpg"]];
    runLevel = 0;
    levels = [
        {
            cards: cards_Group[0],
            maxMov: 3,
            maxTime: 8
        },
        {
            cards: cards_Group[0].concat(cards_Group[1]),
            maxMov: 8,
            maxTime: 15
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2]),
            maxMov: 12,
            maxTime: 20
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2],cards_Group[3]),
            maxMov: 15,
            maxTime: 25
        }
    ];
};

const selectGames = ()=>{
    cards_Group      = [["img/games/1.jpg","img/games/2.jpg"],
    ["img/games/3.jpg","img/games/9.png"],
    ["img/games/5.jpg","img/games/6.jpg"],
    ["img/games/7.jpg","img/games/8.jpg"]];
    runLevel = 0;
    levels = [
        {
            cards: cards_Group[0],
            maxMov: 3,
            maxTime: 8
        },
        {
            cards: cards_Group[0].concat(cards_Group[1]),
            maxMov: 8,
            maxTime: 15
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2]),
            maxMov: 12,
            maxTime: 20
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2],cards_Group[3]),
            maxMov: 15,
            maxTime: 25
        }
    ];
};

const selectSeries = ()=>{
    cards_Group      = [["img/series/1.jpg","img/series/4.jpg"],
    ["img/series/2.jpg","img/series/8.jpg"],
    ["img/series/7.jpeg","img/series/3.jpg"],
    ["img/series/6.jpg","img/series/9.jpg"]];
    runLevel = 0;
    levels = [
        {
            cards: cards_Group[0],
            maxMov: 3,
            maxTime: 8
        },
        {
            cards: cards_Group[0].concat(cards_Group[1]),
            maxMov: 8,
            maxTime: 15
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2]),
            maxMov: 12,
            maxTime: 20
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2],cards_Group[3]),
            maxMov: 15,
            maxTime: 25
        }
    ];
};

const selectMovies = ()=>{
    cards_Group      = [["img/movies/1.jpg","img/movies/6.jpg"],
    ["img/movies/2.jpg","img/movies/5.jpg"],
    ["img/movies/8.jpg","img/movies/4.jpg"],
    ["img/movies/10.jpg","img/movies/3.jpg"]];
    runLevel = 0;
    levels = [
        {
            cards: cards_Group[0],
            maxMov: 3,
            maxTime: 8
        },
        {
            cards: cards_Group[0].concat(cards_Group[1]),
            maxMov: 8,
            maxTime: 15
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2]),
            maxMov: 12,
            maxTime: 20
        },
        {
            cards: cards_Group[0].concat(cards_Group[1],cards_Group[2],cards_Group[3]),
            maxMov: 15,
            maxTime: 25
        }
    ];
};


