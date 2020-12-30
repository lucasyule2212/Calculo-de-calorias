//Se sexo=masculino, entao formula = 66 + (13,8 x peso em kg.) + (5 x altura em cm) - (6,8 x idade em anos)

//Se sexo=feminino, entao formula = 655 + (9,6 x peso em kg.) + (1,8 x altura em cm) - (4,7 x idade em anos)

let peso=document.getElementById("peso");
let altura=document.getElementById("altura");
let idade=document.getElementById("idade");
let sexo=document.getElementById("sexo");

let result = document.getElementById("result");

function calcular(){

    let pesoC = peso.value;
    let alturaC = altura.value;
    let idadeC = idade.value;
    let sexoC = sexo.value;
    let gastoCalorico;

    if (sexoC=="masculino") {
        gastoCalorico = gastoMasc(pesoC,alturaC,idadeC);
    } else if (sexoC=="feminino"){
        gastoCalorico = gastoFem(pesoC,alturaC,idadeC);
    }

    result.innerHTML = `<p class="resultIn"> Seu gasto calórico diário é de aproximadamente: <strong> ${gastoCalorico}</strong> cal. </p>`;

    result.innerHTML += `<p class="resultIn"> Para GANHAR PESO de forma sustentável voce deve consumir aproximadamente: <strong> ${gastoCalorico+200}</strong> cal. </p>`;

    result.innerHTML += `<p class="resultIn"> Para PERDER PESO de forma sustentável voce deve consumir aproximadamente: <strong> ${gastoCalorico-200}</strong> cal. </p>`;

   
}

function gastoMasc(pesoC,alturaC,idadeC) {
  return Math.round(66+(13.8*pesoC)+(5*alturaC)-(6.8*idadeC));
}

function gastoFem(pesoC,alturaC,idadeC) {
    return Math.round(655+(9.6*pesoC)+(1.8*alturaC)-(4.7*idadeC));
  }
  

