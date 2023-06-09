function somar(numero1, numero2){
    return numero1 + numero2;
}

console.log(somar(2,2));
console.log(somar(3,5));

// OUTRA MANEIRA:
// function somar(numero1, numero2){
//     var soma = numero1 + numero2;
//     return soma;
// }

function dividir(numero1, numero2){
    return numero1 / numero2;
}

let n1 = (dividir(8,2));
let n2 = (dividir(10,5));

console.log(n1);
console.log(n2);

/////////////////////////////////

                  // parâmetros
function idadeNome(idade, nome){
    return `Meu nome é ${nome} e tenho ${idade} de idade. `;
} 

// sempre declarar os argumentos da ordem dos parÂmetros!

                    // argumentos
console.log(idadeNome(18, "maria"));

///////////////////////////////

function subtrair(numero1 = 0, numero2 = 0){
    return numero1 - numero2;
    //     5 - 1 = 4
    //     6 - 2 = 4       
}

function multiplicar(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
    //     4 * 4 = 16

}

console.log(multiplicar(subtrair(5,1), subtrair(6,2)))

// caso eu não declare uma função, a resposta será NaN
// é um boa prática já definir valores para os parÂmetros, assim se um argumento não for posto não receberemos NaN
