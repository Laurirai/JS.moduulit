'use strict';

window.onload = function (){
    let name = prompt("Please tell me your name: ");
    const randomi = Math.floor(Math.random() * 4) + 1;
    if (randomi === 1){
        document.getElementById("tuloste").textContent = `${name}, you are a Gryffindor!`;
    }
    else if (randomi === 2){
        document.getElementById("tuloste").textContent = `${name}, you are a Slytherin!`;
    }
    else if (randomi === 3){
        document.getElementById("tuloste").textContent = `${name}, you are a Hufflepuff!`;
    }
    else {
        document.getElementById("tuloste").textContent = `${name}, you are a Ravenclaw!`;
    }
}