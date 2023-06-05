const texto1 = "meu nome é: ";
const idade1 = "julia";

console.log(texto1 + idade1);

const texto2 = "1";
const number1 = 2;

console.log(texto2 + number1); //o JS não vai converter string para number, resultado: 12

const check = '\u2705'
console.log(check);

const cidade = "recifee";
const input = "Recifee";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo) // true
console.log(cidade === input) // false