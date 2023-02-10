let votoApple = 0;
let votoMotorola = 0;
let msg;
let total = 0;
function calcular() {
    total = votoApple+votoMotorola
    document.getElementById("total").innerHTML= "total de votos: " + total;
}

function apple() {
    votoApple++
    msg = "total de votos apple: " + votoApple;
    document.getElementById("votoApple").innerHTML=msg;
}

function motorola() {
    votoMotorola++
    msg = "total de votos motorola: " + votoMotorola;
    document.getElementById("votoMotorola").innerHTML=msg
}

