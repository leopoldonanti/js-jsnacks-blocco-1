/* l'utente inserisce due parole in sucessione con due prompt
il softwere stampa prima la parola piu corta poi quella piu lunga */

/* CREARE DUE VARIABILI PROMPT PER INSERIMENTO PAROLE */

/* CREARE FUNZIONE ATTRAVERSO LA QUALE LA LUNGHEZZA DELLA PAROLA PIU CORTA COMPARE PRIMA */

var parolaUno = prompt("inserire una parola");
console.log(parolaUno)

var parolaDue = prompt("inserire un'altra parola");
console.log(parolaDue)

if(parolaUno.length > parolaDue.length){
  console.log(parolaDue + parolaUno);
}else if(parolaDue.length == parolaUno.length){
  alert("le parole sono uguali")
}else
  console.log(parolaUno + parolaDue)
  

