let tabuada = Number(prompt("Digite a taboada que deseja"))
let ntabu = Number(prompt("Tabuada é para contar até quanto"))

for (let i = tabuada; i <= tabuada + 2; i++) {
    console.log("Tabuada do " + i);

    for (let cont = 0; cont <= ntabu; cont++) {
        console.log(i + " x " + cont + " = " + (i * cont));
    }
}