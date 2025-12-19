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

console.log("-------------------------------------");
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
const userNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

// Dichiaro variabile numero computer
const computerNumber = Math.floor(
  Math.random() * (numMax - numMin + 1) + numMin
);

// Dichiaro variabile messaggio per alert
let messageGame = `Il Computer ha vinto! \nNumero Utente: ${userNumber}  |  Numero Computer: ${computerNumber}`;
let userWin = false;

// Controllo quale numero è più alto e comunico il vincitore
if (userNumber === computerNumber) {
  messageGame = `Non c'è un vincitore! \nNumero Utente: ${userNumber}  |  Numero Computer: ${computerNumber}`;
  userWin = "Parità!";
} else if (userNumber > computerNumber) {
  messageGame = `L'utente ha vinto! \nNumero Utente: ${userNumber}  |  Numero Computer: ${computerNumber}`;
  userWin = true;
}

console.log("userNumber: ", userNumber);
console.log("computerNumber: ", computerNumber);
console.log("User Win: ", userWin);
alert(messageGame);
