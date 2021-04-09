/* il softwere deve chiedere per 10 volte di inserire un numero */

/* il programma stampa la somma di tutti i numeri inseriti */

var somma = 0;

for (var i = 0; i < 5; i++)
{
    var nuovoNumero = parseInt(prompt('Inserisci un numero'));

    somma += nuovoNumero;
    //somma = somma + nuovoNumero;
}

console.log(somma);
