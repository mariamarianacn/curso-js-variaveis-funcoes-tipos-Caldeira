var forma = 'retangulo';
var comprimento = 5;
var altura = 2;
 
// var area; 

if (forma == 'retangulo'){
    var area = comprimento*altura
} else{
    area = (comprimento*altura)/2
}

// var area;
console.log(area)

// diferentemente da LET, o var pode ser declarado antes das operações, em blocos ou após o fim da operação -> LIVRE!!



let formaLet = 'retangulo';
let comprimentoLet = 5;
let alturaLet = 2;
let areaLet; 
// atua como uma undefined
// sem atribuição | let precisa ser declarada antes da execução do bloco, enquanto var não 

if (forma == 'retangulo'){
    areaLet = comprimento*altura
} else{
    areaLet = (comprimento*altura)/2
}

console.log(areaLet)

const formaConst = 'retangulo';
const comprimentoConst = 5; 
const alturaConst = 2;
let areaConst; // como a CONSTante não varia, a nossa area nunca receberia um novo valor

if (forma == 'retangulo'){
    areaConst = comprimento*altura
} else{
    areaConst = (comprimento*altura)/2
}

console.log(areaConst)

// atualmente os programadores não usam mais o var, por ser muito livre
