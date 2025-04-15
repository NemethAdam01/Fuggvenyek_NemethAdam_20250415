function add(a, b) {
    return a + b;
    }
    console.log(add(3, 2));

let add2 = function(a, b) {
    return a + b;
    }
    console.log(add(3, 2));

let add3 = (a, b) => a + b;
console.log(add3(5, 3));

(function() {
    let nev = prompt("Adja meg a nevét!"),
    udv = function() {
    return "Szia! " + nev + " vagyok!";
    }
    console.log(udv());
    }());

let vmi = document.getElementById("szoveg");
vmi.innerText = "Szia! " + nev + " vagyok!";