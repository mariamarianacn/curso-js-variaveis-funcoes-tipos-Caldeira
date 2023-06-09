const minhaIdade = 19;
const idadeMinima = 18;

if (minhaIdade => idadeMinima){
    console.log("você pode beber álcoolicos.");
} else{
    console.log("você não pode beber álcoolicos.");
}

// ctrl + ; = deixa tudo em barra barra

console.log(minhaIdade => idadeMinima ? "você pode beber álcoolicos." : "você não pode beber álcoolicos.")
// a estrutura ternária é muito útil para ifs simples, os mais complexos podem deixar com o if 


// pode usar "" + "" ao mesmo tempo no javascript, e '' + ''? NÃO!!
// deria que usar algo tipo: '"adoro" suco de maracujá' ou "fulano disse 'oi!'" 