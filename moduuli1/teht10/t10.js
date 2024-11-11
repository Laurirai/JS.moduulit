'use strict';

let kuinka_monta = parseInt(prompt("Kuinka monta noppaa haluat?"));
let haluttu = parseInt(prompt("Minkä summan haluaisit?"));

const kierrokset = 10000;
let mahdollisuudet = 0;

for (let i = 1; i <= kierrokset; i++) {
    let summa = 0;
    for (let j = 0; j < kuinka_monta; j++){
        let noppa = (Math.floor(Math.random()*6)+1);
        summa += noppa
    }
    if (summa === haluttu){
        mahdollisuudet += 1;
    }
}
let prossat = (mahdollisuudet / kierrokset) * 100;
let oikea_muoto = prossat.toFixed(2)

document.getElementById("tuloste").textContent = `Prosentuaalinen mahdollisuuus saada haluamasi luku: ${haluttu} on: ${oikea_muoto}%`;
