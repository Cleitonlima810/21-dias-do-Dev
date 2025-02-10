let somtotal = 0
let qaluno = 0
let conthomem = 0
let contmul = 0
let maiornotahome = 0
let continuar = true;

while (continuar) {
    let nota = parseFloat(prompt("Digite a nota do aluno"));

    while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(prompt("Nota inválida! Digite um valor entre 0 e 10:"));
    }

    let sexo = prompt("Digite o sexo do aluno (M/F):").toUpperCase();
        
    while (sexo !== "M" && sexo !== "F") {
        sexo = prompt("Sexo inválido! Digite M para masculino ou F para feminino:").toUpperCase();
    }

    somtotal += nota;
    qaluno++;

    if (sexo ===  'M'){
        conthomem++;
        if (nota>maiornotahome) {
            maiornotahome = nota;
        }
    } else if (sexo ==='F' && nota > 7) {
        contmul++;
    }

    let resposta = prompt("Deseja cadastrar outra nota? (S/N)").toUpperCase();
    while (resposta !== "S" && resposta !== "N") {
        resposta = prompt("Resposta inválida! Digite S para continuar ou N para sair")
    }

    if (resposta !== "S") {
        continuar = false;
    }

}
let mediaGeral = somtotal / qaluno;

console.log(`📊 Média geral dos alunos: ${mediaGeral.toFixed(2)}`);
console.log(`👨 Quantidade de homens: ${conthomem}`);
console.log(`👩 Mulheres com nota acima de 7: ${contmul}`);
console.log(`🏆 Maior nota entre os homens: ${conthomem > 0 ? maiornotahome : "Nenhum homem enviou nota"}`);