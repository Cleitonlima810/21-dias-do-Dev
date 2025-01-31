let opcao = Number(prompt("1-Gasolina, 2-Álcool, 3-Calibrar"));
let gasolina = 5
let alcool = 3

switch (opcao) {
    case 1:
        let vgasolina = Number(prompt("Quanto deseja abastecer(R$)? "));
        let litrosgasolina = vgasolina / gasolina;
        console.log("Você abasteceu " + (litrosgasolina + " litros de gasolina"));
        break;
    case 2:
        let valcool = Number(prompt("Quanto deseja abastecer(R$)? "));
        let litrosalcool = valcool / gasolina;
        console.log("Você abasteceu " + (litrosalcool + " litros de gasolina"));
        break;
    case 3:
        console.log("Pneus calibrados com sucesso");
        break;       
    default:
        console.log("Digite uma opção valida");
        break;
}