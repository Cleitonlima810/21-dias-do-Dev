//Declaração de variaveis
let nome = ""
let idade = 0
let carteira = ""
let possuicarro = ""

//Solicitando informaçao ao usuario e atribuindo os valores as variaveis
nome = prompt("Qual seu nome?");
idade = parseInt(prompt("Qual sua idade?"));
carteira = prompt("Você tem carteira? Responda com 'sim' ou 'não': ");
possuicarro = prompt("Você tem carro? Responda com 'sim' ou 'não': ");

carteira = carteira.toLowerCase();
possuicarro = possuicarro.toLowerCase();

// Validando resposta

if (idade < 18 ) {
    console.log(nome + ", você não pode dirigir" );
} else if (idade >= 18 && carteira === 'sim' && possuicarro === 'não') {
    console.log(nome + ", você pode dirigir mas não tem um carro");
} else if (idade >= 18 && carteira === 'sim' && possuicarro === 'sim') {   
    console.log(nome + ", você será o motorista" );
} else {   
    console.log(nome + ", você não pode dirigir ou não forneceu informações válidas." );
}