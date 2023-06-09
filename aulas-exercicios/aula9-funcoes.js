var x = "";
x = "oi";
var y = 6 * 6;

console.log(y)
console.log(x)


//////////////////////////////


function somar(){
    const n1 = 2; 
    let soma = n1 + n1;
    console.log(soma);
} // ESSA AQUI NÃO SERÁ EXECUTADA

function somar(){
    const numero1 = 4;
    let somando = numero1 + numero1;
    return somando
} // ESSA AQUI SERÁ EXECUTADA
console.log(somar())


/////////////////////////

function multiplicar(){
    return 2 * 70;
}
console.log(multiplicar())

function exibeTexto (texto){
    console.log(texto)
}

exibeTexto(multiplicar()) 
// 1. coloco a func multiplicar dentro de exibeTexto | então a multiplicar agora faz parte do parametro texto


/////////////////////////////////////


// NÃO PODEMOS RETOMAR UMA VARIÁVEL QUE SE ENCONTRA EM OUTRA FUNÇÃO

// function somar(){
//     const n1 = 2; 
//     let soma = n1 + n1;
//     console.log(soma);
// } // ESSSA AQUI NÃO SERÁ EXECUTADA

// function somar(){
//     let somando = n1 + n1;
//     return somando
// } // ESSA AQUI SERÁ EXECUTADA