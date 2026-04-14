const readline = require("readline-sync")

let nickname = readline.question("Informe seu nickname: ")
let jogoFavoito = readline.question("Informe o seu jogo favorito: ")
let pontuacaoAtual= readline.question("Informe a pontuação atual: ")

console.log("====== PERFIL GAMER ======")
console.log(`Nickname: ${nickname}`)
console.log(`Jogo Favorito: ${jogoFavoito}`)
console.log(`Pontuação Final: ${pontuacaoAtual}`)