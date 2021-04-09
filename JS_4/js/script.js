/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
 */

var array_di_numeri = [];

for (var i = 0; i < 6; i++)
{
    var nuovo_numero = parseInt(prompt('Inserisci un nuovo numero'));

    if (nuovo_numero % 2 != 0)
    {
        array_di_numeri.push(nuovo_numero);
    }
}

console.log(array_di_numeri);
