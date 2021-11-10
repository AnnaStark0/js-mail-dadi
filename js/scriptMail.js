// Mail Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// 1-Chiedi all'utente la sua email
const tuaMail = prompt('Inserisci la tua email');
console.log(tuaMail);

// 2-Controlla che sia nella lista di chi può accedere
const email = ['@gmail.com', '@libero.it', '@hotmail.com'];

let sentinella = false;

for (let i = 0; i < email.length; i++) {
    if (email[i] == tuaMail) {
        sentinella = true;
    }
}

if (sentinella) {
    console.log('Accesso');
    } else {
        console.log ('accesso negato');
    }
