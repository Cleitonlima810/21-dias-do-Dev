//Declaração de variaveis
let fome = ""
let dinheiro = ""
let statusrestaurante = ""

//Solicitando informaçao ao usuario e atribuindo os valores as variaveis
fome = prompt("Você está com fome? Digite 'sim' ou 'não': ");
dinheiro = prompt("Você tem dinheiro? Digite 'sim' ou 'não': ");
statusrestaurante = prompt("O restaurante está aberto ou fechado? Digite 'aberto' ou 'fechado': ");

statusrestaurante = statusrestaurante.toLowerCase();

// Validando resposta

if (fome === 'sim' && dinheiro === 'sim' && statusrestaurante === 'aberto') {
    console.log("O restaurante está aberto! Bem vindo e boa janta!"  );
} else if (statusrestaurante === 'fechado') {
    console.log("O restaurante está fechado! A janta vai ser em casa! ");
} else {
    console.log("Melhor ir para casa e prepara algo, pois preciso economizar" );
}