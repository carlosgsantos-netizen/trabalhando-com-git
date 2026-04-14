const readline = require("readline-sync")
let media = 7
let notaAluno = readline.questionFloat("Informen sua nota final: ")
console.log("------ Resultado ------")
if(notaAluno >= media){
console.log("Você aprovado!")
}
else{
    console.log("Você foi reprovado.")
}