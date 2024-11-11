'use strict';
const alku = parseInt(prompt("Anna ensimmäinen vuosiluku: "))
const loppu = parseInt(prompt("Anna toinen vuosiluku: "))

let lista = []

for (let i = alku; i <= loppu; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0){
        lista.push(i);
    }
}

const ul = document.getElementById("tuloste");

for (let j = 0; j < lista.length; j++) {
    const li = document.createElement('li');
    li.textContent = lista[j];
    ul.append(li);
}
