//Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1-Genera un Numero Random da 1 a 6
let numPc = Math.floor(Math.random() * 6) + 1;

//Many hours later........

document.getElementById('resultPc').innerHTML = numPc ;
console.log (numPc);




// il pc genera un num random,
// fare funzione, memorizzare numero. dopo di che si apre il prompt x il giocatore