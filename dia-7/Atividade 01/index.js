let cont = Number(prompt("Deseja cadastrar outra nota: 1-SIM, 2-NÃO"))

 while(cont === 1){
    let nota = Number(prompt("Digite sua nota"))
    let sexoaluno = (prompt("Qual seu sexo homem ou mulher?"));
    
    console.log("Sua nota é: " + nota + "e você é " + sexoaluno);

    let cont = Number(prompt("Deseja cadastrar outra nota: 1-SIM, 2-NÃO"))
 }