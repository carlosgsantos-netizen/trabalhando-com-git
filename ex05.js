const readline = require('readline-sync')

let objetivo =  500
let dinheiroGuardado = readline.questionFloat("Informe o valor guardado: ")
let diferenca = objetivo - dinheiroGuardado
console.log ("--------- Resultado ---------")

if(dinheiroGuardado >= objetivo ){
console.log("Você atingiu o seu objetivo!")
}

else{
console.log(`Poxa! Faltaram ${diferenca} reais para atingir seu objetivo.`)
}