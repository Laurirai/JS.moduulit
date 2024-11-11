'use strict';

window.onload = function() {
    let vuosi = parseFloat(prompt("Kerro vuosiluku: "));

    // Function to check if the year is a leap year
    function onKarkausvuosi(vuosi) {
        return (vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0);
    }

    // Check if the input is a valid year and is a leap year
    if (onKarkausvuosi(vuosi)) {
        document.getElementById("tuloste").textContent = `Vuosi ${vuosi}, on karkausvuosi!`;
    } else {
        document.getElementById("tuloste").textContent = `Vuosi ${vuosi}, ei ole karkausvuosi!`;
    }
}
