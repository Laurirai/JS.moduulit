'use strict';

let numerot = [];

for (let i = 0; i < 5; i++){
    let uusi_numero = parseInt(prompt("Anna luku: "));
    numerot.push(uusi_numero);
}
let toisin_pain = "";
for (let j = 4; j >= 0; j--){
    toisin_pain += numerot[j];
}
document.getElementById("tulos").textContent = `${toisin_pain}`;