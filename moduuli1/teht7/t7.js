'use strict';

window.onload = function (){
    let kertoja = parseInt(prompt("Kuinka monta nopan heittoa haluat? "));
    let yht = 0

    for (let i = 0; i < kertoja; i++){
        let num = Math.floor(Math.random()* 6) + 1;
        yht += num;

    }
    document.getElementById("tuloste").textContent = `Nopanheittojen yhteis summa on ${yht}`;
}