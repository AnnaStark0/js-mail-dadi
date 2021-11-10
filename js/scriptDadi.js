//Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1-Genera un Numero Random da 1 a 6 - Computer
let numPc = Math.floor(Math.random() * 6) + 1;

document.getElementById('resultPc').innerHTML = numPc ;
console.log (numPc);
//Many hours later........

//1-Genera un Numero Random da 1 a 6 - Giocatore
let numGiocatore = Math.floor(Math.random() * 6) + 1;

document.getElementById('resultGioc').innerHTML = numGiocatore ;
console.log (numGiocatore);



//2-Stabilire il vincitore, in base a chi fa il punteggio più alto.

//let vincitore;


//PROVA 2-
if (numPc > numGiocatore) {
    console.log('Ha vinto il computer!');
    document.getElementById('result').innerHTML = 'Ha vinto il computer!' ;
} else {
 {
        console.log('Hai Vinto!');
        document.getElementById('result').innerHTML = 'Hai Vinto!' ;
    }
}