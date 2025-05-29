let numx = document.querySelector("#numx");
let numy = document.querySelector("#numy");
let numz = document.querySelector("#numz");
let botao1 = document.querySelector("#botao1");
let resultado1 = document.querySelector("#resultado1");
 
function calcular (){
    let x = Number(numx.value);
    let y = Number(numy.value);
    let z = Number(numz.value);
    // resposta 
    let r1 = ("");

    if (x === y && y === z) {
            console.log ("Equiláteros: tem os comprimentos dos três lados iguais.");
}   if (x != y && y != z) {
            console.log ("Escaleno: tem os comprimentos de três lados diferentes.");
}   if (x != y && y === z && y !=z) {
            console.log ("Isósceles: tem os comprimentos de dois lados iguais.");
  
}   
    resultado1.innerHTML = r1;
}
botao1.onclick = function (){
    calcular();
}

