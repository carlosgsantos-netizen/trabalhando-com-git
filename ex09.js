const readline = require("readline-sync")

let valorDesconto = 100
let valorcliente = readline.questionFloat("Informe o valor de sua compra: ")
let diferenca = valorDesconto - valorcliente
console.log("------ Resultado ------")

if(valorcliente > valorDesconto){
console.log("Você tem direito a frete grátis!.")
}
else {
    console.log(`Você nao tem direito a frete grátis, adicione ${diferenca}`)
}