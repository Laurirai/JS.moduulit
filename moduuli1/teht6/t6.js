'use strict';

window.onload = function (){
    let conf = confirm("Should I calculate the square root?");
    if (conf){
        let num = parseFloat(prompt("Tell me a number you want the square root from: "));
        if (num < 0){
            document.getElementById("tuloste").textContent = `The square root of a negative number is not defined`;
        }
        else{
            let sqrt = Math.sqrt(num);
            document.getElementById("tuloste").textContent = `The square root of ${num} is ${sqrt}`;
        }
    }
    else {
        document.getElementById("tuloste").textContent = `The square root is not calculated.`;
    }
}