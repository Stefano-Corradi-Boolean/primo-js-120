console.log('esercizio "salutare"');

//1. 
const nome = prompt('Inserisci il nome');

//2. 
const cognome = prompt('Inserisci il cognome');

//2. 
const anni = prompt('Oggi quanti anni compi?');

//4.
const nomeCompleto = nome + ' ' + cognome;

const colore = prompt('rosso o verde?')

console.log(nome);
console.log(cognome);
console.log(nomeCompleto);

// soluzione senza template literal
//document.getElementById('saluto').innerHTML = "<p>Ciao " + '<strong>' + nomeCompleto + '</strong>' + '</p>';

// con template literal
//5.
document.getElementById('saluto').innerHTML =
`
<p>
  Ciao <strong class="${colore}">${nomeCompleto}</strong>! <br>
  Tanti auguri perché oggi compi ${anni} anni!
</p>
`