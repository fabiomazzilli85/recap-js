// ==========================
// ARRAY OPERATIONS
// ==========================

// Utilizzo di array con metodi comuni.

// Il metodo push() aggiunge uno o più elementi alla fine di un array e restituisce la nuova lunghezza dell'array.
let numeri = [1, 2, 3];
numeri.push(4); // Aggiunge 4 alla fine dell'array
console.log(numeri); // Output: [1, 2, 3, 4]

// Il metodo pop() rimuove l'ultimo elemento di un array e lo restituisce.
let films = ["Nuovo cinema Paradiso", "Taxi Driver", "Toro Scatenato", "Magnifica Ossessione"];
let ultimoFilm = films.pop();
console.log(films);      // Output: ["Nuovo cinema Paradiso", "Taxi Driver", "Toro Scatenato"]
console.log(ultimoFilm); // Output: "Magnifica Ossessione"

// Il metodo shift() rimuove il primo elemento di un array e lo restituisce.
let persone = ["Francesco", "Giovanni", "Paolo", "Leonardo"];
let primaPersona = persone.shift();
console.log(persone);     // Output: ["Giovanni", "Paolo", "Leonardo"]
console.log(primaPersona); // Output: "Francesco"

// Il metodo unshift() aggiunge uno o più elementi all'inizio di un array e restituisce la nuova lunghezza dell'array.
let parole = ["cane", "pesce", "albero", "ciliegia"];
parole.unshift("computer");
console.log(parole); // Output: ["computer", "cane", "pesce", "albero", "ciliegia"]

// Il metodo map() crea un nuovo array popolato con i risultati della chiamata di una funzione su ogni elemento dell'array chiamante.
let numeriCasuali = [2, 4, 6, 9];
let numeriRaddopiati = numeriCasuali.map(num => num * 2);
console.log(numeriRaddopiati); // Output: [4, 8, 12, 18]

// Il metodo filter() crea un nuovo array con tutti gli elementi che superano una determinata condizione (la funzione di callback).
let numeriArray = [1, 2, 3, 4];
let numeriPari = numeriArray.filter(num => num % 2 === 0); // Filtra solo i numeri pari
console.log(numeriArray); // Output: [1, 2, 3, 4]
console.log(numeriPari);  // Output: [2, 4]

// ==========================
// OBJECT OPERATIONS
// ==========================

// Creazione e manipolazione di oggetti.

let persona = {
    nome: "Giuseppe",
    eta: 38,
    citta: "Trani"
};

console.log(persona.nome);  // Output: "Giuseppe"
console.log(persona.eta);   // Output: 38
console.log(persona.citta); // Output: "Trani"

// Congela l'oggetto, rendendo le sue proprietà immutabili
Object.freeze(persona);

// Tentativo di cambiare i valori dell'oggetto congelato
persona.nome = "Fabio";
persona.eta = 39;
persona.citta = "Bisceglie";

console.log(persona.nome);  // Output: "Giuseppe"
console.log(persona.eta);   // Output: 38
console.log(persona.citta); // Output: "Trani"
// Gli attributi non si aggiornano perché l'oggetto è stato congelato con "freeze".

// Gli oggetti possono anche contenere metodi, cioè funzioni che operano sui dati all'interno dell'oggetto.
let film = {
    titolo: "Taxi Driver",
    anno: 1976,
    paese: "USA",
    greet: function () {
        console.log("Uno dei miei film preferiti è " + this.titolo + ", uscito nel " + this.anno + " in " + this.paese + ".");
    }
};

film.greet(); // Output: "Uno dei miei film preferiti è Taxi Driver, uscito nel 1976 in USA."

// Gli oggetti possono anche contenere altri oggetti come valori delle proprietà.
let studente = {
    nome: "Anna",
    eta: 22,
    residenza: {
        paese: "Italia",
        regione: "Puglia",
        citta: "Bari",
        via: "Via Berlinguer, 29"
    }
};

console.log(studente.residenza.citta); // Output: "Bari"

// Puoi avere array come valori delle proprietà di un oggetto.
let nuovoCinemaParadiso = {
    regia: "Giuseppe Tornatore",
    anno: 1988,
    cast: ["Philippe Noiret", "Jacques Perrin", "Pupella Maggio", "Salvatore Cascio"]
}

console.log(nuovoCinemaParadiso.cast);      // Output: ["Philippe Noiret", "Jacques Perrin", "Pupella Maggio", "Salvatore Cascio"]
console.log(nuovoCinemaParadiso.cast[1]);   // Output: "Jacques Perrin"

// Un oggetto può anche essere creato utilizzando il costruttore Object.
let car = new Object();
car.brand = "Fiat";
car.model = "500";
car.year = 2020;

console.log(car.brand); // Output: "Fiat"
console.log(car.model); // Output: "500"
console.log(car.year);  // Output: 2020

// Le proprietà di un oggetto possono essere aggiunte, modificate o rimosse dinamicamente.
let giocatore = {
    nome: "Giovanni"
};

giocatore.console = "PlayStation 5";
console.log(giocatore.nome);    // Output: "Giovanni"
console.log(giocatore.console); // Output: "PlayStation 5"

delete giocatore.console;
console.log(giocatore.nome);    // Output: "Giovanni"
console.log(giocatore.console); // Output: undefined

