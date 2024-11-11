'use strict';

let numero = parseInt(prompt("Anna numero: "))

function prime_numero(num) {
    if (num <= 1){
        return false;
    }
    if (num === 2){
        return true;
    }
    if (num % 2 === 0){
        return false;
    }

    const nelio_juuri = Math.sqrt(num);
    for (let i = 3; i <= nelio_juuri; i +=2){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

if (prime_numero(numero)) {
    document.getElementById("tuloste").textContent = `Number: ${numero} is a prime number!`;
}
else {
    document.getElementById("tuloste").textContent = `Number: ${numero} is not a prime number!`;
}