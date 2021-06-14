// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    nome : 'francesco',
    cognome : 'rossi',
    età : 32
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    document.getElementById('output').innerHTML += key + ' : ' + studente[key] + '<br>';
}

// Creare un array di oggetti di studenti.
var studenti = [
    {
        nome : 'cristiano',
        cognome : 'verdi',
        età : 30
    },
    {
        nome : 'federica',
        cognome : 'bianchi',
        età : 22
    }
]

// console.log(studenti);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    document.getElementById('output2').innerHTML += studenti[i].nome + ' ' + studenti[i].cognome + '<br>';
}