// ==========================
// DOM MANIPULATION
// ==========================

// SELEZIONE DEGLI ELEMENTI:

// Seleziona un elemento del DOM utilizzando il suo attributo id.
const header = document.getElementById('header');

// Seleziona il primo elemento che corrisponde a un selettore CSS.
const mainTitle = document.querySelector('.title');

// Seleziona tutti gli elementi che corrispondono a un determinato selettore CSS.
const allItems = document.querySelectorAll('.item');

// MODIFICA DEL DOM:

// innerHTML - Modifica il contenuto HTML interno di un elemento.
const container = document.getElementById('container');
container.innerHTML = '<p>Nuovo contenuto</p>';

// textContent - Modifica il testo di un elemento senza interpretare il contenuto come HTML.
const testoGrande = document.querySelector('h3');
testoGrande.textContent = 'Questo è un testo aggiornato.';

// Aggiunta di nuovi elementi nel DOM usando appendChild.
const newElement = document.createElement('div');
newElement.textContent = 'Nuovo elemento';
document.body.appendChild(newElement);

// Rimozione di un elemento dal DOM usando removeChild.
const itemToRemove = document.getElementById('item');

// ==========================
// EVENT HANDLING
// ==========================

// Gestione degli eventi sugli elementi del DOM.

// Aggiunta di un event listener per il click su un pulsante.
const button = document.querySelector('.button');
button.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.textContent = 'Hai cliccato sul pulsante';
    document.body.appendChild(newElement);
});

// Cliccando sul pulsante, il contenuto del paragrafo cambia.
button.addEventListener('click', () => {
    const paragraph = document.getElementById('toggle-paragraph');
    if (paragraph.textContent === 'Questo è il testo originale.') {
        paragraph.textContent = 'Questo è un paragrafo aggiornato.';
    } else {
        paragraph.textContent = 'Questo è il testo originale.';
    }
});

// Cliccando sul paragrafo, viene generata una lista con il "ciclo for".
const paragraph = document.getElementById('clickable-paragraph');
const listContainer = document.getElementById('list-container');

paragraph.addEventListener('click', () => {
    listContainer.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Elemento ${i}`;
        listContainer.appendChild(listItem);
    }
});

// Cliccando sul pulsante, viene impostata la dark-mode.
const btn = document.getElementById('toggle-dark-mode');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Aggiunta e rimozione di una classe su un elemento al click.
const paragrafo = document.querySelector('h1');
paragrafo.addEventListener('click', () => {
    paragrafo.classList.add('highlight', 'txt-uppercase');
});

const testo = document.querySelector('h2');
testo.addEventListener('click', () => {
    testo.classList.remove('text-danger');
});

// Toggle di una classe su un elemento al click.
const btnNew = document.getElementById('lorem');
btnNew.addEventListener('click', () => {
    document.body.classList.toggle('text-uppercase');
});

// Generazione di una lista cliccando su un pulsante.
const generate = document.getElementById('generate');
const newList = document.getElementById('list-container');

generate.addEventListener('click', () => {
    newList.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Elemento ${i}`;
        listContainer.appendChild(listItem);
    }
    console.log('Hai cliccato correttamente.');
});

// Creazione di un elemento h1 al click su un paragrafo e aggiunta al body.
const eco = document.getElementById('eco');
const body = document.body;

eco.addEventListener('click', function () {
    const newHeading = document.createElement('h1');
    newHeading.textContent = 'Il nome di Eco è Umberto';
    newHeading.classList.add('red');
    body.appendChild(newHeading);
});

// Creazione di una lista di film al click su un elemento.
const filmografia = document.getElementById('marty');
const filmScorsese = ['Taxi Driver', 'Toro Scatenato', "Quei bravi ragazzi", 'Casinò', 'The Wolf Of Wall Street'];

filmografia.addEventListener('click', () => {
    const listaFilm = document.createElement('ul');
    filmScorsese.forEach(film => {
        const listItem = document.createElement('li');
        listItem.textContent = film;
        listaFilm.appendChild(listItem);
    });
    document.body.appendChild(listaFilm);
});

// Creazione di una lista di film al click su un elemento.
const newfilm = document.getElementById('deniro');
const filmDeNiro = ['Taxi Driver', 'Toro Scatenato', "Quei bravi ragazzi", 'Casinò', 'Il cacciatore', 'C\'era una volta in America', 'Gli intoccabili'];

newfilm.addEventListener('click', () => {
    const elencoFilm = document.createElement('ul');
    filmDeNiro.forEach(film => {
        const listFilm = document.createElement('li');
        listFilm.textContent = film;
        elencoFilm.appendChild(listFilm);
    });
    document.body.appendChild(elencoFilm);
});

// Chiamata API
fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0]; 
     
     const nomeElemento = document.getElementById('nome'); 
     const emailElemento = document.getElementById('email'); 
     const genderElemento = document.getElementById('gender');
     const imgElemento = document.getElementById('profile-image'); 
 
     
     nomeElemento.textContent = `Nome: ${user.name.first} ${user.name.last}`;
     emailElemento.textContent = `Email: ${user.email}`;
     genderElemento.textContent = `Genere: ${user.gender}`;
     imgElemento.src = user.picture.large;
   })
   .catch(error => console.error('Errore nella chiamata API:', error));