// questo è uno script importato
//document.writeln('Ciao JS'); scrivo un riga in  testa alla pagina

// lancio un messaggio in un popup
//alert('Ciao JS')

// ocnsole.log non si vede in pagina ma si vede in console
console.log('ciao js');
console.log('altra console');
console.log(document);
console.log(document.getElementById('titolo'));
console.log(document.getElementById('titolo').innerHTML);
console.log(document.getElementById('titolo').innerText);

// scrivo nell'elemento HTML con in 'titolo'
document.getElementById('titolo').innerHTML = 'Testo scritto con JS';

// dichiaro una costante
const annoAttuale = 2024;

console.log(annoAttuale);

//annoAttuale = 2025;// genero un errore! perché la const non si può sovrascrivere

// let è possibile sovrascirverla
let oggi = '19/02/';
console.log(oggi);
oggi = oggi + annoAttuale;
console.log(oggi);

document.getElementById('data').innerHTML = oggi;

// dichiarazione di variaibile
let nomeCompleto;
const name = 'Ugo';
const lastname = 'de Ughi';
// salvo in una variabile l'eemento HTML
const tagSaluto = document.getElementById('saluto');
const tagAltroSaluto = document.getElementById('altro-saluto');


console.log('sto controllando nomeCompleto:', nomeCompleto);
nomeCompleto = name + ' ' + lastname;
console.log('sto controllando nomeCompleto:', nomeCompleto);

// uso l'elemento html con la proprità innerHTML
tagSaluto.innerHTML = 'Ciao ' + nomeCompleto;

// += concatena
tagAltroSaluto.innerHTML +=  ' ' + nomeCompleto;


const numeroA = '10';
const numeroB = 5;
const somma = numeroA + numeroB;
const sottrazione = numeroA - numeroB;
console.log('somma = ' , somma);
console.log('sottrazione = ' , sottrazione);