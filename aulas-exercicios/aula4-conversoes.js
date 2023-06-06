let texto = "430"
let number = 430;
let texto2 = "430abc"

console.log(texto + number) // resultará em 430430, suco da concatenação

console.log(+ texto + number) // só adicionar o sinal de MAIS antes da string

console.log(number + Number(texto)) // aí sim o resultado será 860

console.log(texto2 + number) // aí receberemos um belo NaN

// toString() = String()
// + = Number()

