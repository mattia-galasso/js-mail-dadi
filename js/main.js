/* 
! Mail

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

? Nota:

Non è necessario provvedere alla validazione delle email
*/

// Lista di mail
const guestsList = ["mail1", "mail2"];

// Chiedo all'utente la sua mail
const userMail = prompt("Inserisci la mail");

// Controllo se la mail è presente nella Array
let message = `La ${userMail} inserita non è presente nella lista degli invitati!`;
let mailPresent = false;

for (i = 0; i < guestsList.length; i++) {
  const currentList = guestsList[i];

  if (userMail === currentList) {
    message = `La ${userMail} è presente nella lista degli invitati! Buon Divertimento!`;
    mailPresent = true;
  }
}

console.log("Mail trovata: ", mailPresent);
alert(message);

/*


! Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


*/
