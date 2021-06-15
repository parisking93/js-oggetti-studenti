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

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nameU = true;
while (nameU) {
    var nomeUser = prompt('dammi il nome del nuovo studente');
    if (!isNaN(nomeUser)) {
        alert('il nome non puo essere un numero');
    } else if (nomeUser.length < 3){
        alert('la lunghezza minima consentita è 3 caratteri');
    } else {
        nameU = false;
    }
}
var cognomeU = true;
while (cognomeU) {
    var cognomeUser = prompt('dammi il cognome del nuovo studente');
    if (!isNaN(cognomeUser)) {
        alert('il cognome non puo essere un numero');
    } else if (cognomeUser.length < 3){
        alert('la lunghezza minima consentita è 3 caratteri');
    } else {
        cognomeU = false;
    }
}
var etaU = true;
while (etaU) {
    var etaUser = parseInt(prompt('dammi l\'età dello studente'));
    if (isNaN(etaUser)) {
        alert('l\'eta non puo avere delle lettere');
    } else {
        etaU = false;
    }  
    console.log(etaUser.length);
}


var newStudente = {
    nome : nomeUser,
    cognome : cognomeUser,
    età : etaUser
};

// pusho il nuovo studente 
studenti.push(newStudente);

// stampo tutti gli studenti compreso quello nuovo 
for (var i = 0; i < studenti.length; i++) {
    for(var k in studenti[i]) {
            if (k == 'età') {
                document.getElementById('output3').innerHTML += k + ' : ' + studenti[i][k] + '<br>' + '<br>';
            } else {
                document.getElementById('output3').innerHTML += k + ' : ' + studenti[i][k] + '<br>';
            }
    }
}
document.getElementById('titolo').innerHTML = 'TUTTI GLI STUDENTI';
