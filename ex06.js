const readline = require("readline-sync")

let meta = 40
let tempoEstudado = readline.questionFloat("Quantas horas você estudou? ")
let diferenca = tempoEstudado - meta 
console.log("------ Resultado ------")

if( tempoEstudado >= meta){
console.log(`Você atingiu por ${Math.abs(diferenca)} horas para atingir a meta`)
}
else {
console.log(`Faltaram ${diferenca} horas para atingir a meta`)
}