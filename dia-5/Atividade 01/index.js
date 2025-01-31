let numero1 = Number(prompt('Insira um número:'));
let numero2 = Number(prompt('Insira outro número:'));
let operacao = Number(prompt(' Qual operação deseja fazer? 1-Somar, 2-Subtrair, 3-Multiplicar, 4-Dividir'));

switch (operacao) {
    case 1:
        console.log('Sua soma é: ' + (numero1 + numero2));
        break;
    case 2:
        console.log('Sua subtração é: ' + (numero1 - numero2));
        break;
    case 3:
        console.log('Sua multiplicação é: ' + (numero1*numero2));
        break;
    case 4:
        if (numero2 !== 0) {
            console.log('Sua divisão é: ' + (numero1 / numero2));    
        } else {
            console.log("Erro: divisão por zero!");    
        }
        
            break;
    default:
        console.log('Escolha a opção correta');
}