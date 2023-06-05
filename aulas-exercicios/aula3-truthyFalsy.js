// 0 = falsy
// 1 = truthy

// NULL VS UNDEFINED

let minhaVarUndefined;
let minhaVarNull = null;

console.log(minhaVarUndefined === undefined) // de fato, ela é não definida
console.log(minhaVarNull == undefined) // tem o mesmo uso, porém valores diferntes
console.log(minhaVarNull === object) // não é identificado como objeto AQUI!!

let numero = 3;
let texto = "mariana"; 

console.log(typeof minhaVarNull, minhaVarUndefined, texto, numero)

// null = null = object, erros que não podem ser corrigidos hehe