//genera
const Genera = document.getElementById('Genera')

Genera.addEventListener('click',
   function() {
       const name = document.getElementById('nome').value;

       const Km = document.getElementById('Km').value;

       const fasciaEta = document.getElementById('fascia-età').value;

       const prezzoKm = 0.21;

       let prezzoBiglietto = Km * prezzoKm;

       let offerta = "prezzo pieno";

       if (fasciaEta == "minorenne") {

        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 20);
        offerta ="sconto minorenne"

       } else if (fasciaEta == "over65" ) {

        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 40);
        offerta ="sconto pensionati"

       }

       let biglietto = document.getElementById('biglietto')
       biglietto.classList.remove('hidden');


       document.getElementById('nome-passeggero').innerHTML = name;

       document.getElementById('costo').innerHTML = prezzoBiglietto.toFixed(2); + "euro";

       document.getElementById('offerta-applicata').innerHTML = offerta;

       const numeroCarrozza = Math.floor((Math.random() * 9)) + 1;
       document.getElementById('carrozza').innerHTML = numeroCarrozza;

       const numeroCP = Math.floor((Math.random() * 10000)) + 90000;
       document.getElementById('codice-cp').innerHTML = numeroCP;

   }
); 


const Annulla = document.getElementById('Annulla');

Annulla.addEventListener('click',
    function() {

        let biglietto = document.getElementById('biglietto');
        biglietto.classList.add('hidden');

        document.getElementById('name').value = "";
        document.getElementById('Km').value = "";
    }

)
