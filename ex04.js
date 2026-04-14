const readline = require('readline-sync')

let meta = 10000
let passos = readline.questionInt("Quantos passos vocẽ deu hoje? ")
let diferenca = meta - passos
console.log ("--------- Resultado ---------")

if( passos >= meta){
console.log("Parabéns! Vocẽ atingiu a meta")
console.log(`Você passou ${Math.abs(diferenca)} passos da meta`)
}

else{
console.log("Poxa! Vocẽ não atingiu a meta")
console.log(`Faltaram ${diferenca} passos`)
}
