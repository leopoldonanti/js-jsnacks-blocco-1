
/* JSnack 8
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
(qui è necessaria una ricerca nella documentazione) */

var numeroInserito = prompt("inserisca 4 cifre: ");

console.log(numeroInserito);

var somma = 0;


for(i = 0; i < numeroInserito.length; i++){
  somma = somma + parseInt(numeroInserito.charAt(i));
}

console.log(somma);
