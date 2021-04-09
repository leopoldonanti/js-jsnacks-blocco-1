/* creare lista invitati */

/* funzione per chi puo entrare e chi no */

var invitati = ['Michele', 'Fabio', 'Roberto'];

var nome_utente = prompt('Inserisci il tuo nome');


var puoi_entrare = false;

for (var i = 0; i < invitati.length; i++)
{
    var this_invitato = invitati[i];

    if (this_invitato == nome_utente)
    {
        puoi_entrare = true;
    }
}

//if (puoi_entrare)
if (puoi_entrare == true)
{
    console.log('Puoi entrare');
}
else {
    console.log('Non puoi entrare');
}
