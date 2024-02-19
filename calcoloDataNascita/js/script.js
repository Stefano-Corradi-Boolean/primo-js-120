console.log('esercizio "data di nascita"');

//1. 
const etaUtente = prompt('Quanti anni hai?');


//2. 
const annoAttuale = 2024;
console.log(etaUtente, annoAttuale);

//3.
const annoNascita = annoAttuale - etaUtente;
console.log('sottrazione = ', annoNascita);

//4.
document.getElementById('output').innerHTML = `
<p>
  Sei nato nell'anno <strong>${annoNascita}</strong>
</p>
`