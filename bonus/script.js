// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

var chilometri = parseInt(prompt("quanti chilometri vuoi percorrere?"));

var anni;

var prezzoBiglietto = 0.21;

var prezzoChilometri = prezzoBiglietto*chilometri;
console.log(prezzoChilometri);

var sconto20 = prezzoChilometri-((prezzoChilometri*20) /100);
sconto20 = sconto20.toFixed(2);
console.log(sconto20);

var sconto65 = prezzoChilometri-((prezzoChilometri*40)/100);
sconto65 = sconto65.toFixed(2);
console.log(sconto65);

var prezzoFinale = "..." ;

if (isNaN(chilometri)) {
  alert("non hai inserito un numero");
} else {
  anni = parseInt(prompt("quanti anni hai?"));
  if (isNaN(anni)) {
    alert("non hai inserito un numero")
  } else{
    if (anni <= 18) {
      prezzoFinale = sconto20;
    } else if (anni >= 65){
      prezzoFinale = sconto65;
    } else {
      prezzoFinale = prezzoChilometri;
    }
  }
}

document.getElementById('biglietto').innerHTML= prezzoFinale;
