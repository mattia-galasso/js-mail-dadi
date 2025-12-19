/* 
! Mail

Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

? Nota:

Non è necessario provvedere alla validazione delle email
*/

/* 

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

console.log("-------------------------------------"); 

*/
/* --------------------------------------------------------------------------------------------------- */
/*
! Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// Dichiaro numero minimo
const numMin = 1;

// Dichiaro numero massimo
const numMax = 6;

// Dichiaro variabile numero utente
let userNumber;

//FINCHE' l'utente non scrive STOP
while (userNumber !== "STOP") {
  //L'utente scrive nel prompt
  userNumber = prompt("Inserisci un numero da 1 a 6!", "STOP");

  // SE non scrive STOP
  if (userNumber !== "STOP") {
    // Il numero scritto nel prompt viene parsato
    userNumber = parseInt(userNumber);

    // Viene generato un numero randomico per il computer
    const computerNumber = Math.floor(
      Math.random() * (numMax - numMin + 1) + numMin
    );

    // Dichiarate le variabili per Alert e Log
    let messageGame = `Il Computer ha vinto! \nNumero Utente: ${userNumber}  |  Numero Computer: ${computerNumber}`;
    let userWin = false;

    // SE il numero dell'utente è uguale a quello del computer
    if (userNumber === computerNumber) {
      // Il risultato è parità e non vince nessuno
      userWin = "Parità!";
      messageGame = `Non c'è un vincitore! \nNumero Utente: ${userNumber}  |  Numero Computer: ${computerNumber}`;
    }

    // ALTRIMENTI SE il numero dell'utente è più alto del computer
    else if (userNumber > computerNumber) {
      // Viene comunicata la vittoria dell'utente e la variabile userWin diventa true
      messageGame = `L'utente ha vinto! \nNumero Utente: ${userNumber}  |  Numero Computer: ${computerNumber}`;
      userWin = true;
    }

    // Viene creato un log del numero utente e del numero computer
    console.log("userNumber: ", userNumber);
    console.log("computerNumber: ", computerNumber);

    // Viene creato un booleano per verificare se l'utente ha vinto o perso
    console.log("User Win: ", userWin);

    // Viene comunicato all'utente l'esito della partita
    alert(messageGame);
  } else {
    // Viene comunicata l'interruzione del gioco dopo la scritta "STOP"
    console.log("Gioco interrotto | (STOP)");
    alert(`Hai Scritto "STOP" Il gioco è stato interrotto!`);
  }
}
