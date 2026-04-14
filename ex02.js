const readline = require("readline-sync")

let nome = readline.question("Informe seu nome: ")
let nomeomeDoPrato = readline.question("Informe o seu prato: ")
let valorDoPrato = readline.questionInt("Informe o valor do prato: ")

console.log("====== RESUMO DO PEDIDO ======")
console.log(`Cliente ${nome}`)
console.log(`Prato escolhido ${nomeDoPrato}`)
console.log(`Valor ${{valorDoPrato}}`)